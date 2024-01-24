import CardIcon from '@/assets/baseline-web-24px.png'

const FindOutBlock = () => {
	return (
		<div className="text-3xl font-light flex items-center justify-center bg-white  text-center  min-h-24 md:min-h-64">
			<img src={CardIcon} /> &nbsp;
			Find out more at &nbsp;
			<a target="_blank" href="http://www.people.com" className='text-blue-400 font-medium'>www.people.com</a>
		</div>
	)
}

export default FindOutBlock
