const { linkSevice, linkService } = require('../services/link.service')
class LinkController {
    constructor(service) {
        this.service = service
    }
    redirect = async (req, res) => {
        const { postfix } = req.params
        const link = await this.service.findOne(postfix)
        if (!link) {
            return res.status(404).json({ message: 'Link is not defined' })
        }
        link.clickQty++
        await link.save()
        res.redirect(link.source)
    }

    findAll = async (req, res) => {
        const data = await this.service.findAll()
        res.json({ data })
    }
    create = async (req, res) => {
        const { source } = req.body
        try {
            const link = await this.service.create(source)
            res.json({ link })
        } catch (e) {
            res.status(409).json({ message: e.message })
        }

    }
    delete = async (req, res) => {
        const { id } = req.params
        try {
            await this.service.delete(id)
            res.json({ succes: true })
        } catch (e) {
            res.status(404).json({
                succes: false,
                message: e.message
            })
        }
    }
}
const linkController = new LinkController(linkService)
module.exports = { linkController }