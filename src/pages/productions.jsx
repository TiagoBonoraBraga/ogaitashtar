import Layout from '@/components/templates/Layout';
import Head from '@/components/molecules/Head';
import { useState } from 'react';
import CustomImage from '@/components/atoms/CustomImage';
import AlmaNegraDiscografy from '@/components/organisms/Discografy/AlmaNegraDiscografy';
import TripaDiscografy from '@/components/organisms/Discografy/TripaDiscografy';

export default function Productions() {
    const [isVisibleAlma, setAlbumCardAlmaStatus] = useState(false);
    const [isVisibleTripa, setAlbumCardTripaStatus] = useState(false);
    return (
        <>
        <Layout>
            <Head />
            <div className='mb-20'>kkkkk</div>
            <div className='bg-black-500/30 ss:w-full '>       
                <div 
                    onClick={() => {
                        setAlbumCardAlmaStatus(!isVisibleAlma);
                    }}
                >
                    <div className="flex flex-row justify-center items-center  ring-1 ring-black-500 mb-2 rounded-sm bg-white-500 cursor-pointer ">
                                <CustomImage
                                    src="/images/logoAlma.png"
                                    alt="Logo Alma Negra"
                                    width={300}
                                    height={200}
                                />
                            </div>    
                </div>         
            {isVisibleAlma && <AlmaNegraDiscografy />}                
            </div>
            <div className='bg-black-500/30 ss:w-full mt-10'>       
                <div 
                    onClick={() => {
                        setAlbumCardTripaStatus(!isVisibleTripa);
                    }}
                >
                    <div className="flex flex-row justify-center items-center  ring-1 ring-black-500 mb-2 rounded-sm bg-white-500 cursor-pointer ">
                                <CustomImage
                                    src="/images/logoTripanossoma.jpeg"
                                    alt="Logo Tripanossoma"
                                    width={300}
                                    height={200}
                                />
                            </div>    
                </div>         
            {isVisibleTripa && <TripaDiscografy />}                
            </div>
        </Layout>

        </>
    )
}