/*
 * This section defines test constants used to verify element attribute values
 */

const aMillionMorePage = require('../pageobjects/a-million-more.page.js');

const mainBodySiteFooterItems = [
	{'Name': 'Cookies',
	  'Href': 'https://www.volvocars.com/intl/v/legal/cookies',
	  'Title': 'Cookies | Volvo Cars - International'
	},
	{'Name': 'Legal',
	  'Href': 'https://www.volvocars.com/intl/v/legal/legal',
	  'Title': 'Legal | Volvo Cars - International'
	},
	{'Name': 'Privacy',
	  'Href': 'https://www.volvocars.com/intl/v/legal/privacy',
	  'Title': 'Privacy | Volvo Cars - International'
	},
	{'Name': 'Social Media',
	  'Href': 'https://www.volvocars.com/intl/v/legal/social-media',
	  'Title': 'Social Media | Volvo Cars - International'
	}
];

const mainBodySiteFooterCopyrightText = 'Copyright © 2021 Volvo Car Corporation (or its affiliates or licensors)';

/*
 * This section defines the list of test cases
 */

describe('TC0011 - Main Page Element Verification - Site Footer', () => {
	beforeEach (async () => {
		await aMillionMorePage.open();
		await aMillionMorePage.acceptCookiesIfDisplayed();
		await aMillionMorePage.mainBodySiteFooterContainer.scrollIntoView();
	});
	
	it('11.1 should show and verify the site footer text and hyperlinks', async () => {
		for (let index = 0; index < mainBodySiteFooterItems.length; index++) {
			await expect($(aMillionMorePage.mainBodySiteFooterItem.replace('__INDEX__', index + 1))).toBeDisplayed();
			await expect($(aMillionMorePage.mainBodySiteFooterItem.replace('__INDEX__', index + 1))).toHaveText(mainBodySiteFooterItems[index]['Name']);
			await expect($(aMillionMorePage.mainBodySiteFooterItem.replace('__INDEX__', index + 1))).toHaveAttribute('href', mainBodySiteFooterItems[index]['Href']);
			
			await aMillionMorePage.navigateToSiteFooterPage($(aMillionMorePage.mainBodySiteFooterItem.replace('__INDEX__', index + 1)));
			await expect(browser).toHaveTitle(mainBodySiteFooterItems[index]['Title']);
			await expect(browser).toHaveUrl(mainBodySiteFooterItems[index]['Href']);
			
			await aMillionMorePage.open();
			await aMillionMorePage.mainBodySiteFooterContainer.scrollIntoView();
		}
	});

	it('11.2 should show and verify the site footer copyright', async () => {		
		await expect(aMillionMorePage.mainBodySiteFooterCopyright).toBeDisplayed();
		await expect(aMillionMorePage.mainBodySiteFooterCopyright).toHaveText(mainBodySiteFooterCopyrightText);
	});
});
