import { useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import styles from './Paginator.module.scss';

export default function Paginator({ page, setPage, totalPage }) {
  useEffect(() => {
    if (page > totalPage) {
      setPage(Math.floor(totalPage));
    }
  }, [page, totalPage, setPage]);

  const nextPage = () => {
    if (page + 1 >= totalPage) return;
    setPage(page + 1);
  };

  const prevPage = () => {
    if (page <= 0) return;
    setPage(page - 1);
  };

  return (
    <div className={styles.paginator}>
      <button onClick={prevPage}>
        <FontAwesomeIcon
          style={{ color: '#222' }}
          icon={faArrowLeft}
        ></FontAwesomeIcon>
      </button>
      <div>
        Page <span>{page + 1}</span> of <span>{Math.ceil(totalPage)}</span>
      </div>
      <button onClick={nextPage}>
        <FontAwesomeIcon
          style={{ color: '' }}
          icon={faArrowRight}
        ></FontAwesomeIcon>
      </button>
    </div>
  );
}
