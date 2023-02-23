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
    hour: time.join(""),
    date: date.join(""),
  });
  return employeeData;
}
