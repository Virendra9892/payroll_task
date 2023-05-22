const candidateService = require("../services/candidateServices");

exports.applyJob = async(req,res)=>{
    let userId = req.userDetails.id;
    let body = req.body;
    let resp = await candidateService.userApplyJob(body,userId);
    if(resp){
        return res.status(resp.status).send({sucess:resp.sucess,message:resp.message,data:resp.result})
    }
}

exports.exportsApplyJob = async(req,res)=>{
    let userId = req.params.id;
    let resp = await candidateService.getApplyJobList(userId);
    if(resp){
        return res.status(resp.status).send({sucess:resp.sucess,message:resp.message,result:resp.result})
    }
}

exports.canSeeJobList = async(req,res)=>{
    console.log(req);
    let userId = req.userDetails.id;
    let {from,to,orderBy} = req.query;
    let result = await candidateService.canSeeListOfJob(userId,from,to,orderBy);
    if(result){
        return res.status(result.status).send({sucess:result.sucess,message:result.message,data:result.result})
    }
}