import * as express from 'express';
import User from '../models/enterprises/user.model';
import { getMaxListeners } from 'cluster';

export class UserService {
    public path = '/user';
    public router = express.Router();

    // private users: User[] = [
    //     {
    //         id: 100001,
    //         Name: 'Jamil Akhtar',
    //         title:'Dev'
    //     }
    // ];

    constructor() {
        this.intializeRoutes();
    }

    public intializeRoutes() {
        this.router.get(this.path+'/getAllUsers', this.getAllUsers);
        this.router.post(this.path, this.createUser);
    }

    getAllUsers(request: express.Request, response: express.Response) : any {
        User.find({"email":"admin@email.com"})
            .then(users => {
                if(!!users && users.length > 0)
                    response.status(200).send(users);
                else
                    response.status(201).send("No record.");
            })
            .catch(err => {
                response.status(400).send('Failed to create new record');
            });
    }

    createUser = (request: express.Request, response: express.Response) => {
        const user: any = request.body;
        //this.users.push(user);
        response.send(user);
    }
}