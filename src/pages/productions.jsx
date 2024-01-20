import Layout from '@/components/templates/Layout';
import Head from '@/components/molecules/Head';
import AlbumCard from '@/components/organisms/AlbumCard';
import { useState } from 'react';

export default function Productions() {
    const [isVisible, setAlbumCardStatus] = useState(false);
    return (
        <>
        <Layout>
            <Head />
            <div className='bg-black-500/30 ss:w-full mt-40'>       
                <div 
                    className='cursor-pointer'
                    onClick={() => {
                        setAlbumCardStatus(!isVisible);
                    }}
                >Alma Negra</div>         
            {isVisible && <AlbumCard />}                
            </div>
        </Layout>

        </>
    )
}