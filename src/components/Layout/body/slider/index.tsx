import React, { useContext } from 'react'
import { CanvasContext } from 'src/context'
import { slider } from 'src/model'
import CanvasColorPicker from './canvasColorPicker'

export default () => {
	const { actionType, setActive } = useContext(CanvasContext)

	return (
		<div className='slider'>
			{slider.map((item, i) => (
				<div
					className={`slider-item${item.icon === actionType ? ' active' : ''}`}
					key={i}
					onClick={() => {
						if (item.icon === actionType) {
							setActive('')
						} else {
							setActive(item.icon as ActionType)
						}
					}}
				>
					<i className={`iconfont ${item.icon}`} title={item.tip} />
				</div>
			))}
			<div className='slider-item'>
				<CanvasColorPicker />
			</div>
		</div>
	)
}
