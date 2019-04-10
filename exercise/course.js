const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mongo-exercises')
    .then(() => console.log('connected to db..'))
    .catch(() => console.log('cannot connect to db..'));

const courseSchema = new mongoose.Schema({
    // id: String,
    tags: [String],
    date: { type: Date, default: Date.now },
    name: String,
    author: String,
    isPublished: Boolean,
    price: Number,
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;