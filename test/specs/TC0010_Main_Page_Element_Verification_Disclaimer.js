/*
 * This section defines test constants used to verify element attribute values
 */

const aMillionMorePage = require('../pageobjects/a-million-more.page.js');

const mainBodyDisclaimerDescriptionText = [
	'These films contain true stories from real people, who have been compensated for their participation.',
	'Volvo Cars\' safety features complement safe driving practices and are not intended to enable or encourage distracted, aggressive, or otherwise unsafe or illegal driving. Ultimately, the driver is responsible for safe operation of the vehicle at all times.'
];

/*
 * This section defines the list of test cases
 */

describe('TC0010 - Main Page Element Verification - Disclaimer', () => {
	beforeEach (async () => {
		await aMillionMorePage.open();
		await aMillionMorePage.acceptCookiesIfDisplayed();
		await aMillionMorePage.mainBodyDisclaimerContainer.scrollIntoView();
	});	
	
	it('10.1 should show and verify the disclaimer text and description', async () => {
		for (let index = 0; index < mainBodyDisclaimerDescriptionText.length; index++) {
			await expect($(aMillionMorePage.mainBodyDisclaimerDescription.replace('__INDEX__', index + 1))).toBeDisplayed();
			await expect($(aMillionMorePage.mainBodyDisclaimerDescription.replace('__INDEX__', index + 1))).toHaveText(mainBodyDisclaimerDescriptionText[index]);
		}
	});
});
