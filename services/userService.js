const model = require("../models/index");
const bcrypt = require("bcrypt");
const pagination = require("../utils/pagination");
const user_jobs = require("../models/user_jobs");
const {Op} = require('sequelize')
const client = require("../utils/redis")

exports.registerUser = async(data)=>{
    let exist = await model.users.findOne({where:{email:data.email}});
    if(exist){
        return ({status:422,sucess:false,message:"user already exist"});;
    }
    else{
        let salt = await bcrypt.genSalt(10);
        let hashpass = await bcrypt.hash(data.password,salt);
        data["password"] = hashpass;
        let response = await model.users.create(data);
        if(response){
            return ({status:201,sucess:true,message:"user sucessfully registerd",result:response})
        }
    }
}

exports.getAllUser = async()=>{
    let find = await client.get("all-user");
    if(find){
        let parseData = JSON.parse(find);
        return ({status:200,sucess:true,message:"user found sucessfully",result:parseData})
    }
    let data = await model.users.findAll();
    if(data){
        let resp = JSON.stringify(data)
        await client.set("all-user",resp)
        return ({status:200,sucess:true,message:'user find sucessfully',result:data});
    }
    else{
        return ({status:404,sucess:false,message:"user doesn't exist"})
    }
}

exports.getUserById = async(id)=>{
     let exist = await model.users.findOne({id:id});
     if(exist){
        return ({status:200,sucess:true,message:"user found sucessfully",result:exist});
     }
     else{
        return ({status:404,sucess:false,message:"user doesn't exist"});
     }
}

exports.updateUser = async(data,id)=>{
    if(data.password){
        let salt = await bcrypt.genSalt(10);
        data.password = await bcrypt.hash(data.password,salt);
    }
    let response = await model.users.update(data,{where:{id:id}});
    if(response){
        return ({status:200,sucess:true,message:"user updated sucessfully",result:response})
    }
    else{
        return ({status:404,sucess:false,message:"something went wrong"});
    }
}

exports.deleteUser = async(id)=>{
    let response = await model.users.destroy({where:{id:id}});
    if(response){
        return ({status:200,sucess:true,message:"user deleted sucessfully",result:response});
    }
    else{
        return ({status:404,sucess:false,message:"something went wrong"});
    }
}   

exports.recGetApplidJob = async(jobId,fromPara,toPara,orderBy)=>{
    let {offset,limit,order} = pagination(fromPara,toPara,orderBy)
    // let resp =await model.jobs.findAll({
    //   where:{id:jobId},offset:offset,limit:limit,
    //   include:{
    //     model:model.users,
    //     attributes:["name","email","id","createdAt"],
    //     through: {attributes: [

    //     ]},
    //     // order:[["id",order]]
    //   },
    //   order:[["createdAt",order]]
     
    // });

    let resp1 = await model.user_jobs.findAll({
        where:{
            jobId:jobId,
            userId:{
                [Op.ne]: null
            }
        },
        include:[
            {
                model:model.users,
                as:'user',
                attributes:["name","email"],
            },
            {
                model:model.jobs,
                as:'job',
                attributes:["title","description"],
            },

        ],
        order:[["createdAt",order]],
        offset:offset,
        limit:limit
    })
    if(resp1){
        const maindata = resp1.map(x=>x.user.dataValues)
        return ({status:200,sucess:true,message:"Data Found Sucessfully",result:{job:resp1[0].job.dataValues,users:maindata}});
    }
    else{
        return ({status:400,sucess:false,message:"Data Not Found"});
    }
}