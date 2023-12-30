import * as z from "zod"

export const SignupValidation = z.object({
    name :z.string().min(2, {message : 'Too short!'}),
    username: z.string().min(2, {message : 'User should have at least 5 characters!'}),
    email: z.string().email(),
    password :z.string().min(8, {message : 'Password should have at least 8 characters!'}),
  });