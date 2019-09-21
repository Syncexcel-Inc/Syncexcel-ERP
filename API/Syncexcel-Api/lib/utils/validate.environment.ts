import {
    cleanEnv, str, port
} from 'envalid';

function validateEnvironment() {
    cleanEnv(process.env, {
        //MONGO_PASSWORD: str(),
        MONGO_PATH: str(),
        //MONGO_USER: str(),
        PORT: port(),
    });
}

export default validateEnvironment;