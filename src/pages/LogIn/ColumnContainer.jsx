import styles from  './ColumnContainer.module.css';

const ColumnContainer = (props) => {
  return (
    <div className={styles.columnContainer}>
      {props.children}
    </div>
  )
}

export default ColumnContainer