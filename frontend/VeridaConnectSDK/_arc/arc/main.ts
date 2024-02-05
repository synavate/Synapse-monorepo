import { EnvironmentType } from '@verida/types';
import { VeridaAuth, VeridaAuthConfig } from './VeridaManager';

const veridaAuth = new VeridaAuth({account:"Aylex Riom", 
                                                    contextName: "Synavate: LatentSpace-Vault",
                                                    logoUrl: "https://developers.verida.io/img/tutorial_login_request_logo_170x170.png",
                                                    environment: EnvironmentType.TESTNET});

// Initialize and authenticate as needed in your application flow
(async () => {
  try {
    await veridaAuth.initialize();
    const did = await veridaAuth.authenticate();
    console.log(`User authenticated: ${did}`);
  } catch (error) {
    console.error("Authentication error:", error);
  }
})();

