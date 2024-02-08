"use strict";
// Example simplified for brevity. Notably, async/await should be handled appropriately
Object.defineProperty(exports, "__esModule", { value: true });
exports.user = void 0;
const types_1 = require("@verida/types");
const web_helpers_1 = require("@verida/web-helpers");
// Your application context name
const CONTEXT_NAME = 'Synavate: Synpase';
const VERIDA_ENVIRONMENT = types_1.EnvironmentType.TESTNET;
// Your logo URL (appears in the Wallet)
const LOGO_URL = '';
// Create a singleton instance of your user with network connection configuration
// Return this singleton instance so there is only ever one user object
// in your application.
exports.user = new web_helpers_1.WebUser({
    accountConfig: {
        request: {
            logoUrl: LOGO_URL
        }
    },
    clientConfig: {
        environment: VERIDA_ENVIRONMENT
    },
    contextConfig: {
        name: CONTEXT_NAME
    },
    debug: true // Provides logs in the console
});
// Note: `accountConfig`, `clientConfig`, `contextConfig` are all configuration objects that match their respective `account-web-vault`, `client` and `context` configuration objects.
// Bind some event listeners
exports.user.on('connected', () => { console.log('User connected!'); });
exports.user.on('disconnect', () => { console.log('User disconnected!'); });
exports.user.on('profileChanged', (newProfile) => { console.log('Profile changed!', newProfile); });
// Automatically connect the user if there's an existing local session
await autoConnectExistingSession();
// Check if the user is connected. Note: `autoConnectExistingSession` also return the connection status
const isConnected = exports.user.isConnected();
if (!isConnected) {
    // Use the `connect` method to explicitly prompt the user to connect with the Verida Wallet
    const success = await exports.user.connect();
    if (!success) {
        throw Error('User cancelled the connection');
    }
}
// Get the DID of the user
const did = exports.user.getDid();
console.log(`Logged in with ${did}`);
// Get the public name, avatar and description from the user's profile
const publicProfile = await exports.user.getPublicProfile();
console.log(`Public profile:`, publicProfile);
// Send a message from the connected user to the specified DID (in this example to itself)
await exports.user.sendMessage(did, 'Hello!');
// TODO ESTABLISH DATASTORE or Database 01/02/2024
// Open a private encrypted user database and save a row
const database = await exports.user.openDatabase('test_db');
const row = await database.save({ 'hello': 'world' });
console.log(row);
// Open a private encrypted user datastore and save a row
const datastore = await exports.user.openDatastore('https://common.schemas.verida.io/social/contact/v0.1.0/schema.json');
const row = await datastore.save({
    firstName: 'Jane',
    lastName: 'Smith',
    email: 'jane_smith@example.com'
});
console.log(row);
// Disconnect the user
await exports.user.disconnect();
