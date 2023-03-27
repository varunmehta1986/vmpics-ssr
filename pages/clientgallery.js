import ReadyToEnquire from "@/components/readytoenquire";
import Head from "next/head";

function ClientGallery() {
    return <div>
        <Head>
            <title>VMPics - Latest Client Gallery Sneak Peeks</title>
            <meta name="description" content="VMPics - Sneak Peek to the client galleries."></meta>
        </Head>
        <script src='https://pictimecloudaf-p.azureedge.net/pictures/scripts/compiled/artgalleryembed.js' async>
        </script>
        <iframe id='pictimeIntegration'
            title="pictimeiframe"
            src='https://gallery.vmpics.com.au/client?headless=true&noSyncNavigation=true'
            style={{ width: "100%", height: "1080px" }}
        ></iframe>
        <ReadyToEnquire />
    </div>
}

export default ClientGallery;