import React from 'react';
import HomeImageCard from '../molecules/HomeImageCard';
/**
 * Interface for the data of each card.
 */
interface CardData {
    imageUrl: string; // URL of the image
    title: string; // Title of the card
    description: string; // Description of the card
}

/**
 * Interface for the props of the HomeCardsGroup component.
 */
interface HomeCardsGroupProps {
    cardData: CardData[]; // Array of card data
}

/**
 * Component that renders a group of cards.
 */
const HomeCardsGroup: React.FC<HomeCardsGroupProps> = ({ cardData }) => (
    // Grid layout with 1 column on small devices, 2 columns on medium devices, and 3 columns on large devices
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 py-6">
        {/* Map over the card data array and render a HomeImageCard component for each item */
        cardData.map(({ imageUrl, title, description }, index) => (
            <HomeImageCard key={index} imageUrl={imageUrl} title={title} description={description} />
        ))}
    </div>
);

export default HomeCardsGroup;
