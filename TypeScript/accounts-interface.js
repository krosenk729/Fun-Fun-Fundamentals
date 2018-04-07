"use strict";
exports.__esModule = true;
var AccountManager = /** @class */ (function () {
    function AccountManager() {
        this.users = new Array();
    }
    /**
     * Create a new user account
     * @param email email address
     * @param password the user's password
     * @return the new user account. An admin must activate it using activateNewUser
     * @see this.activateNewUser
     */
    AccountManager.prototype.register = function (email, password) {
        if (!email)
            throw 'Must provide an email';
        if (!password)
            throw 'Must provide a password';
        var user = { email: email, password: password };
        this.users.push(user);
        return user;
    };
    /**
     * Activate a new user account
     * @param approver The admin who's approving this new user
     * @param userToApprove Newly-registered user, who is to be activated
     * @return the updated user object, now activated
     */
    AccountManager.prototype.activateNewUser = function (approver, userToApprove) {
        if (!approver.adminSince)
            throw "Approver is not an admin!";
        var toConfirm = userToApprove;
        toConfirm.isActive = true;
        return toConfirm;
    };
    /**
     * Promote a normal user to admin
     * @param existingAdmin admin who is promoting another user
     * @param user an active user who you're making an admin
     * @return the updated user object, now can also be regarded as an admin
     */
    AccountManager.prototype.promoteToAdmin = function (existingAdmin, user) {
        if (!existingAdmin.adminSince)
            throw "Not an admin!";
        if (user.isActive !== true)
            throw "User must be active in order to be promoted to admin!";
        user.adminSince = new Date();
        return user;
    };
    return AccountManager;
}());
exports.AccountManager = AccountManager;
