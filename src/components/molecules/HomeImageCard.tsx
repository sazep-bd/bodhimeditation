import React from 'react';

// Define an interface for the props
interface CardProps {
    imageUrl: string;
    title: string;
    description: string;
}

// Card component accepting typed props
const HomeImageCard: React.FC<CardProps> = ({ imageUrl, title, description }) => (
    <div className="flex flex-col gap-2 bg-white text-black max-w-xs p-4">
        {/* Using inline styles to include the background image URL dynamically */}
        <div style={{ backgroundImage: `url(${imageUrl})` }} className="h-64 bg-center justify-center"></div>
        {/* <img src={imageUrl} alt="" className="h-64 w-full object-cover" /> */}
        <div className="text-4xl text-center">{title}</div>
        <div className="bg-light-grey w-fit p-2 rounded">
            {description}
        </div>
    </div>
);

export default HomeImageCard;
