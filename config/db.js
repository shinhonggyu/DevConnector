const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });

    console.log('MongoDB Connected...'.cyan.underline.bold);
  } catch (error) {
    console.log(`Error: ${error.message}`.red);
    // Exit process with failure.
    process.exit(1);
  }
};

module.exports = connectDB;
