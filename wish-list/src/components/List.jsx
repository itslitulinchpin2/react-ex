import React from 'react'
import styles from './List.module.css';
export default function List({content}) {
  return (
    <div className={styles.list} id="list">
        <checkbox></checkbox>
      {content}
      <button className={styles.delete}>삭제하기</button>
    </div>
  )
}
