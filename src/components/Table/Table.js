import { useState } from 'react';
import { useSelector } from 'react-redux';
import Loader from 'react-loader-spinner';

import { UserRow, Paginator } from '../';
import { usersSelector } from '../../slices/users';
import { filterSelector } from '../../slices/filter';

import styles from './Table.module.scss';

function Table() {
  const PAGE_SIZE = 10;

  const { users, loading, errors } = useSelector(usersSelector);
  const { filter } = useSelector(filterSelector);

  const [page, setPage] = useState(0);

  if (loading) {
    return (
      <div className={styles.loader}>
        <Loader
          secondaryColor="coral"
          type="MutatingDots"
          color="#222"
          height={100}
          width={100}
        />
      </div>
    );
  }

  if (errors) {
    return <div className={styles.error}>Some Error Occured</div>;
  }

  return (
    <>
      <div className={styles.tableWrap}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>#</th>
              <th>Email</th>
              <th>Name</th>
              <th>Wallet 1</th>
              <th>Wallet 2</th>
              <th>Wallet 3</th>
            </tr>
          </thead>
          <tbody>
            {users.filter((user) => filter.includes(user.type)).length > 0 ? (
              users
                .filter((user) => filter.includes(user.type))
                .slice(PAGE_SIZE * page, PAGE_SIZE * page + PAGE_SIZE)
                .map((user) => <UserRow key={user.index} user={user}></UserRow>)
            ) : (
              <tr>
                <td
                  colSpan={6}
                  style={{
                    textAlign: 'center',
                    fontSize: '0.8em',
                    color: '#666',
                    fontStyle: 'italic',
                  }}
                >
                  No Users Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <Paginator
        page={page}
        setPage={setPage}
        totalPage={
          users.filter((user) => filter.includes(user.type)).length / PAGE_SIZE
        }
      />
    </>
  );
}

export default Table;
