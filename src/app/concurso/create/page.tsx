import { CreateExamForm } from "@/components/ui/CreateExamForm";

export default function page() {
    return (
        <main className="w-full flex justify-start items-center flex-col p-4 gap-6">
            <h1 className="text-3xl">Criar Concurso</h1>
            <CreateExamForm/>
        </main>
    )
}
