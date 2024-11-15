import ImageWithLink from "@/components/atoms/BodhiLogo";
import HomeImageCard from "@/components/molecules/HomeImageCard";
import Header from "@/components/organisms/header";
import Image from "next/image";
import HeroBanner from "@/components/organisms/HeroBanner";
import HomeCardsGroup from "@/components/organisms/HomeCardsGroup";
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
      imageUrl: '/images/Image_5.gif',
      title: 'Meditation',
      description: 'At our center we hold weekly meditation learning and practice session.',
  },
  {
      imageUrl: '/images/Meditation_Image_2.jpg',
      title: 'Buddha Day',
      description: 'The Buddha Day or Buddha Purnima is celebrated every year to commemorate the birth of Siddhartha Gautama, who became the Gautama Buddha.',
  },
  {
      imageUrl: '/images/Dana_1-1.jpg',
      title: 'Dana Blessings',
      description: 'Please join our weekly blessed session of offering Dana to Sangha to share your blessings with others.'
  },
  {
      imageUrl: '/images/Kathina_1.png',
      title: 'Kathina Ceremony',
      description: 'Kathina is a significant festival in Buddhism where we offer robes to our Sangha. It is celebrated at the end of Vassa.',
  },
  {
      imageUrl: '/images/Nirvana_1.png',
      title: 'Learning Buddhism',
      description: 'Suitable for everyone, the teachings of Buddha can bring peace and calm in our everyday lives. Moreover, it is possible for anyone to attain \'Nibbana\' through Buddhism and purification of mind.',
  },
];

const Home: React.FC = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header />
      <HeroBanner />
      <HomeCardsGroup cardData={cardData} />
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
      </div>

    </main>
  );
}

export default Home;
