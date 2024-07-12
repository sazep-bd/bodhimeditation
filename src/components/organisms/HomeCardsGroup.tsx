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

// Array of card data
const cardData: CardData[] = [
    {
        imageUrl: '/images/Learning_Bhuddhism_2.jpg',
        title: 'Dhamma Teaching',
        description: 'Please join our weekly meditation session to learn about Buddhism and Meditation.',
    },
    {
        imageUrl: '/images/Image_5',
        title: 'Meditation',
        description: 'At our center we hold weekly meditation learning and practice session.',
    },
    {
        imageUrl: '/images/Meditation_Image_2',
        title: 'Buddha Day',
        description: 'The Buddha Day or Buddha Purnima is celebrated every year to commemorate the birth of Siddhartha Gautama, who beame the Gautama Buddha.',
    },
    {
        imageUrl: '/images/Dana_1-1',
        title: 'Dana Blessings',
        description: 'Please join our weekly blessed session of offering Dana to Sangha to share your blessings with others.'
    },
    {
        imageUrl: '/images/Kathina_1-2',
        title: 'Kathina Ceremony',
        description: 'Kathina is signifant festival in Buddhism where we offer robes to our Sangha. It is celebrated at the end of Vassa.',
    },
    {
        imageUrl: '/images/Nirvana_1',
        title: 'Learning Buddhism',
        description: 'Suitable for everyone, the teachings of Buddha can bring peace and calm in our everyday lives. Moreover, it is possible for anyone to attin \'Nibbana\' through Buddhism and purification of mind.',
    },
];

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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {/* Map over the card data array and render a HomeImageCard component for each item */
        cardData.map(({ imageUrl, title, description }, index) => (
            <HomeImageCard key={index} imageUrl={imageUrl} title={title} description={description} />
        ))}
    </div>
);

export default HomeCardsGroup;
