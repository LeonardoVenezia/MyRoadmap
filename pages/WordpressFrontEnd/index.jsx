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
                            { name: "Wordpress", src: "/Wordpress.svg" },
                        ],
                        [
                            { name: "Yoast SEO", src: "/yoastSeo.png" },
                            { name: "Wordfence Security", src: "/Wordfence Security.png" }, ,
                            { name: "Contact Form 7", src: "/Contact form 7.png" },
                            { name: "Woo Commerce", src: "/WooCommerce.svg" },
                            { name: "Elementor", src: "/Elementor.png" },
                        ],
                        [
                            { name: "PHP", src: "/php.svg" },
                            { name: "Git", src: "/git.png" }, ,
                            { name: "Sass", src: "/sass.svg" },
                            { name: "Terminal", src: "/terminal.png" },
                            { name: "MySQL", src: "/mysql.png" },
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