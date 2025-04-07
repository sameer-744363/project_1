import React from "react";

const partners = [
    { name: "Technology", logo: "/images/logo1.png", bgColor: "#0d2741" },
    { name: "Comtug", logo: "/images/logo2.png", bgColor: "#ffffff" },
    { name: "Finance", logo: "/images/logo3.png", bgColor: "#0d3b21" },
    { name: "Denside", logo: "/images/logo4.png", bgColor: "#ffffff" },
    { name: "Sunbank", logo: "/images/logo5.png", bgColor: "#0d2741" },
    { name: "Simplicity", logo: "/images/logo6.png", bgColor: "#4a9fd7" },
];

const Partners = () => {
    return (
        <div className="container4">
            <h2 className="heading4">Partners</h2>
            <p className="text4">Building Strong Alliances for Exceptional Results</p>
            <div className="grid4">
                {partners.map((partner, index) => (
                    <div key={index} className="card4" style={{ backgroundColor: partner.bgColor }}>
                        <img src={partner.logo} alt={partner.name} className="logo4" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Partners;
