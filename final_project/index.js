const express = require("express");
const jwt = require("jsonwebtoken");
const session = require("express-session")
const customer_routes = require("./router/auth_users.js").authenticated;
const genl_routes = require("./router/general.js").general;
const { hash_key } = require("./router/auth_users.js");

const customer_secret = "customer_fingerprint";

const app = express();

app.use(express.json());

app.use("/customer",session({secret: customer_secret, resave: true, saveUninitialized: true}))

app.use("/customer/auth/*", function auth(req, res, next) {
    // Check if user is logged in and has valid access token
    if (req.session.authorization) {
        let token = req.session.authorization['accessToken'];
        // Verify JWT token
        jwt.verify(token, customer_secret, (err, user) => {
            if (!err) {
                req.user = user;
                next(); // Proceed to the next middleware
            } else return res.status(403).json({ message: "User not authenticated" });
        });
    } else {
        return res.status(403).json({ message: "User not logged in" });
    }
});

const PORT =5000;

app.use("/customer", customer_routes);
app.use("/", genl_routes);

app.listen(PORT,()=>console.log("Server is running"));
