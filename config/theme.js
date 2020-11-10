// https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less

const primarColor = "#474747"; // 主色调
const primaryColorLight = "#6c6c6c"; // 主色调-亮色
const primaryColorDark = "#585555"; // 主色调-暗色

module.exports = {
  "@primary-color": primarColor,
  "@link-color": primarColor,
  "@success-color": "#52c41a",
  "@warning-color": "#faad14",
  "@error-color": "#f5222d",
  "@font-size-base": "12px",
  "@heading-color": "rgba(0, 0, 0, 0.85)",
  "@text-color": "#fff",
  "@text-color-secondary": "rgba(0, 0, 0, 0.45)",
  "@disabled-color": "rgba(0, 0, 0, 0.25)",
  "@border-radius-base": "0",
  "@box-shadow-base":
    "0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08),0 9px 28px 8px rgba(0, 0, 0, 0.05)",
  // Border color
  "@border-color-base": "#000",
  "@border-color-split": "#000",
  "@border-color-inverse": "@white",
  "@border-width-base": "1px",
  "@border-style-base": "solid",
  // tabs
  "@tabs-card-head-background": primarColor,
  "@tabs-card-height": "24px",
  "@tabs-card-gutter": "0",
  //Dropdown
  "@dropdown-menu-bg": primaryColorLight,
  // Popover
  // ---
  // Popover body background color
  "@popover-bg": primarColor,
  // Popover text color
  "@popover-color": "#fff",
  // Popover maximum width
  "@popover-min-width": "177px",
  "@popover-min-height": "32px",
  // Popover arrow width
  "@popover-arrow-width": "0",
  // Popover distance with trigger
  "@popover-distance": "6px",
  "@popover-padding-horizontal": "@padding-md",
  "@modal-header-padding-vertical": "@padding-md",
  "@modal-header-padding-horizontal": "@padding-lg",
  "@modal-body-padding": "@padding-lg",
  "@modal-header-bg": primaryColorDark,
  "@modal-header-padding":
    "@modal-header-padding-vertical @modal-header-padding-horizontal",
  "@modal-header-border-width": "@border-width-base",
  "@modal-header-border-style": "@border-style-base",
  "@modal-header-title-line-height": "22px",
  "@modal-header-title-font-size": "@font-size-lg",
  "@modal-header-border-color-split": "@border-color-split",
  "@modal-header-close-size": "56px",
  "@modal-content-bg": primarColor,
  "@modal-heading-color": "#fff",
  "@modal-close-color": "#fff",
  "@modal-footer-bg": primaryColorDark,
  "@modal-footer-border-color-split": "@border-color-split",
  "@modal-footer-border-style": "@border-style-base",
  "@modal-footer-padding-vertical": "10px",
  "@modal-footer-padding-horizontal": "16px",
  "@modal-footer-border-width": "@border-width-base",
  "@modal-mask-bg": "fade(@black, 45%)",
  "@modal-confirm-body-padding": "32px 32px 24px",
};
