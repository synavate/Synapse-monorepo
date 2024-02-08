import { Network } from '@verida/client-ts';
import { EnvironmentType } from '@verida/types';
import { VaultAccount } from '@verida/account-web-vault';


const VERIDA_ENVIRONMENT = EnvironmentType.TESTNET;
const CONTEXT_NAME = 'Synapse: Mobile App Login';

// Logo for your application
// The LOGO_URL should be a 170x170 PNG file
const LOGO_URL = "https://assets.verida.io/verida_login_request_logo_170x170.png"; //TODO INSERT LOGO URL

const account = new VaultAccount({
  request: {
    logoUrl: LOGO_URL,
    // An optional URL that will open a browser on the user's mobile device
    // after accepting the login request in the Verida Wallet mobile app
    openURL: window.location.href, //TODO Set
  }
});

const context = await Network.connect({
    client: {
        environment: VERIDA_ENVIRONMENT,
    },
    account: account,
    context: {
        name: CONTEXT_NAME,
    },
});
if (!context) {
    console.log(
        'User cancelled login attempt by closing the QR code modal or an unexpected error occurred'
    );
}