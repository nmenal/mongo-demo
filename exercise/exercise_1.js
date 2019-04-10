const Course = require('./course');

async function getCourses() {
    const courses = await Course
        .find({ isPublished: true })
        .sort({ name : -1})
        .select({ name:1, author:1 })
    console.log("courses :", courses);
}

getCourses();