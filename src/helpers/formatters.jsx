export const formatDate = timestamp => {
  const date = new Date(timestamp)
  const sHours = "0" + date.getHours().toString()
  const sMinutes = "0" + date.getMinutes().toString()
  const sSeconds = "0" + date.getSeconds().toString()
  const sFormattedDate = `${sHours.substr(-2)}:${sMinutes.substr(
    -2
  )}:${sSeconds.substr(-2)}`
  return sFormattedDate
}
