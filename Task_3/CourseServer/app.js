const express = require('express');
const app = express();
const cloudinary = require('cloudinary').v2;
const multer = require('multer');
const mongoose = require('mongoose');
const courseschema = require('./schema');
const cors =require('cors');

cloudinary.config({
    cloud_name: 'dkfqlbmbw',
    api_key: '156486712375679',
    api_secret: 'vz4LKcuFYAiBNbX_H6-i_p1hus4',
    secure: true,
});

mongoose.connect("mongodb+srv://SAM_RAHUL:samrahul123@cluster0.hqoru8l.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(() => {
    console.log('Mongodb is connected');
}).catch(() => {
    console.log('Mongodb is not Connected ');
});


app.use(cors())
app.use(express.urlencoded({ extended: false }));
app.use(express.json())

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });



app.post('/upload', upload.single('image'), async (req, res) => {
    if (!req.file) {
        return res.status(400).json({ message: 'No image file provided' });
    }

    cloudinary.uploader.upload_stream({ resource_type: 'image' }, async (error, result) => {
        if (error) {
            return res.status(500).json({ error: 'Error uploading image to Cloudinary' });
        }

        const dataDetails = new courseschema({ 
            
            image: result.url,
            name: req.body.name,
            startDate: req.body.startDate,
            lessons: req.body.lessons,
            lessonsCompleted: req.body.lessonsCompleted,
            duration: req.body.duration,
            

        });
        await dataDetails.save();

        res.json({ 
            image: result.url,
            name: req.body.name,
            startDate: req.body.startDate,
            lessons: req.body.lessons,
            lessonsCompleted: req.body.lessonsCompleted,
            duration: req.body.duration,
         });
    }).end(req.file.buffer);
});



app.get('/courseData', async (req, res) => {
    try {
        const data = await courseschema.find({});
        res.json(data);
    } catch (err) {
        console.error('Error fetching course data:', err);
        res.status(500).json({ error: 'Failed to fetch course data' });
    }
});

const PORT = 6060;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});