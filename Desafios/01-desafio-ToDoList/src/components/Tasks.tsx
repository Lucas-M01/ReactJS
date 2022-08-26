import { Check, Circle, Trash } from 'phosphor-react'
import styles from './Tasks.module.css'

interface TasksProps{
    id: string;
    content: string;
    isCompleted?: boolean;
    onDeleteTask: (id: string) => void;
    onCompleteTask: (id: string) => void;
}

export function Tasks({ id ,content, onDeleteTask, isCompleted, onCompleteTask }: TasksProps ) {
    function handleDeleteTask() {
        onDeleteTask(id);
    }

    function handleCompleteTask() {
        onCompleteTask(id);
    }
    
    return(
        <main>
            <div className={styles.info}>
                <p className={styles.tasksCreated}>
                    Tarefas criadas 
                    <span className={styles.counter}>
                        2
                    </span>
                </p>
                <p className={styles.taskClompleted}>
                    Concluídas 
                    <span className={styles.counter}>
                        1 de 2
                    </span>
                </p>
            </div>
            <div className={styles.tasks}>
                <ul>
                    <li>
                        <span className={styles.check}>
                            <Circle size={24} />
                        </span>
                        <p>fsdfsdfdsfdsf</p>
                        
                        <span onClick={handleDeleteTask} className={styles.trash}>
                            <Trash size={20} />
                        </span>
                    </li>
                    
                    <li>
                        <span className={styles.checkCompleted}>
                            <Check size={15} />
                        </span>
                        <p className={styles.line}>fsdfsdfdsfdsf</p>
                        <span onClick={handleDeleteTask} className={styles.trash}>
                            <Trash size={20} />
                        </span>
                    </li>
                </ul>
            </div>
        </main>
    )
}