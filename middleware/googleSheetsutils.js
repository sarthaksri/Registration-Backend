const { google } = require('googleapis');
const fs = require('fs');
const util = require('util');
const readFileAsync = util.promisify(fs.readFile);

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];
const spreadsheetId = '1R-5HkBzjBKiQQL_zUmFvHXZDERlGEVH6DLuDvA9xPGQ';

// Function to authorize Google Sheets API
async function authorize() {
  try {
    const content = await readFileAsync('credentials.json');
    const credentials = JSON.parse(content);
    const { client_secret, client_id, redirect_uris } = credentials.installed;
    const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);
    const token = await readFileAsync('token.json');
    oAuth2Client.setCredentials(JSON.parse(token));
    return oAuth2Client;
  } catch (err) {
    console.error('Error authorizing Google Sheets API:', err);
    return null;
  }
}

// Function to write data to Google Sheets
async function writeToGoogleSheets(auth, data) {
  try {
    const sheets = google.sheets({ version: 'v4', auth });
    const values = data.map(item => [item.name, item.email, item.phoneNo, item.branch]);
    const resource = { values };
    const range = 'Sheet1!A2'; // Change the range as needed
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: 'RAW',
      resource,
    });
    console.log('Data written to Google Sheets successfully!');
  } catch (err) {
    console.error('Error writing data to Google Sheets:', err);
  }
}

module.exports = { authorize, writeToGoogleSheets };
