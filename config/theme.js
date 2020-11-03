// https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less

/** 主色调 */
const primarColor = '#424242'
const primaryColorLight = '#6c6c6c' // 主色调-亮色

module.exports = {
	'@primary-color': primarColor,
	'@link-color': primarColor,
	'@success-color': '#52c41a',
	'@warning-color': '#faad14',
	'@error-color': '#f5222d',
	'@font-size-base': '12px',
	'@heading-color': 'rgba(0, 0, 0, 0.85)',
	'@text-color': '#fff',
	'@text-color-secondary': 'rgba(0, 0, 0, 0.45)',
	'@disabled-color': 'rgba(0, 0, 0, 0.25)',
	'@border-radius-base': '0',
	'@box-shadow-base':
		'0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08),0 9px 28px 8px rgba(0, 0, 0, 0.05)',
	// Border color
	'@border-color-base': '#000',
	'@border-color-split': '#000',
	'@border-color-inverse': '@white',
	'@border-width-base': '1px',
	'@border-style-base': 'solid',
	// tabs
	'@tabs-card-head-background': primarColor,
	'@tabs-card-height': '24px',
	'@tabs-card-gutter': '0',
	//Dropdown
	'@dropdown-menu-bg': primaryColorLight,
	// Popover
	// ---
	// Popover body background color
	'@popover-bg': primarColor,
	// Popover text color
	'@popover-color': '#fff',
	// Popover maximum width
	'@popover-min-width': '177px',
	'@popover-min-height': '32px',
	// Popover arrow width
	'@popover-arrow-width': '0',
	// Popover distance with trigger
	'@popover-distance': '6px',
	'@popover-padding-horizontal': '@padding-md',
}
