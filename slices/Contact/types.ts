import { z } from "zod";
import { sendEmailSchema } from "./sendEmailSchema";

export type ContactFormData = z.infer<typeof sendEmailSchema>