import mongoose from "mongoose";
let connected = false;
const connectDB = async () => {
       mongoose.set("strictQuery", true);
       // if database is already connected, then don't connect again
       if (connected) {
              console.log("Already connected to MongoDB");
              return
       };
       try {
              await mongoose.connect(process.env.MONGODB_URI);
              connected = true;
              console.log("Connected to MongoDB");
       } catch (error) {
              console.error(`Error connecting to MongoDB: ${error.message}`);
              process.exit(1);
       }


}
export default connectDB;