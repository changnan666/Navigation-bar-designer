/*
 * @Author: LeeChar
 * @Date: 2020-10-08 00:10:45
 * @LastEditTime: 2020-10-08 11:21:58
 * @LastEditors: LeeChar
 * @Description: 产出的项目配置类型
 * @FilePath: \fps\src\typings\fps.d.ts
 */

declare namespace FPS {
	export type BaseConfig = {
		/** 项目名称 */
		projectName: string
		/** 项目版本号 */
		version: string
	}

	export type PagesHistoryItem = {
		/** 历史记录的动作类型 */
		type: 'update' | 'add' | 'delete'
		/** PagesElementsItem 中的唯一元素id */
		id: string
		/** 当前记录下的 settings */
		settings?: React.CSSProperties[]
	}

	export type PagesElementsItem = {
		/** 元素的唯一 id */
		id: string
		type: DrawType
		/** 元素的展示类型 */
		display: 'block' | 'inline-block' | 'free'
		// 图层位置
		zIndex: number
		// 双向数据绑定以及样式的还原
		settings: React.CSSProperties[]
	}

	export type PagesItem = {
		id: string
		title: string
		dirty: boolean
		history: PagesHistoryItem[]
		elements: PagesElementsItem[]
	}

	/** 生成的配置文件类型 */
	export type IProps = BaseConfig & {
		pagesItem: PagesItem[]
		updatePagesItem: (item: PagesItem) => void
		updatePagesElement: (item: PagesElementsItem) => void
		addPagesItem: (item: PagesItem) => void
		addPagesElement: (item: PagesElementsItem) => void
		deletePagesItem: (id: string) => void
		deletePagesElement: (id: string) => void
	}
}
