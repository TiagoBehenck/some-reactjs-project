import styles from './Avatar.module.css'

export function Avatar({ hasBorder = true, src }) {
  const style = hasBorder ? styles.avatarWithBorder : styles.avatar
  return ( 
    <img className={style} src={src} />
  )
}