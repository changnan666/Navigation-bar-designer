import React from 'react'

const initContext: FPS.IProps = {
	projectName: '',
	version: '',
	pagesItem: [],
	updatePagesItem: (item: FPS.PagesItem) => {},
	updatePagesElement: (item: FPS.PagesElementsItem) => {},
	addPagesItem: (item: FPS.PagesItem) => {},
	addPagesElement: (item: FPS.PagesElementsItem) => {},
	deletePagesItem: (id: string) => {},
	deletePagesElement: (id: string) => {},
}

export default React.createContext(initContext)
