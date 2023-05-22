const model = require("../models/index");
const sendMail = require("../utils/sendEmail");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {Op} = require("sequelize");

exports.loginUser = async(data)=>{
     if(!data.email&&!data.password){
        return ({status:400,sucess:false,message:"email and password must be required...."});
     }
     else{
        let exist = await model.users.findOne({where:{email:data.email}});
        if(!exist){
           return ({status:400,sucess:false,message:"Unauthorized"});
        }
        let matched = await bcrypt.compare(data.password,exist.password);
        if(!matched){
            return ({status:400,sucess:false,message:"Unauthorized"});
        }
        else{
        let signature =  jwt.sign({id:exist.id,email:exist.email,roleId:exist.roleId},process.env.access_token_secret_key,{expiresIn:"12h"});
        let token = await model.token.findOne({where:{userId:exist.id}});
        if(token){
            let resp1=await model.token.update({accessToken:signature},{where:{userId:exist.id}})
            return ({status:200,sucess:true,message:"user login sucessfully",token:signature})
        }
        else{
            let resp2 = await model.token.create({accessToken:signature,userId:exist.id});
            return ({status:200,sucess:true,message:"user login sucessfully",token:resp2.accessToken})
        }
      } 
     }
}

exports.forgetPassowrd = async(data)=>{
    if(!data.email){
        return ({status:400,sucess:false,message:"email must be required"});
    }
    else{
        let find = await model.users.findOne({where:{email:data.email}});
        if(find){
            let otp = Math.floor(Math.random()*1000000);
            await model.users.update({otp:otp},{where:{id:find.id}})
            let subject = `One Time Password For Forget Password`;
            let text = `Dear ${find.name} your one time password is following: ${otp}`
            await sendMail(subject,text,find.email)
            return ({resp:find.email})
        }   
    }
}

exports.verifyOtp = async(data)=>{
    let exist = await model.users.findOne({where:{[Op.and]:[{email:data.email},{otp:data.otp}]}});
    if(exist){
        return ({status:200,sucess:true,message:"otp verified sucessfully",data:exist.email})
    }
    else{
        return ({status:400,sucess:false,message:"Invalid OTP....."})
    }
}

exports.resetPassword = async(data)=>{
    if(data.password===data.confirmPassword){
        let salt = await bcrypt.genSalt(10);
        data.password = await bcrypt.hash(data.password,salt)
        let response = await model.users.update({password:data.password},{where:{email:data.email}})
        if(response){
            return ({status:200,sucess:true,message:"passowrd updated sucessfully"})
        }
    }
    else{
        return ({status:500,sucess:false,message:"something went wrong...."})
    }
}

exports.logoutUser = async(userId)=>{
    // let token = data.token.split(" ")[1];
    let response = await model.token.destroy({where:{userId:userId}});
    if(response){
        return ({status:200,sucess:true,message:"user logout sucessfully"});
    }
    else{
        return ({status:400,sucess:false,message:"something went wrong"});
    }
}
