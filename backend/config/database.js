import mysql from "mysql2";
  
// create the connection to database
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'pos_db'
});

db.connect(function(error){
  if(error) throw error;
  console.log("Database Connected");

})
 
export default db;