const mongoose = require('mongoose');
const mongoURL = 'mongodb+srv://ayush:nhcafe%401@cluster0.wooaicp.mongodb.net/nhcafe';

const connectToMongo = async () => {
    try {
        await mongoose.connect(mongoURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to MongoDB successfully!');

        // Access the existing collection named "food_items"
        const food_items = mongoose.model('food_items', new mongoose.Schema({
            // Define your schema fields here
            url: String,
            text: String,
            id: Number,
        }), 'food_items');
        const foodCategory = mongoose.model('foodCategory', new mongoose.Schema({
            // Define your schema fields here
            url: String,
            text: String,
            id: Number,
        }), 'foodCategory');


        // Example: Find all documents in the "food_items" collection using async/await
        try {
            const data = await food_items.find({});
            const data1 = await foodCategory.find({});
            console.log('Fuck Data found :', data);
            console.log('Fuck Data found :', data1);
            // Store the data in the global variable
            global.food_items = data;
            global.foodCategory = data1;
        } catch (error) {
            console.error('Error fetching data:', error);

        }
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
};

module.exports = connectToMongo;
