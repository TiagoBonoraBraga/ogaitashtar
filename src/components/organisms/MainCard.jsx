import { cards } from "@/mocks/Cards"
import CustomTitle from "../atoms/CustomTitle";
import CustomP from "../atoms/CustomP";
import CustomLink from "../atoms/CustomLink";
import CustomImage from "../atoms/CustomImage";
import Card from "../molecules/Card";

export default function MainCard() {
    return (
        <>
            <Card>
                {cards.map((card, index) => (
                    <div key={index} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <CustomImage
                            src={card.image}
                            alt="capa do cd"
                            width={400}
                            height={300}
                        />
                        <div className="p-5">
                            <CustomTitle title={card.title} />
                            <CustomP description={card.description} />
                            <CustomLink link={card.link} />
                        </div>
                    </div>

                ))}
            </Card>
        </>
    )
}