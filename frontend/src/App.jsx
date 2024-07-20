import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [blogs,setBlogs]=useState([]);

  async function fetchBlogs(){
    let response=await fetch("/api/blog/read");
      response=await response.json();
     setBlogs(response);
  }

  useEffect(()=>{
    fetchBlogs();
  })
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        <hr />
      </div>
      {
        (blogs)?(
          // <h1>Blogs List</h1>
           blogs.map((element,index)=>{
            return (
               <div>
                <h2>{element.heading}</h2>
                <p>{element.content}</p>
                <p>Create At: {element.createdAt}</p>
                <hr />
               </div>
            )

           })
        ):null
      }
    </>
  )
}

export default App
