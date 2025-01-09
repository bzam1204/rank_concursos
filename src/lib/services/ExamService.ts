import { ExamRepository } from "../Repositories/ExamRepository";

import { Exam } from "../models/Exam";

import { RankListDto } from "../dto/RankListDto";
import { ExamCreateDto } from "../dto/ExamCreateDto";
import { Rank } from "../models/Rank";
import { CreateRankDto } from "../dto/CreateRankDto";
import { RankRepository } from "../Repositories/RankRepository";

interface IExamService {
    get(id: string): Promise<Exam>;
    getAll(): Promise<Exam[]>;
    getRank(id: string): Promise<RankListDto>;
    create(examData: ExamCreateDto): Promise<Exam>;
    createRank(RankData: CreateRankDto): Promise<Rank>;
}

export const ExamService: IExamService = {
    get: async function (id) {
        const exam = await ExamRepository.get(id);

        if (!exam) {
            throw new Error("Not Found");
        }

        return exam;
    },
    getAll: async () => await ExamRepository.getAll(),
    getRank: async function (id) {
        const rank = await ExamRepository.getRank(id);

        if (!rank) throw new Error("Not Found");

        return rank;
    },
    create: async (examData) => await ExamRepository.create(examData),
    createRank: async function (rankData) {
        const rank = await RankRepository.create(rankData);

        if (!rank) throw new Error("Something Went Wrong");

        return rank;
    },
};
