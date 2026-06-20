import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
  registerSchema,
  type RegisterFormData,
} from "../model/register.schema";

export function useRegisterForm() {
  return useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),

    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },

    mode: "onBlur",
  });
}