const Genres = require("../models/Genre");

exports.index = async (req, res) => {
    const data = await Genres.query();
    if(data.length == 0){
        return res.status(400).send('No genres yet')
    }
    res.send(data)
}

exports.create = async (req, res) => {
    const { name, description, image, created_by } = req.body;
    if( !name || !description || !image || !created_by ) {
        return res.status(400).send("Please, provide all the information)")
    }
    try {
        const genre = await Genres.query().insert({
            name,
            description,
            image,
            created_by : parseInt(created_by)
        });
        res.status(200).send(genre);
    } catch (error) {
        console.log(error);
        res.status(400).send(error)
    }
}