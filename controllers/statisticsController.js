const Statistics = require("../models/Statistics");

const statisticsController = {
  getAllStatisticsName: async (req, res) => {
    try {
      const statistics = await Statistics.find();
      const statisticsArray = []
      statistics.forEach(e => statisticsArray.push(e.name))
      res.send( statisticsArray.toString() );
    } catch (error) {
      console.log(error);
      res.json({
        success: false
      });
    }
  },
  getAllStatisticsScore: async (req, res) => {
    try {
      const statistics = await Statistics.find();
      const statisticsArray = []
      statistics.forEach(e => statisticsArray.push(e.score))
      res.send( statisticsArray.toString() );
    } catch (error) {
      console.log(error);
      res.json({
        success: false
      });
    }
  },
  getAllStatisticsRank: async (req, res) => {
    try {
      const statistics = await Statistics.find();
      const statisticsArray = []
      statistics.forEach(e => statisticsArray.push(e.rank))
      res.send( statisticsArray.toString() );
    } catch (error) {
      console.log(error);
      res.json({
        success: false
      });
    }
  },
  addStatistic: async (req, res) => {
    const { name, score, rank } = req.query;
    try {
      const statisticsToAdd = new Statistics({ name, score, rank});
      await statisticsToAdd.save();
      res.json({ success: true, response: statisticsToAdd });
    } catch (error) {
      console.log(error);
      res.json({
        success: false,
        response:
          "Oops! Verify the endpoint and if it still not working means an error has ocurred with the server. Please try again later...",
      });
    }
  },
};

module.exports = statisticsController;
