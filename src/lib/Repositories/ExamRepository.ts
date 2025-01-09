import sql from "../db";

import { Exam } from "../models/Exam";
import { Rank } from "../models/Rank";

import { RankListDto } from "../dto/RankListDto";
import { ExamCreateDto } from "../dto/ExamCreateDto";

interface IExamRepository {
    get(id: string): Promise<Exam | null>;
    getAll(): Promise<Exam[]>;
    getRank(id: string): Promise<RankListDto | null>;
    create(examData: ExamCreateDto): Promise<Exam>;
}

export const ExamRepository: IExamRepository = {
    get: async function (id) {
        const [exam]: [Exam?] =
            await sql`SELECT * FROM public.exam WHERE id = ${id}`;

        if (!exam) {
            throw new Error("Not Found");
        }

        return exam;
    },
    getAll: async function () {
        const exams = await sql<Exam[]>`SELECT * FROM public."exam" ORDER BY name ASC;`;

        return exams ?? [];
    },
    getRank: async function (id) {
        const rankList = await sql<Rank[]>`SELECT * FROM public."rank" WHERE exam_id=${id} ORDER BY score DESC;`;
        return { examId: id, rank: rankList ?? [] } as RankListDto;
    },
    create: async function ({ name }) {
        const exam = await sql<Exam[]>`
        INSERT INTO public."exam" (name)
        VALUES (${name})
        RETURNING *;`;

        return exam[0];
    },
};
