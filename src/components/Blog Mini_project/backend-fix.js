// Backend Fix - Replace your backend code with this

require(`./Config`);
let express = require(`express`);
let mongoose = require(`mongoose`);
let { BlogsModel, AuthorModel } = require(`./Blogs`);
let cors = require("cors");
let multer = require("multer");
const path = require("path");

let app = express();
app.use(express.json());
app.use(cors());

// General blogs endpoint
app.get(`/get`, async (req, resp) => {
  let data = await BlogsModel.find().populate("author");
  resp.send(data);
});

// FIXED: More specific routes must come BEFORE generic routes
// Search by author name
app.get(`/get/author/:author`, async (req, resp) => {
  try {
    // First, find the author by name
    const author = await AuthorModel.findOne({ name: req.params.author });
    if (!author) {
      return resp.send([]);
    }
    // Then find blogs with that author's ObjectId
    let data = await BlogsModel.find({ author: author._id }).populate("author");
    resp.send(data);
  } catch (error) {
    resp.status(500).send({ error: error.message });
  }
});

// Search by genre
app.get(`/get/genre/:genre`, async (req, resp) => {
  let data = await BlogsModel.find({ genre: req.params.genre }).populate("author");
  resp.send(data);
});

// Search by title
app.get(`/get/title/:title`, async (req, resp) => {
  let data = await BlogsModel.find({ title: req.params.title }).populate("author");
  resp.send(data);
});

// Get blog by ID (generic route - must come after specific routes)
app.get(`/get/:id`, async (req, resp) => {
  let data = await BlogsModel.find({ _id: req.params.id }).populate("author");
  resp.send(data);
});

app.put(`/update/:id`, async (req, resp) => {
  let data = await BlogsModel.updateOne(
    { _id: new mongoose.Types.ObjectId(req.params.id) },
    { $set: req.body }
  );
  resp.send(data);
});

// ! multer setup (Uploading a file)
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "uploads"));
  },
  filename: function (req, file, cd) {
    const UniqueName = Date.now() + path.extname(file.originalname);
    cd(null, file.fieldname + "-" + UniqueName);
  },
});
const upload = multer({ storage });
app.use("/uploads", express.static("uploads"));

app.post(`/post`, upload.single("BlogProfile"), async (req, resp) => {
  const imagePath = req.file
    ? `http://localhost:7000/uploads/${req.file.filename}`
    : null;

  let data = new blogs({ ...req.body, image: imagePath });
  let response = await data.save();
  resp.send(response);
});

app.delete(`/delete/:id`, async (req, resp) => {
  let data = await BlogsModel.deleteOne({ _id: req.params.id });
  resp.send(data);
});

//! for Authors
app.get("/fetchAuthors", async (req, resp) => {
  let data = await AuthorModel.find();
  resp.send(data);
});

app.get("/fetchAuthorId/:id", async (req, resp) => {
  let data = await AuthorModel.find({ _id: req.params.id });
  resp.send(data);
});

app.put("/updateAuthor/:id", async (req, resp) => {
  let data = await AuthorModel.updateOne(
    { _id: new mongoose.Types.ObjectId(req.params.id) },
    { $set: req.body }
  );
  resp.send(data);
});

app.delete("/deleteAuthor/:id", async (req, resp) => {
  let data = await AuthorModel.deleteOne({ _id: req.params.id });
  resp.send(data);
});

app.post(
  "/addingNewAuthor",
  upload.single("AuthorProfile"),
  async (req, resp) => {
    const imgPath = req.file
      ? `http://localhost:7000/uploads/${req.file.filename}`
      : null;

    let data = new AuthorModel({ ...req.body, image: imgPath });
    let result = await data.save();
    resp.send(result);
  }
);

app.listen(7000);


