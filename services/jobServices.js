const model = require("../models/index");
const pagination = require("../utils/pagination");
const client = require("../utils/redis");

exports.registerJob = async(data)=>{
    let response = await model.jobs.create(data);
    if(response){
        return ({status:200,sucess:true,message:"job register sucessfully",result:response});
    }
    else{
        return ({status:400,sucess:false,message:"job can'not be added"});
    }
}

exports.getAllJob = async(fromPara,toPara,orderBy)=>{
    const {order,offset,limit} = pagination(fromPara,toPara,orderBy);
    let find = await client.get("all-job");
    if(find){
        let parseFind = JSON.parse(find)
        return ({status:200,sucess:true,message:"Data Found Sucessfully",result:parseFind})
    }
    let data = await model.jobs.findAll({offset:offset,limit:limit,order:[["createdAt",order]]});
    // let data = [{id:1},{id:2}]
    if(data){
        let jsonData = JSON.stringify(data)
        await client.set("all-job",jsonData);
        return ({status:200,sucess:true,message:"Job Found Sucessfuly",result:data});
    }
    else{
        return ({status:404,sucess:false,message:"Job Not Found"});
    }
}

exports.getJobById = async(jobId)=>{
    let response = await model.jobs.findOne({where:{id:jobId}});
    if(response){
        return ({status:200,sucess:true,message:"Job Found Sucessfully",result:response})
    }
    else{
        return ({status:404,sucess:false,message:"unable to find job"});
    }
}

exports.updateJob = async(data,jobId)=>{
    // let exist = await model.jobs.findOne({where:{id:data.id}});
    // if(exist){
        let response = await model.jobs.update(data,{where:{id:jobId}});
        if(response){
            return ({status:200,sucess:true,message:"job updated sucessfully"});
        }
    // }
    else{
        return ({status:400,sucess:false,message:"unable to update job"})
    }
}

exports.deleteJob = async(jobId)=>{
    let response = await model.jobs.destroy({where:{id:jobId}});
    if(response){
        return ({status:200,sucess:true,message:"job deleted sucessfully"});
    }
    else{
        return ({status:400,sucess:false,message:"unable to delete"})
    }
}