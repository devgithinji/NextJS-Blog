import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDir = path.join(process.cwd(), 'posts')

export const getPostsFiles = () => {
    return fs.readdirSync(postsDir);
}

export const getPostData = (postIdentifier) => {
    const postSlug = postIdentifier.replace(/\.md$/, ''); //remove file ext
    const filePath = path.join(postsDir, `${postSlug}.md`);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const {data, content} = matter(fileContent)

    return {
        slug: postSlug,
        ...data,
        content
    };
}

export const getAllPosts = () => {
    const postFiles = getPostsFiles();

    const allPosts = postFiles.map(postFile => {
        return getPostData(postFile)
    })

    return allPosts.sort((postA, postB) => postA.date > postB.date ? -1 : 1);

}

export const getFeaturedPosts = () => {
    const allPosts = getAllPosts();
    return allPosts.filter(post => post.isFeatured);
}