import { ROOT } from 'constants/paths';
import styles from './styles.scss';

export default function Avatar({ src }) {
  const fullSrc = `${ROOT}${src}`;
  return <img className={ styles.avatar } src={ fullSrc } />;
}