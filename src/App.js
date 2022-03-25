import './App.css';
import Header from './components/header/Header';
import HeroSection from './components/heroSection/HeroSection';
import IconCardSection from './components/iconCardsSection/IconCardSection';

const navData = [
  { link: '#home', title: 'Home' },
  { link: '#about', title: 'About' },
  { link: '#contact', title: 'Contact us' },
];

const heroSectionData = {
  title: 'React is great',
  subtitle: 'Not that hard to learn',
  btnText: 'Learn more',
};

function App() {
  return (
    <div className='App'>
      <Header />
      <HeroSection data={heroSectionData} />
      <IconCardSection />
    </div>
  );
}

export default App;
