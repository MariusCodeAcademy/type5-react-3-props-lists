// susikuriam tuscia komp HeroSection
// isitraukiam i App.js

function HeroSection(props) {
  return (
    <div className='hero'>
      <div className='info'>
        <h1>{props.data.title}</h1>
        <p className='hero__subtitle'>{props.data.subtitle}</p>
        <button>{props.data.btnText}</button>
      </div>
    </div>
  );
}

export default HeroSection;
