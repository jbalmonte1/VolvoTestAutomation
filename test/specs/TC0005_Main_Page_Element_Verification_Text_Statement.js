/*
 * This section defines test constants used to verify element attribute values
 */

const aMillionMorePage = require('../pageobjects/a-million-more.page.js');

const mainBodyTextStatementText = 'A million more. With new and existing safety features, we are determined to save a million more lives.';

/*
 * This section defines the list of test cases
 */

describe('TC0005 - Main Page Element Verification - Text Statement', () => {
	beforeEach (async () => {
		await aMillionMorePage.open();
		await aMillionMorePage.acceptCookiesIfDisplayed();
	});
	
	it('5.1 should show and verify the text statement', async () => {
		await expect(aMillionMorePage.mainBodyTextStatement).toBeDisplayed();
		await expect(aMillionMorePage.mainBodyTextStatement).toHaveText(mainBodyTextStatementText);
	});
});
