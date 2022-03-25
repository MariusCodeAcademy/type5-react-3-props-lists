import './App.css';
import Header from './components/header/Header';
import HeroSection from './components/heroSection/HeroSection';

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
    </div>
  );
}

export default App;
