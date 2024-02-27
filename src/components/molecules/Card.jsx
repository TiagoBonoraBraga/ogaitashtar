export default function Card({ children }) {
    return (
        <>
            <section className="flex flex-wrap justify-center items-center p-20  ss:p-5 gap-5">
                {children}
            </section>
        </>
    )
}