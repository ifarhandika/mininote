import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from 'dotenv'
import swaggerUI from "swagger-ui-express"
import swaggerJSDoc from "swagger-jsdoc"

import postRoutes from "./routes/notes.js"

// Initialize swagger
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Mininote API",
      version: "1.0.0",
      description: "A mininote API Documentation",
    },
    servers: [
      {
        url: "http://localhost:5000",
      },
    ],
  },
  apis: ["./routes/*.js"],
}

const openapiSpecs = swaggerJSDoc(options)

const app = express()
dotenv.config()

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(openapiSpecs))

app.use(cors())
app.use(express.json())

app.use("/notes", postRoutes)

const PORT = process.env.PORT || 5000

mongoose
  .connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  )
  .catch((error) => console.log(error.message))

mongoose.set("useFindAndModify", false)
