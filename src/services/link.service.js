const generator = require('generate-password')
const LinkModel = require("../models/link.model")

class LinkService {
    findAll = async () => {
        return await LinkModel.find()
    }
    findOne = async (postfix) => {
        return await LinkModel.findOne({ postfix })
    }
    create = async (source) => {
        const postfix = generator.generate({
            numbers: true,
            length: 8,
        })
        const shortened = `http://localhost:5000/${postfix}`
        try {
            const link = new LinkModel({
                source, shortened, postfix
            })
            return await link.save()
        } catch (e) {
            throw new Error('Link is already exist')
        }

    }
    delete = async (id) => {
        try {
            await LinkModel.findByIdAndDelete(id)
        } catch (e) {
            throw new Error('Link is not founded')
        }

    }

}
const linkService = new LinkService()

module.exports = { linkService }