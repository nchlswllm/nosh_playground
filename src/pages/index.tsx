import { type NextPage } from "next";
import Head from "next/head";
import styles from "./index.module.css"

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Create T3 App</title>
                <meta name="description" content="Generated by create-t3-app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="flex min-h-screen flex-col items-center justify-center bg-slate-300">
                <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
                    <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
                        NOSH <span className="text-[hsl(280,47%,15%)]">MAGAZINE</span>
                    </h1>
                    <div className={styles.customclass}>
                        <button>Button</button>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Home;
