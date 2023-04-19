const AdminModel = require('../model/admin');
const bcrypt = require('bcryptjs');


exports.getLogin = (req, res, next) => {
    res.render('auth/login')
};

exports.postLogin = (req, res, next) => {
    console.log('Under Maintenance');

    const username = req.body.username;
    const password = req.body.password;
    
    AdminModel.findOne({username : username})
    .then (admin => {
        return bcrypt
        .compare( password, admin.password)
        .then( result => {
            if(result){
                req.session.isLoggedId = true;
                req.session.admin = admin;
                return req.session.save(err => {
                    console.log(err);
                    res.redirect('/');
                })
            }
        })
    }) 
}