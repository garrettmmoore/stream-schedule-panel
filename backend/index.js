const express = require("express");
const cors = require("cors");
const getCal = require("node-ical");
const striptags = require("striptags");

const app = new express();

app.use(cors());

app.get("/test", (_, res) => res.json({ boop: true }));

app.get("/", (req, res) => {
  const ical = req.query.ical;

  getCal.fromURL(ical, {}, (error, result) => {
    if (error) {
      res.sendStatus(500);
      return;
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
    return;
  });
});

app.listen(5000, () => console.log(`App listening at http://localhost:5000`));
