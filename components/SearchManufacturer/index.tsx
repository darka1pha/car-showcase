'use client'
import { Combobox, Transition } from '@headlessui/react'
import Image from 'next/image'
import { Fragment, useState } from 'react'
import { SearchManufactorerProps } from 'types'
import { manufacturers } from '@constants'

const SearchManufactorer = ({
	manufacturer,
	setManufacturer,
}: SearchManufactorerProps) => {
	const [query, setQuery] = useState('')

	const filteredManufactorers =
		query === ''
			? manufacturers
			: manufacturers.filter((item) =>
					item
						.toLowerCase()
						.replace(/\s+/g, '')
						.includes(query.toLowerCase().replace(/\s+/g, ''))
			  )

	return (
		<div className='search-manufacturer'>
			<Combobox value={manufacturer} onChange={setManufacturer}>
				<div className='relative w-full'>
					<Combobox.Button className='absolute top-[14px]'>
						<Image
							src={'/car-logo.svg'}
							width={20}
							height={20}
							className='ml-4'
							alt='car logo'
						/>
					</Combobox.Button>
					<Combobox.Input
						className='search-manufacturer__input'
						placeholder='Volkswagen'
						displayValue={(manufacturer: string) => manufacturer}
						onChange={(e) => setQuery(e.target.value)}
					/>
					<Transition
						as={Fragment}
						leave='transition eaase-in suration-100'
						leaveFrom='opacity-100'
						leaveTo='opacity-0'
						afterLeave={() => setQuery('')}>
						<Combobox.Options>
							{filteredManufactorers.map((item) => (
								<Combobox.Option key={item} value={item}>
									{({ active, selected }) => (
										<li
											className={`${`relative search-manufacturer__option ${
												active ? 'bg-primary-blue text-white' : 'text-gray-900'
											}`}`}>
											{item}
										</li>
									)}
								</Combobox.Option>
							))}
						</Combobox.Options>
					</Transition>
				</div>
			</Combobox>
		</div>
	)
}

export default SearchManufactorer
