import Photogrid from "@/components/photogrid"
import About from "@/components/about"
import ReadyToEnquire from "@/components/readytoenquire";
import Head from "next/head";
import TestimonialsMarquee from "@/components/TestimonialsMarquee";

function Home() {
    return <>
        <Head>
            <title>VMPics Photography at Box Hill, Hills District</title>
            <meta
                name="description"
                key="desc"
                content='Varun was absolute delight to work with, 
                he knew exactly what we wanted and captured our family moments with his lenses. 
                I would highly recommend him.' />
        </Head>
        <Photogrid />
        <About />
        <TestimonialsMarquee />
        <ReadyToEnquire />
    </>
}

export default Home
