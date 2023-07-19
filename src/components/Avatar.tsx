import styles from './Avatar.module.css'

interface AvatarProps { 
  hasBorder?: boolean;
  src: string;
  alt?: string;
}

export function Avatar({ hasBorder = true, src, alt }: AvatarProps) {
  const style = hasBorder ? styles.avatarWithBorder : styles.avatar
  return ( 
    <img 
      className={style}
      src={src}
      alt={alt}
    />
  )
}