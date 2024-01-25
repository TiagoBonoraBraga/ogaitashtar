import { useState } from "react";

const images = [

    "images/trilhasLagoinha.jpg",
    "images/streetAtletico.jpg",
    "images/guitaRebellion.jpg",
    "images/guitaKiss.jpg",
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
            <div className="fixed flex justify-center items-center overflow-hidden w-[100%] h-lvh py-40 bg-black-500/80 ">
                <button onClick={()=> ImgAction()}className="absolute top-5 right-5 text-3xl text-white-500">X</button>
                <button onClick={()=> ImgAction('previous-image')} className="bg-white-500 rounded-md p-2 mr-5">Previous</button>
                <img src={data.img} className="w-auto max-h-full max-w-full" alt="Fotos" />
                <button onClick={()=> ImgAction('next-image')} className="bg-white-500 rounded-md p-2 ml-5">Next</button>
            </div>
        }
            <div className="flex flex-wrap justify-center items-center p-10">
                {images.map((image, i) => (

                    <img
                        key={i}
                        src={image}
                        style={{ width: "40%", display: "block", margin: "5px", cursor: "pointer" }}
                        alt=""
                        onClick={()=> viewImage(image, i)}
                    />

                ))}
            </div>

        </>
    )
}