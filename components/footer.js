import Link from "next/link";

function Footer() {
    return <>
        <footer className="footer">
            <div className="col-lg-12" style={{ textAlign: "center" }}>
                &#169; 2023 VMPICS PHOTOGRAPHY
            </div>
            <div className="col-lg-12" style={{ textAlign: "center" }}>
                YOUR FAMILY PHOTOGRAPHER
            </div>
            <div className="row">
                <div className="col-sm-12 col-md-4 col-lg-4" style={{ textAlign: "left" }}>
                    <table>
                        <thead>
                            <tr>
                                <th colSpan="2">
                                    CONTACT US
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    Email:
                                </td>
                                <td>
                                    vmpicsphotography@gmail.com
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Phone:
                                </td>
                                <td>
                                    +61-460628079
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="col-sm-12 col-md-4 col-lg-4" style={{ textAlign: "left" }}>
                    <table>
                        <thead>
                            <tr>
                                <th>
                                    Galleries
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <Link href="/clientgallery" style={{ color: "black" }}>Client Galleries</Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="col-sm-12 col-md-4 col-lg-4" style={{ textAlign: "left" }}>
                    <table>
                        <thead>
                            <tr>
                                <th>
                                    Bookings
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <Link href="/contact" style={{ color: "black" }}>Book an appointment</Link>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <Link href="/investment" style={{ color: "black" }}>Pricing</Link>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <Link href="/investment" style={{ color: "black" }}>E-Gift Cards</Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </footer>
    </>
}

export default Footer;  