const userService = require("../services/userService");

exports.registerUser = async(req,res)=>{
    let body = req.body;
    let data = await userService.registerUser(body);
    if(data){
        return res.status(data.status).send({sucess:data.sucess,message:data.message,result:data.result})
    }
}

exports.getAllUser = async(req,res)=>{
    let data = await userService.getAllUser();
    if(data){
        return res.status(data.status).send({sucess:data.sucess,message:data.message,result:data.result})
    }
}

exports.getUserById = async(req,res)=>{
    let {id} = req.userDetails;
    let result = await userService.getUserById(id);
    if(result){
        return res.status(result.status).send({sucess:result.sucess,message:result.message,data:result.result})
    }
}

exports.updateUser = async(req,res)=>{
    let {id} = req.userDetails;
    let body = req.body;
    let data = await userService.updateUser(body,id);
    if(data){
        return res.status(data.status).send({sucess:data.sucess,message:data.message,result:data.result})
    }
}

exports.deleteUser = async(req,res)=>{
    let {id} = req.userDetails;
    let data = await userService.deleteUser(id);
    if(data){
        return res.status(data.status).send({sucess:data.sucess,message:data.message,result:data.result})
    }
}

exports.getApplyJobCandidate = async(req,res)=>{
    let jobId = req.params.jobId;
    let {from,to,orderBy} = req.query;
    let result = await userService.recGetApplidJob(jobId,from,to,orderBy);
    if(result){
        return res.status(result.status).send({sucess:result.sucess,message:result.message,data:result.result})
    }
}