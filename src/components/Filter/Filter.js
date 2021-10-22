import { useEffect, useRef } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { filterSelector, setFilter } from '../../slices/filter';

import styles from './Filter.module.scss';

function Filter() {
  const TYPE_COLORS = {
    0: '#48BEFF',
    1: '#3DFAFF',
    2: '#43C59E',
    3: '#3D7068',
    4: '#14453D',
  };

  const types = [0, 1, 2, 3, 4];

  const dispatch = useDispatch();

  const { filter } = useSelector(filterSelector);

  const selectAll = useRef();

  useEffect(() => {
    if (filter.length >= 5) {
      selectAll.current.checked = true;
    } else {
      selectAll.current.checked = false;
    }
  }, [filter]);

  const toggleAll = (e) => {
    if (e.target.checked) {
      dispatch(setFilter(types));
    } else {
      dispatch(setFilter([]));
    }
  };

  const handleChange = (type) => {
    if (filter.includes(type)) {
      dispatch(setFilter(filter.filter((oldType) => oldType !== type)));
    } else {
      dispatch(setFilter([type, ...filter]));
    }
  };

  return (
    <div className={styles.filter}>
      <ul>
        <li>
          <input
            onChange={toggleAll}
            type="checkbox"
            id="all"
            ref={selectAll}
          />
          <label htmlFor="all">All</label>
        </li>
        {types.map((type) => {
          return (
            <li key={type} style={{ borderColor: TYPE_COLORS[type] }}>
              <input
                type="checkbox"
                id={`type${type}`}
                checked={filter.includes(type)}
                onChange={() => handleChange(type)}
              />
              <label htmlFor={`type${type}`}>Type {type}</label>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Filter;
