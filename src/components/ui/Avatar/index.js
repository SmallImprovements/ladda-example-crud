import { ROOT } from 'constants/paths';
import styles from './styles.scss';

export default function Avatar({ src, size = 30 }) {
  const fullSrc = `${ROOT}${src}`;
  const props = {
      className: styles.avatar,
      src: fullSrc,
      width: size,
      height: size
  };
  return <img { ...props } />;
}