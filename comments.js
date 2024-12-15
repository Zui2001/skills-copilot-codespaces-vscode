// create a wev server

// 1. Require express
const express = require("express");
const app = express();

// 2. Require path
const path = require("path");

// 3. Require fs
const fs = require("fs");

// 4. Require body-parser
const bodyParser = require("body-parser");

// 5. Require uuid
const { v4: uuidv4 } = require("uuid");

// 6. Require method-override
const methodOverride = require("method-override");

// 7. Set the view engine
app.set("view engine", "ejs");

// 8. Set the views path
app.set("views", path.join(__dirname, "views"));

// 9. Use body-parser
app.use(bodyParser.urlencoded({ extended: true }));

// 10. Use method-override
app.use(methodOverride("_method"));

// 11. Create a comments array
const comments = [];

// 12. Create a route to the home page
app.get("/", (req, res) => {
	res.render("home");
});

// 13. Create a route to the comments page
app.get("/comments", (req, res) => {
	res.render("comments/index", { comments });
});

// 14. Create a route to the new comment page
app.get("/comments/new", (req, res) => {
	res.render("comments/new");
});

// 15. Create a route to create a comment
app.post("/comments", (req, res) => {
	const { username, comment } = req.body;
	comments.push({ id: uuidv4(), username, comment });
	fs.writeFileSync("comments.json", JSON.stringify(comments));
	res.redirect("/comments");
});

// 16. Create a route to the edit comment page
app.get("/comments/:id/edit", (req, res) => {
	const { id } = req.params;
	const comment = comments.find((c) => c.id === id);
	if (!comment) {
		return res.send("Comment not found");
	}
	res.render("comments/edit", { comment });
});

// 17. Create a route to update a
app.patch("/comments/:id", (req, res) => {
	const { id } = req.params;
	const { comment: newComment } = req.body;
	const comment = comments.find((c) => c.id === id);
	if (!comment) {
		return res.send("Comment not found");
	}
	comment.comment = newComment;
	fs.writeFileSync("comments.json", JSON.stringify(comments));
	res.redirect("/comments");
});

//
