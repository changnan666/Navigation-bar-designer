import React, { useContext } from 'react'
import { FpsContext } from 'src/context'

export default () => {
	const { version } = useContext(FpsContext)

	return (
		<div className='footer'>
			<div className='resource-loading'>
				<i className='iconfont loading'></i>
			</div>
			<div className='version-select'>
				<i className='iconfont version'></i>
				{version}
			</div>
			<div className='update-history'></div>
		</div>
	)
}
