import { footerLinks } from '@constants'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
	return (
		<footer className='flex flex-col text-blue-100 mt-5 border-t border-gray-100'>
			<div className='flex max-md:flex-col flex-wrap justify-between ga-5 sm:px-16 px-6 py-10'>
				<div className='flex flex-col justify-start items-start gap-6'>
					<Image src='/logo.svg' alt='logo' width={118} height={18} />
					<p className='text-base text-gray-700'>
						Carhub 2023 <br />
						All rights reserved &copy;
					</p>
				</div>
				<div className='footer__links'>
					{footerLinks.map((link) => (
						<div key={link.title} className='footer__link'>
							<h3 className='font-bold text-gray-700'>{link.title}</h3>
							{link.links.map((item) => (
								<Link
									key={item.title}
									href={item.url}
									className='text-gray-500'>
									{item.title}
								</Link>
							))}
						</div>
					))}
				</div>
			</div>
			<div className='flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10'>
				<p className='text-gray-700'>@2023 CarHub. All Rights Reserved</p>
				<div className='footer__copyrights-link'>
					<Link href={'/'} className='text-gray-500'>
						Privacy Policy
					</Link>
					<Link href={'/'} className='text-gray-500'>
						Terms of Use
					</Link>
				</div>
			</div>
		</footer>
	)
}

export default Footer