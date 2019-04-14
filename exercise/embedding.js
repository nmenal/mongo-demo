const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground')
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

const authorSchema = new mongoose.Schema({
  name: String,
  bio: String,
  website: String
});

const Author = mongoose.model('Author', authorSchema);

const Course = mongoose.model('Course', new mongoose.Schema({
  name: String,
  authors : [authorSchema]
}));

async function createCourse(name, authors) {
  const course = new Course({
    name, 
    authors
  }); 
  
  const result = await course.save();
  console.log(result);
}

async function updateAuthor(courseId) {
  const course = await Course.update({ _id: courseId },{
      $set: {
        'author.name': 'Manel Lahbib'
      }
  });
  console.log(course);
}

async function addAuthor(courseId,author) {
  const course = await Course.findById(courseId);
  course.authors.push(author);
  course.save();
}


async function removeAuthor(courseId,authorId) {
  const course = await Course.findById(courseId);
  const author = course.authors.id(authorId);
  author.remove();
  course.save();
}

async function listCourses() { 
  const courses = await Course.find();
  console.log(courses);
}

// createCourse('Node Course', new Author({ name: 'Mosh' }));
// createCourse('Node JS',[ 
//     new Author({name: 'Mosh'}),
//     new Author({name: 'Manel'})
//     ]);

// updateAuthor('5cb336a4e94c3f13f24313de');

// addAuthor('5cb3490794ee0d185b07c955',new Author({name: 'Mina'}));

removeAuthor('5cb3490794ee0d185b07c955','5cb3490794ee0d185b07c953')