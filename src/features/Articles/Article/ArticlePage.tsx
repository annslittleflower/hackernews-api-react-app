import { useParams } from "react-router-dom";
import useArticleQuery from './api'
import {getRandomInt} from "@/common/utils/helpers"


type Comment = {
	by: string
	parent: number // articleId
	text: string
	time: number
	type: string // "comment"
}

// When the form is submitted display the generated comment (i.e. JSON object) in the
// browser console.

const ArticlePage = () => {
	const p = useParams()

	const {data} = useArticleQuery(+p.articleId!)

	if (!data) {
		return <div>error...</div>
	}
	
	return (
		<div>
			<h1 className="text-3xl p-8">{data.title}</h1>
			<img src={`../artcover${getRandomInt(4)}.jpeg`}  className="bg-cover p-8"/>

			<p className="text-2xl p-8 max-w-screen-md">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu eleifend libero. Maecenas lacinia dui eget ligula euismod consectetur. Aenean sit amet nulla malesuada, pulvinar mauris scelerisque, convallis erat. Proin ac mollis erat. Pellentesque et tellus ac mauris consequat lacinia. Orci varius natoque penatibus et 
			</p>
			<div className="border-2 m-8 p-8">
				comments
			</div>
		</div>
  )
}

export default ArticlePage
