import { SearchExamsPanel } from "@/components/ui/SearchExamsPanel";
import { CebraspeBancaIntegrationService } from "@/lib/services/CebraspeBancaIntegrationService";
import { Suspense } from "react";

export default function Page() {
    const resource = CebraspeBancaIntegrationService.fetch();

    return (
        <main className="w-full flex flex-col items-center p-4 gap-8">
            <h1 className="text-3xl">Painel de Concursos</h1>
            <Suspense fallback="loading...">
                <SearchExamsPanel resource={resource} />
            </Suspense>
        </main>

    )
}