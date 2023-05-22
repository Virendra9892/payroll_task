const models = require("../models");
const bcrypt = require("bcrypt");
const XLSX = require("xlsx");
const sendMail = require("../utils/sendEmail");
const path = require("path");
const moment = require("moment");
const pagination = require("../utils/pagination");
const { Op } = require("sequelize")

exports.addRecruiter = async (data) => {
    let exist = await models.users.findOne({ where: { email: data.email } });
    if (exist) {
        return ({ status: 400, sucess: false, message: "recruiter already exist" });
    }
    else {
        let salt = await bcrypt.genSalt(10);
        data.password = await bcrypt.hash(data.password, salt);
        let resp = await models.users.create(data);
        await sendMail(`Registration of job portal`, `Hi ${resp.name}, congratulation... You have sucessfully regitser in job portal and following is your credentials: password:${data.password}`, resp.email);
        if (resp) {
            return ({ status: 200, sucess: true, message: "recruiter added sucessfully", result: resp });
        }
    }
}

exports.updateRecruiter = async (data, recruiterId) => {
    let exist = await models.users.findOne({ where: { id: recruiterId } });
    if (exist) {
        let resp = await models.users.update(data, { where: { id: recruiterId } });
        if (resp) {
            return ({ status: 200, sucess: true, message: "recruiter updated sucessfully" });
        }
    }
    else {
        return ({ status: 400, sucess: false, message: "recruiter cannot updated" });
    }
}

exports.getAllRecruiterAndCandidate = async (roleId, from, to, orderBy) => {
    let { offset, limit, order } = pagination(from, to, orderBy)
    // console.log(searchQuery);
    let exist = await models.users.findAll({ where: { roleId: roleId }, offset: offset, limit: limit, order: [["id", order]] });
    if (exist) {
        return ({ status: 200, sucess: true, message: "user fetched sucessfully", data: exist });
    }
    else {
        return ({ status: 400, sucess: false, message: "user doesn't exist" });
    }
}

exports.removeUserAccount = async (id) => {
    let exist = await models.users.findOne({ where: { id: id } });
    if (!exist) {
        return ({ status: 404, sucess: false, message: "user doesn't exist" });
    }
    else {
        let resp = await models.users.destroy({ where: { id: id } });
        if (resp) {
            return ({ status: 200, sucess: true, message: "user deleted sucessfully" });
        }
    }
}

exports.userExportsData = async (roleId) => {
    let exist = await models.users.findAll({ where: { roleId: roleId } });
    if (exist && exist.length > 0) {
        const data = exist.map(user => user.toJSON());
        // const headers = Object.keys(data);
        // console.log(":::::::",headers);
        const formattedData = [...data];
        const workbook = XLSX.utils.book_new();
        const worksheet = XLSX.utils.json_to_sheet(formattedData);
        XLSX.utils.book_append_sheet(workbook, worksheet, "userData");
        let userData = Date.now();
        let filePath = path.join(__dirname, `../public/excel/${userData}.xlsx`);
        XLSX.writeFile(workbook, filePath);
        return ({ status: 200, sucess: true, message: "data exported sucessfully" })
    }
    else {
        return ({ status: 500, sucess: false, message: "Internal Server Error" })
    }
}

exports.appliedJobCandidate = async (userId) => {
    let exist = await models.users.findOne({
        where: { id: userId },
        attributes: ["name", "email"],
        include: {
            model: models.jobs,
            attributes: ["title", "description"]
        }
    });
    if (exist) {
        const data = exist.jobs.map(user => user.toJSON());
        // const headers = Object.keys(data);
        // console.log(":::::::",headers);
        const formattedData = [exist.dataValues, ...data];
        const workbook = XLSX.utils.book_new();
        const worksheet = XLSX.utils.json_to_sheet(formattedData);
        XLSX.utils.book_append_sheet(workbook, worksheet, "userData");
        let userData = Date.now();
        let filePath = path.join(__dirname, `../public/excel/${userData}.xlsx`);
        XLSX.writeFile(workbook, filePath);
        return ({ status: 200, sucess: true, message: "data exported sucessfully" })
    }
    else {
        return ({ status: 400, sucess: false, message: "internal server error" })
    }
}

exports.getAppliedJobCandidate = async (userId) => {
    let resp = await models.users.findAll({
        where: { id: userId },
        include: {
            model: models.jobs,
            attributes: ["title", "description"],
            through: { attributes: [] }
        }
    })
    if (resp && resp.length > 0) {
        return ({ status: 200, sucess: true, message: "Data get sucessfully", result: resp });
    }
    else {
        return ({ status: 400, sucess: false, message: "Data not found" })
    }
}

exports.createRole_permission = async (data) => {
    if (data.roleId && data.permissionId) {
        let resp = await models.role_permission.create(data);
        if (resp) {
            return ({ status: 200, sucess: true, message: "role permission created sucessfully", result: data });
        }
    }
    else {
        return ({ status: 400, sucess: false, message: "Unable to create role_permission" });
    }
}