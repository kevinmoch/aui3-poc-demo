window.$notify = content => {
  let notification
  if (!('Notification' in window)) {
    console.info(content)
  } else if (window.Notification.permission === 'granted') {
    notification = new window.Notification(content)
  } else if (window.Notification.permission !== 'denied') {
    window.Notification.requestPermission(permission => {
      if (permission === 'granted') {
        notification = new window.Notification(content)
      }
    })
  }
  return notification
}
