export const text = ({ $mode, content }) =>
  $mode === "pc" ? content.toUpperCase() : content.toLowerCase();
