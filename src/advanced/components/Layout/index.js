import { createElement } from 'react';
import classNames from 'classnames';
import styles from './styles.scss';

export const Page = elWithClass('div', styles.page);
export const NarrowPage = elWithClass('div', styles.narrowPage);
export const Card = elWithClass('div', styles.card);

function elWithClass(el, defaultClassName) {
  return (props) => {
    const { className, children, ...other } = props;
    const cN = classNames(className, defaultClassName);
    return createElement(el, { className: cN, ...other }, children);
  };
}
