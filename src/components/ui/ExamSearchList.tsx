'use client'

import { Exam } from "@/lib/models/Exam"
import Link from "next/link";
import { use, useEffect, useState } from "react"

interface ExamSearchListProps {
    getExams: Promise<Exam[]>
}

export function ExamSearchList({ getExams }: Readonly<ExamSearchListProps>) {
    const exams = use(getExams);

    const [search, setSearch] = useState('');

    const [filtered, setFiltered] = useState(exams);

    useEffect(() => setFiltered(exams.filter(p => p.name.toLowerCase().includes(search.toLowerCase()))), [search])



    return (
        <div className="flex flex-col gap-1 w-10/12 md:w-2/5">
            <input id="search" name="search" placeholder="buscar concurso" value={search} onChange={(e) => setSearch(e.target.value)} className="border-blue-400 border-2 rounded indent-1" />
            {filtered.length > 0
                ? (filtered.map(exam => (
                    <Link key={exam.id} href={`/concurso/${exam.id}`}>
                        <div className="bg-blue-400 w-full rounded hover:bg-blue-500 py-1 px-2 text-white">{exam.name}</div>
                    </Link>
                )))
                : (<p>"Nenhum Concurso Aberto"</p>)
            }
        </div>
    )
}