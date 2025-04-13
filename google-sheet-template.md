# Google Sheet Template for Contact Form Submissions

Below is a template for setting up your Google Sheet to receive contact form submissions.

## Sheet Structure

Create a new Google Sheet with the following structure:

| Timestamp | Name | Email | Subject | Message |
|-----------|------|-------|---------|---------|
| 2023-06-15T14:30:45.123Z | John Doe | john@example.com | Booking Inquiry | I would like to book you for an event... |
| 2023-06-16T09:15:22.456Z | Jane Smith | jane@example.com | Collaboration | Let's work together on a project... |

## Formatting Recommendations

1. **Headers Row**:
   - Make the headers row bold
   - Freeze the headers row (View > Freeze > 1 row)
   - Use a light background color to distinguish it

2. **Data Formatting**:
   - Set the Timestamp column to Date/Time format
   - Set text wrapping for the Message column to handle long messages

3. **Additional Features**:
   - Add filters to each column for easy sorting and filtering
   - Create a summary sheet that counts submissions by subject
   - Set up email notifications for new submissions (Tools > Notification rules)

## Example Formulas

### Count submissions by subject:
```
=COUNTIF(Sheet1!D:D, "Booking Inquiry")
```

### Count total submissions:
```
=COUNTA(Sheet1!A:A) - 1
```

### Average response time (if you add a "Responded At" column):
```
=AVERAGE(Sheet1!F:F - Sheet1!A:A)
```

## Sharing Settings

1. Share the sheet with your service account email (with Editor access)
2. Consider sharing a view-only version with team members who need to see submissions but shouldn't edit them
3. Disable link sharing to prevent unauthorized access

## Backup Recommendations

1. Set up automatic backups using Google Apps Script
2. Export the sheet periodically as CSV or Excel files
3. Consider using a third-party backup solution for additional security 