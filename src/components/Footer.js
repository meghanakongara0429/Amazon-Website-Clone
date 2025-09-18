function Footer() {
    return (
        <footer className="footer">
            <div className="back-to-top">Back to top</div>
            <div className="footer-links">
                <div>
                    <h4>Get to Know Us</h4>
                    <ul>
                        <li>About Us</li>
                        <li>Careers</li>
                        <li>Press Releases</li>
                        <li>Amazon Science</li>
                    </ul>
                </div>
                <div>
                    <h4>Connect with Us</h4>
                    <ul>
                        <li>Facebook</li>
                        <li>Twitter</li>
                        <li>Instagram</li>
                    </ul>
                </div>
                <div>
                    <h4>Make Money with Us</h4>
                    <ul>
                        <li>Sell on Amazon</li>
                        <li>Affiliate Program</li>
                        <li>Advertise Your Products</li>
                    </ul>
                </div>
                <div>
                    <h4>Let Us Help You</h4>
                    <ul>
                        <li>COVID-19 and Amazon</li>
                        <li>Your Account</li>
                        <li>Returns Centre</li>
                        <li>Help</li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">© {new Date().getFullYear()} Amazon Clone</div>
        </footer>
    )
}
export default Footer