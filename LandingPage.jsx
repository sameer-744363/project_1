import React from 'react';


const App = () => {
    return (
        <>
            {/* Navbar */}
            <header className="nav-bar">
                <div className="logo"><b>Logo</b></div>
                <input type="text" className="search-box" placeholder="Find Vendors, Services, or Products" />
                <nav className='navMenu'>
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Features</a>
                    <a href="#">Pricing</a>
                    <button className="btn-primary">Post Project</button>
                    <button className="btn-secondary">Vendor Signup</button>
                </nav>
            </header>

            {/* Hero Section */}
            <section className="container1">
                <div className="hero-content">
                    <p className="hero-text">
                        Find the Best <br />
                        <span className="highlight">IT Services, Products & Solutions</span>
                    </p>
                    <div className="buttons">
                        <button className="post-project">Post Your Project</button>
                        <button className="join-vendor">Join as a Vendor</button>
                    </div>
                    <input type="text" className="search-box2" placeholder="Find Vendors, Services, or Products" />
                </div>
                <img src="/PictureBox/Screenshot 2025-03-26 143957.png" alt="IT Services" className="hero-image" />
            </section>
        </>
    );
};

export default App;
