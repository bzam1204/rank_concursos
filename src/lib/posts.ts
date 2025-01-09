async function getPosts() {
    return (await fetch("https://jsonplaceholder.typicode.com/posts")).json();
}

async function getPost(id: string) {
    return (
        await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    ).json();
}

export const posts = {
    get: getPost,
    getAll: getPosts,
};
