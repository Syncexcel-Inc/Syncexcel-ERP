import {App} from './app';
import {UserService} from './../lib/services/user.service'
import {AuthService} from './../lib/services/securities/auth.service'
import 'dotenv/config';
import validateEnvironment from './utils/validate.environment'

validateEnvironment();
const app = new App(
    [
        new UserService(),
        new AuthService(),
    ],
    5000,
);

app.listen();