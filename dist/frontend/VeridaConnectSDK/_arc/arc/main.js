"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("@verida/types");
const VeridaManager_1 = require("./VeridaManager");
const veridaAuth = new VeridaManager_1.VeridaAuth({ account: "Aylex Riom",
    contextName: "Synavate: LatentSpace-Vault",
    logoUrl: "https://developers.verida.io/img/tutorial_login_request_logo_170x170.png",
    environment: types_1.EnvironmentType.TESTNET });
// Initialize and authenticate as needed in your application flow
(async () => {
    try {
        await veridaAuth.initialize();
        const did = await veridaAuth.authenticate();
        console.log(`User authenticated: ${did}`);
    }
    catch (error) {
        console.error("Authentication error:", error);
    }
})();
