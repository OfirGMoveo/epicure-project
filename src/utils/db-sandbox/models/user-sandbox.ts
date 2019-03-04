
import { ObjectID } from 'mongodb';
import { User, IUserModel } from '../../../db/models/users/user.model'

export class UserSandbox {

    public static User =  User;  // for seeding

    public static alwaysLean: boolean = true;

    public static getAll() { 
        User.find({}).lean();
    }

    public static async signUp(user : Partial<IUserModel> ) {
        const userDoc = await User.create(user);
        
        return { ...(userDoc.toObject()), password: undefined }
    }

    public static signIn(user : { password: string, email: string, } ) {
        // return User.(user);
    }
}



