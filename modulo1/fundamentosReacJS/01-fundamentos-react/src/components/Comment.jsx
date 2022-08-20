import styles from './Comment.module.css';
import { Trash, ThumbsUp } from 'phosphor-react'
import { Avatar } from './Avatar'

export function Comment({ content }) {
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

                    <button title='Deletar comentário'>
                        <Trash size={24} />
                    </button>
                </header>

                <p>{content}</p>
            </div>

            <footer>
                <button>
                    <ThumbsUp />
                    Aplaudir <span>2</span>
                </button>
            </footer>
        </div>
    </div>
  )
}