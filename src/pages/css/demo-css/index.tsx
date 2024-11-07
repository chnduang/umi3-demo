import React from 'react';

import styles from './index.less';

const prefix = 'test-css';

const MyComponent = (props) => {
  return (
    <div className={styles[`${prefix}`]}>
      <img
        src="https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png"
        alt=""
        className={styles[`${prefix}-img`]}
      />
    </div>
  );
};

export default MyComponent;
