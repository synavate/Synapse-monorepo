"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VeridaAuth = void 0;
const client_ts_1 = require("@verida/client-ts");
const types_1 = require("@verida/types");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
class VeridaAuth {
    account;
    contextName;
    logoUrl;
    environment;
    constructor({ account, contextName, logoUrl, environment = types_1.EnvironmentType.TESTNET }) {
        this.account = account;
        this.contextName = contextName;
        this.logoUrl = logoUrl;
        this.environment = environment;
    }
    async initialize() {
        await client_ts_1.Network.connect({
            client: { environment: this.environment },
            account: this.account,
            context: { name: this.contextName },
        });
    }
    /**
     * Authenticates the user and establishes a session.
     */
    async authenticate() {
        if (!this.account) {
            throw new Error("Verida account not initialized. Call initialize() first.");
        }
        const did = await this.account.did();
        console.log('User authenticated with DID:', did);
        return did; // Return the DID (Decentralized Identifier) as confirmation of authentication
    }
    async hasSession() {
        if (!this.account) {
            throw new Error("Verida account not initialized. Call initialize() first.");
        }
        await this.hasSession(this.contextName);
    }
}
exports.VeridaAuth = VeridaAuth;
