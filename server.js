const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const swaggerUi = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const bodyParser = require("body-parser");
const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use("/miappvue",express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());

const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Gestor de Tareas API",
      version: "1.0.0",
    },
  },
  apis: ["./**/*.js"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

const connectDB = async () => {
  await mongoose.connect(process.env.MONGO_URI);
};

const errorHandler = (res, error) => {
  res
    .status(500)
    .json({ message: "Error en el servidor", error: error.message });
};

const standardResponse = (res, status, data) => {
  res.status(status).json({ success: status < 400, data });
};

const crudRoutes = (collectionName, idField = "_id", options = {}) => {
  const { validators = [], customEndpoints = [] } = options;

  const model = mongoose.model(
    collectionName,
    new mongoose.Schema({}, { strict: false })
  );

  app.get(`/${collectionName}`, async (req, res) => {
    try {
      const result = await model.find();
      standardResponse(res, 200, result);
    } catch (error) {
      errorHandler(res, error);
    }
  });

  app.post(`/${collectionName}`, validators, async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });
    try {
      const item = new model(req.body);
      await item.save();
      standardResponse(res, 201, item);
    } catch (error) {
      errorHandler(res, error);
    }
  });

  app.put(`/${collectionName}/:${idField}`, validators, async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });
    try {
      const item = await model.findByIdAndUpdate(
        req.params[idField],
        req.body,
        { new: true }
      );
      standardResponse(res, 200, item);
    } catch (error) {
      errorHandler(res, error);
    }
  });

  app.delete(`/${collectionName}/:${idField}`, async (req, res) => {
    try {
      await model.findByIdAndDelete(req.params[idField]);
      standardResponse(res, 204, null);
    } catch (error) {
      errorHandler(res, error);
    }
  });

  customEndpoints.forEach(({ method, path, handler }) => {
    app[method.toLowerCase()](`/${collectionName}${path}`, handler);
  });
};

connectDB()
  .then(() => {
    crudRoutes("tasks", "taskId", {
      validators: [body("title").notEmpty(), body("description").optional()],
    });
    crudRoutes("categories", "categoryId", {
      validators: [body("name").notEmpty()],
    });
    crudRoutes("users", "userId", {
      validators: [body("email").isEmail(), body("name").notEmpty()],
    });

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error conectando a la base de datos", err);
  });

module.exports = app;
