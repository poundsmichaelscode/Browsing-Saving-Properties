
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const propertyRoutes = require('./routes/propertyRoutes');
const savedRoutes = require('./routes/savedRoutes');

dotenv.config();
const app = express();
app.use(express.json());

app.use('/api/properties', propertyRoutes);
app.use('/api/saved', savedRoutes);

mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log("MongoDB Connected");
  app.listen(process.env.PORT || 5000, () => {
    console.log("Server running...");
  });
});
