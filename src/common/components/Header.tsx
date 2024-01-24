import {Link} from "react-router-dom";
import Logo from '@/assets/Logo.png'

const Header = () => {
	return (
		<header className="border-b-2 min-h-20 mb-4 px-8 sticky top-0 bg-white flex items-center justify-between">
			<Link to='/'>
				<img src={Logo} />
			</Link>
			<div className="hidden lg:flex gap-4 text-lg uppercase text-gray-600">
				<div>
					about us
				</div>
				<div>
					what we do
				</div>
				<div>
					our stuff
				</div>
				<div>
					contact us
				</div>
			</div>
		</header>
	)
}

export default Header
