const { User, Thought } = require('../models');


module.exports = {

    async getAllThoughts(req, res) {
        try{

        }catch(error){
            console.error(error);
            return res.status(500).json(err);
        }
    }
}