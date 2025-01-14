import Link from "next/link";

export default function App() {
    return (
        <div className="flex flex-col p-8 gap-4">
            <h1 className="text-3xl">Rank de Concursos</h1>

            <Link className="bg-blue-300 w-fit rounded hover:bg-blue-400 py-1 px-2 text-white" href="/concurso/create">Criar novo rank de concurso</Link>

            <Link className="bg-blue-300 w-fit rounded hover:bg-blue-400 py-1 px-2 text-white" href="/concurso">Ver Rankings Abertos</Link>
            
            <Link className="bg-blue-300 w-fit rounded hover:bg-blue-400 py-1 px-2 text-white" href="/concurso/busca">Ver Concursos Abertos</Link>
        </div>
    );
}
