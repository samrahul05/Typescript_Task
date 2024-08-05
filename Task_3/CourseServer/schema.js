const mongoose = require('mongoose');

const data = new mongoose.Schema({
    image: String,
    name: String,
    startDate:String,
    lessons:String,
    lessonsCompleted:String,
    duration:String,
    

});

module.exports = mongoose.model('CourseData', data);