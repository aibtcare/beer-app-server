const BreweryDbService = require("../services/BreweryDb.services")

const getAllBeer = async () => {
	return await BreweryDbService.getBeer()
}

module.exports = {
	getAllBeer
}
