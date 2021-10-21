/*
 * This section defines test constants used to verify element attribute values
 */

const aMillionMorePage = require('../pageobjects/a-million-more.page.js');

const mainBodyModelIntroHeaderText = 'Ideas that change the world are often the most controversial.';
const mainBodyModelIntroDescriptionText = 'After we introduced the 3-point safety belt, we faced a world of criticism. Since then, it has saved more than a million lives. Now it\'s time for the next step. For everyone\'s safety.';

/*
 * This section defines the list of test cases
 */

describe('TC0003 - Main Page Element Verification - Model Intro', () => {
	beforeEach (async () => {
		await aMillionMorePage.open();
		await aMillionMorePage.acceptCookiesIfDisplayed();
	});
	
	it('3.1 should show and verify the model intro header and text', async () => {
		await expect(aMillionMorePage.mainBodyModelIntoHeader).toBeDisplayed();
		await expect(aMillionMorePage.mainBodyModelIntoHeader).toHaveText(mainBodyModelIntroHeaderText);
		await expect(aMillionMorePage.mainBodyModelIntoDescription).toBeDisplayed();
		await expect(aMillionMorePage.mainBodyModelIntoDescription).toHaveText(mainBodyModelIntroDescriptionText);
	});

});
