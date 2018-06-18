/**
 * Returns the icon name as a string for the list of to do's
 *
 * @param {String} type The type of "to do" to match the right icon with.
 * @returns {String} Name of the Semantic UI icon.
 */
const getIconName = type => {
  const iconNames = {
    task: "square outline",
    event: "circle outline",
    appointment: "star outline"
  };
  return iconNames[type];
};

export { getIconName };
