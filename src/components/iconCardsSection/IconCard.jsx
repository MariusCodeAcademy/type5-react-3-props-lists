import Button from '../UI/Button';
import Icon from '../UI/Icon';

function IconCard(props) {
  return (
    <div className='icon-card'>
      <Icon icon={props.info.icon} />
      <div className='icon__text'>
        <h3>{props.info.title}</h3>
        <p>{props.info.text}</p>
        <Button type='sm' name='Read more' />
      </div>
    </div>
  );
}
export default IconCard;
