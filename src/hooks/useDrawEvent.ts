import { useEffect, useState } from 'react'

export default () => {
	const [startEvent, setStartEvent] = useState<MouseEvent | null>(null)
	const [changeEvent, setChangeEvent] = useState<MouseEvent | null>(null)
	const [container, containerRef] = useState<HTMLDivElement | null>(null)

	const [newGraphics, setNewGraphics] = useState<HTMLDivElement | null>(null)
	const [mouseIsPress, setMouseIsPress] = useState(false)

	useEffect(() => {
		const createGraphics = () => {
			const div = document.createElement('div')
			container && container.append(div)

			setNewGraphics(div)
		}

		const onMouseDown = (e: MouseEvent) => {
			setStartEvent(e)
			setMouseIsPress(true)
			createGraphics()
		}

		const onMouseMove = (e: MouseEvent) => {
			if (mouseIsPress) {
				setChangeEvent(e)
			}
		}

		const onMouseUp = (e: MouseEvent) => {
			setMouseIsPress(false)
			// setStartEvent(null)
			// setChangeEvent(null)
		}

		if (container) {
			container.addEventListener('mousedown', onMouseDown)
			container.addEventListener('mousemove', onMouseMove)
			container.addEventListener('mouseup', onMouseUp)

			return () => {
				container.removeEventListener('mousedown', onMouseDown)
				container.removeEventListener('mousemove', onMouseMove)
				container.removeEventListener('mouseup', onMouseUp)
			}
		}
	}, [container, mouseIsPress])

	return { startEvent, changeEvent, containerRef, newGraphics }
}
