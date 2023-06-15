const Statistics = require("../models/Statistics");

const statisticsController = {
  getAllStatistics: async (req, res) => {
    try {
      const statistics = await Statistics.find();
      const statisticsArray = []
      statistics.forEach(e => statisticsArray.push({name: e.name, score: e.score, rank:e.rank}))
      console.log(statistics)
      res.json({ success: true, respuesta: statisticsArray });
    } catch (error) {
      console.log(error);
      res.json({
        success: false,
        respuesta:
          "Oops! an error has ocurred with the server. Verify the endpoint and if it still not working, please try again later...",
      });
    }
  },
  addStatistic: async (req, res) => {
    const { name, score, rank } = req.body;
    try {
      const statisticsToAdd = new Statistics({ name, score, rank});
      await statisticsToAdd.save();
      res.json({ success: true, respuesta: statisticsToAdd });
    } catch (error) {
      console.log(error);
      res.json({
        success: false,
        respuesta:
          "Oops! Verify the endpoint and if it still not working means an error has ocurred with the server. Please try again later...",
      });
    }
  },
};

module.exports = statisticsController;
