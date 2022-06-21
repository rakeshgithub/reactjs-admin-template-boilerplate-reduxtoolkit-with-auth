const gridBreakpoints = {
  xs: 0,
  sm: "576px",
  md: "768px",
  lg: "992px",
  xl: "1200px",
  xxl: "1900px",
};
const breakpoints = Object.keys(gridBreakpoints).reduce((acc, key) => {
  acc[key] = `(min-width: ${gridBreakpoints[key]})`;
  return acc;
}, {});

export default breakpoints;
