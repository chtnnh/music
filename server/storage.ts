import { users, type User, type InsertUser, type ContactFormSubmission, type InsertContactForm, contactFormSubmissions } from "@shared/schema";
import { google } from 'googleapis';

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  submitContactForm(formData: InsertContactForm): Promise<ContactFormSubmission>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contactForms: Map<number, ContactFormSubmission>;
  currentUserId: number;
  currentContactFormId: number;

  constructor() {
    this.users = new Map();
    this.contactForms = new Map();
    this.currentUserId = 1;
    this.currentContactFormId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async submitContactForm(formData: InsertContactForm): Promise<ContactFormSubmission> {
    const id = this.currentContactFormId++;
    const submission: ContactFormSubmission = { 
      ...formData, 
      id,
      submittedAt: new Date().toISOString()
    };
    
    this.contactForms.set(id, submission);
    
    try {
      // Also submit to Google Sheets if environment variables are set
      await this.submitToGoogleSheets(submission);
    } catch (error) {
      console.error('Failed to submit to Google Sheets:', error);
      // Still continue with the local storage version
    }
    
    return submission;
  }
  
  private async submitToGoogleSheets(formData: ContactFormSubmission): Promise<void> {
    // Check for required environment variables
    const spreadsheetId = process.env.GOOGLE_SHEETS_ID;
    const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
    const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n');
    
    if (!spreadsheetId || !clientEmail || !privateKey) {
      console.warn('Google Sheets environment variables not set, skipping submission');
      return;
    }
    
    try {
      // Setup the Google Sheets API
      const auth = new google.auth.JWT({
        email: clientEmail,
        key: privateKey,
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
      });
      
      const sheets = google.sheets({ version: 'v4', auth });
      
      // Prepare the row data
      const values = [
        [
          formData.submittedAt,
          formData.name,
          formData.email,
          formData.subject,
          formData.message
        ]
      ];
      
      // Append the data to the sheet
      await sheets.spreadsheets.values.append({
        spreadsheetId,
        range: 'Sheet1!A:E', // Assuming columns A-E are for timestamp, name, email, subject, message
        valueInputOption: 'RAW',
        requestBody: {
          values,
        },
      });
      
      console.log('Form submission saved to Google Sheets');
    } catch (error) {
      console.error('Error submitting to Google Sheets:', error);
      throw error;
    }
  }
}

export const storage = new MemStorage();
