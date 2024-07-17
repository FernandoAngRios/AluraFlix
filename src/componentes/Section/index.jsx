import styles from './Section.module.css';
import Card from './Card';
import Title from './Title';

const colors = {
  'FRONT END': '#7a6bff',
  'BACK END': '#000000',
  'INNOVACIÓN Y GESTIÓN': '#005dc8',
};

const Section = ({ title, videos, onDelete, onSave }) => {
  const backgroundColor = colors[title];  
  const borderColor = colors[title];

  return (
    <div className={styles.section}>
      <Title $backgroundColor={backgroundColor}>{title}</Title>
      <div className={styles.cardsContainer}>
        {videos.map((video) => (
          <Card key={video.id} video={video} onDelete={onDelete} onSave={onSave}  $borderColor={borderColor}/>
        ))}
      </div>
    </div>
  );
};

export default Section;