"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
exports.veridaLogin = void 0;
var react_1 = require("react");
var client_ts_1 = require("@verida/client-ts");
var veridaLogin = function () {
    var _a = (0, react_1.useState)(undefined), veridaContext = _a[0], setVeridaContext = _a[1];
    var _b = (0, react_1.useState)(null), walletAddress = _b[0], setWalletAddress = _b[1];
    var _c = (0, react_1.useState)(null), message = _c[0], setMessage = _c[1];
    var CONTEXT_NAME = 'Synapse Latent Space Vault';
    react_1.default.useEffect(function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
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
            return [2 /*return*/];
        });
    }); }, []);
    client_ts_1.login = function () {
        return __awaiter(this, void 0, void 0, function () {
            var account, context;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        account = new VaultAccount({
                            request: {
                                logoUrl: 'https://developers.verida.io/img/tutorial_login_request_logo_170x170.png',
                            },
                        });
                        return [4 /*yield*/, Network.connect({
                                client: {
                                    environment: 'testnet'
                                },
                                account: account,
                                context: {
                                    name: this.CONTEXT_NAME
                                }
                            })];
                    case 1:
                        context = _a.sent();
                        if (context) {
                            // set the local state variable
                            setVeridaContext(context);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    logout = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    // disconnect the Verida session
                    return [4 /*yield*/, veridaContext.account.disconnect(this.CONTEXT_NAME)];
                    case 1:
                        // disconnect the Verida session
                        _a.sent();
                        // reset the internal state
                        setVeridaContext(undefined);
                        return [2 /*return*/];
                }
            });
        });
    };
    _this.logout = _this.logout.bind(_this);
    // if we have a veridaContext we are logged in
    if (veridaContext) {
        // user is logged in
        return (Logged in !Your < a);
        href = '/docs/concepts/accounts-and-identity' > DID < /a>;
        is: ({ veridaContext: veridaContext, : .account.accountDid } < /pre>
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
