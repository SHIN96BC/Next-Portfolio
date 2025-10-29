import { emailSchema, passwordSchema, submitSchema } from '@Src/shared/validations/model/auth-schema';
import { z } from 'zod';

export const loginSchema = z.object({
  ...emailSchema.shape,
  ...passwordSchema.shape,
  ...submitSchema.shape,
});

export type LoginSchemaType = z.infer<typeof loginSchema>;
