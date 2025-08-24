// Configure Multer for file storage
const multer = require('multer');
const path = require('path');
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploaded_Img/');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const ext = path.extname(file.originalname);
    cb(null, file.fieldname + '-' + uniqueSuffix + ext);
  }
});
const upload = multer({ storage });



// Define the exported middleware function for image upload
exports.uploadDishImage = upload.single('dishImage');


exports.setupMenu = (req, res) => {
  // For uploaded file storage
console.log(`Server trying to save file `);



// POST endpoint definition
// Save uploaded dish image and return its URL
if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }
  
  // For uploaded file storage
console.log(`Server trying to create imageUrl `);

  const protocol = req.protocol;              // 'http' or 'https'
  const hostWithPort = req.get('host');       // e.g., 'localhost:3000'

  const fullHost = `${protocol}://${hostWithPort}`;
  

  const imageUrl = `${fullHost}/uploaded_Img/${req.file.filename}`; // e.g., 'http://localhost:3000/uploaded_Img/filename.jpg'


  res.json({ imageUrl });


};




