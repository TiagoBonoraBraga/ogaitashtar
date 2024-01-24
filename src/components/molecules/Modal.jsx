import Overlay from "../atoms/Overlay";
import { useState } from "react";
export default function Modal() {
    const [closeModal, setCloseModal] = useState(true);

   

    return (
        <>
            {closeModal && (<div className="flex justify-center items-center">
                <Overlay />
                <section className="w-1/2 bg-blue-200 ">
                    <p>ola</p>
                    <div>
                        <button onClick={() => setCloseModal(false)}>xxxxxx</button>
                    </div>
                </section>
            </div>)}

        </>
    )
}