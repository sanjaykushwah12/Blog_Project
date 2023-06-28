const express = require("express");

const connectDB = require("./db/connect_db");
const fileUpload = require("express-fileupload");
const cloudinary = require("cloudinary");
//const session = require('express-session')
const flash = require("connect-flash");
const session = require("express-session");
const MemoryStore = require("memorystore")(session);
const cookieParser = require("cookie-parser");



const AdminController = require("./controller/admin/AdminController");
const BlogController = require("./controller/admin/BlogController");
const CategoryController = require("./controller/admin/CategoryController");
const ContactController = require("./controller/admin/ContactController");
const FrontController = require("./controller/FrontController");
const AboutController = require("./controller/admin/AboutController");
const admin_auth = require("./middleware/auth");




// console.log(express)
const app = express();
const port = 3400;

const bodyParser = require("body-parser");


// get token
app.use(cookieParser());
// message

app.use(
  session({
    // secret: 'secret',
    // cookie: { maxAge: 60000 },
    // resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 86400000 },
    store: new MemoryStore({
      checkPeriod: 86400000, // prune expired entries every 24h
    }),
    resave: false,
    secret: "keyboard cat",
  })
);
app.use(flash());

// Mongo db connection
connectDB();

// setup EJS
app.set("view engine", "ejs");

app.use(fileUpload({ useTempFiles: true }));

// body parser
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.urlencoded({ extended: false }));

// static file path
app.use(express.static("public"));




// connect to controller by route
// front controller
app.get("/", FrontController.home);
app.get("/about", FrontController.about);
app.get("/contact", FrontController.contact);
app.get("/blog", FrontController.blog);
app.get("/login", FrontController.login);
app.get("/blogdetail/:id", FrontController.blogdetail);
app.post("/contactinsert", FrontController.contactinsert);
app.get("/register", FrontController.adminregister);
app.post("/adminregister", FrontController.admininsert);
app.post("/verify_login", FrontController.verify);
app.get("/logout", FrontController.logout);



// admin controller
app.get("/admin/dashboard", admin_auth, AdminController.Dashboard);

// admin blog controller
app.get("/admin/blogdisplay", admin_auth, BlogController.blogdisplay);
app.post("/bloginsert", admin_auth, BlogController.bloginsert1);
app.get("/admin/blogview/:id", admin_auth, BlogController.blogview);
app.get("/admin/blogedit/:id", admin_auth, BlogController.blogedit);
app.post("/blogupdate/:id", admin_auth, BlogController.blogupdate);
app.get("/admin/blogdelete/:id", admin_auth, BlogController.blogdelete);
// admin category controller
app.get("/admin/categorydisplay", admin_auth, CategoryController.category);
// admin contact controller
app.get("/admin/contactdisplay", admin_auth, ContactController.contact);
//app.get('/admin/contactdisplay/:id',ContactController.contactview)
// admin about controller
app.get("/admin/aboutdisplay", admin_auth, AboutController.about);
app.get("/admin/aboutedit/:id", admin_auth, AboutController.aboutedit);
app.post("/aboutupdate/:id", admin_auth, AboutController.aboutupdate);







// server create

app.listen(port, () => {
  console.log(`Server is running localhost: ${port}`);
});
