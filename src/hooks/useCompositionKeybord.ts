import { useEffect } from 'react'
/*
 * @Author: LeeChar
 * @Date: 2020-10-08 05:25:15
 * @LastEditTime: 2020-10-08 11:17:38
 * @LastEditors: LeeChar
 * @Description: 键盘组合按键处理
 * @FilePath: \fps\src\hooks\useCompositionKeybord.ts
 */
import { useKeybord } from '.'

type Keybord = 'ctrl + s'

let key = ''
export default (keybord: Keybord, action: () => void) => {
	const downCode = useKeybord('keydown', { preventDefault: true })
	const upCode = useKeybord('keyup')

	useEffect(() => {
		key += downCode

		// if (key === '')
		console.log(key)
	}, [downCode, action, keybord])

	useEffect(() => {
		key = ''
	}, [upCode])

	return key
}
