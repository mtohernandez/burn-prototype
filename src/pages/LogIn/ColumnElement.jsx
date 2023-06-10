import styles from './ColumnElement.module.css';

const ColumnElement = (props) => {
  return (
    <div className={styles.columnElement} style={{flex: props.order}}>
      {props.children}
    </div>

  )
}

export default ColumnElement