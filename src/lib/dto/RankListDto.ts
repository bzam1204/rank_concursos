import { Rank } from "../models/Rank";

export type RankListDto = {
    examId: string;
    rank: Rank[];
};
