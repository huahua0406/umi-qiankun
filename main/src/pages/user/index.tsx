import React from 'react';
import styles from './index.less';
import { useModel } from 'umi';


export default () => {
  const masterProps = useModel('@@qiankunStateForSlave');
  console.log(masterProps);
  const handleClick = () => {
    masterProps.setQiankunGlobalState({ str: 'ccc', num: masterProps.globalState.num + 1});
  }
  return (
    <div>
      <h1 className={styles.title}>Page User</h1>
      <div>
        <button onClick={handleClick}>点击+1</button>
        <div>state: {JSON.stringify(masterProps.globalState)}</div>
      </div>
    </div>
  );
};
