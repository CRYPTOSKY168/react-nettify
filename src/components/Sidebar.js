import React from 'react';

function Sidebar() {
  return (
    <aside style={styles.sidebar}>
      <div style={styles.item}>หน้าแรก</div>
      <div style={styles.item}>Shorts</div>
      <div style={styles.item}>การติดตาม</div>
      <div style={styles.item}>YouTube Music</div>
      <div style={styles.item}>คอลเลกชัน</div>
      <div style={styles.item}>ประวัติการเข้าชม</div>
    </aside>
  );
}

const styles = {
  sidebar: {
    width: '200px',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    height: '100vh',
    boxSizing: 'border-box',
  },
  item: {
    marginBottom: '15px',
    cursor: 'pointer',
  },
};

export default Sidebar;
