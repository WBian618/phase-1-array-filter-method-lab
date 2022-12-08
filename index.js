// Code your solution here
let findMatching = (drivers, driverName) => {
    for (const driver of drivers)    {
        if (driver === driverName ) {
            return driverName
        }

    }
}

// function fuzzyMatch(source, testString) {
//     return source.filter(
//       (possibleMatch) =>
//         possibleMatch.toLowerCase().indexOf(testString.toLowerCase()) === 0
//     );
//   }

function fuzzyMatch(source, test) {
    let matching = source.filter(record => record.toLowerCase().startsWith(test.toLowerCase()))
    return matching
}