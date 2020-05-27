# Stream Schedule Twitch Panel Extension

A Twitch Extenstion that enables a viewer to see a streamer's stream schedule

## Run locally with Twitch Developer Rig

Input "Host your front-end files"

- stream-schedule-panel

Input "Back-end files location"

- backend

Input "Run back-end service locally with Dev Rig"

node index.js

Create a new panel extension under Extension Views

- Click Create a New View
- Select Panel as view type
- Save

See your application in the new panel extension view

- Click Run Back End
- Click Run Front End

Troubleshooting

- Make sure the file path to your front-end and back-end files are correct
- Refresh the application manifest (stream-schedule.json) is updated to reflect changes
- Refresh by going to Project Details -> Click Project Actions -> Click Refresh Manifest
- The manifest file can be in the same directory as your project

## Running locally without Twitch Developer Rig

Start Back-end server

```javascript
node backend/
```
