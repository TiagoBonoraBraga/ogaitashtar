import CustomH1 from "../../atoms/CustomH1";
import CustomP from "../../atoms/CustomP";
export default function ImageGrid() {
    return (
        <>
        <section className="p-10 ss:p-1">
            <div className="flex justify-center items-center ss:h-[50%]  ">
                <div className="w-full  ss:h-[50%] grid grid-cols-3 grid-rows-1 ss:flex ss:flex-col justify-center  ss:p-3 ">
                    <div className=" col-span-2  row-span-1 bg-black-500 text-white-500 w-[99.7%] h-[99.6%] ss:h-[50%]  p-5">
                        <CustomH1 title="Ogait Ashtar" />
                        <CustomP description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc." />
                    </div>
                    <div className="col-span-1 row-span-1 m-1 ss:m-0" >
                        <img src="images/guitaRebellion.jpg" className="w-full h-full object-cover" alt="" />
                    </div>
                </div>

            </div>
            <div className="flex flex-row justify-center items-center mb-10 ">
                <div className=" m-1 ss:hidden" >
                    <img src="images/29.jpg" className="w-full h-full " alt="" />
                </div>
                <div className=" m-1 ss:hidden" >
                    <img src="images/rollerTrue.jpg" className="w-full h-full" alt="" />
                </div>
                <div className=" m-1 ss:hidden" >
                    <img src="images/streetAtletico.jpg" className="w-full h-full " alt="" />
                </div>
                <div className=" m-1 ss:hidden" >
                    <img src= "images/paranagua.jpg" className="w-full h-full " alt="" />
                </div>
            </div>
        </section>

        </>
    )
}