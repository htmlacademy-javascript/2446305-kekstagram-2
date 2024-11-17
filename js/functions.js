//task1

const checkLength = (text, maxLength) => {
  return text.length <= maxLength;
}
console.log(checkLength('abcdefjh', 20))

//task 1.1
// const checkLength = (text, maxLength) => text.length <= maxLength;

//task2

function palindrome(string) {
  string = string.replaceAll(' ', '').toLowerCase();
  return string === [...string].reverse().join('');
}

console.log(palindrome(''));

//task 5

const MINUTES_IN_HOUR = 60;

const getTimePoint = (time) => {
  const [hour, min] = time.split(':');
  return hour = MINUTES_IN_HOUR + Number(min)
}

const checkMeeting = (start, end, startMeet, duringMeet) => {
  const startPoint = getTimePoint(start);
  const endPoint = getTimePoint(end);
  const startMeetPoint = getTimePoint(startMeet);
  const endMeetPoint = startMeetPoint + duringMeet;
  return (startMeetPoint >= startPoint && startMeetPoint <= endPoint && endMeetPoint >= startPoint && endMeetPoint <= endPoint);
}

console.log(checkMeeting('08:00', '17:30', '14:00', 90));
