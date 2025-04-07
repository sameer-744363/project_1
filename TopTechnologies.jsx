import React from "react";

const categories = [
    {
        title: "Cloud Solutions",
        subtitle: "Cloud Computing for Business Efficiency",
        description: "Secure cloud computing services for businesses, including storage, computing, and networking.",
        image: "cloud.png",
    },
    {
        title: "Cyber Security",
        subtitle: "Securing Your Digital World",
        description: "Safeguard your data with advanced cyber security solutions. Protecting systems from threats.",
        image: "cyber.png",
    },
    {
        title: "Mobile App Development",
        subtitle: "Building Seamless Mobile Experiences",
        description: "Creating intuitive and engaging mobile apps tailored to your needs.",
        image: "mobile.png",
    },
    {
        title: "Cloud Solutions",
        subtitle: "Cloud Computing for Business Efficiency",
        description: "Secure cloud computing services for businesses, including storage, computing, and networking.",
        image: "cloud.png",
    },
    {
        title: "Cyber Security",
        subtitle: "Securing Your Digital World",
        description: "Safeguard your data with advanced cyber security solutions. Protecting systems from threats.",
        image: "cyber.png",
    },
    {
        title: "Mobile App Development",
        subtitle: "Building Seamless Mobile Experiences",
        description: "Creating intuitive and engaging mobile apps tailored to your needs.",
        image: "mobile.png",
    },
];

const TechnologyCategories = () => {
    return (
        <div className="container3">
            {/* Title & Subtitle */}
            <div className="header3">
                <h1>Top High-Demand Technology Categories</h1>
                <p>Ratings and reviews ensure transparency, helping you choose the best service providers with confidence.</p>
            </div>

            {/* Cards Grid */}
            <div className="grid3">
                {categories.map((category, index) => (
                    <div key={index} className="card3">
                        {/* Image */}
                        <img src={category.image} alt={category.title} className="card-img3" />

                        {/* Text Content */}
                        <div className="card-content3">
                            <h2 className="card-title3">{category.title}</h2>
                            <p className="card-subtitle3">{category.subtitle}</p>
                            <p className="card-description3">{category.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TechnologyCategories;
