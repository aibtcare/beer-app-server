const Router = require("express").Router
const SearchBeerRoutes = require("./searchBeer.routes")

module.exports = () => {
	const appRouter = Router() // init router for our app

	SearchBeerRoutes(appRouter)

	return appRouter
}
