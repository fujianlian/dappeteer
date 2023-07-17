"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.approve = void 0;
const helpers_1 = require("../helpers");
// TODO: thing about renaming this method?
const approve = (page) => async (approveAll = false) => {
    await (0, helpers_1.retry)(async () => {
        await page.bringToFront();
        await page.reload();
        await (0, helpers_1.waitForOverlay)(page);
        if (approveAll) {
            var checkbox = await page.$("#app-content > div > div.main-container-wrapper > div > div.permissions-connect-choose-account__content > div.choose-account-list > div.choose-account-list__header--multiple-items > div.choose-account-list__select-all > input");
            await checkbox.click();
        }
        await new Promise((resolve) => setTimeout(resolve, 2500));
        // TODO: step 1 of connect chose account to connect?
        await (0, helpers_1.clickOnButton)(page, "Next", { timeout: 1000 });
        await (0, helpers_1.clickOnButton)(page, "Connect", { timeout: 2000 });
    }, 5);
};
exports.approve = approve;
