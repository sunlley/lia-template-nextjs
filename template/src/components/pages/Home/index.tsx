'use client'
import {useTranslations} from "next-intl";
import {useEffect} from "react";
import {Page, PageBody} from "@/components/widgets";
import Footer from "@/components/widgets/Footer";

type HomeProps = {}

function Home(props: HomeProps) {
    const t = useTranslations('Metadata')
    useEffect(() => {
    }, []);

    return (
        <Page>
            <PageBody>
                Home View

            </PageBody>

            <Footer/>
        </Page>
    )
}

export default Home;
