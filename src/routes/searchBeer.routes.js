const route = require("express").Router()
const SearchBeerController = require("../controllers/SearchBeer.controllers")

module.exports = app => {
	route.get("/name", async (req, res) => {
		const { name } = req.query
		const beerResponse = await SearchBeerController.getBeerByName(name)
		res.json(beerResponse)
	})

	route.get("/abv", async (req, res) => {
		const { abv } = req.query
		const beerResponse = await SearchBeerController.getBeerByAbv(abv)
		res.json(beerResponse)
	})

	app.use("/search-beer", route)
}
