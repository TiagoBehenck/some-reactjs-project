import styles from './Post.module.css'

export function Post() {
  return ( 
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://github.com/tiagobehenck.png" />
          <div className={styles.authoInfo}>
            <strong>Tiago</strong>
            <span>Software Engineer</span>
          </div>
        </div>

        <time title="9 de Julho às 08:13h" dateTime="2022-07-9 08:02:30">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p> Fala galeraa 👋</p>

        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

        <p>👉 <a href="">jane.design/doctorcare</a></p>

        <p><a href="">#novoprojeto #nlw #rocketseat</a></p>
      </div>
    </article>
  )
}
