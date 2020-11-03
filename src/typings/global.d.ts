/** 【context】需要绘制的动作 */
declare type DrawType =
	| 'rect'
	| 'ellipse'
	| 'table'
	| 'line'
	| 'layout'
	| 'swiper'
/** 【context】其它动作 */
declare type OtherType = 'select' | ''

/** 【context】当前画布上鼠标的执行动作 */
declare type ActionType = OtherType | DrawType

/** 【context】全局配置 */
declare namespace GlobalConfig {
	export interface Project {
		/** 部署地址 */
		server: string
		/** 历史记录长度 */
		historyLength: number
	}
	export interface Style extends React.CSSProperties {
		/** 版心宽度 */
		versionHeart: number
	}
}
