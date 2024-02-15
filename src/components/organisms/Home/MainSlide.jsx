import { useState } from 'react';
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs';
import {RxDotFilled} from 'react-icons/rx';

export default function MainSlide() {

    const slides = [
        {
           url: "/images/guitaKiss.jpg "
        },
        {
            url: "/images/guitaRebellion.jpg"
        },
        {
            url: "/images/streetAtletico.jpg"
        },
        {
            url: "/images/trilhasLagoinha.jpg"
        }
    ]
    // console.log("esses", slides);

    const [currentIndex, SetCurrentIndex] = useState(0);

    setTimeout(() => {
        prevSlide()
      }, "4000");

      const prevSlide = () => {
          const isFirstSlide = currentIndex === 0;
          const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
          SetCurrentIndex(newIndex);
      }

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        SetCurrentIndex(newIndex);
    }

    const goToSlide = (slideIndex) => {
        SetCurrentIndex(slideIndex);
    }

// usar com Next.js e Image tag - const slides = [image, image, image] -  <Image src={slides[currentIndex]} alt="ImageDescription" width={YourSSWidth} height={YourSSHeight}/> */
   
    return (
        <>
        <div className="max-w-[1400px] h-[600px] w-full m-auto py-20 px-4 relative group ">
                <div style={{backgroundImage: `url(${slides[currentIndex].url})`}} className="w-full h-full rounded-2xl bg-center bg-cover duration-500 mt-10 mb-9"
                ></div>
            {/* Left Arrow*/}
            <div className="hidden group-hover:block absolute top=[50%] -translate-x-0 translate-y-[-450%] left-5 text-2xl rounded-full p-2  text-white-500 cursor-pointer">
                <BsChevronCompactLeft onClick={prevSlide} size={50}/>
            </div>
            {/* Right Arrow*/ }
            <div className="hidden group-hover:block absolute top=[50%] -translate-x-0 translate-y-[-450%] right-5 text-2xl rounded-full p-2  text-white-500 cursor-pointer">
                <BsChevronCompactRight onClick={nextSlide} size={50}/>
            </div>
            <div className='flex top-4 justify-center py-2'>
                {slides.map((slide, slideIndex) => (
                    <div key={slideIndex} onClick={() => goToSlide(slideIndex)} className='text-2xl cursor-pointer'>
                        <RxDotFilled />
                    </div>
                ))}
            </div>
        </div>
        </>
    )
}