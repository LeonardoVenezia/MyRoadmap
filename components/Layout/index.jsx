import Modal from "../Modal";
import ItemsSections from "../ItemsSections";
import { useState } from 'react';
import styles from './Layout.module.css';

const Layout = ({ title, sections, paths = [], active, handleClick }) => {
    const [openDetail, setOpenDetail] = useState('');

    return (
        <>
            <h1 className={styles.title}>{title}</h1>
            <ul>
                {
                    paths.map(i => (
                        <li>
                            <button
                                onClick={() => handleClick(i)}
                                className={
                                    `${styles.button} ${active && styles.active}`
                                }
                            >
                                {i}
                            </button>
                        </li>
                    ))
                }
            </ul>
            <main>
                {
                    <Modal
                        close={() => setOpenDetail('')}
                        open={openDetail}
                        name={openDetail}
                    />
                }
                <ItemsSections
                    openDetail={setOpenDetail}
                    sections={sections
                        // [
                        //     [
                        //         { name: "HTML", src: "/html.png" },
                        //         { name: "CSS", src: "/css.png" },
                        //         { name: "Javascript", src: "/js.png" },
                        //     ],
                        //     [
                        //         { name: "React", src: "/react.svg" },
                        //         { name: "Git", src: "/git.png" }, ,
                        //         { name: "Sass", src: "/sass.svg" },
                        //         { name: "Terminal", src: "/terminal.png" },
                        //     ],
                        //     [
                        //         { name: "Redux", src: "/redux.png" },
                        //         { name: "Jest", src: "/jest.svg" },
                        //         { name: "Tailwind", src: "/tailwind.png" },
                        //         { name: "Scrum", src: "/scrum.png" },
                        //         { name: "TypeScript", src: "/TypeScript.png" },
                        //     ],
                        //     [
                        //         { name: "Next.js", src: "/nextjs.png" },
                        //         { name: "Testing Library", src: "/testingLibrary.png" },
                        //         { name: "Webpack", src: "/webpack.png" },
                        //         { name: "Leadership", src: "/Leadership.png" },
                        //         { name: "GraphQL", src: "/GraphQL.png" },
                        //         { name: "Web3.js", src: "/web3js.jpeg" },
                        //     ],
                        // ]

                        // [
                        //     [
                        //         { name: "HTML", src: "/html.png" },
                        //         { name: "CSS", src: "/css.png" },
                        //         { name: "Javascript", src: "/js.png" },
                        //         { name: "Wordpress", src: "/js.png" },
                        //     ],
                        //     [
                        //         { name: "Yoast SEO", src: "/react.svg" },
                        //         { name: "Wordfence Security", src: "/git.png" }, ,
                        //         { name: "Contact Form 7", src: "/sass.svg" },
                        //         { name: "WooCommerce", src: "/terminal.png" },
                        //         { name: "Elementor", src: "/terminal.png" },
                        //     ],
                        //     [
                        //         { name: "PHP", src: "/react.svg" },
                        //         { name: "Git", src: "/git.png" }, ,
                        //         { name: "Sass", src: "/sass.svg" },
                        //         { name: "Terminal", src: "/terminal.png" },
                        //         { name: "MySQL", src: "/terminal.png" },
                        //     ],
                        // ]
                    }
                />
            </main>
        </>
    )
}

export default Layout;