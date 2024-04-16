export default function BackgroundVideo() {
    return (
        <>
            <main className="flex flex-col justify-between items-center p-24 min-h-screen">
                <div className=" flex flex-col items-center uppercase text-white-500  tracking-wide font-medium py-8 px-0 text-2xl">
                    <h1>Ogait Ashtar - O Inverso das Coisas</h1>
                    <div className="flex items-center justify-center">
                        <button className='py-6 px-8 my-0 mx-4 bg-transparent border-2  border-white-500 text-xs hover:text-black-500 dark:hover:text-black-500 uppercase tracking-wider transition hover:bg-white-500 dark:hover:bg-white-500 cursor-pointer'>Youtube</button>
                        <button className='py-6 px-8 my-0 mx-4 bg-transparent border-2 border-white-500 text-xs hover:text-black-500 dark:hover:text-black-500 uppercase tracking-wider transition hover:bg-white-500 dark:hover:bg-white-500 cursor-pointer'>Spotify</button>
                    </div>
                    <video src={require('../../../../public/video.mp4')} 
                           autoPlay                            
                           loop 
                           muted
                           className='absolute top-0 -z-50 w-[100%] h-[80%] object-cover' />
                </div>

            </main>
        </>
    )
}