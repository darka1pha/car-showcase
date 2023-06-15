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

export interface CustomFilterProps {
	title: string
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
