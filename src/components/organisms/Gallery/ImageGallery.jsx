import { useState } from "react";

const images = [
    "images/trilhasLagoinha.jpg",    
    "images/guitaKiss.jpg",  
    "images/streetAtletico.jpg",    
    "images/guitaRebellion.jpg", 
    "images/eupedrera.jpg",
    "images/paranagua.jpg",
    // "images/rollerTrue.jpg" ,  
    "images/29.jpg",
    "images/bocaGuitar.jpg",
    "images/casa.jpg",
    "images/guitaespada.jpg",
    "images/morro.jpg",
    "images/tiagoBass.jpg" 
]

const images2 = [
    "images/29.jpg",
    "images/bocaGuitar.jpg",
    "images/casa.jpg",
    "images/guitaespada.jpg",
    "images/morro.jpg",
    "images/tiagoBass.jpg"
]

export default function ImageGallery() {

const [data, setData] = useState({img: '', i: 0});

//função para abrir a foto
const viewImage = (img, i) => {
    // console.log(img, i)
    setData({img, i})
}

// função das funcionabilidades dos botões
const ImgAction = (action) => {
    let i = data.i;
    if(action === 'next-image'){
        setData({img: images[i + 1], i: i + 1});
    }
    if(action === 'previous-image'){
        setData({img: images[i - 1], i: i - 1});
    }
    if(!action){
        setData({img: '', i: 0});
    }
}

    return (
        <>
        {data.img &&
            <div className="fixed flex justify-center items-center overflow-hidden h-screen w-full bg-black-500/80 ">
                <button onClick={()=> ImgAction()}className="absolute top-7 right-5 text-2xl text-white-500 hover:text-red-500 ss:hover:text-red-500">X</button>
                    <button onClick={()=> ImgAction('previous-image')} className="font-semibold bg-white-500 rounded-md p-2 mr-5 ss:absolute ss:left-1 ss:top-[340px] ">Back</button>
                <img src={data.img} className=" mb-40 p-5 mt-36 ss:mt-0 ss:p-1 ss:mb-64 rounded-md w-[50%] " alt="Fotos" />
                <button onClick={()=> ImgAction('next-image')} className="font-semibold bg-white-500 rounded-md p-2 ml-5 ss:absolute ss:right-1 ss:top-[340px] ">Próx</button>
            </div>
        }
            {/* <h1 className=" flex flex-row justify-center items-center py-10 text-3xl lg font-semibold bg-gray-200 ring-1 ring-black-500">Trilhas e Inline-Street</h1> */}
            <div className="flex flex-wrap justify-center items-center p-2 w-full ">
                {images.map((image, i) => (
                    <img
                        key={i}
                        src={image}
                        className="w-[40%] ss:w-[100%] block m-1 cursor-pointer rounded-2xl "
                        alt=""
                        onClick={()=> viewImage(image, i)}
                    />
                ))}
            </div>     

        </>
    )
}