const AdminModel = require('../model/admin');
const jwt = require('jsonwebtoken');


exports.getLogin = (req, res, next) => {
    res.render('auth/login')
};

exports.postLogin = (req, res, next) => {
    console.log('Under Maintenance');

    const username = req.body.username;
    const password = req.body.password;
    console.log(username);
    
    req.session.isLoggedId = true;
    req.session.user = admin;
    return req.session.save(err => {
        console.log(err);
        res.redirect('/');
    })
    // AdminModel.findOne({username : username})
    // .then (admin => {
    //     if(admin.password == ' '){

    //     }
    // }) 
}