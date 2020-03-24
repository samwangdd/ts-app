import React, { Component } from 'react';

import styles from './layoutFlex.less';

class componentName extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.box1}>1</div>
        <div className={styles.box2}>2</div>
        <div className={styles.box3}>3</div>
      </div>
    );
  }
}

export default componentName;