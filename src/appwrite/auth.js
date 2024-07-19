import { Client, Account, ID } from 'appwrite';
import config from '../configuration/confg'

class Authentication {
    Client = new Client();
    account;
    id =ID.unique();
    constructor() {
        this.Client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId);

        this.account = new Account(this.Client);
    }

    async signUp( email, password, name ) {
        try {
            const response = await this.account.create(this.id, email, password, name);
            console.log(response);
        } catch (error) {
            console.error("Can't sign up", error);
        }
    }

    async login(email, password) {
        try {
            console.log("login with this email",email);
            const response = await this.account.createEmailPasswordSession(email, password);
            console.log(response);
        } catch (error) {
            console.error("failed to login", error);
        }
    }
}

const Auth = new Authentication();
export default Auth;