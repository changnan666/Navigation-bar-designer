import { useEffect, useState } from 'react'

type EventName = 'keydown' | 'keyup' | 'keypress'

type Config = {
	preventDefault: boolean
}

export default (
	eventName: EventName,
	action?: ((code: string, e?: KeyboardEvent) => void) | Config
): string => {
	const [code, setCode] = useState('')

	useEffect(() => {
		// 统一处理 e.code 的值，便于外部使用
		const onKeybord = (e: KeyboardEvent) => {
			if (e && action && typeof action !== 'function') {
				const { preventDefault } = action
				preventDefault && e.preventDefault()
			}

			let result = ''
			const code = e.code

			if (code.startsWith('Key')) {
				result = code.replace('Key', '')
			} else if (code.startsWith('Arrow')) {
				result = code.replace('Arrow', '')
			} else {
				result = code
			}

			if (typeof action === 'function') action(result, e)
			setCode(result)
		}

		window.addEventListener(eventName, onKeybord)
		return () => {
			window.removeEventListener(eventName, onKeybord)
		}
	}, [eventName, action])

	return code
}
