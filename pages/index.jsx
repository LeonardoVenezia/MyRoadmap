import frontendService from './api/frontendService.json';
import Head from 'next/head';
import Layout from '../components/Layout';
import { useState } from 'react';
import BackgroundContainer from '../components/BackgroundContainer';

const FrontEnd = () => {
    const [active, setActive] = useState(0);
    const names = frontendService.map((i, index) =>
    (
        {
            name: i.name,
            index,
        }
    ));

    return (
        <BackgroundContainer>
            <Head>
                <title>Front end learning path</title>
                <meta name="description" content="The best path to learn." />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout
                title="Front end learning path"
                paths={['react', 'wordpress']}
                handleClick={setActive}
                active={active}
                data={frontendService[active || 0]}
                names={names}
            />
        </BackgroundContainer>
    );
}

export default FrontEnd;

export function getStaticProps({ locale }) {
    return {
        props: {
            messages: {
                ...require(`../messages/home/${locale}.json`),
            },
        },
    }
}