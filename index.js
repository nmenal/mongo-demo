const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground')
    .then(() => console.log('Connected to MongoDB ..'))
    .catch(err => console.error('Could not connect to MongoDB ..',err));

const courseSchema =  new mongoose.Schema({
    name : {type: String , required:true} ,
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
    try {
        await course.validate();
        const result = await course.save();
        console.log(result);
    } catch (error) {
        console.log(error.message);
    }
}

createCourse();

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

// updateCourse('5cac7f51bd934656ab5730b8');