import { useState } from 'react'
import { ThumbsUp, Trash } from 'phosphor-react'

import { Avatar } from './Avatar'
import styles from './Comment.module.css'
  
interface CommentProps { 
  content: string;
  onDeleteComment: (content: string) => void
} 

export function Comment({ content, onDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0)
  
  function handleDeleteComment(){
    onDeleteComment(content)
  }
  
  function handleLikeComment() { 
    setLikeCount(state => state + 1)
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/tiagobehenck.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Tiago Behenck</strong>

              <time title="9 de Julho às 08:13h" dateTime="2022-07-9 08:02:30">
                Cerca de 1h atrás
              </time>
            </div>

            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}