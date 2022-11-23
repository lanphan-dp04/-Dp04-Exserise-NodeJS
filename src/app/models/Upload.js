require("dotenv").config();
const fs = require("fs");
const path = require("path");
const { google } = require("googleapis");
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;
const REFRESH_TOKEN = process.env.REFRESH_TOKEN;
const ID_GOOGLE_DRIVE = process.env.ID_GOOGLE_DRIVE;
const oauth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);
oauth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });
const drive = google.drive({
  version: "v3",
  auth: oauth2Client,
});
module.exports = {
  uploadFile: async () => {
    try {
      const createFile = await drive.files.create({
        resource: {
          mimeType: "image/jpg",
          name: `basic.jpg`,
          //parents: ['1CAWLRUwVDH2nBFCO3j6M7juED-pY8Puy']
        },
        media: {
          mimeType: "img/jpg",
          body: fs.createReadStream(
            path.join(__dirname, "../../public/asset/logo-st.jpg")
          ),
        },
      });
      console.log(createFile.data);
    } catch (error) {
      console.log(error);
    }
  },
};
