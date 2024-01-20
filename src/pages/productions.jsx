import Layout from '@/components/templates/Layout';
import Head from '@/components/molecules/Head';
import { useState } from 'react';
import CustomImage from '@/components/atoms/CustomImage';
import AlmaNegraDiscografy from '@/components/organisms/Discografy/AlmaNegraDiscografy';
import TripaDiscografy from '@/components/organisms/Discografy/TripaDiscografy';
import SemFuturoDiscografy from '@/components/organisms/Discografy/SemFuturoDiscografy';
import FeridaDiscografy from '@/components/organisms/Discografy/FeridaDiscografy';

export default function Productions() {
    const [isVisibleAlma, setAlbumCardAlmaStatus] = useState(false);
    const [isVisibleTripa, setAlbumCardTripaStatus] = useState(false);
    const [isVisibleSf, setAlbumCardSfStatus] = useState(false);
    const [isVisibleFerida, setAlbumCardFeridaStatus] = useState(false);
    return (
        <>
        <Layout>
            <Head />
            <div className='mb-20'>kkkkk</div>
            <div className='bg-black-500/30 ss:w-full py-5 '>       
                <div 
                    onClick={() => {
                        setAlbumCardAlmaStatus(!isVisibleAlma);
                    }}
                >
                    <div className="flex flex-row justify-center items-center  ring-1 ring-black-500 hover:ring-2 rounded-sm bg-white-500 cursor-pointer ">
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

            <div className='bg-black-500/30 ss:w-full mt-5 py-5'>       
                <div 
                    onClick={() => {
                        setAlbumCardTripaStatus(!isVisibleTripa);
                    }}
                >
                    <div className="flex flex-row justify-center items-center  ring-1 ring-black-500 hover:ring-2 rounded-sm bg-white-500 cursor-pointer ">
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
            <div className='bg-black-500/30 ss:w-full mt-5 py-5'>       
                <div 
                    onClick={() => {
                        setAlbumCardSfStatus(!isVisibleSf);
                    }}
                >
                    <div className="flex flex-row justify-center items-center  ring-1 ring-black-500 hover:ring-2 rounded-sm bg-white-500 cursor-pointer ">
                                <CustomImage
                                    src="/images/sflogo.jpg"
                                    alt="Logo Sem Futuro"
                                    width={300}
                                    height={150}
                                />
                            </div>    
                </div>         
            {isVisibleSf && <SemFuturoDiscografy />}                
            </div>
            <div className='bg-black-500/30 ss:w-full mt-5 py-5'>       
                <div 
                    onClick={() => {
                        setAlbumCardFeridaStatus(!isVisibleFerida);
                    }}
                >
                    <div className="flex flex-row justify-center items-center  ring-1 ring-black-500 hover:ring-2 rounded-sm bg-white-500 cursor-pointer ">
                                <CustomImage
                                    src="/images/logoFerida.jpeg"
                                    alt="Logo Ferida Aberta"
                                    width={300}
                                    height={200}
                                />
                            </div>    
                </div>         
            {isVisibleFerida && <FeridaDiscografy />}                
            </div>
        </Layout>

        </>
    )
}