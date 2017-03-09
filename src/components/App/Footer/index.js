import Avatar from 'components/ui/Avatar';
import styles from './styles.scss';

export default function Footer() {
  return (
    <footer className={ styles.container }>
      <span className={ styles.hint }>
        Hint: Check out the network traffic in your developer console!
      </span>
      <a href="http://www.small-improvements.com">
        powered by Small Improvements
        { ' ' }
        <Avatar src="/avatars/si.svg" size="20" round={ false } />
      </a>
    </footer>
  );
}
