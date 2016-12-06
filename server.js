// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;


// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));



// Star Wars Characters (DATA)
// =============================================================
var reservations = [{
  routeName: "reservations",
  name: "",
  phoneNumber: 9999999999,
  email: "",
  uniqueID: ""
}];

var waitlist = [{
  routeName: "waitlist",
  name: "",
  phoneNumber: 9999999999,
  email: "",
  uniqueID: ""
}];


// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/view", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/make", function(req, res) {
  res.sendFile(path.join(__dirname, "reservation.html"));
});


// Search for all reservations - provides JSON
app.get("/api/reservations", function(req, res) {
  var chosen = req.params.reservations;

  if (chosen) {
    console.log(chosen);

    for (var i = 0; i < reservations.length; i++) {
      if (chosen === reservations[i].routeName) {
        res.json(reservations[i]);
        return;
      }
    }

    res.json(false);
  }
  else {
    res.json(reservations);
  }
});

// Search for Specific reservation - provides JSON
app.get("/api/reservations/:reservations?", function(req, res) {
  var chosen = req.params.reservations;

  if (chosen) {
    console.log(chosen);

    for (var i = 0; i < reservations.length; i++) {
      if (chosen === reservations[i].routeName) {
        res.json(reservations[i]);
        return;
      }
    }

    res.json(false);
  }
  else {
    res.json(reservations);
  }
});

// Search for Specific waitlist - provides JSON
app.get("/api/waitlist/:waitlist?", function(req, res) {
  var chosen = req.params.waitlist;

  if (chosen) {
    console.log(chosen);

    for (var i = 0; i < waitlist.length; i++) {
      if (chosen === waitlist[i].routeName) {
        res.json(waitlist[i]);
        return;
      }
    }

    res.json(false);
  }
  else {
    res.json(waitlist);
  }
});

// // Create New Characters - takes in JSON input
// app.post("/api/new", function(req, res) {
//   var newcharacter = req.body;
//   newcharacter.routeName = newcharacter.name.replace(/\s+/g, "").toLowerCase();

//   console.log(newcharacter);

//   characters.push(newcharacter);

//   res.json(newcharacter);
// });

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
