
const jwt = require('jsonwebtoken');
const models = require('../models');

exports.verify = async (req, res, next) => {
    try {
        let bearerToken = req.header("Authorization");
        if (!bearerToken) {
            return res.status(401).send({sucess:false, message: "Unauthorized" })
        }
        else {
            const token = bearerToken.split(" ")[1];
            if (!token) {
                return res.status(401).send({sucess:false, message: "Unauthorized" })
            } else {
                let existToken = await models.token.findOne({where:{accessToken:token}});
                if(!existToken){
                    return res.status(401).send({sucess:false,message:"Unauthorized"})
                }
                else{
                    let decode = jwt.verify(token,process.env.access_token_secret_key)
                    if(!decode){
                        return res.status(401).send({sucess:false,message:"Unauthorized"});
                    }
                    else{
                        req.userDetails = decode;
                        next();
                    }
                }
            }
        }
    } catch (error) {
        return res.status(500).send({ result: `${error}` })
    }
}
