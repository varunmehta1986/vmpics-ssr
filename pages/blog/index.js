import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

function Blog() {
    return <div>
        <Head>
            <title>Blogs by VMPics Photography</title>
            <meta name="description" content='Blogs by VMPics Photography on Maternity shoots, family sessions and family events.'></meta>
        </Head>
        <div className="container">
            <h2>My Blogs</h2>
            <div className='row'>
                <div className='col-6'>
                    <Link href={'/blog/goldenhour'}>
                        <Image src="/images/GoldenHour.jpg" alt="Golden-hour-blog" className="img-fluid" width={500} height={350} />
                        <h4>WHAT IS GOLDEN HOUR ?</h4>
                    </Link>
                </div>
                <div>
                    {/* <a href='/blog/what-do-i-shoot-with'>
                    <Image src="/images/Equipment.jpg" alt="what-equipment-shoot-with" className="img-fluid" width={500} height={350} />
                    <h4>WHAT DO I SHOOT WITH ?</h4>
                </a> */}
                </div>
            </div>

            <a href="https://gallery.vmpics.com.au/Py0k9jMYQF3BL">Nida&apos;s Maternity Shoot</a> <br />
            <a href="https://gallery.vmpics.com.au/7WGoulhzDv9zV">Vihana&apos;s First One</a><br />
            <a href="https://gallery.vmpics.com.au/8qa0nXi3Xzfon">Twin Brothers Turn Nine</a>
        </div>
    </div>
}

export default Blog;