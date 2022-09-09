import React from 'react';
import PostContent from "../../components/posts/post-detail/post-content";
import {getPostData, getPostsFiles} from "../../lib/posts-util";
import Head from "next/head";

const PostDetail = ({post}) => {
    return (
        <>
            <Head>
                <title>{post.title}</title>
                <meta name='description' content={post.excerpt}/>
            </Head>
            <PostContent post={post}/>
        </>
    );
};

export default PostDetail;

export const getStaticProps = (context) => {
    const {params} = context
    const {slug} = params;
    const postData = getPostData(slug)

    return {
        props: {
            post: postData
        },
        revalidate: 600
    }
}

export const getStaticPaths = () => {
    const allPostFilenames = getPostsFiles();
    const slugs = allPostFilenames.map((filename) => filename.replace(/\.md$/, ''))
    return {
        paths: slugs.map(slug => ({params: {slug: slug}})),
        fallback: false
    }
}