const express = require("express")
const { PORT } = require("./config/constants")

const routes = require("./routes")

const app = express()
app.use("/api", routes())

app.listen(PORT, () => {
	console.log(`running on port ${PORT}`)
})
