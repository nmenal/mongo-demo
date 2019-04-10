const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground')
    .then(() => console.log('Connected to MongoDB ..'))
    .catch(err => console.error('Could not connect to MongoDB ..',err));

const courseSchema =  new mongoose.Schema({
    name : String,
    author : String,
    tags : [String],
    date : { type: Date, default: Date.now},
    isPublished : Boolean
});

const Course = mongoose.model('Course', courseSchema);

async function createCourse() {

    const course = new Course({
        name: 'Angular Course',
        author: 'Manel',
        tags: ['angular', 'frontend'],
        isPublished: false
    })

    const result = await course.save();
    console.log(result);
}

// createCourse();

//build queries 
// async function getCourses() {

//     const courses = await Course
//         .find({isPublished:false})
//         .limit(10)
//         .sort({name : 1})
//         .select({name : 1, tags:1});
//     console.log(courses);
// }

// getCourses();

async function updateCourse(id) {
    const course = await Course.findById('5cac7f51bd934656ab5730b8'); 
    console.log(course)
    if (!course) return;
    // course.set({ isPublished: true, author : "Manel Lahbib"});
    // course.save();

    // const result = await course.save();
    // console.log(result);
}

updateCourse('5cac7f51bd934656ab5730b8');