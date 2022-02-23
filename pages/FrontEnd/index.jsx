import ItemsSections from '../../components/ItemsSections';
import Head from 'next/head';
import styles from './FrontEnd.module.css';
import { useState } from 'react';
import Modal from '../../components/Modal';
import Layout from '../../components/Layout';

const FrontEnd = () => {

    return (
        <>
            <Head>
                <title>Front end learning path</title>
                <meta name="description" content="The best path to learn." />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout
                title="Front end learning path"
                sections={
                    [
                        [
                            { name: "HTML", src: "/html.png" },
                            { name: "CSS", src: "/css.png" },
                            { name: "Javascript", src: "/js.png" },
                        ],
                        [
                            { name: "React", src: "/react.svg" },
                            { name: "Git", src: "/git.png" }, ,
                            { name: "Sass", src: "/sass.svg" },
                            { name: "Terminal", src: "/terminal.png" },
                        ],
                        [
                            { name: "Redux", src: "/redux.png" },
                            { name: "Jest", src: "/jest.svg" },
                            { name: "Tailwind", src: "/tailwind.png" },
                            { name: "Scrum", src: "/scrum.png" },
                            { name: "TypeScript", src: "/TypeScript.png" },
                        ],
                        [
                            { name: "Next.js", src: "/nextjs.png" },
                            { name: "Testing Library", src: "/testingLibrary.png" },
                            { name: "Webpack", src: "/webpack.png" },
                            { name: "Leadership", src: "/Leadership.png" },
                            { name: "GraphQL", src: "/GraphQL.png" },
                            { name: "Web3.js", src: "/web3js.jpeg" },
                        ],
                    ]
                } />
        </>
    );
}

export default FrontEnd;

export function getStaticProps({ locale }) {

    const messages = { ...require(`../../messages/modal/${locale}.json`) };

    return {
        props: {
            messages,
        },
    }
}