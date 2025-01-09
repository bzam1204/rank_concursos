import { User } from "../models/User";

import sql from "../db";
import { UserCreateDto } from "../dto/UserCreateDto";

interface IUserRepository {
    get(id: string): Promise<User | null>;
    getAll(): Promise<User[]>;
    create(user: UserCreateDto): Promise<User>;
}

export const UserRepository: IUserRepository = {
    get: async function (id: string) {
        const [user]: [User?] =
            await sql`SELECT * FROM public."user" WHERE id = ${id};`;

        if (!user) {
            throw new Error("Not Found");
        }

        return user;
    },
    getAll: async () => await sql<User[]>`SELECT * FROM public."user";`,
    create: async function ({
        email,
        username,
        full_name,
        password_hash,
    }: UserCreateDto) {
        const alreadyExists = !!(await sql<
            User[]
        >`SELECT * FROM public."user" WHERE email=${email} OR username=${username};`);

        if (alreadyExists) {
            throw new Error(
                "A user with that email or username already exists"
            );
        }

        const [createdUser]: [User?] = await sql`
        INSERT INTO public."user" (username, email, password_hash, full_name) 
        VALUES (${username}, ${email}, ${password_hash}, ${full_name});`;

        return createdUser;
    },
};
