import { Client, Account, ID } from 'appwrite';
import config from '../../configuration/confg';

class Authentication {
    Client = new Client();
    account;
    id = ID.unique();

    constructor() {
        this.Client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId);

        this.account = new Account(this.Client);
    }

    async getAccount(){
       try {
        const result = await this.account.get();
        console.log("account details",result);
        return result;
       } catch (error) {
        console.log("no user",error);
       }
    }
    async logout(){
        try {
            
          
            await this.account.deleteSession('current');
            return true;
    }catch(error){
            console.log("error",error);
    }
}
    async signUp(email, name, password) {
        try {
            const response = await this.account.create(this.id, email, name, password);
            console.log(response);
        } catch (error) {
            console.error("Sign up ERROR", error);
        }
    }

    
    async login(email, password) {
        try {
//           const session = await this.account.getSession('current');
//           if(session){
//           await this.account.deleteSession('current');
// }
        const response = await this.account.createEmailPasswordSession(email,password);
        console.log(response);
        return response;
}
 catch (error) {
    console.error("Login ERROR", error);
}
    
            // Check if there is an active session
            // const session = await this.account.getSession();
            // if (session) {
            //     // Log out all current sessions
            //     await this.deletSession();
            // }

            // Create a new session
        //     const response = await this.account.createEmailPasswordSession(email, password);
        //     console.log(response);
       
    }



    


    }

const Auth = new Authentication();
export default Auth;
