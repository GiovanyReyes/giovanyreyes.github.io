const router = require('express').Router()
const siteRoutes = require('./site.routes')
const contactRoutes = require('./contact.routes')



// reginster routes //////////////////
router.use(siteRoutes)
router.use('/api/contact', contactRoutes)
// router.use('/api/maps', mapRoutes)



// Handle API 404
router.use('/api/*', function(req, res, next){
    res.sendStatus(404)
})


// Handle API 500

router.use(function(req, res, next){
    if(!err){
        return next()
    }
    console.log(err.stack)
    res.sendStatus(500)
})

module.exports = router