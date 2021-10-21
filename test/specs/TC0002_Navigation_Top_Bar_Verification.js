/*
 * This section defines test constants used to verify element attribute values
 */

const aMillionMorePage = require('../pageobjects/a-million-more.page.js');

const navBarHomeBtnHrefAttribute = 'https://www.volvocars.com/intl';
const navBarHomeBtnImgSrcAttribute = 'https://www.volvocars.com/static/shared/images/volvo-wordmark-black.svg';
const homePageTitle = 'International | Volvo Cars - International';
const homePageUrl = 'https://www.volvocars.com/intl';

/*
 * This section defines the list of test cases
 */

describe('TC0002 - Navigation Top Bar Verification', () => {
	beforeEach (async () => {
		await aMillionMorePage.open();
		await aMillionMorePage.acceptCookiesIfDisplayed();
	});
	
	it('2.1 should show top navigation bar and elements', async () => {
		await expect(aMillionMorePage.navBar).toBeExisting();
		await expect(aMillionMorePage.navBarHomeBtn).toBeDisplayed();
		await expect(aMillionMorePage.navBarHomeBtn).toHaveAttribute('href', navBarHomeBtnHrefAttribute);
		await expect(aMillionMorePage.navBarHomeBtnImg).toHaveAttribute('src', navBarHomeBtnImgSrcAttribute);
		await expect(aMillionMorePage.navBarCarsContainerBtn).toBeDisplayed();
		await expect(aMillionMorePage.navBarSideNavBtn).toBeDisplayed();
		
		await aMillionMorePage.navigateToHomePage();
		await expect(browser).toHaveTitle(homePageTitle);
		await expect(browser).toHaveUrl(homePageUrl);
	});
	
	it('2.2 should show and verify the cars container when Our Cars text is clicked', async () => {
		await aMillionMorePage.openCarsContainer();
		await expect(aMillionMorePage.navBarCarsContainerCarsMenuDesktopContainer).toBeExisting();
		await aMillionMorePage.closeCarsContainer();
	});
	
	it('2.3 should show and verify the side nav container when side nav button is clicked', async () => {
		await aMillionMorePage.openSideNavContainer();
		await expect(aMillionMorePage.navBarSideNavigationContainer).toBeExisting();
		await aMillionMorePage.closeSideNavContainer();
	});
});
