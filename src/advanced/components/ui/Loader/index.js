import classNames from 'classnames';
import styles from './style.scss';

export default function Loader({ className, style, children }) {
  const cN = classNames(styles.container, className);
  return (
    <div className={ cN } style={ style }>
     { children }
    </div>
  );
}
