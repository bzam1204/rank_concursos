'use client'

import { useActionState } from "react";

import { createRank } from "@/actions/createRank";

import { Button } from "../Button";

interface CreateRankFormProps {
    examId: string
}

export function CreateRankForm({ examId }: Readonly<CreateRankFormProps>) {
    const [state, action, pending] = useActionState(createRank, undefined);

    return (<>
        <form action={action} className="flex flex-col w-10/12 border-blue-400 md:w-fit md:flex-row border-2 rounded p-2 gap-2">
            <input hidden readOnly id="examId" name="examId" value={examId} />

            <input id="username" name="username" placeholder="Insira o Nome" className="border-blue-400 border-2 rounded indent-1" />

            <input id="score" name="score" placeholder="Insira a Pontuação..." className="border-blue-400 border-2 rounded indent-1" />

            <Button type="submit" className="bg-blue-400 px-2 py-1 text-white rounded">{pending ? "..." : "Adicionar Nota"}</Button>
        </form>
        {state?.errors?.score && <p className="text-red-400">{state.errors.score}</p>}
        {state?.errors?.username && <p className="text-red-400">{state.errors.username}</p>}
    </>
    )
}