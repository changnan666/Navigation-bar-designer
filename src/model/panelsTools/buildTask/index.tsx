import React, { useState } from 'react'
import styles from './index.scss'

export default () => {
	const [building] = useState(false)

	return <i className={`iconfont build ${building ? styles.building : ''}`}></i>
}
