const express = require('express');
const router = express.Router();
const moment = require('moment');

var todoList = [{
    id: 0,
    title: '형',
    createdAt: moment().format('YYYY-MM-DD'),
    user: 'jm'
}]


// const mysql      = require('mysql');
// const connection = mysql.createConnection({
//     host     : '12398aoisdfhasd',
//     user     : 'asdfasdfsdf',
//     password : 'asdfasdfsdfasd',
//     database : 'asdfasdflkasdfjasdfjl'
// });

// connection.connect();


router.route("/todo")
    .get((req, res, next) => {
        var user = req.query.user;
        // var usertodoList = [];

        // for(var i=0; i<todoList.length; i++){
        //     if(todoList[i].user == user){
        //         usertodoList.push(todoList[i]);
        //     }
        // }

        var sql = "SELECT * FROM todo WHERE user=?";
        connection.query(sql, [ user ], (err, result, fields) => {
            if(err){
                return res.send(err);
            }
            res.send(result);
        })
    })
    .post((req, res, next) => {
        // 원래 id는 알아서 데이터베이스에서 1씩 증가해서 넣어줌.
        var title = req.body.title;
        var user = req.body.user;
        // var createdAt = moment().format('YYYY-MM-DD');
        // var id = todoList.length;

        // todoList.push({id: id, title: title, user: user, createdAt: createdAt});
        // res.send({
        //     status: 'success',
        //     id: id
        // })

        var sql = "INSERT INTO todo (title, user) VALUES (?, ?)";
        connection.query(sql, [title, user], (err, result, fields) => {
            res.send(result);
        })

    })
    .put((req, res, next) => {
        var { id, title } = req.body;

        // for(var i=0; i<todoList.length; i++){
        //     if(todoList[i].id == id){
        //         todoList[i].title = title;
        //         break;
        //     }
        // }

        var sql = "UPDATE todo SET title=? WHERE id=?";
        connection.query(sql, [title, id], (err, result, fields) => {
            res.send(result);
        })

        // res.send(todoList[i]);
    })
    // .delete((req, res, next) => {
    //     var id = req.body.id;
    //     var user = req.body.user;

    //     var sql = "DELETE FROM todo WHERE id=? AND user=?";
    //     connection.query(sql, [id, user], (err, result, fields) => {
    //         res.send(result);
    //     })
    // })

module.exports = router;