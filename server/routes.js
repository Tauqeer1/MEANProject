/**
 * Created by Tauqeer Ahmed on 4/28/2016.
 */

var express = require('express');
var dbSchema = require('./models/dbSchema.js');
var api =  express.Router();

api.post('/signup',function(req,res){
    console.log("signup body " , req.body);
    dbSchema.User.findOne({email : req.body.email},function(err,success){
        if(success){
            res.send({status : false , message : 'User Already exist'});
        }
        else{
            var user = new dbSchema.User(req.body);
            user.save(function(err,success){
                if(err){
                    res.send({status : false , message : 'Sign up error' , errorData : err});
                }
                else {
                    res.send({status : true , message : 'Successfully Sign up' , successData : success});
                }
            });
        }
    });
});

api.post('/signin',function(req,res){
    console.log("signin body " , req.body);
});

module.exports = api;