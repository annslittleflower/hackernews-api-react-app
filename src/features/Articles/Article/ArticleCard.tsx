import {Link} from "react-router-dom";
import {getRandomInt} from "@/common/utils/helpers"

type Props = {
	articleId?: number
}

const Tag = ({text}: {text: string}) => {
	return (
		<div className="font-light text-sm uppercase inline-flex bg-gray-400 mr-4 p-2 text-white ">
			{text}
		</div>
	)
}

const ArticleCard = ({ articleId }: Props) => {
	// whole card should redirect or only blue text?
	// if we need to click on tags - better to do redirect on blue text
	return (
		<Link to={`articles/${articleId}`} className="">
			<img src={`artcover${getRandomInt(4)}.jpeg`}  className="bg-cover"/>
			<div className="">
				<div className="my-6 font-bold text-blue-400 text-xl cursor-pointer">title long tptp adwad wda</div>
				<div className="mb-10 text-gray-500 font-light ">text long awd wd awd awd wad lkawd kladlkw </div>
				<div>
					<Tag text="gaming" />
					<Tag text="WOW" />
				</div>
			</div>
		</Link>
	)
}

export default ArticleCard
