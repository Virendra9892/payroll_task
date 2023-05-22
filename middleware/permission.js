const models = require('../models');
const { Op } = require('sequelize')

//permission check
// exports.permission = async (req, res, next) => {
//     let arr = [];
//     try {
//         const { role_id } = req.userDetails;
//         const permitted = await db.roles_permission.findAll({
//             where: { role_id: role_id },
//             attributes: ['permission_id']
//         });
//         if (permitted.length <= 0) {
//             return res.status(404).send({ result: "no roleId found in permissions." })
//         } else {
//             for (let i = 0; i < permitted.length; i++) {
//                 arr.push(permitted[i].permission_id);
//             }
//             const count = arr.map((perId) => perId);
//             if (!count) {
//                 return res.status(404).send({ result:" no permission found "})
//             } else {
//                 const access = await db.permission.findAll({
//                     where: {
//                         id: { [Op.in]: count }
//                     },
//                     attributes: ['method', 'path', 'baseUrl']
//                 })
//                 if (!access) {
//                     return res.status(400).send("not valid route for user");
//                 } else {
//                     let match = false;
//                     access.map((e) => {
//                         if (e.dataValues.method === req.method && e.dataValues.path == req.route.path && e.dataValues.baseUrl == req.baseUrl) {
//                             match = true
//                         }
//                     })
//                     if (match) {
//                         next()
//                     } else {
//                         res.status(403).json({ message: 'You dont have permission for this!' })
//                     }
//                 }
//             }
//         }
//     } catch (error) {
//         return res.send({ result:` ${error}` })
//     }

// }

exports.permission = async (req, res, next) => {
    try {
        let { roleId } = req.userDetails;
        let result = await models.role_permission.findAll({
            where: { roleId: roleId },
            include: {
                model: models.permissions,
                as: "permission"
            }
        });
        if(result.length<=0){
            return res.status(400).send({sucess:false,message:"Bad Request"})
        }
        let match = false;
        let resp = result.map(p => {
            if (p.permission.dataValues.method === req.method && p.permission.dataValues.baseUrl === req.baseUrl && p.permission.dataValues.path === req.path) {
               match=true;
            }
        });
        if(match){
           next()
        }
        else{
            return res.status(500).send({sucess:false,message:"you don't have permission."});
        }

    }
    catch (error) {
        throw new Error(error);
    }
}