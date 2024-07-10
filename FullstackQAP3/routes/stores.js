const express = require("express");
const router = express.Router();
const { getStoreById } = require('../services/store_film.dal.js')

router.use(express.static("public"));

router.get('/:id', async (req, res) => {
    var films = await getStoreById(req.params.id)
    if (films.length === 0) {
        res.render('404')
    }
    else {
        res.render('store.ejs', {films})
    }
})

module.exports = router