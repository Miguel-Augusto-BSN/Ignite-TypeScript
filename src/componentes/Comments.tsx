import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comments.module.css'
import { Avatar } from './Avatar'
import { useState } from 'react';

interface CommentProps {
    content: string;
    deleteComment: (comment: string) => void;
}

export function Comments ({content, deleteComment}: CommentProps) {
    const [likeCount, setLinkCount] = useState(0);

    function handleDeleteComment(){

    deleteComment(content);
    }

    function handleLikeComment(){
        setLinkCount(likeCount + 1);
    }
    return ( 
        <div className={styles.comment}>
            <Avatar 
                hasBorder={false}
                src="https://github.com/Miguel-Augusto-BSN.png" 
                alt="" 
                
            />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong> Miguel Augusto</strong>
                            <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:30">Cerca de 1h atrás</time>
                        </div>
                        
                        <button onClick={handleDeleteComment} title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{content}</p>
                </div>
                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp size={20}/>
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}