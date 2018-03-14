"use strict";
var Friend = /** @class */ (function () {
    function Friend(id, name, email, years) {
        this.id = id;
        this.name = name; // "this." indicates it's a member of the class
        this.email = email;
        this.years = years;
    }
    Friend.prototype.printOut = function () {
        console.log("id=" + this.id + ", name=" + this.name + ", email=" + this.email + ", years=" + this.years);
    };
    return Friend;
}());
var friends = [
    new Friend(1, "John", "job@gmail.com", 26),
    new Friend(2, "Ken", "kp@gmail.com", 20),
    new Friend(3, "David", "dlenn@gmail.com", 19),
    new Friend(4, "Stephanie", "slg@gmail.com", 40),
    new Friend(5, "Vandana", "vkhurma@gmail.com", 11)
];
for (var _i = 0, friends_1 = friends; _i < friends_1.length; _i++) {
    var friend = friends_1[_i];
    friend.printOut();
}
