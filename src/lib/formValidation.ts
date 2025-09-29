import { z } from 'zod';

// Security constants
const MAX_NAME_LENGTH = 100;
const MAX_EMAIL_LENGTH = 255;
const MAX_MESSAGE_LENGTH = 1000;
const MAX_USE_CASE_LENGTH = 500;

// Common validation schemas
export const waitlistSchema = z.object({
  name: z
    .string()
    .trim()
    .max(MAX_NAME_LENGTH, { message: "Name must be less than 100 characters" })
    .optional()
    .or(z.literal("")),
  email: z
    .string()
    .trim()
    .nonempty({ message: "Email is required" })
    .email({ message: "Please enter a valid email address" })
    .max(MAX_EMAIL_LENGTH, { message: "Email must be less than 255 characters" })
    .toLowerCase(),
  purpose: z
    .string()
    .trim()
    .nonempty({ message: "Please tell us how you plan to use Neura AI" })
    .max(MAX_USE_CASE_LENGTH, { message: "Purpose must be less than 500 characters" }),
  useCase: z
    .string()
    .trim()
    .max(MAX_USE_CASE_LENGTH, { message: "Use case must be less than 500 characters" })
    .optional(),
  marketingOptIn: z.boolean().optional().default(false),
});

export const finalCTASchema = z.object({
  name: z
    .string()
    .trim()
    .max(MAX_NAME_LENGTH, { message: "Name must be less than 100 characters" })
    .optional()
    .or(z.literal("")),
  email: z
    .string()
    .trim()
    .nonempty({ message: "Email is required" })
    .email({ message: "Please enter a valid email address" })
    .max(MAX_EMAIL_LENGTH, { message: "Email must be less than 255 characters" })
    .toLowerCase(),
  purpose: z
    .string()
    .trim()
    .nonempty({ message: "Please tell us how you plan to use Neura AI" })
    .max(MAX_USE_CASE_LENGTH, { message: "Purpose must be less than 500 characters" }),
});

export type WaitlistFormData = z.infer<typeof waitlistSchema>;
export type FinalCTAFormData = z.infer<typeof finalCTASchema>;

// Input sanitization helper
export const sanitizeInput = (input: string): string => {
  return input
    .replace(/[<>]/g, '') // Remove potential HTML tags
    .replace(/javascript:/gi, '') // Remove javascript: protocols
    .replace(/on\w+=/gi, '') // Remove event handlers
    .trim();
};

// Safe URL encoding for external services
export const safeEncodeURIComponent = (str: string): string => {
  try {
    return encodeURIComponent(sanitizeInput(str));
  } catch (error) {
    console.error('Error encoding URI component:', error);
    return '';
  }
};

// Validation helper with detailed error reporting
export const validateFormData = <T>(
  schema: z.ZodSchema<T>,
  data: unknown
): { success: true; data: T } | { success: false; errors: Record<string, string> } => {
  try {
    const result = schema.safeParse(data);
    
    if (result.success) {
      return { success: true, data: result.data };
    }
    
    const errors: Record<string, string> = {};
    result.error.errors.forEach((error) => {
      const path = error.path.join('.');
      errors[path] = error.message;
    });
    
    return { success: false, errors };
  } catch (error) {
    console.error('Validation error:', error);
    return { 
      success: false, 
      errors: { general: 'Validation failed. Please check your input.' } 
    };
  }
};