const axios = require("axios");

exports.getEpisodes = async (req, res, next) => {
    res = await axios.get("https://rickandmortyapi.com/api/episode")
    .then(result => {
        res.status(200).send(result.data.results);
        }).catch(err =>{
            if (err)
                return res.status(400).send(err)
        })
}

exports.getCharacter = async (req, res, next) => {
    if (req.body.url)
        axios.get(req.body.url)
        .then(result => {
            res.status(200).send(result.data);
        }).catch(err =>{
            if (err)
                return res.status(400).send(err)
        })
    else
        res.status(400).end();
}