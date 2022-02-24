import Head from 'next/head';
import CoachesView from '../component/coaches/CoachesView';
import ContactUsView from '../component/contactus/ContactUsView';
import FooterView from '../component/footer/FooterView';
import GalleryView from '../component/gallery/GalleryView';
import Header from '../component/header/Header';
import SlideShow from '../component/header/SlideShow';
import OurProgramView from '../component/ourprograms/OurProgramView';

const Home = () => (
  <div>
    <Head>
      <title>Shakya Tennis Academy</title>
      <meta name="description" content="Lawn tennis academy" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <header>
      <Header />
    </header>
    <SlideShow />
    <OurProgramView />
    <CoachesView />
    <GalleryView />
    <ContactUsView />
    <footer>
      <FooterView />
    </footer>
  </div>
);

export default Home;