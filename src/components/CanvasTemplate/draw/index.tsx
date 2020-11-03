export { default as ellipse } from './ellipse'
export { default as table } from './table'
export { default as line } from './line'
export { default as layout } from './layout'
export { default as swiper } from './swiper'
export { default as rect } from './rect'

export default (style: React.CSSProperties) => {
	const div = document.createElement('div')

	for (let key in style) {
		const attr = key as keyof typeof style
		let value = style[attr]
		if (typeof value === 'number') value = value + 'px'
		// @ts-ignore
		div.style[key] = value
		div.style.backgroundColor = 'red'
	}

	return div
}
