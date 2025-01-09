import postgres from "postgres";

const connectionString = process.env.DATABASE_URL ?? "postgresql://postgres:cJkmk9mZUW2mpAzC@db.hwjxdmlgszrqmqdggeuo.supabase.co:5432/postgres";
const sql = postgres(connectionString);

export default sql;
