const roleService = require('../services/roleService');

exports.createRole = async (req, res) => {
    const data = req.body;
    const result = await roleService.addRole(data);
    if (result) {
        return res.status(result.status).send({sucess:result.sucess, message:result.message, data:result.result});
    }
}

exports.getRole = async (req, res) => {
    const result = await roleService.getRole();
    if (result) {
        return res.status(result.status).send({ sucess: result.sucess, message:result.message,data: result.result });
    }
}

exports.updateRole = async (req, res) => {
    const roleId = req.params.id;
    const data = req.body;
    const result = await roleService.updateRole(roleId, data);
    if (result.result) {
        return res.status(result.status).send({sucess:result.sucess,message:result.message});
    }
}

exports.deleteRole = async (req,res) => {
    const roleId = req.params.id;
    const result = await roleService.deleteRole(roleId);
    if (result.result) {
        return res.status(result.status).send({sucess:result.sucess,message:result.message});
    }
}

