const express = require("express")
const bodyParser = require("body-parser")
const { PORT } = require("./config/constants")

const routes = require("./routes")

const app = express()

app.use(bodyParser.json())
app.use("/api", routes())

app.listen(PORT, () => {
	console.log(`running on port ${PORT}`)
})
