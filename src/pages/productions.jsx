import Layout from '@/components/templates/Layout';
import Head from '@/components/molecules/Head';
import AlbumCard from '@/components/organisms/AlbumCard';

export default function Productions() {
    return (
        <>
        <Layout>
            <Head />
            <div className='bg-black-500/30'>
                <AlbumCard />
            </div>
        </Layout>
        </>
    )
}