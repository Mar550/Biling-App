const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema({
        title: { type: String, required:true},
        amount: { type: Number, required:true},
        date: {type: Date, required:true},
    },
    { timestamp: true }
)

module.exports = mongoose.model("Expense", expenseSchema)