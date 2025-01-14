export type CebraspeConcursosDto = EventoGroup[];

type EventoGroup = {
    faseEvento: "Novos" | "Inscrições Abertas" | "Em Andamento" | "Encerrados";
    ordem: string;
    eventos: CebraspeEvento[];
};

export type CebraspeEvento = {
    aplicativos: null;
    arquivosEdital: null;
    arquivosGabarito: null;
    eventoAno: number;
    eventoCargos: null;
    eventoNomeAbreviado: string;
    eventoNomeCompleto: string | null;
    eventoSalarioMaximo: number;
    eventoStatus: "novos" | "em-andamento" | "inscricoes-abertas" | "encerrado";
    eventoTipo: "concursos";
    eventoTotalVagas: string;
    eventoURL: string;
    idEvento: number;
    isDBCriado: number;
    isInscricaoAberta: boolean;
    periodoInscricao: null;
    strEventoSalarioMaximo: string;
    tituloCardCargos: null;
    tituloCargos: null;
};
