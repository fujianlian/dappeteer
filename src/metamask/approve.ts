import { clickOnButton, retry, waitForOverlay } from "../helpers";
import { DappeteerPage } from "../page";

// TODO: thing about renaming this method?
export const approve =
  (page: DappeteerPage) =>
  async (approveAll = false): Promise<void> => {
    await retry(async () => {
      await page.bringToFront();
      await page.reload();
      await waitForOverlay(page);
      if (approveAll) {
        var checkbox = await page.$("#app-content > div > div.main-container-wrapper > div > div.permissions-connect-choose-account__content > div.choose-account-list > div.choose-account-list__header--multiple-items > div.choose-account-list__select-all > input");
        await checkbox.click();
      }
      await new Promise((resolve) => setTimeout(resolve, 2500));
      // TODO: step 1 of connect chose account to connect?
      await clickOnButton(page, "Next", { timeout: 1000 });
      await clickOnButton(page, "Connect", { timeout: 2000 });
    }, 5);
  };
