const indexService = require('../services/indexServices');

exports.ping = async (req, res) => {
    try {
        const result = await indexService.ping();
        res.send(result);
        
    } catch (error) {
        console.error('An error occured', error);
        res.status(500).send({
            status: 500,
            message: "Internal server error",
        })
    }
}