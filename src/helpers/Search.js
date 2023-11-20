import React, { useState } from 'react';
import { userData } from '../data/data';
import styles from './Search.module.css';

const Search = ({ mainData, filterDataHandler }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const filteredUserData = userData.filter(
    (user) =>
      user.user.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
    console.log(filteredUserData);
    filterDataHandler(filteredUserData);
  };

  return (
    <div>
      <div className={styles.searchIcon}>
        <img src="/search.png" />
      </div>
      <input
        className={styles.button}
        placeholder="Search"
        type="text"
        value={searchQuery}
        onChange={handleSearchInputChange}
      />
      {/* <section className={styles.frameParent}>
 
        {filteredUserData.map((user, index) => (
          <div key={index} className={styles.tableCell1}>
    
          </div>
        ))}
      </section> */}
    </div>
  );
};

export default Search;
