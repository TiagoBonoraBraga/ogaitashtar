
const images = [
   
    "images/trilhasLagoinha.jpg",       
    "images/streetAtletico.jpg",
    "images/guitaRebellion.jpg",
    "images/guitaKiss.jpg",
]

export default function ImageGallery() {
    return (
        <>
            
                <div className="flex flex-wrap justify-center items-center p-10">
                    {images.map((image, i) => (
                        
                            <img
                                key={i}
                                src={image}
                                style={{ width: "40%", display: "block", margin: "5px" }}
                                alt=""
                            />
                        
                    ))}
                </div>
          
        </>
    )
}