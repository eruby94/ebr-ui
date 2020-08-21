const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

export const getDateString = (date) => {
  const month = months[date.getMonth()]
  const year = date.getFullYear()
  return `${month} ${year}`
}
