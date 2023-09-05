import styles from './Button.module.css'


function Button(props) {
  return (
    <div className='btnDiv'>
      <button className={props.isOutline ? styles.outlineBtn : styles.primaryBtn}>
        {props.icon} {props.text}
      </button>
     
    </div>
  )
}

export default Button
