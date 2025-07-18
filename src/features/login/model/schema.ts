import { z } from 'zod';
import {
  emailSchema,
  passwordSchema,
  submitSchema,
} from '@Src/shared/validations/model/auth-schema';

export const loginSchema = z.object({
  ...emailSchema.shape,
  ...passwordSchema.shape,
  ...submitSchema.shape,
});

export type LoginSchemaType = z.infer<typeof loginSchema>;
