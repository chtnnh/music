# Google Sheets Integration Setup Guide

This guide will walk you through setting up Google Sheets integration for your music artist website's contact form.

## Step 1: Create a Google Cloud Project

1. Go to the [Google Cloud Console](https://console.cloud.google.com/)
2. Click on the project dropdown at the top of the page and select "New Project"
3. Enter a name for your project (e.g., "Music Artist Website") and click "Create"
4. Wait for the project to be created and then select it from the dropdown

## Step 2: Enable the Google Sheets API

1. In the Google Cloud Console, navigate to "APIs & Services" > "Library"
2. Search for "Google Sheets API" and click on it
3. Click "Enable" to enable the API for your project

## Step 3: Create a Service Account

1. In the Google Cloud Console, navigate to "APIs & Services" > "Credentials"
2. Click "Create Credentials" and select "Service Account"
3. Enter a name for your service account (e.g., "Contact Form Service")
4. Click "Create and Continue"
5. For the "Role" dropdown, select "Project" > "Editor" (this gives the service account permission to edit your Google Sheet)
6. Click "Continue" and then "Done"
7. In the Credentials page, find your newly created service account and click on it
8. Go to the "Keys" tab and click "Add Key" > "Create new key"
9. Select "JSON" as the key type and click "Create"
10. The key file will be downloaded to your computer. Keep this file secure as it contains sensitive information.

## Step 4: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com/) and create a new spreadsheet
2. Rename the first sheet to "Contact Submissions" (or any name you prefer)
3. Add the following column headers in row 1:
   - A: Timestamp
   - B: Name
   - C: Email
   - D: Subject
   - E: Message
4. Format the headers (make them bold, etc.) as desired
5. Copy the spreadsheet ID from the URL. The URL will look like: `https://docs.google.com/spreadsheets/d/SPREADSHEET_ID/edit`
6. Share the spreadsheet with the service account email address (found in the service account details page)

## Step 5: Configure Your Project

1. Open the `.env` file in your project root
2. Replace the placeholder values with your actual credentials:
   - `GOOGLE_SHEETS_ID`: The spreadsheet ID you copied in step 4
   - `GOOGLE_SERVICE_ACCOUNT_EMAIL`: The service account email address
   - `GOOGLE_PRIVATE_KEY`: The private key from the JSON file you downloaded in step 3
     - Note: The private key should be enclosed in double quotes and should include the `\n` characters

Example:

```sh
GOOGLE_SHEETS_ID=1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms
GOOGLE_SERVICE_ACCOUNT_EMAIL=contact-form-service@your-project-id.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC9QFi7...\n-----END PRIVATE KEY-----\n"
```

## Step 6: Test the Integration

1. Start your development server with `npm run dev`
2. Fill out and submit the contact form on your website
3. Check your Google Sheet to verify that the submission was recorded

## Troubleshooting

If you encounter issues with the Google Sheets integration:

1. Check the server logs for error messages
2. Verify that your environment variables are set correctly
3. Ensure that the service account has permission to edit the Google Sheet
4. Make sure the Google Sheets API is enabled for your project

## Security Considerations

- Never commit your `.env` file or service account key to version control
- Consider using a more restricted role for your service account if you don't need full editor access
- Regularly rotate your service account keys for better security
