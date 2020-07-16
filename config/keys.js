let prodDatabase = {
  host: "localhost",
  user: "root",
  password: "redhat",
  database: "mydb",
  port: 3306,
  multipleStatements: true,
};

let environment = "production";
module.exports = {
  database: environment == "production" ? prodDatabase : devDatabase,
  serverPort: "8080",
};
