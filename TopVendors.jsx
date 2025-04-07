import React from "react";

const vendorsData = [
    {
        id: 1,
        name: "VM Vare Cloud Technologies",
        category: "Cloud Solution",
        projects: "12.1K",
        rating: 4,
        description: "V Cloud Technologies specializes in innovative cloud computing solutions, offering scalable solutions.",
        logo: "https://via.placeholder.com/50",
    },
    {
        id: 2,
        name: "V Cloud Technologies",
        category: "Cloud Solution",
        projects: "12.1K",
        rating: 4,
        description: "V Cloud Technologies specializes in innovative cloud computing solutions, offering scalable solutions.",
        logo: "https://via.placeholder.com/50",
    },
    {
        id: 3,
        name: "SoftSol Tech Solutions",
        category: "IT Consulting",
        projects: "1.3K",
        rating: 4,
        description: "NetTech Solutions is a leading provider of cutting-edge IT and networking services.",
        logo: "https://via.placeholder.com/50",
    },
    {
        id: 4,
        name: "NetTech Solutions",
        category: "IT Consulting",
        projects: "1.3K",
        rating: 4,
        description: "NetTech Solutions is a leading provider of cutting-edge IT and networking services.",
        logo: "https://via.placeholder.com/50",
    },
    {
        id: 5,
        name: "VM Vare Cloud Technologies",
        category: "Cloud Solution",
        projects: "12.1K",
        rating: 4,
        description: "V Cloud Technologies specializes in innovative cloud computing solutions, offering scalable solutions.",
        logo: "https://via.placeholder.com/50",
    },
    {
        id: 6,
        name: "SoftSol Tech Solutions",
        category: "IT Consulting",
        projects: "1.3K",
        rating: 4,
        description: "NetTech Solutions is a leading provider of cutting-edge IT and networking services.",
        logo: "https://via.placeholder.com/50",
    }
];

const TopVendors = () => {
    return (
        <div className="top-vendors">
            <div className="header">
                <div>
                    <h1 className="title">Top Vendors in the Market</h1>
                    <p className="subtitle">
                        Ratings and reviews ensure transparency, helping you choose best service providers with confidence.
                    </p>
                </div>
                <button className="explore-btn">Explore all Deals →</button>
            </div>
            <div className="top-vendors-container">
                {vendorsData.map((vendor) => (
                    <div key={vendor.id} className="vendor-card">
                        <div className="vendor-logo">
                            <img src={vendor.logo} />
                        </div>
                        <div className="vendor-info">
                            <h3 className="vendor-name">{vendor.name}</h3>
                            <p className="vendor-category">{vendor.category}</p>
                            <div className="vendor-projects">
                                Completed Projects: <strong>{vendor.projects}</strong>
                                <span className="vendor-rating">
                                    {"★".repeat(vendor.rating)}
                                    {"☆".repeat(5 - vendor.rating)}
                                </span>
                            </div>
                            <p className="vendor-description">{vendor.description}</p>
                            <button className="profile-btn">View Profile</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TopVendors;
