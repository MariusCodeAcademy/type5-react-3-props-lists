import IconCard from './IconCard';

const iconCardsData = [
  {
    icon: 'fa-envelope-open',
    title: 'Learn react',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, provident.',
  },
  {
    icon: 'fa-facebook',
    title: 'Learn face book',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, provident.',
  },
  {
    icon: 'fa-linkedin',
    title: 'Learn linkedin',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, provident.',
  },
  {
    icon: 'fa-house',
    title: 'Work at home',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, provident.',
  },
  {
    icon: 'fa-car',
    title: 'Learn to drive',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, provident.',
  },
  {
    icon: 'fa-youtube',
    title: 'Learn Online',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, provident.',
  },
];

function IconCardList() {
  return (
    <div className='icon-card-list'>
      <IconCard info={iconCardsData[0]} />
      <IconCard info={iconCardsData[1]} />
    </div>
  );
}

export default IconCardList;
