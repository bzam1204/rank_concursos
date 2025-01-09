'use client'

import { useActionState } from "react";

import { Button } from "../Button";
import { createExam } from "@/actions/createExam";

export function CreateExamForm() {
    const [state, action, pending] = useActionState(createExam, undefined);

    return (
        <form action={action} className="w-10/12 md:w-2/5 p-2 flex gap-4 flex-col items-center">
            <div className="flex flex-col gap-2 w-full">
                <label htmlFor="name">Nome do Concurso</label>
                <input id="name" name="name" placeholder="Concurso da Polícia Federal - 2025" className="border px-1 py-1 rounded" />
            </div>
            {state?.message && <p className="text-green-400">{state.message}</p>}
            {state?.errors?.name && <p className="text-red-400">{state.errors.name}</p>}
            <Button type="submit" className="w-full bg-blue-400 px-2 py-1 text-white rounded">{pending ? "..." : "Criar Concurso"}</Button>
        </form>
    )
}