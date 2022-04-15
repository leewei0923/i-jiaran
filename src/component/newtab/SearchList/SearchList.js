import React from 'react';
import styles from './searchList.module.less';
import { SearchEngine } from '~/util/visData.js';

export default function SearchList(props) {
  const { onChangeSearch, defaultSearchId } = props;
  return (
    <form className={styles.container}>
      {SearchEngine.map((item) => (
        <div className={styles.checkBox} key={item.key + item.id}>
          <input
            type="radio"
            name="searchEngine"
            id={item.key}
            value={item.name}
            defaultChecked={(defaultSearchId || '') === item.key}
            className={styles.radio}
            onClick={(e) => {
              const [v, id] = [e.target.value, e.target.id];
              onChangeSearch(v, id);
            }}
          />
          {item.icon}
        </div>
      ))}
    </form>
  );
}
