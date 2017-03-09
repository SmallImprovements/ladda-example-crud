import styles from './Footer.scss';
import Avatar from 'components/ui/Avatar';

export default function Footer() {
  return (
    <footer className={ styles.container }>
      <a href="http://www.small-improvements.com">
        powered by Small Improvements
        { ' ' }
        <Avatar src="/avatars/si.svg" size="20" round={ false } />
      </a>
    </footer>
  );
}
