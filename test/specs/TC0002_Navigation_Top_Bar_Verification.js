/*
 * This section defines test constants used to verify element attribute values
 */

const aMillionMorePage = require('../pageobjects/a-million-more.page.js');

const navBarHomeBtnHrefAttribute = 'https://www.volvocars.com/intl';
const navBarHomeBtnImgSrcAttribute = 'https://www.volvocars.com/static/shared/images/volvo-wordmark-black.svg';
const homePageTitle = 'International | Volvo Cars - International';
const homePageUrl = 'https://www.volvocars.com/intl';

const navBarCarsContainerCarsMenuDesktopSideButtons = [
	{ 'Header': 'Electric',
	 'Description': 'Pure electric',
	 'Cars': [
	 	{ 'Href': 'https://www.volvocars.com/intl/v/cars/c40-electric',
	 	 'Src': 'https://www.volvocars.com/images/site-navigation/2022/c40-electric.png'
	 	},
	 	{ 'Href': 'https://www.volvocars.com/intl/v/cars/xc40-electric',
	 	 'Src': 'https://www.volvocars.com/images/site-navigation/2022/xc40-electric.png'
	 	}
	 ]
	},
	{ 'Header': 'Hybrids',
	 'Description': 'Plug-in hybrids',
	 'Cars': [
	 	{ 'Href': 'https://www.volvocars.com/intl/v/cars/xc90-hybrid',
	 	 'Src': 'https://www.volvocars.com/images/site-navigation/2022/xc90-hybrid.png'
	 	},
	 	{ 'Href': 'https://www.volvocars.com/intl/v/cars/xc60-hybrid',
	 	 'Src': 'https://www.volvocars.com/images/site-navigation/2022/xc60-hybrid.png'
	 	},
	 	{ 'Href': 'https://www.volvocars.com/intl/v/cars/xc40-hybrid',
	 	 'Src': 'https://www.volvocars.com/images/site-navigation/2022/xc40-hybrid.png'
	 	},
	 	{ 'Href': 'https://www.volvocars.com/intl/v/cars/v90-hybrid',
	 	 'Src': 'https://www.volvocars.com/images/site-navigation/2022/v90-hybrid.png'
	 	},
	 	{ 'Href': 'https://www.volvocars.com/intl/v/cars/v60-hybrid',
	 	 'Src': 'https://www.volvocars.com/images/site-navigation/2022/v60-hybrid.png'
	 	},
	 	{ 'Href': 'https://www.volvocars.com/intl/v/cars/s90-hybrid',
	 	 'Src': 'https://www.volvocars.com/images/site-navigation/2022/s90-hybrid.png'
	 	},
	 	{ 'Href': 'https://www.volvocars.com/intl/v/cars/s60-hybrid',
	 	 'Src': 'https://www.volvocars.com/images/site-navigation/2022/s60-hybrid.png'
	 	}
	 ]
	},
	{ 'Header': 'Mild hybrids',
	 'Description': 'Mild hybrids | Micro hybrids',
	 'Cars': [
	 	{ 'Href': 'https://www.volvocars.com/intl/v/cars/xc90',
	 	 'Src': 'https://www.volvocars.com/images/site-navigation/2022/xc90.png'
	 	},
	 	{ 'Href': 'https://www.volvocars.com/intl/v/cars/xc60',
	 	 'Src': 'https://www.volvocars.com/images/site-navigation/2022/xc60.png'
	 	},
	 	{ 'Href': 'https://www.volvocars.com/intl/v/cars/xc40',
	 	 'Src': 'https://www.volvocars.com/images/site-navigation/2022/xc40.png'
	 	},
	 	{ 'Href': 'https://www.volvocars.com/intl/v/cars/v90',
	 	 'Src': 'https://www.volvocars.com/images/site-navigation/2022/v90.png'
	 	},
	 	{ 'Href': 'https://www.volvocars.com/intl/v/cars/v60',
	 	 'Src': 'https://www.volvocars.com/images/site-navigation/2022/v60.png'
	 	},
	 	{ 'Href': 'https://www.volvocars.com/intl/v/cars/s90',
	 	 'Src': 'https://www.volvocars.com/images/site-navigation/2022/s90.png'
	 	},
	 	{ 'Href': 'https://www.volvocars.com/intl/v/cars/s60',
	 	 'Src': 'https://www.volvocars.com/images/site-navigation/2022/s60.png'
	 	}
	 ]
	},
]

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
		
		for (let index = 0; index < navBarCarsContainerCarsMenuDesktopSideButtons.length; index++) {
			await expect($(aMillionMorePage.navBarCarsContainerCarsMenuDesktopSideButton.replace('__INDEX__', index + 1))).toBeDisplayed();
			await expect($(aMillionMorePage.navBarCarsContainerCarsMenuDesktopSideButton.replace('__INDEX__', index + 1))).toBeClickable();
			await expect($(aMillionMorePage.navBarCarsContainerCarsMenuDesktopSideButtonHeader.replace('__INDEX__', index + 1))).toHaveText(navBarCarsContainerCarsMenuDesktopSideButtons[index]['Header']);
			await expect($(aMillionMorePage.navBarCarsContainerCarsMenuDesktopSideButtonDescription.replace('__INDEX__', index + 1))).toHaveText(navBarCarsContainerCarsMenuDesktopSideButtons[index]['Description']);
			
			await aMillionMorePage.viewCarsContainerFromCarsMenuDesktopSidePanel($(aMillionMorePage.navBarCarsContainerCarsMenuDesktopSideButton.replace('__INDEX__', index + 1)));
			
			for (let index2 = 0; index2 < navBarCarsContainerCarsMenuDesktopSideButtons[index]['Cars'].length; index2++) {
				await expect($(aMillionMorePage.navBarCarsContainerCarsMenuDesktopCarsListItemBtn.replace('__INDEX_1__', index + 1).replace('__INDEX_2__', index2 + 1))).toBeDisplayed();
				await expect($(aMillionMorePage.navBarCarsContainerCarsMenuDesktopCarsListItemBtn.replace('__INDEX_1__', index + 1).replace('__INDEX_2__', index2 + 1))).toHaveAttribute('href', navBarCarsContainerCarsMenuDesktopSideButtons[index]['Cars'][index2]['Href']);
				await expect($(aMillionMorePage.navBarCarsContainerCarsMenuDesktopCarsListItemImg.replace('__INDEX_1__', index + 1).replace('__INDEX_2__', index2 + 1))).toHaveAttribute('src', navBarCarsContainerCarsMenuDesktopSideButtons[index]['Cars'][index2]['Src']);
			}
		}
		
		await aMillionMorePage.closeCarsContainer();
	});
	
	it('2.3 should show and verify the side nav container when side nav button is clicked', async () => {
		await aMillionMorePage.openSideNavContainer();
		await expect(aMillionMorePage.navBarSideNavigationContainer).toBeExisting();
		await aMillionMorePage.closeSideNavContainer();
	});
});
