const { MongoClient } = require("mongodb")
console.log("Mongo URI:", process.env.MONGO_URI);

const Db = process.env.MONGO_URI

const client = new MongoClient(Db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

var _db

module.exports = {
    connectToMongoDB: async function (callback) {
        try {
            await client.connect()
            _db = client.db("employees")
            console.log("Successfully connected to MongoDB.")
            
            return callback(null)
        } catch (error) {
            return callback(error)
        }
    },

    getDb: function () {
        return _db
    }
}