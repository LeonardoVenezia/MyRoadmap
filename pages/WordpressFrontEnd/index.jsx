import ItemsSections from '../../components/ItemsSections';
import Head from 'next/head';
import styles from './WordpressFrontEnd.module.css';
import { useState } from 'react';
import Modal from '../../components/Modal';
import Layout from '../../components/Layout';

const WordpressFrontEnd = () => {

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
                            { name: "Wordpress", src: "/js.png" },
                        ],
                        [
                            { name: "Yoast SEO", src: "/react.svg" },
                            { name: "Wordfence Security", src: "/git.png" }, ,
                            { name: "Contact Form 7", src: "/sass.svg" },
                            { name: "WooCommerce", src: "/terminal.png" },
                            { name: "Elementor", src: "/terminal.png" },
                        ],
                        [
                            { name: "PHP", src: "/react.svg" },
                            { name: "Git", src: "/git.png" }, ,
                            { name: "Sass", src: "/sass.svg" },
                            { name: "Terminal", src: "/terminal.png" },
                            { name: "MySQL", src: "/terminal.png" },
                        ],
                    ]
                } />
        </>
    );
}

export default WordpressFrontEnd;

export function getStaticProps({ locale }) {

    const messages = { ...require(`../../messages/modal/${locale}.json`) };

    return {
        props: {
            messages,
        },
    }
}