let mysql = require('mysql');

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Bncvznczvzz1411',
    database: 'dbTest',
    charset: 'utf8_general_ci'
});

connection.connect(err => {
    if (err) throw err.stack;
    console.log('Connect success');
});

let sqlInsert = "insert into customer(name, address) values('Đỗ Tiến Thành', 'Phú Thọ');";
connection.query(sqlInsert, (err, result) => {
    if (err) throw err;
    console.log('1 record inserted');
});

let sqlUpdate = "update customer set address = 'Hải Dương' where name = 'hung';";
connection.query(sqlUpdate, (err, result) => {
    if (err) throw err;
    console.log(result.affectedRows + " record(s) updated");
});