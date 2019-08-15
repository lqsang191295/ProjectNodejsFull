const models = require('../models');
const Response = require('../utils/response');

class ProductController {
    static async create(req, res) {
        try {
            const result = await models.ProductModel.create(req.body);
            Response.success(res, result);
        } catch (err) {
            Response.success(res, err);
        }
    }

    static async edit(req, res) {
        try {
            const {_id} = req.body;
            const result = await models.ProductModel.findOneAndUpdate({_id}, req.body, {upsert:true});
            Response.success(res, result);
        } catch (err) {
            Response.success(res, err);
        }
    }

    static async delete(req, res) {
        try {
            const {_id} = req.body;
            const result = await models.ProductModel.remove({_id});
            Response.success(res, result);
        } catch (err) {
            Response.success(res, err);
        }
    }

    static async getProduct(req, res) {
        try {
            const result = await models.ProductModel.find();
            Response.success(res, result);
        } catch (err) {
            Response.success(res, err);
        }
    }

    static async getProductById(req, res) {
        try {
            const result = await models.ProductModel.findOne({_id: req.params.id});
            Response.success(res, result);
        } catch (err) {
            Response.success(res, err);
        }
    }

    static findOneById(id) {
        const filter = {
            _id: id
        }
        return models.ProductModel.findOne(filter);
    }
}

module.exports = ProductController;