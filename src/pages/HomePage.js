import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import VideoGrid from '../components/VideoGrid';

function HomePage() {
  return (
    <div>
      <Header />
      <div style={styles.container}>
        <Sidebar />
        <VideoGrid />
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
  },
};

export default HomePage;
