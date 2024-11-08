import mongoose from 'mongoose';
import chalk from 'chalk';

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(chalk.bgMagenta.white(`Connected to Mongodb Database ${conn.connection.host}`));
    } catch (error) {
        console.log(chalk.bgRed.white(`Error in Mongodb ${error}`));
    }
};

export default connectDB;