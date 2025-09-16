import React, { useState } from 'react'
import "./index.css"

const App = () => {
  const [img, setImg] = useState('')
  const [title, setTitle] = useState('');
  const [discription, setDesc] = useState('');
  const [blog, setBlog] = useState([]);
  const [editIndex,setEditIndex] = useState(null)
  const handlesubmit = (e) => {
    e.preventDefault()
    if(!title || !discription){
      alert("Please the inputs")
      return
    }
    let newBlog = { img, title, discription }

    if(editIndex !== null){
      let updatedBlog = [...blog];
      updatedBlog[editIndex] = newBlog;
      setBlog(updatedBlog)
      setEditIndex(null)
    }else{
      setBlog([...blog, newBlog])
    }
    
    setTitle("")
    setDesc("")
    setImg("")
  }
  const handleDelete=(index)=>{
    let updatedBlog = blog.filter((_ , i)=> i !== index);
    setBlog(updatedBlog)
  }
  const handleEdit= (index)=>{
    const blogToEdit = blog[index]
    setImg(blogToEdit.img);
    setTitle(blogToEdit.title);
    setDesc(blogToEdit.discription);
    setEditIndex(index)
  }
  return (
    <>
      <div className='cotainer'>
        <h1>Blog Posts</h1>
        <section className=''>
          <form onSubmit={handlesubmit}>
            <label>Image</label>
            <input type="text" value={img} onChange={(e)=>setImg(e.target.value)}/>
            <label> Blog Title</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            <label > Description</label>
            <textarea type="text" value={discription} onChange={(e) => setDesc(e.target.value)} />
            <button type='submit'>{editIndex !==null ? "Update" : "Add"}</button>
          </form>

        </section>
        <section>
          {blog.map((ele, index) => {
            return <div className='card' key={index}>
              <img src={ele.img} alt={ele.title} />
              <h3>{ele.title}</h3>
              <p>{ele.discription}</p>
              <button onClick={()=>handleEdit(index)}>Edit</button>
              <button onClick={()=>handleDelete(index)}>Delete</button>
            </div>
          })}
        </section>
      </div>

    </>

  )
}

export default App