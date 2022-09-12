const express = require('express')
const router = express.Router();
const indexController = require('../controllers/index')

router.get('/', (req, res)=>{
    res.json('That should be landing page or test route')
})

router.get('/api/mashup/:userId', indexController.getMovieByUserIdAndWeather)

module.exports = router;