/*
 * This section defines test constants used to verify element attribute values
 */

const aMillionMorePage = require('../pageobjects/a-million-more.page.js');

const pageUrl = 'https://www.volvocars.com/intl/v/car-safety/a-million-more';
const pageTitle = 'A million more | Volvo Cars - International';

const cookiesContainerBodyText = 'We use cookies and local storage for the best experience on our website, including to personalise content and ads, to provide social media features and to analyse traffic. These cookies include targeted media cookies and advanced analytics cookies. For more information see our Information Notice on the cookie page. By clicking accept you agree to our use of cookies and local storage. To alter the types of cookies we use click “Cookie Settings"';

/*
 * This section defines the list of test cases
 */

describe('TC0001 - Main Page Loading and Cookie Container Verification', () => {
	beforeEach (async () => {
		await aMillionMorePage.open();
	});
	
	it('1.1 should verify url and title', async () => {
		await expect(browser).toHaveUrl(pageUrl);
		await expect(browser).toHaveTitle(pageTitle);
	});
	
	it('1.2 should show the cookies container and accept all cookies', async () => {
		await expect(aMillionMorePage.cookiesContainerLogo).toBeDisplayed();
		await expect(aMillionMorePage.cookiesContainerBody).toHaveText(cookiesContainerBodyText);
		await expect(aMillionMorePage.cookiesContainerAcceptCookiesBtn).toBeClickable();
		await expect(aMillionMorePage.cookiesContainerCookieSettingsBtn).toBeClickable();
		await aMillionMorePage.acceptAllCookies();
	});
});
