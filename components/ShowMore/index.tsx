'use client'

import CustomButton from '@components/CustomButton'
import { useRouter } from 'next/navigation'
import { ShowMoreProps } from 'types'
import { updateSearchParams } from 'utils'

const ShowMore = ({ pageNumber, isNext }: ShowMoreProps) => {
	const router = useRouter()

	const handleNavigation = () => {
		const newLimit = (pageNumber + 1) * 10
		const newPathname = updateSearchParams('limit', newLimit.toLocaleString())
		router.push(newPathname)
	}

	return (
		<div className='w-full mt-10 gap-5 flex-center'>
			{isNext && (
				<CustomButton
					title='Show More'
					btnType='button'
					containerStyles='bg-primary-blue rounded-full text-white'
					handleClick={handleNavigation}
				/>
			)}
		</div>
	)
}

export default ShowMore
