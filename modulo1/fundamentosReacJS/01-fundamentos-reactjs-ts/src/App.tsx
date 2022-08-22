import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'

import styles from './App.module.css'
import './global.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/Lucas-M01.png',
      name: 'Lucas Montenegro',
      role: 'Student',
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'},
      {type: 'link', content: '#novoprojeto #nlw #rocketseat'},
    ],
    publishedAt: new Date('2022-08-19 06:22:41')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/62824231?v=4',
      name: 'Pedro Souza',
      role: 'Desenvolvedor Web',
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Tenho um amigo que precisa de um estagio, se poderem ajudar deixa um comentario'},
      {type: 'link', content: '#estagio #emprego #estudante'},
    ],
    publishedAt: new Date('2022-08-19 07:30:22')
  }
];

export function App() {
  return (
    <div className="App">
      <Header/>
      
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post 
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}