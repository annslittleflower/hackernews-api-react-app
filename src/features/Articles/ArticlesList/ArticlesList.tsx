import useArticlesQuery from './api'
import ArticleCard  from '../Article/ArticleCard'

const ArticlesList = () => {
	const {data} = useArticlesQuery()

	console.log('articles', data)
	return (
		<div className='max-w-[1280px] m-auto mb-8'>
			<h1 className='m-auto text-[3rem] text-gray-500 text-center mb-8'>news</h1>
			<div className='grid grid-cols-3 gap-x-16 gap-y-20'>
				<ArticleCard />
				<ArticleCard />
				<ArticleCard />
				<ArticleCard />
				<ArticleCard />
				<ArticleCard />
				<ArticleCard />
				<ArticleCard />
				<ArticleCard />
			</div>
		</div>

	)
}

export default ArticlesList