import ReadyToEnquire from "@/components/readytoenquire";

function ClientGallery() {
    return <div>
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