import { useState } from 'react'

const mock: FPS.PagesItem[] = [
	{
		title: '666',
		id: '',
		history: [],
		elements: [],
		dirty: false,
	},
]

export default () => {
	const [pagesItem, setPagesItem] = useState<FPS.PagesItem[]>(mock)

	const fps: FPS.IProps = {
		projectName: 'demo',
		version: '0.0.1',
		pagesItem,
		updatePagesItem: item => {
			const { id } = item
			const index = pagesItem.findIndex(page => page.id === id)

			if (index !== -1) {
				pagesItem[index] = item
				setPagesItem([...pagesItem])
			}
		},
		updatePagesElement: item => {},
		addPagesItem: item => {
			pagesItem.push(item)
			setPagesItem([...pagesItem])
		},
		addPagesElement: item => {},
		deletePagesItem: id => {
			const index = pagesItem.findIndex(page => page.id === id)

			if (index !== -1) {
				pagesItem.splice(index, 1)
				setPagesItem([...pagesItem])
			}
		},
		deletePagesElement: id => {},
	}

	return fps
}
