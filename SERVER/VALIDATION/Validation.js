const {z}=require('zod');

const RegisterSchema = z.object({
    username: z
      .string()
      .trim() 
      .min(3, { message: "Username must be at least 3 characters long" })
      .max(200, { message: "Username cannot exceed 200 characters" })
      .nonempty({ message: "Username is required" }),
    email: z
      .string()
      .email({ message: "Invalid email address" })
      .trim() 
      .nonempty({ message: "Email is required" }),
    phone: z
      .string()
      .min(10, { message: "phone must be at least 10 characters long" })
      .trim()
      .nonempty({ message: "Phone number is required" }),
    password: z
      .string()
      .trim() 
      .min(8, { message: "Password must be at least 8 characters long" })
      .nonempty({ message: "Password is required" }),
      isAdmin: z.boolean().default(false),
      });

  const loginSchema = z.object({
    email: z
      .string()
      .email({ message: "Invalid email address" })
      .trim() 
      .nonempty({ message: "Email is required" }),
 
      password: z
      .string()
      .trim() 
      .min(8, { message: "Password must be at least 8 characters long" })
      .nonempty({ message: "Password is required" }),
})
module.exports = { RegisterSchema, loginSchema};
