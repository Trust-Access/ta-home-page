'use server';

import { z } from 'zod';

const DemoFormSchema = z.object({
  firstName: z.string().min(1, 'Required'),
  lastName: z.string().min(1, 'Required'),
  email: z.string().email('Invalid email'),
  phone: z.string().min(1, 'Required'),
  company: z.string().min(1, 'Required'),
  employees: z.string().min(1, 'Required'),
  country: z.string().min(1, 'Required'),
  message: z.string().optional(),
  source: z.string().min(1, 'Required'),
  terms: z.string().refine((val) => val === 'on', {
    message: 'You must agree to the terms',
  }),
});

export type DemoFormState = {
  errors?: Record<string, string[]>;
  success?: boolean;
};

export async function submitDemo(
  prevState: DemoFormState,
  formData: FormData
): Promise<DemoFormState> {
  const data = {
    firstName: formData.get('firstName'),
    lastName: formData.get('lastName'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    company: formData.get('company'),
    employees: formData.get('employees'),
    country: formData.get('country'),
    message: formData.get('message'),
    source: formData.get('source'),
    terms: formData.get('terms'),
  };

  const parsed = DemoFormSchema.safeParse(data);

  if (!parsed.success) {
    return {
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  console.log('Demo request:', parsed.data);
  return { success: true };
}

