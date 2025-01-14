import { BancaUrl } from "../types/BancaUrl";

export function cebraspeUrl(): BancaUrl {
    const BASE_URL = "https://api.cebraspe.org.br";
    const concursos = BASE_URL + "/eventos/tipo/concursos";

    return {
        BASE_URL,
        paths: {
            concursos,
        },
    };
}
