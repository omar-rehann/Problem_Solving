/*Problem Description

You are given an array of meeting time intervals, where each interval consists of a start time and an end time.
Your task is to determine if a person can attend all meetings without any overlapping between them.

If any two meetings overlap (i.e., one starts before the other ends), return false.
Otherwise, return true.*/
function canAttendMeetings(intervals) {
    const flatArr = intervals.flat();

    for (let i = 0; i < flatArr.length; i++) {
        const start = flatArr[i];
        const end = flatArr[i + 1];
        for (let j = i + 2; j < flatArr.length; j++) {
            const nextStart = flatArr[j];
            const nextEnd = flatArr[j + 1];
            if (nextStart < end && nextEnd > start) {
                return false;
            }
        }
    }

    return true;
}