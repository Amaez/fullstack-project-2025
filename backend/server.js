import express from "express";

const app = express();
const port = 5001;

// This is an endpoint! It combines a URL + an HTTP method to allow the client (user) to interact with a requested resource
// 200 is the HTTPS status code that indicates a non-create action was completed successfully
app.get("/api/notes", (req, res) => {
  res.status(200).send("You got 10 notes");
});

// The 201 status is specifically for POST requests because it means a new resource was created successfully
app.post("/api/notes", (req, res) => {
  res.status(201).json({ message: "Note created successfully" });
});

// The colon : indicates the following is dynamic, so the BE doesn't know what it will be until it's received (it's a placeholder for dynamic data)
// To research: could you use TS here to at least define what type of dynamic data is expected? Do URLs have data types or are they all just processed as strings?
app.put("/api/notes/:id", (req, res) => {
  res.status(200).json({ message: "Note updated successfully" });
});

app.delete("/api/notes/:id", (req, res) => {
  res.status(200).json({ message: "Note deleted successfully" });
});

app.listen(port, () => {
  console.log(`Server started on PORT: ${port}`);
});
