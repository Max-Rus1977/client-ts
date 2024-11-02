import { FC } from 'react';
import styles from './SortMenu.module.css';
import SortMenuItem from './SortMenuItem';
import { arrSortData } from '../../appData';

const SortMenu: FC = () => {
  return (
    <div className={`${styles.container} box-content`}>
      <nav className={styles.navbar}>
        <ul>
          {
            arrSortData.map(({ id, text, active }) =>
              (<SortMenuItem key={id} text={text} active={active} />))
          }
        </ul>
      </nav>
    </div>
  )
}

export default SortMenu