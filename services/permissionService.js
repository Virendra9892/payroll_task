const models = require('../models');
const { Op } = require("sequelize");

exports.createPermission = async (data) => {
    let baseUrl = data.baseUrl;
    let path = data.path;
    let method = data.method;
    const exist = await models.permissions.findOne({ where: { [Op.and]:[{baseUrl:baseUrl,path:path,method:method}]}});
    if (exist) {
        return ({ status: 400, sucess: false, message: "permission already exist" });
    }
    else {
        let resp = await models.permissions.create(data);
        if (resp) {
            return ({ status: 200, sucess: true, message: "permission added sucessfully", result: resp })
        }
    }
}

exports.getPermission = async () => {
    const resp = await models.permissions.findAll();
    if (response) {
        return ({ status: 200, sucess: true, message: "permission found sucessfully", result: resp });
    }
    else {
        return ({ status: 404, sucess: false, message: `cannot find any permission.` });
    }
}


exports.updatePermission = async (permissionId, data) => {
    let exist = await models.permissions.findOne({ where: {id:permissionId}});
    if (!exist) {
        return ({ status: 404, sucess: false, message: "permission doesn't exist" });
    }
    else {
        const resp = await models.permissions.update(data, { where: { id: permissionId } });
        if (resp) {
            return ({ status: 200, sucess: true, message: "Permission Updated Sucessfully"});
        }
        else {
            return ({ status: 400, sucess: false, message: `cannot update permission.` });
        }
    }
}

exports.deletePermission = async (permissionId) => {
    const response = await models.permissions.destroy({ where: { id: permissionId } });
    if (response) {
        return ({status:200,sucess:true,message:"permission deleted sucessfully"})
    }
    else {
        return ({status:400,sucess:false,message:`cannot deleted permission`});
    }
}