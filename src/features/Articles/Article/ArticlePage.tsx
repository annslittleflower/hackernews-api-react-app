import { useParams } from "react-router-dom";
import useArticleQuery from './api'
import {getRandomInt} from "@/common/utils/helpers"
import Comments from './Comments'

const ArticlePage = () => {
	const p = useParams()

	const {data, isLoading} = useArticleQuery(+p.articleId!)

	if (isLoading) {
		return <div>loading...</div>
	}

	return (
		<div>
			{/* TODO remove optional chaining, fix public path for images */}
			<h1 data-testid="title" className="text-3xl p-8">{data?.title}</h1>
			<img src={`../artcover${getRandomInt(4)}.jpeg`}  className="bg-cover p-8 max-h-[700px]"/>

			<p className="text-2xl p-8 max-w-screen-md">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu eleifend libero. Maecenas lacinia dui eget ligula euismod consectetur. Aenean sit amet nulla malesuada, pulvinar mauris scelerisque, convallis erat. Proin ac mollis erat. Pellentesque et tellus ac mauris consequat lacinia. Orci varius natoque penatibus et 
			</p>
			
			<Comments articleId={+p.articleId!} />
		</div>
  )
}

export default ArticlePage
