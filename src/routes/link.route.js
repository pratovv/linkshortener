const { Router } = require('express')
const { LinkController, linkController } = require("../controllers/link.controller");
const router = Router()

router.get('/all', linkController.findAll)
router.get('/:postfix', linkController.redirect)
router.post('/create', linkController.create)
router.delete('/delete/:id', linkController.delete)

module.exports = router