/*
 * This section defines test constants used to verify element attribute values
 */

const aMillionMorePage = require('../pageobjects/a-million-more.page.js');

const mainBodyDecadesOfInnovationSectionTitleText = 'Decades of innovation';
const mainBodyDecadesOfInnovationSectionDescriptionText = 'Ever since our founding in 1927, we\'ve been designing cars that put people first. Discover our most important safety innovations over the years.';

const mainBodyDecadesOfInnovationSectionLearnMoreBtnText = 'LEARN MORE'
const mainBodyDecadesOfInnovationSectionLearnMoreBtnHrefAttribute = '/intl/v/car-safety/safety-heritage';

const safetyHeritagePageTitle = 'Safety innovations | Volvo Cars';
const safetyHeritagePageUrl = 'https://www.volvocars.com/intl/v/car-safety/safety-heritage';

const mainBodyDecadesOfInnovationSectionImgSrcAttribute = 'https://www.volvocars.com/images/v/-/media/project/contentplatform/data/media/campaigns/seat-belt_4096x3072.jpg?h=750&iar=0&w=1000';

/*
 * This section defines the list of test cases
 */

describe('TC0008 - Main Page Element Verification - Decades Of Innovation Section', () => {
	beforeEach (async () => {
		await aMillionMorePage.open();
		await aMillionMorePage.acceptCookiesIfDisplayed();
		await aMillionMorePage.mainBodyDecadesOfInnovationSectionContainer.scrollIntoView();
	});
	
	it('8.1 should show and verify the decades of innovation section title and description', async () => {		
		await expect(aMillionMorePage.mainBodyDecadesOfInnovationSectionTitle).toBeDisplayed();
		await expect(aMillionMorePage.mainBodyDecadesOfInnovationSectionTitle).toHaveText(mainBodyDecadesOfInnovationSectionTitleText);
		await expect(aMillionMorePage.mainBodyDecadesOfInnovationSectionDescription).toBeDisplayed();
		await expect(aMillionMorePage.mainBodyDecadesOfInnovationSectionDescription).toHaveText(mainBodyDecadesOfInnovationSectionDescriptionText);
	});
	
	it('8.2 should show and verify the decades of innovation section learn more button', async () => {		
		await expect(aMillionMorePage.mainBodyDecadesOfInnovationSectionLearnMoreBtn).toBeDisplayed();
		await expect(aMillionMorePage.mainBodyDecadesOfInnovationSectionLearnMoreBtn).toHaveText(mainBodyDecadesOfInnovationSectionLearnMoreBtnText);
		await expect(aMillionMorePage.mainBodyDecadesOfInnovationSectionLearnMoreBtn).toHaveAttribute('href', mainBodyDecadesOfInnovationSectionLearnMoreBtnHrefAttribute);	
		await aMillionMorePage.navigateToSafetyHeritagePage();
		await expect(browser).toHaveTitle(safetyHeritagePageTitle);
		await expect(browser).toHaveUrl(safetyHeritagePageUrl);
	});
	
	it('8.3 should show and verify the decades of innovation section image', async () => {		
		await expect(aMillionMorePage.mainBodyDecadesOfInnovationSectionImg).toBeDisplayed();
		await expect(aMillionMorePage.mainBodyDecadesOfInnovationSectionImg).toHaveAttribute('src', mainBodyDecadesOfInnovationSectionImgSrcAttribute);
	});
});
