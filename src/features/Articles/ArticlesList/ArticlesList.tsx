import useArticlesQuery from './api'
import ArticleCard  from '../Article/ArticleCard'

const ArticlesList = () => {
	const {data, isError} = useArticlesQuery()

	console.log('articles', data)

	if (isError) {
		return <div>error, try later...</div>
	}

	return (
		<div className='max-w-[1280px] m-auto  pt-8 pb-16 px-4'>
			<h1 className='m-auto text-[2rem] py-8 text-gray-500 text-center mb-8'>News</h1>
			<div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-16 gap-y-20'>
				{data?.map(a => <ArticleCard articleId={a.id} key={a.id} title={a.title}  />)}				
			</div>
		</div>

	)
}

export default ArticlesList