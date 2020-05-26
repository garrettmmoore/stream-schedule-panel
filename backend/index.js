const express = require("express");
const cors = require("cors");
const getCal = require("node-ical");
const dotenv = require("dotenv");
const striptags = require("striptags");

const app = new express();
dotenv.config();

app.use(cors());

const port = 3000;

app.get("/", (req, res) => {
  const ical = req.query.ical;

  getCal.fromURL(ical, {}, (error, result) => {
    if (error) {
      res.sendStatus(500);
    }

    const events = Object.values(result);

    const sorted = events
      .filter((event) => event.end.getTime() > Date.now())
      .sort((a, b) => a.start.getTime() - b.start.getTime())
      .map((event) => ({
        ...event,
        description: striptags(event.description),
      }));

    res.json(sorted);
  });
});

app.listen(port, () =>
  console.log(`App listening at http://localhost:${port}`)
);
