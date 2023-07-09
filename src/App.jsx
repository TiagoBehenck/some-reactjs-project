import { Header } from "./components/Header"
import { SideBar } from "./components/Sidebar"
import { Post } from "./components/Post"

import './global.css'
import styles from './App.module.css'

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <SideBar>
          sidebar
        </SideBar>
        <main>
          <Post />
        </main>
      </div>
    </>
  )
}
