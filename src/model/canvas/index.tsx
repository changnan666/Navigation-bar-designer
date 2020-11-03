import React, { useContext, useState } from 'react'
import { Tabs } from 'antd'
import { v1 } from 'uuid'
import { CanvasTemplate } from 'src/components'
import { FpsContext } from 'src/context'
import { useCompositionKeybord } from 'src/hooks'

const { TabPane } = Tabs

export default () => {
	const { pagesItem, addPagesItem, deletePagesItem } = useContext(FpsContext)
	const [activeKey, setActiveKey] = useState('')

	useCompositionKeybord('ctrl + s', () => {
		console.log(1)
	})

	const add = () => {
		const id = v1()

		addPagesItem({
			id,
			title: '标题',
			history: [],
			elements: [],
			dirty: false,
		})

		setActiveKey(id)
	}

	const del = (id: string) => {
		deletePagesItem(id)
		// TODO：删除的 tab 和当前激活的 tab 冲突时，重新设置当前激活的 tab ，为删除时的 tab 的下一个 tab 的 id。
		// 如果没有下一个，就设置为最后一个
		// 如果没有最后一个，就设置为空
	}

	const onEdit = (
		targetKey: React.MouseEvent | React.KeyboardEvent | string,
		action: 'add' | 'remove'
	) => {
		if (action === 'add') {
			add()
		} else {
			del(targetKey as string)
		}
	}

	return (
		<div className='canvas'>
			<Tabs
				type='editable-card'
				onChange={setActiveKey}
				activeKey={activeKey}
				onEdit={onEdit}
			>
				{pagesItem.map(page => (
					<TabPane tab={page.title + (page.dirty ? ' *' : '')} key={page.id}>
						<CanvasTemplate elements={page.elements} />
					</TabPane>
				))}
			</Tabs>
		</div>
	)
}
