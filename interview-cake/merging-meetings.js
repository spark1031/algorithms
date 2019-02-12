// Input
// [
//   { startTime: 0, endTime: 1 },
//   { startTime: 3, endTime: 5 },
//   { startTime: 4, endTime: 8 },
//   { startTime: 10, endTime: 12 },
//   { startTime: 9, endTime: 10 },
// ]

// Output
// [
//   { startTime: 0, endTime: 1 },
//   { startTime: 3, endTime: 8 },
//   { startTime: 9, endTime: 12 }
// ]

function mergeMeetings(meetings) {
  //sort meetings by start time:
  meetings.sort((meeting1, meeting2) => {
    return meeting1.startTime - meeting2.startTime;
  });

  const merged = [meetings[0]];

  for (let i = 1; i < meetings.length; i++) {
    let currentMeeting = meetings[i];
    let lastMeeting = merged[merged.length - 1];

    if (currentMeeting.startTime <= lastMeeting.endTime) {
      lastMeeting.endTime = Math.max(currentMeeting.endTime, lastMeeting.endTime);
    } else {
      merged.push(currentMeeting);
    }
  }
  return merged;
}

mergeMeetings(meetings);