const axios = require("axios")
const { BREWERY_DB_KEY: key } = require("../config/constants")
const getBeer = async () => {
	try {
		const res = await axios.get(
			"https://sandbox-api.brewerydb.com/v2/beers/",
			{
				params: {
					name: "bud light",
					key
				}
			}
		)
		return res.data.data
	} catch (err) {
		console.log(err)
	}
}

module.exports = {
	getBeer
}
