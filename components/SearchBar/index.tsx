'use client'

import { SearchManufacturer } from '@components'
import { useState } from 'react'

const SearchBar = () => {
	const [manufacturer, setManufactorer] = useState('')
	const handleSearch = () => {}
	return (
		<form className='searchbar' onSubmit={handleSearch}>
			<div className='searchbar__item'>
				<SearchManufacturer
					manufacturer={manufacturer}
					setManufacturer={setManufactorer}
				/>
			</div>
		</form>
	)
}

export default SearchBar
