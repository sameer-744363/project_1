import React from "react";

const customer = [
    { name: "ACME Corp", industry: "Healthcare", projects: "15.3K", logo: "logo1.png" },
    { name: "FinTech Co", industry: "Finance", projects: "100", logo: "logo2.png" },
    { name: "NeoACME", industry: "Finance", projects: "100", logo: "logo3.png" },
    { name: "FinTech Co", industry: "Finance", projects: "1.2K", logo: "logo4.png" },
    { name: "NeoACME", industry: "Finance", projects: "100", logo: "logo5.png" },
    { name: "Finance Co", industry: "Finance", projects: "1.2K", logo: "logo6.png" }
];

const TopCustomers = () => {
    return (
        <div className="top-customers">
            <div className="header">
                <div>
                    <h1 className="title3">Top Customers in the Market</h1>
                    <p className="subtitle3">
                        Our top Customers - valued partners in our journey of growth, success, and innovation - whose trust and loyalty.
                    </p>
                </div>
                <button className="explore-btn3">Explore all Deals →</button>
            </div>

            <div className="customers-grid">
                {customer.map((deal, index) => (
                    <div className="customers-card" key={index}>
                        <div className="customers-header" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                            <span>{deal.name}</span>
                            <img className="customer-logo"
                                src={deal.logo}
                            // alt={`${deal.name} Logo`}
                            // style={{ width: "30px", height: "30px", marginLeft: "10px" }}
                            />
                        </div>
                        <div className="customers-body">
                            <p className="industry">Industry: <strong>{deal.industry}</strong></p>
                            <p className="projects">
                                <span className="projects-count" style={{ fontSize: "28px", color: "#000" }}>
                                    {deal.projects}
                                </span> Projects
                            </p>
                        </div>
                        <hr />
                        <div className="customers-footer">
                            <button className="view-details">View Details</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TopCustomers;
