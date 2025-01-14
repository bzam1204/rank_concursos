import { cebraspeUrl } from "../url/cebraspeUrl";

import { CebraspeConcursosDto } from "../dto/CebraspeConcursosDto";

interface IBancaIntegrationService<T> {
    fetch(): Promise<T>;
}

export const CebraspeBancaIntegrationService: IBancaIntegrationService<CebraspeConcursosDto> =
    {
        fetch: async () => {
            const urls = cebraspeUrl();

            const response = await fetch(urls.paths.concursos);
            const items = await response.json();
            console.log({ response, items });
            return items;
        },
    };
