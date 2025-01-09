'use server'

import { SignupFormSchema, FormState } from '@/lib/definitions'

export async function signup(state: FormState, formData: FormData) {
    // validate data from fields

    const validatedFields = SignupFormSchema.safeParse({
        name: formData.get('name'),
        email: formData.get('email'),
        password: formData.get('password'),
    })

    // If any form fields are invalid, return early
    if (!validatedFields.success) {

        return {
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }

    const { name, email, password } = validatedFields.data;

    
}
