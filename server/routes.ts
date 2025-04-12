import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactFormSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // Define API routes with /api prefix
  app.post('/api/contact', async (req: Request, res: Response) => {
    try {
      // Validate the request body against our schema
      const validatedData = insertContactFormSchema.parse(req.body);
      
      // Submit the form data
      const result = await storage.submitContactForm(validatedData);
      
      // Return success response
      return res.status(200).json({
        success: true,
        message: 'Form submitted successfully',
        data: result
      });
    } catch (error) {
      if (error instanceof Error) {
        // If it's a validation error, return a readable message
        if (error.name === 'ZodError') {
          const validationError = fromZodError(error);
          return res.status(400).json({
            success: false,
            message: validationError.message
          });
        }
        
        // Generic error handling
        console.error('Contact form submission error:', error);
        return res.status(500).json({
          success: false,
          message: 'An unexpected error occurred while processing your request'
        });
      }
      
      // Fallback error response
      return res.status(500).json({
        success: false,
        message: 'Unknown error occurred'
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
