/*
 * This section defines test constants used to verify element attribute values
 */

const aMillionMorePage = require('../pageobjects/a-million-more.page.js');

const mainBodyIconCalloutsSpeedCapTitleText = 'Speed cap';
const mainBodyIconCalloutsSpeedCapDescriptionText = 'To send a strong signal about the dangers of speeding, we reduced the top speed of all our new cars to 180 km/h in 2020. We are also looking at how smart speed control and geofencing technology could automatically limit speeds near schools and hospitals in the future.';

const mainBodyIconCalloutsHighwayPilotTitleText = 'Highway pilot';
const mainBodyIconCalloutsHighwayPilotDescriptionText = 'With support from LiDAR sensors, the next generation of Volvo cars will be hardware-ready for autonomous drive. And over time, we will push out over-the-air software updates to provide fully autonomous highway driving.';

const mainBodyIconCalloutsDriverMonitoringCamerasTitleText = 'Driver monitoring cameras';
const mainBodyIconCalloutsDriverMonitoringCamerasDescriptionText = 'To help address intoxication and distraction in traffic, we are working on new in-car solutions. Driver monitoring cameras, together with other sensors, will allow the car to intervene when a clearly intoxicated or distracted driver risks serious injury or death.';

const mainBodyIconCalloutsCareKeyTitleText = 'Care Key';
const mainBodyIconCalloutsCareKeyDescriptionText = 'We\'ve recently introduced the Care Key, aimed at addressing speeding. With the Care Key, Volvo car owners can put a speed cap on the car when lending it to a younger family member or less experienced driver as a way of ensuring a safer ride.';

const mainBodyIconCalloutsLearnMoreAboutCarSafetyTitleText = 'LEARN MORE ABOUT CAR SAFETY';
const mainBodyIconCalloutsLearnMoreAboutCarSafetyTitleHrefAttribute='/intl/v/car-safety';

const CarSafetyPageUrl = 'https://www.volvocars.com/intl/v/car-safety';
const CarSafetyPageTitle = 'Car safety | Volvo Cars - International';

const mainBodyIconCalloutsFooterText = 'Features depicted may not be standard or available for all styles, engine options, model years and regions.';

/*
 * This section defines the list of test cases
 */

describe('TC0006 - Main Page Element Verification - Icon Callouts', () => {
	beforeEach (async () => {
		await aMillionMorePage.open();
		await aMillionMorePage.acceptCookiesIfDisplayed();
		await aMillionMorePage.mainBodyIconCalloutsContainer.scrollIntoView();
	});
		
	it('6.1 should show and verify the speed cap icon callouts icon visibility, title value, and text value', async () => {
		await expect(aMillionMorePage.mainBodyIconCalloutsSpeedCapIcon).toBeDisplayed();
		await expect(aMillionMorePage.mainBodyIconCalloutsSpeedCapTitle).toBeDisplayed();
		await expect(aMillionMorePage.mainBodyIconCalloutsSpeedCapTitle).toHaveText(mainBodyIconCalloutsSpeedCapTitleText);
		await expect(aMillionMorePage.mainBodyIconCalloutsSpeedCapDescription).toBeDisplayed();
		await expect(aMillionMorePage.mainBodyIconCalloutsSpeedCapDescription).toHaveText(mainBodyIconCalloutsSpeedCapDescriptionText);
	});
	
	it('6.2 should show and verify the highway pilot icon callouts icon visibility, title value, and text value', async () => {
		await expect(aMillionMorePage.mainBodyIconCalloutsHighwayPilotIcon).toBeDisplayed();
		await expect(aMillionMorePage.mainBodyIconCalloutsHighwayPilotTitle).toBeDisplayed();
		await expect(aMillionMorePage.mainBodyIconCalloutsHighwayPilotTitle).toHaveText(mainBodyIconCalloutsHighwayPilotTitleText);
		await expect(aMillionMorePage.mainBodyIconCalloutsHighwayPilotDescription).toBeDisplayed();
		await expect(aMillionMorePage.mainBodyIconCalloutsHighwayPilotDescription).toHaveText(mainBodyIconCalloutsHighwayPilotDescriptionText);
	});
	
	it('6.3 should show and verify the driver monitoring cameras icon callouts icon visibility, title value, and text value', async () => {
		await expect(aMillionMorePage.mainBodyIconCalloutsDriverMonitoringCamerasIcon).toBeDisplayed();	
		await expect(aMillionMorePage.mainBodyIconCalloutsDriverMonitoringCamerasTitle).toBeDisplayed();
		await expect(aMillionMorePage.mainBodyIconCalloutsDriverMonitoringCamerasTitle).toHaveText(mainBodyIconCalloutsDriverMonitoringCamerasTitleText);		
		await expect(aMillionMorePage.mainBodyIconCalloutsDriverMonitoringCamerasDescription).toBeDisplayed();
		await expect(aMillionMorePage.mainBodyIconCalloutsDriverMonitoringCamerasDescription).toHaveText(mainBodyIconCalloutsDriverMonitoringCamerasDescriptionText);
	});
	
	it('6.4 should show and verify the care key icon callouts icon visibility, title value, and text value', async () => {
		await expect(aMillionMorePage.mainBodyIconCalloutsCareKeyIcon).toBeDisplayed();
		await expect(aMillionMorePage.mainBodyIconCalloutsCareKeyTitle).toBeDisplayed();
		await expect(aMillionMorePage.mainBodyIconCalloutsCareKeyTitle).toHaveText(mainBodyIconCalloutsCareKeyTitleText);
		await expect(aMillionMorePage.mainBodyIconCalloutsCareKeyDescription).toBeDisplayed();
		await expect(aMillionMorePage.mainBodyIconCalloutsCareKeyDescription).toHaveText(mainBodyIconCalloutsCareKeyDescriptionText);
	});
	
	it('6.5 should show and verify the learn more about safety text field', async () => {
		await expect(aMillionMorePage.mainBodyIconCalloutsLearnMoreAboutCarSafetyTitle).toBeDisplayed();
		await expect(aMillionMorePage.mainBodyIconCalloutsLearnMoreAboutCarSafetyTitle).toHaveText(mainBodyIconCalloutsLearnMoreAboutCarSafetyTitleText);
		await expect(aMillionMorePage.mainBodyIconCalloutsLearnMoreAboutCarSafetyTitle).toHaveAttribute('href', mainBodyIconCalloutsLearnMoreAboutCarSafetyTitleHrefAttribute);
		await aMillionMorePage.navigateToCarSafetyPage();
		await expect(browser).toHaveTitle(CarSafetyPageTitle);
		await expect(browser).toHaveUrl(CarSafetyPageUrl);
	});
	
	it('6.6 should show and verify the icon callouts footer', async () => {
		await expect(aMillionMorePage.mainBodyIconCalloutsFooter).toBeDisplayed();
		await expect(aMillionMorePage.mainBodyIconCalloutsFooter).toHaveText(mainBodyIconCalloutsFooterText);
	});
	
});
