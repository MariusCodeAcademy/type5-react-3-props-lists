import Button from '../UI/Button';
import './heroSection.css';

function HeroSection(props) {
  return (
    <div className='hero'>
      <div className='info'>
        <h1>{props.data.title}</h1>
        <p className='hero__subtitle'>{props.data.subtitle}</p>
        {/* <button>{props.data.btnText}</button> */}
        <Button name={props.data.btnText} />
        <Button name='small btn' color='tomato' type='sm' />
      </div>
    </div>
  );
}

export default HeroSection;
