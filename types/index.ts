import { Dispatch, MouseEventHandler, SetStateAction } from 'react'

export interface CustomButtonProps {
	title: string
	containerStyles?: string
	handleClick?: MouseEventHandler<HTMLButtonElement>
	btnType?: 'button' | 'submit'
	textStyles?: string
	rightIcon?: string
	isDisabled?: boolean
}

export interface OptionProps {
	title: string
	value: string
}

export interface CustomFilterProps {
	title: string
	options: OptionProps[]
}

export interface SearchManufactorerProps {
	manufacturer: string
	setManufacturer: Dispatch<SetStateAction<string>>
}

export interface CarProps {
	city_mpg: number
	class: string
	combination_mpg: number
	cylinders: number
	displacement: number
	drive: string
	fuel_type: string
	highway_mpg: number
	make: string
	model: string
	transmission: string
	year: number
}

export interface CarDetailsProps {
	isOpen: boolean
	car: CarProps
	closeModal: () => void
}

export interface FilterProps {
	manufacturer: string
	year: number
	fuel: string
	limit: number
	model: string
}

export interface ShowMoreProps {
	pageNumber: number
	isNext: boolean
}
