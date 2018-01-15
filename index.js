exports.parse = function(data) {
  const m = /\[3G\*(\d+)\*([A-F0-9]*)\*([^\]]+)\]/.exec(data)
  if (!m) {
    return null
  }
  const [ , id, lenHex, payload ] = Array.from(m)

  const payloadData = payload.split(',')
  const [ command ] = payloadData

  const result = {
    id,
    command
  }

  if ('UD' === command || 'UD2' === command) {
    [, result.ddmmyy, result.hhmmss, , result.latitude, , result.longitude, , result.speed, result.course, result.altitude, result.satellites, result.rssi, result.battery, result.steps] = payloadData
  }

  return result
}
