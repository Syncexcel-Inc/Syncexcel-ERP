import * as express from 'express';
import User from '../../models/enterprises/user.model';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export class AuthService {
    public path = '/auth';
    public router = express.Router();

    constructor() {
        this.intializeRoutes();
    }

    public intializeRoutes() {
        this.router.post(this.path+'/signup', this.signup);
        this.router.post(this.path+'/signin', this.signin);
    }

    signup = (request: express.Request, response: express.Response) => {
        const usr = request.body;
        User.find({email:usr.email})
            .then((user: any) => {
                if(!!user && user.length > 0)
                    response.status(200).send("usersAAAAAAAAAAAAAAA");
                else
                    response.status(200).send("You are not a registered user, please register.");
            })
            .catch((err: any) => {
                    response.status(400).send(err);
            });

        //      const user: any = request.body;
        // //this.users.push(user);
        // response.send(user);
    }
    signin = (request: express.Request, response: express.Response) => {
        User.findOne({ email: request.body.email }, (err: any, user: any) => {
            if (err) {
                return response.status(500).json({
                    title: 'An error Occured',
                    error: err
                });
            }
            if (!user) {
                return response.status(401).json({
                    title: 'Login Failed',
                    error: { message: 'Invalid Login Credientials' }
                });
            }
            if (!bcrypt.compareSync(request.body.password, user.password)) {
                return response.status(401).json({
                    title: 'Login Failed',
                    error: { message: 'Invalid Login Credientials' }
                });
            }
            var token = jwt.sign({ user: user }, 'secretkey', { expiresIn: 7200 });
            response.status(201).json({
                title: 'Successfully Login',
                token: token,
                userId: user._id
            });
        });
    }
}