const adminServices = require("../services/adminService");

exports.addRecruiter = async(req,res)=>{
    let body = req.body;
    let resp = await adminServices.addRecruiter(body);
    if(resp){
        return res.status(resp.status).send({sucess:resp.sucess,message:resp.message,result:resp.result});
    }
}

exports.updateRecruiter = async(req,res)=>{
    let body = req.body;
    let recruiterId = req.params.id;
    let resp = await adminServices.updateRecruiter(body,recruiterId);
    if(resp){
        return res.status(resp.status).send({sucess:resp.sucess,message:resp.message});
    }
}

exports.removeUserAccounts = async(req,res)=>{
    let userId = req.params.id;
    let resp = await adminServices.removeUserAccount(userId);
    if(resp){
        return res.status(resp.status).send({sucess:resp.sucess,message:resp.message});
    }
}

exports.exportsUserData = async(req,res)=>{
    let roleId = req.params.roleId;
    let resp = await adminServices.userExportsData(roleId);
    if(resp){
        return res.status(resp.status).send({sucess:resp.sucess,message:resp.message});
    }
}

exports.exportApplyJob = async(req,res)=>{
    let userId = req.params.id;
    let resp = await adminServices.appliedJobCandidate(userId);
    if(resp){
        return res.status(resp.status).send({sucess:resp.sucess,message:resp.message})
    }
}

exports.getAppliedJob = async(req,res)=>{
    let userId = req.params.id;
    let resp = await adminServices.getAppliedJobCandidate(userId);
    if(resp){
        return res.status(resp.status).send({sucess:resp.sucess,message:resp.message,result:resp.result});
    }
}

exports.getAllRecAndCan = async(req,res)=>{
    let {from,to,orderBy} = req.query;
    let roleId = req.params.roleId;
    let resp = await adminServices.getAllRecruiterAndCandidate(roleId,from,to,orderBy);
    if(resp){
        return res.status(resp.status).send({sucess:resp.sucess,message:resp.message,data:resp.data});
    }
}

exports.createRolePermission = async(req,res)=>{
    let body = req.body;
    let result =await adminServices.createRole_permission(body);
    if(result){
        return res.status(result.status).send({sucess:result.sucess,message:result.message,data:result.result})
    }
}