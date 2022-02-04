const fs = require("fs");
let regx = /\d+/g;
fs.readFile("sample-input.txt", "utf8", (error, data) => {
  if (error) {
    console.log(error);
    return;
  }
  //console.log(data);
  results = data.split("\n");

  let points = {};
  let recordDays = 0;
  let matchDay = 0;

  for (let i = 0; i < results.length; i++) {
    const record = results[i];
    if (recordIsNotValid(record)) continue;

    recordDays++;

    teams = record.split(",");
    scores = record.match(regx);
    // console.log(scores);
    teams[0] = teams[0].replace(scores[0], "").trim();
    teams[1] = teams[1].replace(scores[1], "").trim();
    // console.log(teams[0],teams[1]);
    let matchResult = scores[0] - scores[1];
    // console.log(matchResult);
    if (matchResult > 0) {
      //team 0 won
      // console.log(teams[0]);
      points[teams[0]] = points[teams[0]] ? points[teams[0]] + 3 : 3;
    } else if (matchResult < 0) {
      //team 1 won
      // console.log(teams[1]);

      points[teams[1]] = points[teams[1]] ? points[teams[1]] + 3 : 3;
    } else {
      //draw
      points[teams[0]] = points[teams[0]] ? points[teams[0]] + 1 : 1;
      points[teams[1]] = points[teams[1]] ? points[teams[1]] + 1 : 1;
    }
    if (recordDays % 3 == 0) {
      matchDay++;
      printingResults(points, matchDay);

      // console.log(Object.entries(points)[0]);
    }
  }
  if (recordDays % 3 != 0){
    matchDay++;  
   // let test = recordDays % 3
    printingResults(points, matchDay);
  }
  console.log(points);
});

recordIsNotValid = (record) => {
  return record.match(regx).length !== 2 || !record.includes(",");
};

printingResults = (points, matchDay) => {
  console.log("Matchday", matchDay);

  let highest = Object.keys(points).sort(function (b, a) {
      if (points[a] - points[b] == 0) {
        return  b.localeCompare(a)
      }
      else return points[a] - points[b]
  //  return points[a] - points[b] == 0 ? a < b : points[a] - points[b]
   // return points[a] - points[b] 
  });
  // console.log(highest, points);
   
  for (let index = 0; index < 3; index++) {
    //  let teamScore = Object.entries(highest)[index];
    let teamName = highest[index];
    //  console.log(,  );
    console.log(`${teamName}, ${points[teamName]} pts`);
  }
  console.log("");
};
