import Hero from "../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featured-posts";
import {getFeaturedPosts} from "../lib/posts-util";
import Head from "next/head";


const Home = ({posts}) => {
    return (
        <>
            <Head>
                <title>{"Dennis' Blog"}</title>
                <meta name='description' content='I post about programming and web development'/>
            </Head>
            <Hero/>
            <FeaturedPosts posts={posts}/>
        </>
    )
};

export default Home

export const getStaticProps = () => {
    const featuredPosts = getFeaturedPosts();

    return {
        props: {
            posts: featuredPosts
        },
        revalidate: 1800
    }
}
