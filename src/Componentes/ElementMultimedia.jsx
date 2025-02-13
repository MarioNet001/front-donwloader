
export default function ElementMultimedia({ media }) {
    const ElementMedia = media
    
    const downloadMedia = async(item) =>{
        const link = document.createElement('a')
        if (item.type === 'image') {
             try {
                const response = await fetch(item.path,{
                    method: 'GET',
                    mode: 'cors',
                }) 
                const blob = await response.blob()
                // crear una URL temporal
                const url =window.URL.createObjectURL(blob)
                link.href = url
                link.download = item.path.split('/').pop()
                link.click()
                link.remove()
                window.URL.revokeObjectURL(url)
             } catch (error) {
                 console.log("Error al descargar la imagen", error)
             }
            }else {
              link.href = item.path;
              link.target = '_blank';
              link.download =item.path.split('-').pop() ;
              link.click();
              link.remove();
          }
      } 

    return (
        <div className="grid sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-5 px-5 py-5 max-h-0.5 max-w-7xl mx-4 my-4">
        {ElementMedia.length > 0 ? (            
          ElementMedia.map((item, index) => (
              <div key={index} className="  w-full h-40 rounded-xl mb-6">
              {item.type === 'image' && (
                <div className="w-24 h-24 rounded-xl overflow-hidden">
                  <a href={item.path} download target="_blank" className="media-preview w-full h-full rounded-xl">
                  <img src={item.path} alt="Preview" className="" />
                  </a>
                </div>
               
              )}           
              {item.type === 'video' && (
                <div className="w-68 h-40 rounded-xl overflow-hidden">
                <video controls className="media-preview w-full   rounded-xl">
                  <source src={item.path} type="video/mp4" />
                  Tu navegador no soporta este formato de video.
                </video>
                </div>
              )}
              <button onClick={() => downloadMedia(item)} className="">
                Descargar
              </button>
            </div>          
          ))
        ) : (
          <p></p>
        )}
      </div>
  )
}
