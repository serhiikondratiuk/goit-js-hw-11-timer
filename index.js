class CountdownTimer {
 constructor({ targetDate, selector }) {
  this.selectorRef = document.querySelector(selector);
  this.daysRef = this.selectorRef.querySelector('[data-value="days"]');
  this.hoursRef = this.selectorRef.querySelector('[data-value="hours"]');
  this.minsRef = this.selectorRef.querySelector('[data-value="mins"]');
  this.secsRef = this.selectorRef.querySelector('[data-value="secs"]');
  this.targetDate = targetDate;
  this.intervalID = null;
  this.deltaTime = 0;

  this.start();
 }
 start() {
  this.intervalID = setInterval(() => {
   let currentTime = Date.now();
   this.deltaTime = this.targetDate - currentTime;

   const days = this.pad(Math.floor(this.deltaTime / (1000 * 60 * 60 * 24)));
   const hours = this.pad(
    Math.floor((this.deltaTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
   );
   const mins = this.pad(
    Math.floor((this.deltaTime % (1000 * 60 * 60)) / (1000 * 60)),
   );
   const secs = this.pad(Math.floor((this.deltaTime % (1000 * 60)) / 1000));
   this.insertValues(days, hours, mins, secs);
  }, 1000);
 }

 pad(value) {
  return String(value).padStart(2, '0');
 }

 insertValues(days, hours, mins, secs) {
  this.daysRef.textContent = days;
  this.hoursRef.textContent = hours;
  this.minsRef.textContent = mins;
  this.secsRef.textContent = secs;
 }
}
const timer = new CountdownTimer({
 selector: '#timer-1',
 targetDate: new Date('Feb 13, 2022'),
});
