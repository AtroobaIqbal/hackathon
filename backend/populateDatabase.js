require('dotenv').config(); // Load environment variables

const mongoose = require('mongoose');
const Student = require('/models/Student');

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
        
        const students = [
            { name: 'John Doe', courses: ['Math', 'Science', 'History'] },
            { name: 'Jane Smith', courses: ['Literature', 'Math', 'Biology'] },
        ];
        
        return Student.insertMany(students);
    })
    .then(() => {
        console.log('Dummy data inserted');
        mongoose.connection.close();
    })
    .catch(err => {
        console.error('Error inserting dummy data', err);
    });
