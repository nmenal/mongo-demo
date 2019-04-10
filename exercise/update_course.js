const Course  = require('./course');

// async function updateCourse(id) {
//     const course = await Course.findById(id); 
//     console.log(course);
//     if (!course) return;
//     course.set({ isPublished: true, author : "Mosh hamedani"});
//     const result = await course.save();
//     console.log(result);
// }
 
async function updateCourse(id) {
    const course = await Course.findByIdAndUpdate(id, {
       $set : {
            author: 'Manel Lahbib',
            isPublished: true,
       }
    }); 
    // course.set({ isPublished: true, author : "Mosh hamedani"});
    console.log(course);
}

updateCourse('5cacbddd9562d3707abd925b');