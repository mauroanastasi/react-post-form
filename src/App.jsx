import { useState } from 'react'
import axios from 'axios'

function App() {
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    text: "",
    updates: false
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.type === `checkbox` ? e.target.checked : e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts", formData).then((resp) => {
      console.log(resp.data)
    })
  }

  return (
    <>
      <form onSubmit={handleSubmit} className='border rounded bg-light p-4'>
        <div className="mb-3">
          <label for="exsampleAuthor" className="form-label">Autore del post</label>
          <input onChange={handleChange} type="text" name="name" value={formData.name} className="form-control" id="exsampleAuthor" placeholder="inserisci l'autore" />
        </div>
        <div className="mb-3">
          <label for="exsampleTitle" className="form-label">Titolo del post</label>
          <input onChange={handleChange} type="text" name="title" value={formData.title} className="form-control" id="exsampleTitle" placeholder="inserisci il titolo del post" />
        </div>
        <div className="mb-3">
          <label for="exampleFormControlTextarea1" className="form-label">Testo del post</label>
          <textarea onChange={handleChange} className="form-control" name="text" value={formData.text} id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <div className="form-check">
          <input onChange={handleChange} className="form-check-input" name="updates" checked={formData.updates} type="checkbox" id="checkIndeterminate" />
          <label className="form-check-label" for="checkIndeterminate">
            Spunta la casella se vuoi che il post venga pubblicato, in caso contrario lo salveremo tra le tue bozze.
          </label>
        </div>
        <div className='m-3'>
          <button type='submit' className='btn btn-primary' placeholder="invia dati">invia dati</button>
        </div>
      </form>
    </>
  )
}

export default App
