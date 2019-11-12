const BreweryDbService = require("../services/BreweryDb.services")

const getBeerByName = async name => {
	return await BreweryDbService.getBeers({ name })
}

const getBeerByAbv = async abv => {
	return await BreweryDbService.getBeers({ abv })
}

module.exports = {
	getBeerByName,
	getBeerByAbv
}
