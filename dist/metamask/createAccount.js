"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAccount = void 0;
const helpers_1 = require("../helpers");
const createAccount = (page) => async (accountName) => {
    await (0, helpers_1.retry)(async () => {
        await page.bringToFront();
        await (0, helpers_1.profileDropdownClick)(page);
        await (0, helpers_1.clickOnElement)(page, "Create account");
        if (accountName != undefined) {
            await page.type(".new-account-create-form__input", accountName);
        }
        await (0, helpers_1.clickOnElement)(page, "Create");
    }, 5);
};
exports.createAccount = createAccount;
