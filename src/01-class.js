var date = new Date();
console.log(date.toLocaleDateString());
console.log(date.getTime());
console.log(date.toISOString());
console.log(date.getHours());
console.log(date.getTime());
console.log("----------------");
var date2 = new Date(1993, 1, 12);
console.log(date2.toLocaleDateString());
console.log(date2.getTime());
console.log(date2.toISOString());
console.log(date2.getHours());
console.log(date2.getTime());
console.log("----------------");
var myVar;
var MyDate = /** @class */ (function () {
    function MyDate(year, month, day) {
        this.year = year;
        this.month = month;
        this.day = day;
    }
    return MyDate;
}());
var myDate = new MyDate(1993, 4, 1);
console.log(myDate);
