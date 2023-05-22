const authServices = require("../services/authService");

exports.loginUser = async(req,res)=>{
    let body = req.body;
    let data = await authServices.loginUser(body);
    if(data){
        return res.status(data.status).send({sucess:data.sucess,message:data.message,token:data.token})
    }
}

exports.forgetPassword = async(req,res)=>{
    let body = req.body;
    let data = await authServices.forgetPassowrd(body);
    if(data){
        return res.status(200).send({data:data.resp})
    }
}

exports.verifyOtp = async(req,res)=>{
    let body = req.body;
    let data = await authServices.verifyOtp(body);
    if(data){
        return res.status(data.status).send({sucess:data.sucess,message:data.message,email:data.data})
    }
}

exports.resetPassword = async(req,res)=>{
    let body = req.body;
    let data = await authServices.resetPassword(body);
    if(data){
        return res.status(data.status).send({sucess:data.sucess,message:data.message});
    }
}

exports.logoutUser = async(req,res)=>{
    let userId = req.userDetails.id;
    let resp = await authServices.logoutUser(userId);
    if(resp){
        return res.status(resp.status).send({sucess:resp.sucess,message:resp.message});
    }
}