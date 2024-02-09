

VeridaLoginExample = () => {
    const [veridaContext, setVeridaContext] = useState(undefined);
    const [walletAddress, setWalletAddress] = useState(null);
    const [message, setMessage] = useState(null);
    this.CONTEXT_NAME = 'Verida Tutorial';

    React.useEffect(async () => {
        // Runs after the first render() lifecycle
        // We use this to check if we are logged in

        // veridaContext is a Context object (See links below)
        if (!veridaContext) {
            // we don't have veridaContext in local state

            // Check if we have a stored session
            //  hasSession is from the package "@verida/account-web-vault"
            //  see below fod links to documentation
            if (hasSession(this.CONTEXT_NAME)) {
                // we know we have a session already
                login(); // when logged in this will just setup a Verida Context
            }
        }
    }, []);

    login =  async function  () {
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
        return (
            <div>
                <h3>
                    Logged in! Your <a href='/docs/concepts/accounts-and-identity'>DID</a>
                    is: <pre>{veridaContext.account.accountDid}</pre>
                </h3>
                <button onClick={this.logout}>Logout</button>
            </div>
        );
    } else { 
        return (
            <div>
                <button onClick={this.login}>Login</button>
            </div>
        );
    }
}