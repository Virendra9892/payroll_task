const models = require("../models");

exports.addRole = async(data)=>{
    let exist = await models.roles.findOne({where:{role:data.role}});
    if(exist){
        return ({status:400,sucess:false,message:"role already exist"});
    }
    else{
        let resp = await models.roles.create(data);
        if(resp){
            return ({status:200,sucess:true,message:"role created sucessfully",result:resp});
        }
    }
}

exports.getRole = async()=>{
    let exist = await models.roles.findAll();
    if(exist){
        return ({status:200,sucess:true,message:"role found sucessfully",result:exist});
    }
    else{
        return ({status:404,sucess:false,message:"role doesn't exist"});
    }
}

exports.updateRole = async (id, data) => {
    let response = await models.roles.update(data, {where:{ id: id}});
    if (response) {
        return ({status:200, sucess:true,message:"role updated sucessfully"})
    }
    else {
        return ({status:500, sucess:false,message: 'something went wrong'})
    }
}

exports.deleteRole = async (id) => {
    let response = await models.roles.destroy({ where:{id:id}});
    if (response) {
        return ({status:200,sucess:true,message:"role deleted sucessfully"})
    }
    else {
        return ({status:500,sucess:false, message: `something went wrong` })
    }
}