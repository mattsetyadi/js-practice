// var curr = new Date(); // get current date
// var first = curr.getDate() - curr.getDay(); // First day is the day of the month - the day of the week
// var last = first - 6; // last day is the first day + 6

// var firstday = new Date(curr.setDate(first)).toUTCString();
// var lastday = new Date(curr.setDate(last)).toUTCString();

// console.log("first day", firstday);
// console.log("last day", lastday);

// const curr = new Date();
// // var firstday = new Date(curr.setDate(curr.getDate() - curr.getDay()));
// // var lastday = new Date(curr.setDate(curr.getDate() - curr.getDay() + 6));

// console.log("current date", curr);
// // console.log("first day", firstday);
// // console.log("last day", lastday);

// const lastWeek = new Date(curr.setDate(curr.getDate() - curr.getDay() - 6));
// const today = Date.now();
// console.log("cur ", curr);
// console.log("last week", lastWeek);
// console.log("Today", today);

// CODE BELOW IS READY TO USE IN ANY PROJECT
//
// function getLastWeek() {
//   const today = new Date();
//   const lastWeek = new Date(
//     today.getFullYear(),
//     today.getMonth(),
//     today.getDate() - 7
//   );
//   return lastWeek;
// }

// function getToday() {
//   const today = new Date();
//   return today;
// }

// const lastWeek = getLastWeek();
// const lastWeekMonth = lastWeek.getMonth() + 1;
// const lastWeekDay = lastWeek.getDate();
// const lastWeekYear = lastWeek.getFullYear();

// const lastWeekDisplay = lastWeekMonth + "/" + lastWeekDay + "/" + lastWeekYear;
// const lastWeekDisplayPadded =
//   ("00" + lastWeekMonth.toString()).slice(-2) +
//   "/" +
//   ("00" + lastWeekDay.toString()).slice(-2) +
//   "/" +
//   ("0000" + lastWeekYear.toString()).slice(-4);

// const endDate = getToday();
// const todayMonth = endDate.getMonth() + 1;
// const todayDate = endDate.getDate();
// const todayYear = endDate.getFullYear();

// const endDateDisplay = todayMonth + "/" + todayDate + "/" + todayYear;

// console.log(lastWeekDisplay);
// console.log(endDateDisplay);

// CODE BELOW IS TRY TO GET RANGE DATE

// export const getDateRange = (startDate, endDate) => {
//   const dataDate = [];
//   let start = new Date(startDate);
//   const end = new Date(endDate);
//   while (start <= end) {
//     dataDate.push(moment(start).format("YYYY-MM-DD"));
//     const newDate = start.setDate(start.getDate() + 1);
//     start = new Date(newDate);
//   }
//   return dataDate;
// };

// FIXED USED IN DEKA SKRIPSI
// FORTMAT DATE IN PARAMS "YYYY, MM, DD"
const getRangeDate = (dateParams = null) => {
  const today = dateParams !== null ? new Date(dateParams) : new Date();
  const lastWeek = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() - 6
  );
  return {
    startDate: lastWeek,
    endDate: today,
  };
};

const result = getRangeDate();
console.log("result range start ==>", result.startDate);
console.log("result range end ==>", result.endDate);

const result2 = getRangeDate("2016/11/7");
console.log("result 2 ==>", result2);
console.log("result 2 range start ==>", result2.startDate);
console.log("result 2 range end ==>", result2.endDate);
// const resultLoopingRange = getDateRange(result.startDate, result.endDate);
// console.log("Looped date", resultLoopingRange);
