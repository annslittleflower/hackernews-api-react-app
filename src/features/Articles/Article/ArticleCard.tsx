import {Link} from "react-router-dom";
import {getRandomInt} from "@/common/utils/helpers"

type Props = {
	articleId: number
	title: string
}

const Tag = ({text}: {text: string}) => {
	return (
		<div className="font-light text-sm uppercase inline-flex bg-gray-400 mr-4 p-2 text-white ">
			{text}
		</div>
	)
}

const ArticleCard = ({ articleId, title }: Props) => {
	// whole card should redirect or only blue text?
	// if we need to click on tags - better to do redirect on blue text
	return (
		<Link to={`articles/${articleId}`} className="group">
			<img src={`artcover${getRandomInt(4)}.jpeg`}  className="bg-cover"/>
			<div className="group-hover:bg-white group-hover:px-4 py-4">
				<div className="mb-6 font-bold text-blue-400 text-xl cursor-pointer">{title}</div>
				<div className="mb-10 text-gray-500 font-light ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu eleifend libero. Maecenas lacinia dui eget ligula euismod consectetur. Aenean sit amet nulla malesuada, pulvinar mauris scelerisque, convallis erat. Proin ac mollis erat. Pellentesque et tellus ac mauris consequat lacinia. Orci varius natoque penatibus et </div>
				<div>
					<Tag text="gaming" />
					<Tag text="WOW" />
				</div>
			</div>
		</Link>
	)
}

export default ArticleCard
