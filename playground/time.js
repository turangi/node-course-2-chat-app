let moment = require('moment');
// The UNIX Epic is:
// Jan 1st 1970 00:00:00 am
// represented by time stamp 0
//
// Unix uses seconds, javascript used milliseconds,
// so the value 1000 represents one second in javascript parlance,
// equaling the time  Jan 1st, 1070, 00:00:01 am

// let date = new Date();
// console.log(date.getMonth());

 // let date = moment();
 // date.add(100, 'years').subtract(9, 'months');
 // //console.log(date.format('MMM Do YYYY, h:mm:ss a'));
 // console.log(date.format());

 // challenge print 10:35 am

 let someTimevar = new Date().getTime();
 console.log(someTimevar);

 let someTimestamp = moment().valueOf();
 console.log(someTimestamp);

 let createdAt = 1234;
 let date = moment(createdAt);
 console.log(date.format('h:mm a'));
