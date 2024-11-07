import React from 'react';

function Header() {
  return (
    <header style={styles.header}>
      <div style={styles.logo}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg" alt="YouTube Logo" style={{ height: '30px' }} />
      </div>
      <input type="text" placeholder="ค้นหา" style={styles.searchBox} />
      <button style={styles.searchButton}>🔍</button>
    </header>
  );
}

const styles = {
  header: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#f9f9f9',
    borderBottom: '1px solid #e0e0e0',
  },
  logo: {
    marginRight: '20px',
  },
  searchBox: {
    flex: 1,
    padding: '8px',
    borderRadius: '2px',
    border: '1px solid #ccc',
  },
  searchButton: {
    padding: '8px',
    marginLeft: '10px',
    backgroundColor: '#e0e0e0',
    border: 'none',
    cursor: 'pointer',
  },
};

export default Header;
