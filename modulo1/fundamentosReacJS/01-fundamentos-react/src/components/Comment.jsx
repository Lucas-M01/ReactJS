import styles from './Comment.module.css';
import { Trash, ThumbsUp } from 'phosphor-react'
import { useState } from 'react';
import { Avatar } from './Avatar'

export function Comment({ content, onDeleteComment }) {
    const [likeCount, setLikeCount] = useState(0)

    function handleLikeComment(){
        setLikeCount(likeCount + 1)
    }

    function handleDeleteComment(){
        onDeleteComment(content)
    }

    return (
    <div className={styles.comment}>
        <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/62824231?v=4" />

        <div className={styles.commentBox}>
            <div className={styles.commentContent}>
                <header>
                    <div className={styles.authorAndTime}>
                        <strong>Pedro Souza</strong>
                        <time title='19 de agosto às 06:22h' dateTime='2022-08-19 06:22:41'>Cerca de 1h atrás</time>
                    </div>

                    <button onClick={handleDeleteComment} title='Deletar comentário'>
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