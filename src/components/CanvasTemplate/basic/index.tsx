/*
 * @Author: LeeChar
 * @Date: 2020-09-27 07:06:28
 * @LastEditTime: 2020-09-30 05:13:23
 * @LastEditors: LeeChar
 * @Description: 画布的基础能力：拖拽、缩放
 * @FilePath: \fps\src\components\CanvasTemplate\basic\index.tsx
 */
import React, { MouseEventHandler, useContext, useState } from 'react'
import styles from './index.scss'
import { useMouseWhell, useKeybord } from 'src/hooks'
import { CanvasContext } from 'src/context'

let pressSpace = false

export default ({ children }: FC) => {
	const [pressSpaceState, setPressSpaceState] = useState(false)
	const { actionType } = useContext(CanvasContext)
	const drawIng = actionType !== '' && actionType !== 'select'

	useKeybord('keypress', code => {
		if (code === 'Space') {
			pressSpace = true
			setPressSpaceState(true)
		}
	})

	useKeybord('keyup', code => {
		if (code === 'Space') {
			pressSpace = false
			setPressSpaceState(false)
		}
	})

	const setContainer = useMouseWhell((v, e) => {
		const { altKey } = e
		if (altKey) {
			console.log('缩放')
		}
	})

	const onMouseMove: MouseEventHandler = e => {
		if (pressSpace) {
			console.log('拖拽')
		}
	}

	const className = `${styles.container} ${
		pressSpaceState ? 'press-space' : ''
	} ${drawIng ? 'draw-ing' : ''}`

	return (
		<div className={className} ref={setContainer} onMouseMove={onMouseMove}>
			{children}
		</div>
	)
}
