import React from 'react';
import styles from './index.less';
import { useEffect } from 'react';
import { useModel } from 'umi';

export default () => {
  const masterProps = useModel('@@qiankunStateFromMaster');
  useEffect(() => {
    masterProps.setQiankunGlobalState({ str: 'bbb' , num: 1});
    console.log(masterProps);

  }, []);
  return (
    <div>
      <h1 className={styles.title}>子应用 app1</h1>
      <div>state: {JSON.stringify(masterProps.globalState)}</div>
    </div>
  );
}
