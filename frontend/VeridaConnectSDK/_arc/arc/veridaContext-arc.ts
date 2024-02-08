
export default async function applicationContext: Promise<VeridaDatabaseAuthContext> => () { //TODO INSERT REQUEST

    const VERIDA_ENVIRONMENT = EnvironmentType.TESTNET;
    const CONTEXT_NAME = 'Synapse Latent Space Vault';
    
    // Logo for your application
    // The LOGO_URL should be a 170x170 PNG file
    const LOGO_URL = "https://assets.verida.io/verida_login_request_logo_170x170.png";
    
    const account = new VaultAccount({
      request: {
        logoUrl: LOGO_URL,
        callBack: authBackend,
        // An optional URL that will open a browser on the user's mobile device
        // after accepting the login request in the Verida Wallet mobile app
        openURL: window.location.href = "https://www.synavate.tech/verida/",
      },
    });
    
    const authBackend = () => {
      return new Promise((resolve, reject) => {
        axios
          .post("https://www.synavate.tech/authenticate/")
          .then((response) => {
            resolve(response.data);
          })
          .catch((error) => {
            reject(error);
          });
      });
    }
    
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
    }};