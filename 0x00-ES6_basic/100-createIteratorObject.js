export default function createIteratorObject(report) {
  let employees = [];
  for (const department of Object.values(report.allEmployees)) {
    employees = employees.concat(department);
  }

  return {
    [Symbol.iterator]() {
      let index = 0;
      return {
        next() {
          if (index < employees.length) {
            return { value: employees[index++], done: false };
          } else {
            return { done: true };
          }
        }
      };
    }
  };
}

