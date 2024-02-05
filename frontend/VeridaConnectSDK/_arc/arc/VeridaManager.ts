import { Network, Context } from '@verida/client-ts';
import { EnvironmentType, VeridaDatabaseAuthContext } from '@verida/types';
import { VaultAccount } from '@verida/account-web-vault';
import dotenv  from 'dotenv';

dotenv.config()

interface VeridaAuthConfig {
  account: string | undefined;
  contextName: string;
  logoUrl: string;
  environment?: EnvironmentType;
}

class VeridaAuth {
  private account;
  private contextName: string;
  private logoUrl: string;
  private environment: EnvironmentType;

  constructor({ account, contextName, logoUrl, environment = EnvironmentType.TESTNET }: VeridaAuthConfig) {
    this.account = account; 
    this.contextName = contextName;
    this.logoUrl = logoUrl;
    this.environment = environment;
  }

  async initialize(): Promise<void> {
    

    await Network.connect({
      client: { environment: this.environment },
      account: this.account,
      context: { name: this.contextName },
    });
  }

  /**
   * Authenticates the user and establishes a session.
   */
  async authenticate(): Promise<string> {
    if (!this.account) {
      throw new Error("Verida account not initialized. Call initialize() first.");
    }
    const did = await this.account.did();
    console.log('User authenticated with DID:', did);
    return did; // Return the DID (Decentralized Identifier) as confirmation of authentication
  }

  async hasSession(): Promise<boolean> {
    if (!this.account) {
      throw new Error("Verida account not initialized. Call initialize() first.");
    } 
    await this.hasSession(this.contextName);
  }


  // Add more methods here as needed for your application
}

export { VeridaAuth, VeridaAuthConfig };

