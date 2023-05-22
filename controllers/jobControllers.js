const jobService = require("../services/jobServices");

exports.registerJob = async(req,res)=>{
    let body = req.body;
    let data = await jobService.registerJob(body);
    if(data){
        return res.status(data.status).send({sucess:data.sucess,message:data.message,result:data.result})
    }
}

exports.getAllJob = async(req,res)=>{
    let {from,to,orderBy} =req.query;
    let data = await jobService.getAllJob(from,to,orderBy);
    if(data){
        return res.status(data.status).send({sucess:data.sucess,message:data.message,result:data.result})
    }
}

exports.getJobById = async(req,res)=>{
    let jobId = req.params.id;
    let data = await jobService.getJobById(jobId);
    if(data){
        return res.status(data.status).send({sucess:data.sucess,message:data.message,result:data.result})
    }
}

exports.updateJob = async(req,res)=>{
    let jobId = req.params.jobId;
    let body = req.body;
    let data = await jobService.updateJob(body,jobId);
    if(data){
        res.status(data.status).send({sucess:data.sucess,message:data.message})
    }
}

exports.deleteJob = async(req,res)=>{
    let jobId = req.params.id;
    let data = await jobService.deleteJob(jobId);
    if(data){
        return res.status(data.status).send({sucess:data.sucess,message:data.message})
    }
}