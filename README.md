# Stream Schedule Twitch Panel Extension

A Twitch Extenstion that enables a viewer to see a streamer's stream schedule

Clone Repository: `git clone https://github.com/garrettmmoore/stream-schedule-panel.git`

## Run locally with Twitch Developer Rig and test in an extension view

### Input the following under "Host your frontend files"

- stream-schedule-panel

### Input the following under "Backend files location"

- backend

### Input the following under "Run backend service locally with Dev Rig"

node index.js

### Create a new panel extension under "Extension Views"

- Click Create a New View
- Select Panel as view type
- Save

### See your application in the new panel extension view

- Click Run Back End
- Click Run Front End

### Troubleshooting

- Make sure the file path to your frontend and backend files are correct
- Refresh the application manifest (stream-schedule.json) is updated to reflect changes
- Refresh by going to Project Details -> Click Project Actions -> Click Refresh Manifest
- The manifest file can be in the same directory as your project

## Run locally without Twitch Developer Rig and test in your default browser

Start backend server (http://localhost:5000/) by running `yarn start`

Start frontend server in VSCode using the Live Server extension at http://localhost:8080/ to see the application in your default browser

## Test on your Twitch channel

- Clone the repository locally
- In the root project directory, run `yarn build` to zip the files to be uploaded to Twitch
- Navigate to https://dev.twitch.tv/console/extensions/
- Click create Extension and select "Panel" for "Type of Extension"
- Go to "Files"
- Click Upload Assets and upload your zip file so that Twitch can host the assets
- Go to "Asset Hosting" and change "https://localhost:8080/" to "http://localhost:8080"
- Set the Panel Viewer Path to panel.html
- Go to "Status" and make sure "Current Status" is set to "Local Test"
- Click "View on Twitch and Install" and then click "Install"
- On your "My Extensions" page, find your extension and click "Activate" -> "Set as Panel"
- Start your local backend server with `yarn start` at http://localhost:5000
- Start your local frontend server in VSCode using the Live Server extension at http://localhost:8080/
- Go to your channel and click the "About" tab to see your panel extension
