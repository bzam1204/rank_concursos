"use server";

import { ExamService } from "@/lib/services/ExamService";
import { revalidatePath } from "next/cache";
import { z } from "zod";

type FormState =
    | {
          errors?: {
              username?: string[];
              score?: string[];
          };
          message?: string;
      }
    | undefined;

const createRankSchema = z.object({
    score: z.coerce.number(),
    examId: z.string(),
    username: z
        .string()
        .min(2, { message: "O nome deve ter mais de 2 characteres" })
        .max(1000, { message: "O nome pode ter, no máximo, 1000 caracteres" })
        .trim(),
});

export async function createRank(state: FormState, formData: FormData) {
    const validatedFields = createRankSchema.safeParse({
        score: formData.get("score"),
        examId: formData.get("examId"),
        username: formData.get("username"),
    });

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
        };
    }

    const rank = await ExamService.createRank(validatedFields.data);

    if (rank) revalidatePath("/concurso/[examId]");
}
