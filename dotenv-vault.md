# How to use dotenv-vault for enviornment variables
Using `dotenv-vault` to access an organization account, assuming you have already been invited to Synavate. 

If not, contact: `core@synavate.tech`

---

# Accessing Organization Account with dotenv-vault

Follow these steps to access the organization account using `dotenv-vault`. Ensure you have already been invited to the Synavate account.

## Step 1: Install dotenv-vault

First, install `dotenv-vault` globally using npm:

```bash
npm install -g dotenv-vault
```

## Step 2: Login to dotenv-vault

Login to your dotenv-vault account:

```bash
dotenv-vault login
```

Enter your credentials when prompted.

## Step 3: Switch to the Organization Account

After logging in, switch to the organization account:

```bash
dotenv-vault use synavate-tech
```

Replace `synavate-tech` with the actual name of your organization.

## Step 4: Accessing Environment Variables

To access the environment variables of a specific project:

```bash
dotenv-vault pull Synapsev0.0.2 #As of 01/04/2024
```

Replace `<project_name>` with the name of your project within the organization. This command will sync the environment variables to your local `.env` file.

## Step 5: Updating Environment Variables

If you need to update the environment variables:

1. Make changes to your local `.env` file.
2. Push the changes back to dotenv-vault:

    ```bash
    dotenv-vault push <project_name>
    ```

## Step 6: Logout (Optional)

Once done, you can logout:

```bash
dotenv-vault logout
```

---

 -  .vault files are OK to commit to Source control
 -  NEVER COMMIT YOUR .env.me to Git
-  NEVER COMMMIT YOUR .env files to Git