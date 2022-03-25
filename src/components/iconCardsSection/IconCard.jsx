import Icon from '../UI/Icon';

function IconCard(props) {
  return (
    <div className='icon-card'>
      <Icon icon={props.info.icon} />
      <div className='icon__text'>
        <h3>{props.info.title}</h3>
        <p>{props.info.text}</p>
      </div>
    </div>
  );
}
export default IconCard;
