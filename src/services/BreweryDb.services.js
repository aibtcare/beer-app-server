const axios = require("axios")
const { BREWERY_DB_KEY: key } = require("../config/constants")

const getBeers = async ({ name = "", abv = "" }) => {
	const params = {
		name,
		key,
		abv
	}
	try {
		const res = await axios.get(
			"https://sandbox-api.brewerydb.com/v2/beers/",
			{ params }
		)
		console.log(res)
		return res.data.data
	} catch (err) {
		console.log(err)
	}
}

module.exports = {
	getBeers
}
