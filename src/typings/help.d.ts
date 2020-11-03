declare const $on: (eventName: string, cb: (arg: any) => void) => void
declare const $off: (eventName: string, cb: (arg: any) => void) => void
declare const $emit: (eventName: string, arg: any) => void

declare interface FC {
	children?: React.ReactNode
	className?: string
}
