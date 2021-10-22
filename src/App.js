import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { fetchUsers } from './slices/users';

import { Filter, Table } from './components';

import styles from './App.module.scss';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className={styles.app}>
      <Filter />
      <Table />
    </div>
  );
}

export default App;
