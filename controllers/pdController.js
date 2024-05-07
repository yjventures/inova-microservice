const pdService = require('../services/pdService');

exports.detect = async (req, res) => {
    try {
        const results = await pdService.detect(req.body.text)
        res.send(results)
        
    } catch (error) {
        console.error('An error occured', error);
        res.status(500).send({
            status: 500,
            message: "Internal server error",
        });
    }
};