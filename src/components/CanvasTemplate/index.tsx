import React, { useContext, useEffect } from 'react'
import Basic from './basic'
import styles from './index.scss'
import { useDrawEvent } from 'src/hooks'
import { CanvasContext } from 'src/context'
import { rect, table, ellipse, line, layout, swiper } from './draw'

const drawMap = {
	rect,
	ellipse,
	table,
	line,
	layout,
	swiper,
}

const notNeedDraw = ['', 'select']

type IProps = {
	elements: FPS.PagesElementsItem[]
}

export default ({ elements }: IProps) => {
	console.log(elements, 'elements')

	const { actionType } = useContext(CanvasContext)
	const { startEvent, changeEvent, containerRef, newGraphics } = useDrawEvent()

	useEffect(() => {
		if (!startEvent || !changeEvent) return
		if (notNeedDraw.some(item => item === actionType)) return

		const setBasicStyle = () => {
			const { offsetX: startOffsetX, offsetY: startOffsetY } = startEvent
			const { offsetX: endOffsetX, offsetY: endOffsetY } = changeEvent

			const width = endOffsetX - startOffsetX + 'px'
			const height = endOffsetY - startOffsetY + 'px'

			const style: any = {
				width,
				height,
			}

			style.left = startOffsetX + 'px'
			style.top = startOffsetY + 'px'
			style.position = 'absolute'
			style.backgroundColor = 'red'

			for (let attr in style) {
				// @ts-ignore
				newGraphics!.style[attr] = style[attr]
			}
		}

		if (newGraphics) {
			setBasicStyle()

			const drawType = actionType as DrawType
			drawMap[drawType](newGraphics)
		}
	}, [startEvent, changeEvent, actionType, newGraphics])

	return (
		<div className={styles.container}>
			<Basic>
				<div ref={containerRef} className={styles.content} />
			</Basic>
		</div>
	)
}
