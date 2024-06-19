setInterval(function() {
  let d = new Date()
  h = d.getHours()
  m = d.getMinutes()
  s = d.getSeconds()
  document.getElementById("hours").innerHTML = h 
  document.getElementById("minutes").innerHTML = m 
  document.getElementById("seconds").innerHTML = s
}, 1000)
