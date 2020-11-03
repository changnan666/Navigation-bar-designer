import { useEffect, useState } from 'react'

export default (onChange: (v: string, e: WheelEvent) => void) => {
	const [container, setContainer] = useState<HTMLElement | null>(null)

	useEffect(() => {
		const onMouseWhell = (e: WheelEvent) => {
			const { deltaY } = e
			if (deltaY > 0) {
				onChange('top', e)
			} else {
				onChange('bottom', e)
			}
		}

		if (container) {
			container.addEventListener('wheel', onMouseWhell)

			return () => {
				container.removeEventListener('wheel', onMouseWhell)
			}
		}
	}, [container, onChange])

	return setContainer
}
