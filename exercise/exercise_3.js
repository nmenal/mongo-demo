const Course = require('./course');

async function getCourses() {
    const courses = await Course
        .find({ isPublished: true })
        .or([
            { price: { $gte: 15 } },
            { name: /.*by.*/i }
        ])

    console.log(courses);
}

getCourses();