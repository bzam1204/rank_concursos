'use server'

import { CreateExamSchema, FormState } from "@/lib/definitions";
import { ExamService } from "@/lib/services/ExamService";
import { redirect } from "next/navigation";

export async function createExam(state: FormState, formData: FormData) {
    const validatedFields = CreateExamSchema.safeParse({
        name: formData.get('name')
    })

    if (!validatedFields.success) {
        return { errors: validatedFields.error.flatten().fieldErrors }
    }

    const exam = await ExamService.create(validatedFields.data);

    if (exam) redirect(`/concurso/${exam.id}`)

    throw new Error('algo deu errado');
}