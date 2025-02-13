import { useState } from 'react'
import ElementMultimedia from './Componentes/ElementMultimedia'
import './App.css'
import Loader from './Componentes/Loader'
import Footer from './Componentes/Footer'



function App() {
  const [url, setUrl ]= useState("")
  const [media, setMedia] = useState([])
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) =>{
    console.log(media);
    e.preventDefault()
    setLoading(true)
    try {
      const response = await fetch("https://donwloader-api.onrender.com/api/scrape", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url})
      })
      const data = await response.json()
      if(response.ok){
        setMedia(data.media)
      }else{
        alert("URL no valida")
      }
     
    }catch (erorr){
      console.log("SE tuvo un error rn rl fetch media :", erorr)
      
    }
    setLoading(false)
  }



  return (
    <>
 
      
      { loading ? 
      <div className='flex container mx-auto flex-col content-center justify-center  font-mono sm:text-sm xs:text-xs mt-40 pb-40'>
        <Loader></Loader>
      </div>
        :
        <div className='flex container mx-auto flex-col items-center justify-center font-mono sm:text-sm xs:text-xs mt-40'>
          <h1 className='title m-4 '>Buscador de contenido multimedia</h1>
          <p className='description m-5 '>Ingresa la URL de una página web y se extraerá el contenido multimedia de la misma. (tambien funciona para youtube)</p>
          <form onSubmit={handleSubmit} className='input-form'>
        <input
          type='text'
          placeholder="Ingresa la URL de la web"
          value={url}
          onFocus={(e)=> e.target.value = ""}
          onChange={(e) => setUrl(e.target.value)}
          required
          className='input '
        />
        <button id='btn' className="button" disabled={loading}>{loading ?"Cargando....." :"Buscar "}</button>
      </form>
        <ElementMultimedia media={media} />
        </div>
        
        }
     <Footer></Footer>
    </>
  )
}

export default App
