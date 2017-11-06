// @flow

import React from 'react';

const styles = {
  base: {
    border: '2px solid black',
    width: '200px',
  },
  contents: {
    fontSize: '14px',
    padding: '5px',
  },
  header: {
    backgroundColor: 'black',
    color: 'white',
    padding: '5px',
  },
};

class MissionPanel extends React.Component<{}> {
  render() {
    return (
      <div style={styles.base}>
        <div style={styles.header}>Mission</div>
        <div style={styles.contents}>Mission: Aftermath</div>
      </div>
    );
  }
}

export default MissionPanel;
