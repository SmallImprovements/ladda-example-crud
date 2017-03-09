import classNames from 'classnames';
import { ROOT } from 'constants/paths';
import styles from './styles.scss';

export default function Avatar({ src, size = 30, round = true }) {
  const fullSrc = `${ROOT}${src}`;
  const props = {
    className: classNames({ [styles.round]: round }),
    src: fullSrc,
    width: size,
    height: size
  };
  return <img { ...props } />;
}
