/*
 * @Author: LeeChar
 * @Date: 2020-10-01 12:12:27
 * @LastEditTime: 2020-10-07 23:16:13
 * @LastEditors: LeeChar
 * @Description: 预设属性
 * @FilePath: \fps\src\components\Layout\presetHeader.tsx
 */
import React, { useContext, useEffect } from 'react'
import { CanvasContext } from 'src/context'

export default () => {
	const { actionType } = useContext(CanvasContext)

	useEffect(() => {
		console.log(actionType, 'actionType')
	}, [actionType])

	return <div className='preset-header'>自由绘制</div>
}
