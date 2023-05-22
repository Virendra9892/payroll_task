const permissionService = require("../services/permissionService");

exports.addPermission = async(req,res)=>{
    let body = req.body;
    let result = await permissionService.createPermission(body);
    if(result){
        return  res.status(result.status).send({sucess:result.sucess,message:result.message,data:result.result});
    }
}

exports.getPermission = async(req,res)=>{
    let result = await permissionService.getPermission();
    if(result){
        return res.status(result.status).send({sucess:result.sucess,message:result.message,data:result.result});
    }
}

exports.updatePermission = async(req,res)=>{
    let permissionId = req.params.permissionId;
    let body = req.body;
    let result = await permissionService.updatePermission(permissionId,body);
    if(result){
        return res.status(result.status).send({sucess:result.sucess,message:result.message});
    }
}

exports.deletePermission = async(req,res)=>{
    let permissionId = req.params.permissionId;
    let resp = await permissionService.deletePermission(permissionId);
    if(resp){
        return res.status(resp.status).send({sucess:resp.sucess,message:resp.message})
    }
}
