// Test script for Google Sheets integration
import dotenv from 'dotenv';
import { google } from 'googleapis';

dotenv.config();

// Load environment variables
const GOOGLE_SHEETS_ID = process.env.GOOGLE_SHEETS_ID;
const GOOGLE_SERVICE_ACCOUNT_EMAIL = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
const GOOGLE_PRIVATE_KEY = process.env.GOOGLE_PRIVATE_KEY;

// Check if environment variables are set
if (!GOOGLE_SHEETS_ID || !GOOGLE_SERVICE_ACCOUNT_EMAIL || !GOOGLE_PRIVATE_KEY) {
    console.error('Missing required environment variables. Please check your .env file.');
    console.error('Required variables: GOOGLE_SHEETS_ID, GOOGLE_SERVICE_ACCOUNT_EMAIL, GOOGLE_PRIVATE_KEY');
    process.exit(1);
}

// Create a JWT client
const auth = new google.auth.JWT(
    GOOGLE_SERVICE_ACCOUNT_EMAIL,
    null,
    GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    ['https://www.googleapis.com/auth/spreadsheets']
);

// Create a Google Sheets API client
const sheets = google.sheets({ version: 'v4', auth });

async function testGoogleSheetsConnection() {
    try {
        // Test reading from the sheet
        console.log('Testing Google Sheets connection...');
        console.log(`Attempting to read from sheet ID: ${GOOGLE_SHEETS_ID}`);

        const response = await sheets.spreadsheets.values.get({
            spreadsheetId: GOOGLE_SHEETS_ID,
            range: 'Sheet1!A1:E10', // Adjust range as needed
        });

        const rows = response.data.values;
        console.log('Successfully connected to Google Sheets!');
        console.log('Sample data from the sheet:');
        console.log(rows);

        // Test writing to the sheet
        console.log('\nTesting write operation...');
        const testData = [
            ['Test', 'Test@example.com', 'Test Subject', 'Test Message', new Date().toISOString()]
        ];

        await sheets.spreadsheets.values.append({
            spreadsheetId: GOOGLE_SHEETS_ID,
            range: 'Sheet1!A:E', // Adjust range as needed
            valueInputOption: 'USER_ENTERED',
            requestBody: {
                values: testData,
            },
        });

        console.log('Successfully wrote test data to Google Sheets!');
        console.log('Test completed successfully.');

    } catch (error) {
        console.error('Error testing Google Sheets connection:');
        console.error(error.message);
        if (error.response) {
            console.error('Response data:', error.response.data);
        }
        process.exit(1);
    }
}

// Run the test
testGoogleSheetsConnection();
