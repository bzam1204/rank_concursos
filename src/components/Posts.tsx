'use client';

import { use } from "react";

import Link from "next/link";

export function Posts({ posts }: Readonly<{ posts: Promise<{ id: string, title: string }[]> }>) {
    const postsList = use(posts);

    return (
        <ul className="flex flex-col gap-2 p-4">
            {postsList.map(post => <Link
                key={post.id}
                href={'/blog/' + post.id.toString()}
                className="flex bg-gray-300 max-w-[400px] rounded hover:bg-gray-100 py-1 px-2"
            >{post.title}
            </Link>)}
        </ul>
    )
}
