const Course = require('./course');

async function getCourses() {
    
    const courses = await Course
    .find({isPublished:true, tags:['backend','frontend']})
    .sort({price:-1})
    .select({name:1,author:1})

    console.log(courses);
}

getCourses();