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

Start Back-end server (http://localhost:5000/)

```javascript
node backend/
```

Start Front-end server in VSCode using the Live Server extension to spin up a server at http://localhost:8080/ to see the application in your default browser

## Test on Twitch

- Install repo locally and run yarn build

```javascript
yarn build
```

- Zip the files in the /build directory
- Go to https://dev.twitch.tv/console/extensions/
- Click create Extension and select "Panel" for "Type of Extension"
- Go to "Files"
- Click Upload Assets and upload your zip file so that Twitch can host the assets
- Go to "Asset Hosting" and change "https://localhost:8080/" to "http://localhost:8080"
- Set the Panel Viewer Path to panel.html
- Go to "Status" and make sure "Current Status" is set to "Local Test"
- Click "View on Twitch and Install" and then click install
- On your "My Extensions" page, find your extension and click Activate -> Set as Panel
- Start your local backend server with `yarn start` at http://localhost:5000
- Start Front-end server in VSCode using the Live Server extension at http://localhost:8080/
- Go to your channel and click the "About" tab to see your panel extension
