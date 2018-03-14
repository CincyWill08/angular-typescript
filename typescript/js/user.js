"use strict";
var User = /** @class */ (function () {
    function User(id, username, password, firstName, lastName, phone, email, isReviewer, isAdmin, active) {
        this.id = id;
        this.username = username; // "this." indicates it's a member of the class
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
        this.isReviewer = isReviewer;
        this.isAdmin = isAdmin;
        this.active = active;
    }
    User.prototype.printOut = function () {
        console.log("id=" + this.id + ", username=" + this.username + ", password=" + this.password + ", \n\t\t\tName=" + (this.firstName + " " + this.lastName) + ",\n\t\t\tphone=" + this.phone + ", email=" + this.email + ", isReviewer=" + this.isReviewer + ",\n\t\t\tisAdmin=" + this.isAdmin + ", active=" + this.active);
    };
    return User;
}());
var users = [
    new User(1, "willrob08", "1231231231", "Michael", "Robinson", "859-750-1038", "mrob@gmail.com", true, true, true),
    new User(2, "Homer89", "22222", "Homer", "Simpson", "555-555-1111", "hsimp@gmail.com", false, false, true),
    new User(3, "marge90", "13333", "Marge", "Simpson", "555-555-2222", "msimp@gmail.com", true, false, true),
    new User(4, "Lisa91", "899897897", "Lisa", "Simpson", "555-555-3333", "lsimp@gmail.com", false, true, true),
    new User(5, "cowabunga12", "asdfdsfads", "Bart", "Simpson", "555-555-4444", "bsimp@gmail.com", false, false, true)
];
for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
    var user = users_1[_i];
    user.printOut();
}
