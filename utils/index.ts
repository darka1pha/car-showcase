import { CarProps } from "types"

export const fetchCars = async () => {
	const url = 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla'
	const headers = {
		'X-RapidAPI-Key': '76d3c74acbmsh09cd027bf438eb6p192b89jsn76a9d5ea89c8',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com',
	}

	const response = await fetch(url, {
		headers,
	})

	const results = await response.json()

	return results
}

export const calculateCarRent = (city_mpg: number, year: number) => {
	const basePricePerDay = 50 
	const mileageFactor = 0.1 
	const ageFactor = 0.05 

	// Calculate additional rate based on mileage and age
	const mileageRate = city_mpg * mileageFactor
	const ageRate = (new Date().getFullYear() - year) * ageFactor

	// Calculate total rental rate per day
	const rentalRatePerDay = basePricePerDay + mileageRate + ageRate

	return rentalRatePerDay.toFixed(0)
}

export const updateSearchParams = (type: string, value: string) => {
	// Get the current URL search params
	const searchParams = new URLSearchParams(window.location.search)

	// Set the specified search parameter to the given value
	searchParams.set(type, value)

	// Set the specified search parameter to the given value
	const newPathname = `${window.location.pathname}?${searchParams.toString()}`

	return newPathname
}

export const deleteSearchParams = (type: string) => {
	// Set the specified search parameter to the given value
	const newSearchParams = new URLSearchParams(window.location.search)

	// Delete the specified search parameter
	newSearchParams.delete(type.toLocaleLowerCase())

	// Construct the updated URL pathname with the deleted search parameter
	const newPathname = `${
		window.location.pathname
	}?${newSearchParams.toString()}`

	return newPathname
}

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
	const url = new URL('https://cdn.imagin.studio/getimage')
	const { make, model, year } = car

	url.searchParams.append(
		'customer',
		process.env.NEXT_PUBLIC_IMAGIN_API_KEY || ''
	)
	url.searchParams.append('make', make)
	url.searchParams.append('modelFamily', model.split(' ')[0])
	url.searchParams.append('zoomType', 'fullscreen')
	url.searchParams.append('modelYear', `${year}`)
	url.searchParams.append('angle', `${angle}`)

	return `${url}`
}
