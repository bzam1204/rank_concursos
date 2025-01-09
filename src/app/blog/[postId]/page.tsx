import { posts } from "lib/posts";

async function generateStaticParams() {
    let paths: { id: string }[] = [];
    const allPosts = await posts.getAll();

    paths = allPosts.map((post: { id: string }) => { postId: post.id })

    return paths;
}

interface Props {
    params: { postId: string }
}

export default async function page({ params }: Props) {
    const parameters = await params;

    const post = await posts.get(parameters.postId);

    return <div>{post.title}</div>;
}
