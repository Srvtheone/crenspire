import styles from './UserRow.module.scss';

function UserRow({ user }) {
  const { fullName, email, type, wallet1, wallet2, wallet3, index } = user;

  const getClass = () => {
    switch (type) {
      case 0:
        return styles.zero;
      case 1:
        return styles.one;
      case 2:
        return styles.two;
      case 3:
        return styles.three;
      case 4:
        return styles.four;
      default:
        break;
    }
  };

  return (
    <tr className={styles.row}>
      <td className={getClass()}>{index}</td>
      <td>{email}</td>
      <td>{fullName}</td>
      <td>{wallet1}</td>
      <td>{wallet2}</td>
      <td>{wallet3}</td>
    </tr>
  );
}

export default UserRow;
