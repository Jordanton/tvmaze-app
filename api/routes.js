const
    express = require('express'),
    path = require('path'),
    superagent = require('superagent')

const router = express.Router()

module.exports = () => {

    router.get('/api/search', (req, res) => {

        const { show } = req.query

        superagent
            .get('http://api.tvmaze.com/search/shows?q=' + show)
            .end((err, response) => {

                if (err) {
                    res.send(err)
                } else {
                    res.json(response.body)
                }
            })
    })

    router.get('*', (req, res) => {

        res.sendFile(path.join(__dirname, '../client/index.html'))
    })

    return router
}
