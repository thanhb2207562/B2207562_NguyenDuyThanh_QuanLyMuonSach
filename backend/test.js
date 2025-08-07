const bcrypt = require("bcryptjs");

const password = "1";
const salt = bcrypt.genSaltSync(10);
const hashedPassword = bcrypt.hashSync(password, salt);

console.log("Hashed password:", hashedPassword);
