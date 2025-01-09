import { Suspense } from "react";

import { Posts } from "@/components/Posts";

import { posts } from "lib/posts";

export default async function page() {
    const allPosts = posts.getAll();

    return (
        <Suspense fallback={'loading...'}>
            <Posts posts={allPosts} />
        </Suspense>
    );
}

