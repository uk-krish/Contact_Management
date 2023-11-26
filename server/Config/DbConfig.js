const mysql2 = require('mysql2');

const Dbconnect = async () => {
    try {
        const con = mysql2.createConnection({
            host: process.env.USERHOST,
            user: process.env.USERNAME,
            password: process.env.USERPASSWORD,
            database: process.env.USERDB,
        })
        
        return con;
    } catch (error) {
        console.error("The Error is ", error);
        throw error
    }
}
Dbconnect();
module.exports = Dbconnect;