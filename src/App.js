fetch(
  "http://localhost:5000?ical=https://calendar.google.com/calendar/ical/11quhcpcke61s9r7cah9htaafo%40group.calendar.google.com/public/basic.ics"
)
  .then((res) => res.json())
  .then((res) => {
    const events = Object.values(res);

    const eventList = events.map((event) => {
      return {
        id: event.uid,
        title: event.summary,
        date: new Date(event.start),
        description: event.description,
      };
    });

    if ("content" in document.createElement("template")) {
      const list = document.querySelector("#events");
      const template = document.querySelector("#event-details");

      eventList.forEach((event) => {
        const el = template.content.cloneNode(true);
        const title = el.querySelector("h2");
        const time = el.querySelector("time");
        const description = el.querySelector(".description");

        title.innerText = event.title;
        time.innerText = event.date.toLocaleDateString("en-US");
        time.setAttribute("datetime", event.date.toISOString());
        description.innerText = event.description;
        list.appendChild(el);
      });

      document.getElementById("loading").remove();
    }
  });
