import { CreateRankForm } from "@/components/ui/CreateRankForm";

import { ExamService } from "@/lib/services/ExamService"

interface PageProps {
    params: Promise<{ examId: string }>
}

export default async function Page({ params }: Readonly<PageProps>) {
    const { examId } = await params;

    const exam = await ExamService.get(examId);

    const { rank } = await ExamService.getRank(examId);

    return (
        <main className="w-full flex flex-col justify-start items-center gap-8">
            <h1 className="text-3xl">{exam.name}</h1>
            {rank.length > 0
                ? (<table>
                    <thead>
                        <tr>
                            <td>Colocação</td>
                            <td>Nome</td>
                            <td>Nota</td>
                        </tr>
                    </thead>
                    <tbody>
                        {rank.map((row, index) => <tr key={row.id}>
                            <td>{index + 1}º</td>
                            <td className="w-[200px]">{row.username}</td>
                            <td>{row.score}</td>
                        </tr>)}
                    </tbody>
                </table>)
                : "nenhuma nota ainda..."
            }
            <CreateRankForm examId={examId} />
        </main>
    )
}