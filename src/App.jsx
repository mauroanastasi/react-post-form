import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="mb-3">
        <label for="exsampleAuthor" className="form-label">Autore del post</label>
        <input type="text" className="form-control" id="exsampleAuthor" placeholder="inserisci l'autore" />
      </div>
      <div className="mb-3">
        <label for="exsampleTitle" className="form-label">Titolo del post</label>
        <input type="text" className="form-control" id="exsampleTitle" placeholder="inserisci l'autore" />
      </div>
      <div className="mb-3">
        <label for="exampleFormControlTextarea1" className="form-label">Testo del post</label>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" id="checkIndeterminate" />
        <label className="form-check-label" for="checkIndeterminate">
          Spunta la casella se vuoi che il post venga pubblicato, in caso contrario lo salveremo tra le tue bozze.
        </label>
      </div>
    </>
  )
}

export default App
