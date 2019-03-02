

import * as mongoose from 'mongoose';
import * as config from 'config';


const dbConfig = config.get('MongoDB.Configurations') as {[key: string]: string};
const uri = getUriFromDbConfig(dbConfig)
mongoose.connect(uri, { useNewUrlParser: true});  // connect to db

const db = mongoose.connection;

db.on('error', (err) => {
    console.error('connection error:', err);
}).once('open', () => { 
    process.env.NODE_ENV != 'test' ? console.log('DB connection success!') : undefined;
});


function getUriFromDbConfig(dbConfig: {[key: string]: string}): string {
    const {user, port, host, database} = dbConfig
    let pass = dbConfig.password;
    pass = (!pass || pass.length <= 0) ? '' : `:${pass}@`;
    const uri = `mongodb://${user}${pass}${host}:${port}/${database}`
    return uri;
}