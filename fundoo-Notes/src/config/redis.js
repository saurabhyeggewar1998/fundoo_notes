import { createClient } from 'redis';
import logger from './logger';

export const client = createClient();

const redisDatabase = async() => {
   
    try {
        await client.connect();
        console.log("redis connected");  
    } catch (error) {
        console.log(error);
    }
}
export default redisDatabase;