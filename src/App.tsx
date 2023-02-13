import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  
let tags:any = [
    // {
    //     id: 1, title: 'CSS',
    // },
    // {
    //     id: 2, title: 'js',
    // },
    // {
    //     id: 3, title: 'react',
    // },
    // {
    //     id: 4, title: 'html',
    // },
    // {
    //     id: 5, title: 'java',
    // },
]

  return (
   <div>
       <div>
           {
               tags.map((el: any) => {
                   return <div key={el.id}>{el.title}</div>
               })
           }

       </div>
   </div>
  )
}

export default App
