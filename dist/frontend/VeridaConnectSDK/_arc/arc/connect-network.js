"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.veridaLogin = void 0;
const react_1 = __importStar(require("react"));
const client_ts_1 = require("@verida/client-ts");
const veridaLogin = () => {
    const [veridaContext, setVeridaContext] = (0, react_1.useState)(undefined);
    const [walletAddress, setWalletAddress] = (0, react_1.useState)(null);
    const [message, setMessage] = (0, react_1.useState)(null);
    const CONTEXT_NAME = 'Synapse Latent Space Vault';
    react_1.default.useEffect(async () => {
        // Runs after the first render() lifecycle
        // We use this to check if we are logged in
        // veridaContext is a Context object (See links below)
        if (!veridaContext) {
            // we don't have veridaContext in local state
            // Check if we have a stored session
            //  hasSession is from the package "@verida/account-web-vault"
            //  see below fod links to documentation
            if ((0, react_1.hasSession)(this.CONTEXT_NAME)) {
                // we know we have a session already
                (0, client_ts_1.login)(); // when logged in this will just setup a Verida Context
            }
        }
    }, []);
    client_ts_1.login = async function () {
        // Create a VaultAccount. This takes a VaultAccountConfig parameter.
        const account = new VaultAccount({
            request: {
                logoUrl: 'https://developers.verida.io/img/tutorial_login_request_logo_170x170.png',
            },
        });
        const context = await Network.connect({
            client: {
                environment: 'testnet'
            },
            account: account,
            context: {
                name: this.CONTEXT_NAME
            }
        });
        if (context) {
            // set the local state variable
            setVeridaContext(context);
        }
    };
    logout = async function () {
        // disconnect the Verida session
        await veridaContext.account.disconnect(this.CONTEXT_NAME);
        // reset the internal state
        setVeridaContext(undefined);
    };
    this.logout = this.logout.bind(this);
    // if we have a veridaContext we are logged in
    if (veridaContext) {
        // user is logged in
        return (Logged in !Your < a);
        href = '/docs/concepts/accounts-and-identity' > DID < /a>;
        is: ({ veridaContext, : .account.accountDid } < /pre>
            < /h3>
            < button);
        onClick = { this: .logout } > Logout < /button>
            < /div>;
    }
};
exports.veridaLogin = veridaLogin;
;
{
    return onClick = { this: .login } > Login < /button>
        < /div>;
    ;
}
