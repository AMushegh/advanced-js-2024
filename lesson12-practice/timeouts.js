function myTimeOut(callback, duration) {
  const interval = setInterval(() => {
    clearInterval(interval);
    callback();
  }, duration);
  return interval;
}
myTimeOut(() => console.log("2s"), 2000);
