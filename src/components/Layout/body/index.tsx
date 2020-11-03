import React from 'react'
import { Canvas } from 'src/model'
import Slider from './slider'
import Panel from './panel'

export default () => {
	return (
		<div className='body'>
			<Slider />
			<Canvas />
			<Panel />
		</div>
	)
}
