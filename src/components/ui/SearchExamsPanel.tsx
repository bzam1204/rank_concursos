'use client';

import { CebraspeConcursosDto, CebraspeEvento } from "@/lib/dto/CebraspeConcursosDto";
import Link from "next/link";
import { use, useMemo, useState } from "react";

interface SearchExamsPanelProps<T> {
    resource: Promise<T>
}

export function SearchExamsPanel({ resource }: Readonly<SearchExamsPanelProps<CebraspeConcursosDto>>) {
    const res = use(resource);

    let items: CebraspeEvento[] = []

    for (const list of res) {
        items = [...items, ...list.eventos];
    }

    const [search, setSearch] = useState('');

    const [filtered, setFiltered] = useState(items);
    const [hasFilter, setHasFilter] = useState(false);

    const allStatus = items.map(p => p.eventoStatus);

    const options = useMemo(() => new Set(allStatus), [allStatus])

    const renderList = (arr: CebraspeEvento[]) => (
        <>{arr.length > 0
            ? arr.map(item => (
                <Link key={item.idEvento + item.eventoNomeAbreviado + item.eventoURL} href={`https://www.cebraspe.org.br/concursos/${item.eventoURL}`}>
                    <div className="bg-blue-400 w-full rounded hover:bg-blue-500 py-1 px-2 text-white">{item.eventoNomeAbreviado}</div>
                </Link>
            ))
            : (<p>Nenhum Concurso Aberto</p>)}
        </>
    )

    return (
        <div className="flex flex-col gap-1 w-10/12 md:w-2/5">
            <div className="flex gap-2 justify-between">
                <input id="search" name="search" placeholder="buscar concurso" value={search} onChange={(e) => {
                    const value = e.target.value;

                    setSearch(value)

                    if (value !== '') {
                        setHasFilter(true)
                        setFiltered(items.filter(p => p.eventoNomeAbreviado.toLowerCase().includes(search.toLowerCase())))
                    }
                    else {
                        setFiltered(items);
                        setHasFilter(false);
                    }


                }} className="border-blue-400 border-2 rounded indent-1" />
                <select name="status" defaultValue="Label" onChange={(e) => {
                    const value = e.target.value;
                    const list = value === "*"
                        ? items
                        : items.filter(p => p.eventoStatus === value);

                    if (value !== '*') {
                        setHasFilter(true)
                    }
                    else {
                        setHasFilter(false);
                    }

                    setFiltered(list)
                }}>
                    <option value="*">Todos</option>
                    {Array.from(options).map(opt => <option key={opt}>{opt}</option>)}
                </select>
            </div>
            {hasFilter
                ? renderList(filtered)
                : Array.from(options).map(opt => (<div key={opt}>
                    <h1>{opt}</h1>
                    <div className="flex flex-col gap-2">
                        {filtered.filter(p => p.eventoStatus === opt).length > 0
                            ? (renderList(filtered.filter(p => p.eventoStatus === opt)))
                            : (<p>Nenhum Concurso Aberto</p>)
                        }
                    </div>
                </div>))
            }
        </div >
    );
}


