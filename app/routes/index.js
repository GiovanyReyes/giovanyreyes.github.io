const router = require('express').Router()
// const userRoutes = require('./users.routes')
const siteRoutes = require('./site.routes')
// const photoRoutes = require('./photo.routes')
// const mapRoutes = require('./map.routes')


// reginster routes //////////////////
router.use(siteRoutes)
// router.use('/api/maps', mapRoutes)
// router.use('/api/photo', photoRoutes)
// router.use('/api/users', userRoutes)


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