const express =require ('express')
const router = express.Router()
const statisticsController = require('../controllers/statisticsController')

const { getAllStatistics, addStatistic} = statisticsController

router.route('/stats')
.get(getAllStatistics)
.post(addStatistic)

module.exports = router