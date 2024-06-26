import React from 'react'
import ActionAreaCard from './MUICard'

export const FeatureCard = () => {
    const cardData = [
        {
            title: "Simplified Content Creation",
            description: "Easily handle your content generation with just a few clicks using our AI-powered article editor.",
            image: "/images/seo.png"
        },
        {
            title: "Secure Payment Options",
            description: "Pay securely through any payment gateway method with our AI article editor.",
            image: "/images/seo.png"
        },
        {
            title: "Automated Blog Publishing",
            description: "Write and publish bulk blog articles directly to your WordPress site effortlessly.",
            image: "/images/seo.png"
        },
        {
            title: "Affiliate Earnings",
            description: "Refer friends and earn commissions from their first purchase through our affiliate system.",
            image: "/images/seo.png"
        },
        {
            title: "Amazon Review Content Assistance",
            description: "Seeking content for your niche site? We're just a ticket away to help with Amazon review articles.",
            image: "/images/seo.png"
        },
    ]
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <p style={{ fontSize: "50px", fontWeight: "bold", color: "#445658" }}>Content
                <span style={{ color: '#ff4a17' }}> Writing </span>
                AI</p>
            <p style={{ fontStyle: 'italic', fontSize: "30px", color: "#445658" }}>
                Our tools will help you to create 1000 articles in one click within a minute
            </p>
            <div style={{display: 'flex', gap: '20px', margin: '40px 0', justifyContent: 'center', flexWrap: 'wrap'}}>
                {cardData.map((eachCardData, index) =>
                (
                    <ActionAreaCard
                        key={index}
                        imglocation={eachCardData.image}
                        title={eachCardData.title}
                        description={eachCardData.description}
                    />
                ))}

            </div>

        </div>
    )
}
