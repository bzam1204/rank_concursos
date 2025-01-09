import { ExamSearchList } from "@/components/ui/ExamSearchList";
import { ExamService } from "@/lib/services/ExamService";

export default async function page() {
    const exams = ExamService.getAll();

    return (

        <main className="w-full flex justify-start items-center flex-col p-4 gap-8">
            <h1 className="text-3xl">Concursos abertos</h1>
            <ExamSearchList getExams={exams}/>
        </main>

    )
}