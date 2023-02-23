function createEmployeeRecord([firstName, familyName, title, payPerHour]) {
  const employeeRecord = {
    firstName: firstName,
    familyName: familyName,
    title: title,
    payPerHour: payPerHour,
    timeInEvents: [],
    timeOutEvents: [],
  };
  return employeeRecord;
}

function createEmployeeRecords(employees) {
  let employeeData = [];
  for (let i = 0; i < employees.length; i++) {
    const employeeRecord = createEmployeeRecord(employees[i]);
    employeeData.push(employeeRecord);
  }
  return employeeData;
}
// timestamps:"2018-01-01 2300"
function createTimeInEvent(employeeData, dateStamp) {
  const date = [];
  const time = [];
  for (let i = 0; i < dateStamp.length; i++) {
    if (i < 10) {
      date.push(dateStamp[i]);
    } else if (i > 10) {
      time.push(dateStamp[i]);
    }
  }
  employeeData.timeInEvents.push({
    type: "TimeIn",
    hour: parseInt(time.join("")),
    date: date.join(""),
  });
  return employeeData;
}
function createTimeOutEvent(employeeData, dateStamp) {
  const date = [];
  const time = [];
  for (let i = 0; i < dateStamp.length; i++) {
    if (i < 10) {
      date.push(dateStamp[i]);
    } else if (i > 10) {
      time.push(dateStamp[i]);
    }
  }
  employeeData.timeOutEvents.push({
    type: "TimeOut",
    hour: parseInt(time.join("")),
    date: date.join(""),
  });
  return employeeData;
}
function hoursWorkedOnDate(employeeData, dateStamp) {
  let startTime = employeeData.timeInEvents.find(
    (time) => time.date === dateStamp
  );
  let endTime = employeeData.timeOutEvents.find(
    (time) => time.date === dateStamp
  );
  console.log("hello", startTime, endTime);
  return (endTime.hour - startTime.hour) / 100;
}
function wagesEarnedOnDate(employeeData, dateStamp) {
  const hoursWorked = hoursWorkedOnDate(employeeData, dateStamp);
  return employeeData.payPerHour * hoursWorked;
}
function allWagesFor(employeeData) {
  let dates = [];
  let wages = [];
  for (let i = 0; i < employeeData.timeInEvents.length; i++) {
    dates.push(employeeData.timeInEvents[i].date);
  }
  console.log("brizz", dates);
  for (let j = 0; j < dates.length; j++) {
    wages.push(wagesEarnedOnDate(employeeData, dates[j]));
  }
  console.log("elis", wages);
  return wages.reduce((partialSum, a) => partialSum + a, 0);
}
function calculatePayroll(employeeRecords) {
  const total = [];
  for (let employee of employeeRecords) {
    total.push(allWagesFor(employee));
  }
  return total.reduce((partialSum, a) => partialSum + a, 0);
}
