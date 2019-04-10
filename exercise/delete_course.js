const Course = require('./course');

async function removeCourse(id) {
    const result = await Course.deleteOne({_id:id})
    console.log(result);
}

removeCourse('5cacbddd9562d3707abd925b');