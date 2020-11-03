/*
 * @Author: LeeChar
 * @Date: 2020-09-29 07:02:08
 * @LastEditTime: 2020-09-29 07:11:56
 * @LastEditors: LeeChar
 * @Description: 往每个使用了 events.on 的 tsx 文件里，注入 events.off 的逻辑
 * @FilePath: \fps\config\loader\insertEventOff.js
 */

// TODO: 注入 events.off 的代码，自定义 loader 部分的东西已准备就绪
module.exports = function (content, map, meta) {
	// console.log(content)
	return content
}
