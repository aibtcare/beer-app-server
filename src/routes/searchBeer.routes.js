const route = require("express").Router()
const SearchBeerController = require("../controllers/SearchBeer.controllers")

module.exports = app => {
	route.get("/", async (req, res) => {
		const allBeer = await SearchBeerController.getAllBeer()
		res.json(allBeer)
	})

	app.use("/search-beer", route)
}
