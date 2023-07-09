import { PencilLine } from 'phosphor-react'
import styles from './Sidebar.module.css'

export function SideBar() { 
  return (
    <aside className={styles.sidebar}>
      <img 
        className={styles.cover} 
        src="https://images.unsplash.com/photo-1580894912989-0bc892f4efd0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=50"
      />

      <div className={styles.profile}>
        <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/26827490?v=4" />

        <strong>Tiago</strong>
        <span>Software Engineer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}