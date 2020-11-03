import React from 'react'

const initContext = {
	actionType: '',
}

type IProps = {
	actionType: ActionType
	setActive: (value: ActionType) => void
}

export default React.createContext(initContext as IProps)
