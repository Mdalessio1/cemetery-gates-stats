const express =require ('express')
const router = express.Router()
const statisticsController = require('../controllers/statisticsController')

const { getAllStatisticsName, getAllStatisticsScore, getAllStatisticsRank, addStatistic} = statisticsController

router.route('/stats')
.post(addStatistic)
router.route('/statsName')
.get(getAllStatisticsName)
router.route('/statsScore')
.get(getAllStatisticsScore)
router.route('/statsRank')
.get(getAllStatisticsRank)

module.exports = router