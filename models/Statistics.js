const mongoose = require ('mongoose')

const statisticsSchema = new mongoose.Schema({
    name: {type: String, required: true},
    score: {type: Number, required: true},
    rank: {type: String, required: true}
})

const Statistics = mongoose.model ('statistic', statisticsSchema)

module.exports = Statistics