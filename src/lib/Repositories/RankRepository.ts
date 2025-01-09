import sql from "../db";
import { CreateRankDto } from "../dto/CreateRankDto";
import { Rank } from "../models/Rank";

interface IRankRepository {
    create(data: CreateRankDto): Promise<Rank>;
}

export const RankRepository: IRankRepository = {
    create: async function ({ username, score, examId }) {
        const rank = await sql<Rank[]>`
        INSERT INTO public."rank" (username, score, exam_id)
        VALUES (${username}, ${score}, ${examId}) 
        RETURNING *;`;
        
        return rank[0];
    },
};
