import { FC } from 'react';
import styles from './SortMenu.module.css';

interface SortMenuItemProps {
  text: string;
  active: boolean;
}

const SortMenuItem: FC<SortMenuItemProps> = ({ text, active }) => {
  return (
    <li className={active ? styles.active : ''}>
      {text}
    </li>
  )
}

export default SortMenuItem