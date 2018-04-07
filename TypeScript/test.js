var ListComponent = /** @class */ (function () {
    function ListComponent() {
        this.things = [];
    }
    return ListComponent;
}());
var ListItem = /** @class */ (function () {
    function ListItem(name) {
        this.name = name;
    }
    return ListItem;
}());
var RegisteredUser = /** @class */ (function () {
    function RegisteredUser(name, email) {
        this.name = name;
        this.email = email;
    }
    return RegisteredUser;
}());
var ImageUser = /** @class */ (function () {
    function ImageUser(name, email, avatar) {
        this.name = name;
        this.email = email;
        this.avatar = avatar;
    }
    return ImageUser;
}());
