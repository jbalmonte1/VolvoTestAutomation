/*
 * This section defines test constants used to verify element attribute values
 */

const aMillionMorePage = require('../pageobjects/a-million-more.page.js');

const mainBodyVideoPreloadAttribute = 'auto';
const mainBodyVideoSrcAttribute = 'https://www.volvocars.com/images/v/-/media/project/contentplatform/data/media/campaigns/volvo_amm_hero_16x9_loop_clean.mp4';
const mainBodyVideoTypeAttribute = 'video/mp4';

/*
 * This section defines the list of test cases
 */

describe('TC0004 - Main Page Element Verification - Main Video', () => {
	beforeEach (async () => {
		await aMillionMorePage.open();
		await aMillionMorePage.acceptCookiesIfDisplayed();
	});
	
	it('4.1 should show and verify the main video if autoplayed and points to correct playback source', async () => {
		await expect(aMillionMorePage.mainBodyVideo).toBeDisplayed();
		await expect(aMillionMorePage.mainBodyVideo).toHaveAttribute('preload', mainBodyVideoPreloadAttribute);
		await expect(aMillionMorePage.mainBodyVideoSrc).toHaveAttribute('src', mainBodyVideoSrcAttribute);
		await expect(aMillionMorePage.mainBodyVideoSrc).toHaveAttribute('type', mainBodyVideoTypeAttribute);
		await expect(aMillionMorePage.mainBodyVideoPlayButton).toBeDisplayed();
		await expect(aMillionMorePage.mainBodyVideoWatchTheStoryButton).toBeDisplayed();
	});
	
});
