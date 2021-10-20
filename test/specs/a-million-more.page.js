const aMillionMorePage = require('../pageobjects/a-million-more.page.js');

const pageUrl = 'https://www.volvocars.com/intl/v/car-safety/a-million-more';
const pageTitle = 'A million more | Volvo Cars - International';

const cookiesContainerBodyText = 'We use cookies and local storage for the best experience on our website, including to personalise content and ads, to provide social media features and to analyse traffic. These cookies include targeted media cookies and advanced analytics cookies. For more information see our Information Notice on the cookie page. By clicking accept you agree to our use of cookies and local storage. To alter the types of cookies we use click “Cookie Settings"';

const mainBodyModelIntroHeaderText = 'Ideas that change the world are often the most controversial.';
const mainBodyModelIntroDescriptionText = 'After we introduced the 3-point safety belt, we faced a world of criticism. Since then, it has saved more than a million lives. Now it\'s time for the next step. For everyone\'s safety.';

const mainBodyVideoPreloadAttribute = 'auto';
const mainBodyVideoSrcAttribute = 'https://www.volvocars.com/images/v/-/media/project/contentplatform/data/media/campaigns/volvo_amm_hero_16x9_loop_clean.mp4';
const mainBodyVideoTypeAttribute = 'video/mp4';

const mainBodyTextStatementText = 'A million more. With new and existing safety features, we are determined to save a million more lives.';

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

const mainBodyIconCalloutsFooterText = 'Features depicted may not be standard or available for all styles, engine options, model years and regions.';

const mainBodyVideoTestimonialsHeaderText = 'One of a million';
const mainBodyVideoTestimonialsDescriptionText = 'Hear the stories from real car crash survivors and see how they\'ve managed to turn an accident into a positive change in their lives.';

const mainBodyVideoTestimonialsAmyVideoSrcAttribute = 'https://www.volvocars.com/images/v/-/media/project/contentplatform/data/media/campaigns/amm_id_amy_4x5_clean.mp4';
const mainBodyVideoTestimonialsAmyVideoTypeAttribute = 'video/mp4';
const mainBodyVideoTestimonialsAmyTitleText = 'Amy';
const mainBodyVideoTestimonialsAmyDescriptionText = 'Meet Amy Ma, who survived a multi-vehicle collision thanks to the safety belt.';

const mainBodyVideoTestimonialsSummerVideoSrcAttribute = 'https://www.volvocars.com/images/v/-/media/project/contentplatform/data/media/campaigns/amm_id_summer_4x5_clean.mp4';
const mainBodyVideoTestimonialsSummerVideoTypeAttribute = 'video/mp4';
const mainBodyVideoTestimonialsSummerTitleText = 'Summer';
const mainBodyVideoTestimonialsSummerDescriptionText = 'Hear Summer talk about the collision that destroyed her car, but spared her life thanks to the safety belt.';

const mainBodyVideoTestimonialsLindaAndMollyVideoSrcAttribute = 'https://www.volvocars.com/images/v/-/media/project/contentplatform/data/media/campaigns/amm_id_molly_linda_4x5_200915_clean.mp4';
const mainBodyVideoTestimonialsLindaAndMollyVideoTypeAttribute = 'video/mp4';
const mainBodyVideoTestimonialsLindaAndMollyTitleText = 'Linda & Molly';
const mainBodyVideoTestimonialsLindaAndMollyDescriptionText = 'If it wasn\'t for the safety belt, Linda & Molly\'s trip to a ski resort could\'ve been their last.';

const mainBodyVideoTestimonialsAlexVideoSrcAttribute = 'https://www.volvocars.com/images/v/-/media/project/contentplatform/data/media/campaigns/amm_id_alex_4x5_clean.mp4';
const mainBodyVideoTestimonialsAlexVideoTypeAttribute = 'video/mp4';
const mainBodyVideoTestimonialsAlexTitleText = 'Alex';
const mainBodyVideoTestimonialsAlexDescriptionText = 'Alex talks about the collision that nearly took his life, but since he was wearing a safety belt only left him with a scar.';

const mainBodyDecadesOfInnovationSectionTitleText = 'Decades of innovation';
const mainBodyDecadesOfInnovationSectionDescriptionText = 'Ever since our founding in 1927, we\'ve been designing cars that put people first. Discover our most important safety innovations over the years.';

const mainBodyDecadesOfInnovationSectionLearnMoreBtnText = 'LEARN MORE'
const mainBodyDecadesOfInnovationSectionLearnMoreBtnHrefAttribute = '/intl/v/car-safety/safety-heritage';

const mainBodyDecadesOfInnovationSectionImgSrcAttribute = 'https://www.volvocars.com/images/v/-/media/project/contentplatform/data/media/campaigns/seat-belt_4096x3072.jpg?h=750&iar=0&w=1000';

const mainBodyProductListCarouselContainerHeaderText = 'Explore our models';
const mainBodyProductListCarouselCarModelsLearnText = "LEARN";
const mainBodyProductListCarouselCarModelsShopText = "SHOP";
const mainBodyProductListCarouselCarModels = [
	{'Type': 'SUV', 
	  'Name': 'XC90 Recharge',
	  'Subtype': 'plug-in hybrid',
	  'ViewHref': '/intl/v/cars/xc90-hybrid',
	  'ShopHref': 'https://www.volvocars.com/intl/build/xc90-hybrid',
	  'Src': 'https://www.volvocars.com/images/v/-/media/project/contentplatform/data/media/my22/car-images/xc90-recharge-my22-responsive.jpg?h=300&iar=0'
	},
	{'Type': 'SUV', 
	  'Name': 'XC60 Recharge',
	  'Subtype': 'plug-in hybrid',
	  'ViewHref': '/intl/v/cars/xc60-hybrid',
	  'ShopHref': 'https://www.volvocars.com/intl/build/xc60-hybrid',
	  'Src': 'https://www.volvocars.com/images/v/-/media/project/contentplatform/data/media/my22/car-images/xc60-recharge-my22-responsive.jpg?h=300&iar=0'
	},
	{'Type': 'SUV', 
	  'Name': 'XC40 Recharge',
	  'Subtype': 'plug-in hybrid',
	  'ViewHref': '/intl/v/cars/xc40-hybrid',
	  'ShopHref': 'https://www.volvocars.com/intl/build/xc40-hybrid',
	  'Src': 'https://www.volvocars.com/images/v/-/media/project/contentplatform/data/media/my22/car-images/xc40-recharge-my22-responsive.jpg?h=300&iar=0'
	},
	{'Type': 'SUV', 
	  'Name': 'XC40 Recharge',
	  'Subtype': 'pure electric',
	  'ViewHref': '/intl/v/cars/xc40-electric',
	  'ShopHref': 'https://www.volvocars.com/intl/build/xc40-electric',
	  'Src': 'https://www.volvocars.com/images/v/-/media/project/contentplatform/data/media/recharge/xc40_bev_responsive.jpg?h=300&iar=0'
	},
	{'Type': 'ESTATE', 
	  'Name': 'V90 Recharge',
	  'Subtype': 'plug-in hybrid',
	  'ViewHref': '/intl/v/cars/v90-hybrid',
	  'ShopHref': 'https://www.volvocars.com/intl/build/v90-hybrid',
	  'Src': 'https://www.volvocars.com/images/v/-/media/project/contentplatform/data/media/my22/car-images/v90-recharge-my22-responsive.jpg?h=300&iar=0'
	},
	{'Type': 'ESTATE', 
	  'Name': 'V60 Recharge',
	  'Subtype': 'plug-in hybrid',
	  'ViewHref': '/intl/v/cars/v60-hybrid',
	  'ShopHref': 'https://www.volvocars.com/intl/build/v60-hybrid',
	  'Src': 'https://www.volvocars.com/images/v/-/media/project/contentplatform/data/media/my22/car-images/v60-recharge-my22-responsive.jpg?h=300&iar=0'
	},
	{'Type': 'SEDAN', 
	  'Name': 'S90 Recharge',
	  'Subtype': 'plug-in hybrid',
	  'ViewHref': '/intl/v/cars/s90-hybrid',
	  'ShopHref': 'https://www.volvocars.com/intl/build/s90-hybrid',
	  'Src': 'https://www.volvocars.com/images/v/-/media/project/contentplatform/data/media/my22/car-images/s90-recharge-my22-responsive.jpg?h=300&iar=0'
	},
	{'Type': 'SEDAN', 
	  'Name': 'S60 Recharge',
	  'Subtype': 'plug-in hybrid',
	  'ViewHref': '/intl/v/cars/s60-hybrid',
	  'ShopHref': 'https://www.volvocars.com/intl/build/s60-hybrid',
	  'Src': 'https://www.volvocars.com/images/v/-/media/project/contentplatform/data/media/my22/car-images/s60-recharge-my22-responsive.jpg?h=300&iar=0'
	}
];

const mainBodyProductListCarouselRechargeBtnText = 'RECHARGE';
const mainBodyProductListCarouselRechargeBtnHrefAttribute = '/intl/v/cars/recharge';
const mainBodyProductListCarouselMildHybridCarsBtnText = 'MILD HYBRID CARS';
const mainBodyProductListCarouselMildHybridCarsBtnHrefAttribute = '/intl/v/cars/other-powertrains';

const mainBodyDisclaimerDescriptionText = [
	'These films contain true stories from real people, who have been compensated for their participation.',
	'Volvo Cars\' safety features complement safe driving practices and are not intended to enable or encourage distracted, aggressive, or otherwise unsafe or illegal driving. Ultimately, the driver is responsible for safe operation of the vehicle at all times.'
];

const mainBodySiteFooterItems = [
	{'Name': 'Cookies',
	  'Href': 'https://www.volvocars.com/intl/v/legal/cookies'
	},
	{'Name': 'Legal',
	  'Href': 'https://www.volvocars.com/intl/v/legal/legal'
	},
	{'Name': 'Privacy',
	  'Href': 'https://www.volvocars.com/intl/v/legal/privacy'
	},
	{'Name': 'Social Media',
	  'Href': 'https://www.volvocars.com/intl/v/legal/social-media'
	}
];

const mainBodySiteFooterCopyrightText = 'Copyright © 2021 Volvo Car Corporation (or its affiliates or licensors)';

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

describe.skip('TC0002 - Navigation Top Bar Verification', () => {
	beforeEach (async () => {
		await aMillionMorePage.open();
	});
	
	it('2.1 should show top navigation bar and elements', async () => {
		await expect(aMillionMorePage.navBar).toBeExisting();
		await expect(aMillionMorePage.navBarHomeBtn).toBeDisplayed();
		await expect(aMillionMorePage.navBarCarsContainerBtn).toBeDisplayed();
		await expect(aMillionMorePage.navBarSideNavBtn).toBeDisplayed();
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

describe('TC0003 - Main Page Element Verification', () => {
	beforeEach (async () => {
		await aMillionMorePage.open();
	});
	
	it.skip('3.1 should show and verify the model intro header and text', async () => {
		await expect(aMillionMorePage.mainBodyModelIntoHeader).toBeDisplayed();
		await expect(aMillionMorePage.mainBodyModelIntoHeader).toHaveText(mainBodyModelIntroHeaderText);
		await expect(aMillionMorePage.mainBodyModelIntoDescription).toBeDisplayed();
		await expect(aMillionMorePage.mainBodyModelIntoDescription).toHaveText(mainBodyModelIntroDescriptionText);
	});
	
	it.skip('3.2 should show and verify the main video if autoplayed and points to correct playback source', async () => {
		await expect(aMillionMorePage.mainBodyVideo).toBeDisplayed();
		await expect(aMillionMorePage.mainBodyVideo).toHaveAttribute('preload', mainBodyVideoPreloadAttribute);
		await expect(aMillionMorePage.mainBodyVideoSrc).toHaveAttribute('src', mainBodyVideoSrcAttribute);
		await expect(aMillionMorePage.mainBodyVideoSrc).toHaveAttribute('type', mainBodyVideoTypeAttribute);
		await expect(aMillionMorePage.mainBodyVideoPlayButton).toBeDisplayed();
		await expect(aMillionMorePage.mainBodyVideoWatchTheStoryButton).toBeDisplayed();
	});
	
	it.skip('3.3 should show and verify the text statement', async () => {
		await expect(aMillionMorePage.mainBodyTextStatement).toBeDisplayed();
		await expect(aMillionMorePage.mainBodyTextStatement).toHaveText(mainBodyTextStatementText);
	});
	
	it.skip('3.4 should show and verify the icon callouts icon visibility, title value, and text value', async () => {
		await aMillionMorePage.mainBodyIconCalloutsContainer.scrollIntoView();
	
		await expect(aMillionMorePage.mainBodyIconCalloutsSpeedCapIcon).toBeDisplayed();
		await expect(aMillionMorePage.mainBodyIconCalloutsSpeedCapTitle).toBeDisplayed();
		await expect(aMillionMorePage.mainBodyIconCalloutsSpeedCapTitle).toHaveText(mainBodyIconCalloutsSpeedCapTitleText);
		await expect(aMillionMorePage.mainBodyIconCalloutsSpeedCapDescription).toBeDisplayed();
		await expect(aMillionMorePage.mainBodyIconCalloutsSpeedCapDescription).toHaveText(mainBodyIconCalloutsSpeedCapDescriptionText);
		
		await expect(aMillionMorePage.mainBodyIconCalloutsHighwayPilotIcon).toBeDisplayed();
		await expect(aMillionMorePage.mainBodyIconCalloutsHighwayPilotTitle).toBeDisplayed();
		await expect(aMillionMorePage.mainBodyIconCalloutsHighwayPilotTitle).toHaveText(mainBodyIconCalloutsHighwayPilotTitleText);
		await expect(aMillionMorePage.mainBodyIconCalloutsHighwayPilotDescription).toBeDisplayed();
		await expect(aMillionMorePage.mainBodyIconCalloutsHighwayPilotDescription).toHaveText(mainBodyIconCalloutsHighwayPilotDescriptionText);
		
		await expect(aMillionMorePage.mainBodyIconCalloutsDriverMonitoringCamerasIcon).toBeDisplayed();	
		await expect(aMillionMorePage.mainBodyIconCalloutsDriverMonitoringCamerasTitle).toBeDisplayed();
		await expect(aMillionMorePage.mainBodyIconCalloutsDriverMonitoringCamerasTitle).toHaveText(mainBodyIconCalloutsDriverMonitoringCamerasTitleText);		
		await expect(aMillionMorePage.mainBodyIconCalloutsDriverMonitoringCamerasDescription).toBeDisplayed();
		await expect(aMillionMorePage.mainBodyIconCalloutsDriverMonitoringCamerasDescription).toHaveText(mainBodyIconCalloutsDriverMonitoringCamerasDescriptionText);
		
		await expect(aMillionMorePage.mainBodyIconCalloutsCareKeyIcon).toBeDisplayed();
		await expect(aMillionMorePage.mainBodyIconCalloutsCareKeyTitle).toBeDisplayed();
		await expect(aMillionMorePage.mainBodyIconCalloutsCareKeyTitle).toHaveText(mainBodyIconCalloutsCareKeyTitleText);
		await expect(aMillionMorePage.mainBodyIconCalloutsCareKeyDescription).toBeDisplayed();
		await expect(aMillionMorePage.mainBodyIconCalloutsCareKeyDescription).toHaveText(mainBodyIconCalloutsCareKeyDescriptionText);
		
		await expect(aMillionMorePage.mainBodyIconCalloutsLearnMoreAboutCarSafetyTitle).toBeDisplayed();
		await expect(aMillionMorePage.mainBodyIconCalloutsLearnMoreAboutCarSafetyTitle).toHaveText(mainBodyIconCalloutsLearnMoreAboutCarSafetyTitleText);
		await expect(aMillionMorePage.mainBodyIconCalloutsLearnMoreAboutCarSafetyTitle).toHaveAttribute('href', mainBodyIconCalloutsLearnMoreAboutCarSafetyTitleHrefAttribute);
		
		await expect(aMillionMorePage.mainBodyIconCalloutsFooter).toBeDisplayed();
		await expect(aMillionMorePage.mainBodyIconCalloutsFooter).toHaveText(mainBodyIconCalloutsFooterText);
	});
	
	it.skip('3.5 should show and verify the video testimonials elements and points to the correct playback source', async () => {
		await aMillionMorePage.mainBodyVideoTestimonialsContainer.scrollIntoView();
		
		await expect(aMillionMorePage.mainBodyVideoTestimonialsHeader).toBeDisplayed();
		await expect(aMillionMorePage.mainBodyVideoTestimonialsHeader).toHaveText(mainBodyVideoTestimonialsHeaderText);
		await expect(aMillionMorePage.mainBodyVideoTestimonialsDescription).toBeDisplayed();
		await expect(aMillionMorePage.mainBodyVideoTestimonialsDescription).toHaveText(mainBodyVideoTestimonialsDescriptionText);
		
		await aMillionMorePage.mainBodyVideoTestimonialsAmyContainer.scrollIntoView();
		await expect(aMillionMorePage.mainBodyVideoTestimonialsAmyVideo).toBeDisplayed();
		await expect(aMillionMorePage.mainBodyVideoTestimonialsAmyVideoSrc).toHaveAttribute('src', mainBodyVideoTestimonialsAmyVideoSrcAttribute);
		await expect(aMillionMorePage.mainBodyVideoTestimonialsAmyVideoSrc).toHaveAttribute('type', mainBodyVideoTestimonialsAmyVideoTypeAttribute);
		await expect(aMillionMorePage.mainBodyVideoTestimonialsAmyVideoPlayBtn).toBeDisplayed();
		await expect(aMillionMorePage.mainBodyVideoTestimonialsAmyTitle).toBeDisplayed();
		await expect(aMillionMorePage.mainBodyVideoTestimonialsAmyTitle).toHaveText(mainBodyVideoTestimonialsAmyTitleText);
		await expect(aMillionMorePage.mainBodyVideoTestimonialsAmyDescription).toBeDisplayed();
		await expect(aMillionMorePage.mainBodyVideoTestimonialsAmyDescription).toHaveText(mainBodyVideoTestimonialsAmyDescriptionText);
		
		await aMillionMorePage.mainBodyVideoTestimonialsSummerContainer.scrollIntoView();
		await expect(aMillionMorePage.mainBodyVideoTestimonialsSummerVideo).toBeDisplayed();
		await expect(aMillionMorePage.mainBodyVideoTestimonialsSummerVideoSrc).toHaveAttribute('src', mainBodyVideoTestimonialsSummerVideoSrcAttribute);
		await expect(aMillionMorePage.mainBodyVideoTestimonialsSummerVideoSrc).toHaveAttribute('type', mainBodyVideoTestimonialsSummerVideoTypeAttribute);
		await expect(aMillionMorePage.mainBodyVideoTestimonialsSummerVideoPlayBtn).toBeDisplayed();
		await expect(aMillionMorePage.mainBodyVideoTestimonialsSummerTitle).toBeDisplayed();
		await expect(aMillionMorePage.mainBodyVideoTestimonialsSummerTitle).toHaveText(mainBodyVideoTestimonialsSummerTitleText);
		await expect(aMillionMorePage.mainBodyVideoTestimonialsSummerDescription).toBeDisplayed();
		await expect(aMillionMorePage.mainBodyVideoTestimonialsSummerDescription).toHaveText(mainBodyVideoTestimonialsSummerDescriptionText);

		await aMillionMorePage.mainBodyVideoTestimonialsLindaAndMollyContainer.scrollIntoView();		
		await expect(aMillionMorePage.mainBodyVideoTestimonialsLindaAndMollyVideo).toBeDisplayed();
		await expect(aMillionMorePage.mainBodyVideoTestimonialsLindaAndMollyVideoSrc).toHaveAttribute('src', mainBodyVideoTestimonialsLindaAndMollyVideoSrcAttribute);
		await expect(aMillionMorePage.mainBodyVideoTestimonialsLindaAndMollyVideoSrc).toHaveAttribute('type', mainBodyVideoTestimonialsLindaAndMollyVideoTypeAttribute);
		await expect(aMillionMorePage.mainBodyVideoTestimonialsLindaAndMollyVideoPlayBtn).toBeDisplayed();
		await expect(aMillionMorePage.mainBodyVideoTestimonialsLindaAndMollyTitle).toBeDisplayed();
		await expect(aMillionMorePage.mainBodyVideoTestimonialsLindaAndMollyTitle).toHaveText(mainBodyVideoTestimonialsLindaAndMollyTitleText);
		await expect(aMillionMorePage.mainBodyVideoTestimonialsLindaAndMollyDescription).toBeDisplayed();
		await expect(aMillionMorePage.mainBodyVideoTestimonialsLindaAndMollyDescription).toHaveText(mainBodyVideoTestimonialsLindaAndMollyDescriptionText);
		
		await aMillionMorePage.mainBodyVideoTestimonialsAlexContainer.scrollIntoView();
		await expect(aMillionMorePage.mainBodyVideoTestimonialsAlexVideo).toBeDisplayed();
		await expect(aMillionMorePage.mainBodyVideoTestimonialsAlexVideoSrc).toHaveAttribute('src', mainBodyVideoTestimonialsAlexVideoSrcAttribute);
		await expect(aMillionMorePage.mainBodyVideoTestimonialsAlexVideoSrc).toHaveAttribute('type', mainBodyVideoTestimonialsAlexVideoTypeAttribute);
		await expect(aMillionMorePage.mainBodyVideoTestimonialsAlexVideoPlayBtn).toBeDisplayed();
		await expect(aMillionMorePage.mainBodyVideoTestimonialsAlexTitle).toBeDisplayed();
		await expect(aMillionMorePage.mainBodyVideoTestimonialsAlexTitle).toHaveText(mainBodyVideoTestimonialsAlexTitleText);
		await expect(aMillionMorePage.mainBodyVideoTestimonialsAlexDescription).toBeDisplayed();
		await expect(aMillionMorePage.mainBodyVideoTestimonialsAlexDescription).toHaveText(mainBodyVideoTestimonialsAlexDescriptionText);
	});
	
	it.skip('3.6 should show and verify the decades of innovation section elements', async () => {
		await aMillionMorePage.mainBodyDecadesOfInnovationSectionContainer.scrollIntoView();
		
		await expect(aMillionMorePage.mainBodyDecadesOfInnovationSectionTitle).toBeDisplayed();
		await expect(aMillionMorePage.mainBodyDecadesOfInnovationSectionTitle).toHaveText(mainBodyDecadesOfInnovationSectionTitleText);
		await expect(aMillionMorePage.mainBodyDecadesOfInnovationSectionDescription).toBeDisplayed();
		await expect(aMillionMorePage.mainBodyDecadesOfInnovationSectionDescription).toHaveText(mainBodyDecadesOfInnovationSectionDescriptionText);
		
		await expect(aMillionMorePage.mainBodyDecadesOfInnovationSectionLearnMoreBtn).toBeDisplayed();
		await expect(aMillionMorePage.mainBodyDecadesOfInnovationSectionLearnMoreBtn).toHaveText(mainBodyDecadesOfInnovationSectionLearnMoreBtnText);
		await expect(aMillionMorePage.mainBodyDecadesOfInnovationSectionLearnMoreBtn).toHaveAttribute('href', mainBodyDecadesOfInnovationSectionLearnMoreBtnHrefAttribute);
		
		await expect(aMillionMorePage.mainBodyDecadesOfInnovationSectionImg).toBeDisplayed();
		await expect(aMillionMorePage.mainBodyDecadesOfInnovationSectionImg).toHaveAttribute('src', mainBodyDecadesOfInnovationSectionImgSrcAttribute);
	});
	
	it('3.7 should show and verify the product list carousel elements', async () => {
		await aMillionMorePage.mainBodyProductListCarouselContainer.scrollIntoView();
		
		await expect(aMillionMorePage.mainBodyProductListCarouselContainerHeader).toBeDisplayed();
		await expect(aMillionMorePage.mainBodyProductListCarouselContainerHeader).toHaveText(mainBodyProductListCarouselContainerHeaderText);
		
		await expect(aMillionMorePage.mainBodyProductListCarouselPreviousBtn).toBeDisplayed();
		await expect(aMillionMorePage.mainBodyProductListCarouselNextBtn).toBeDisplayed();
		
		for (let index = 0; index < mainBodyProductListCarouselCarModels.length; index++) {
			await expect($(aMillionMorePage.mainBodyProductListCarouselItemContainer.replace('__INDEX__', index))).toBeExisting();
			await expect($(aMillionMorePage.mainBodyProductListCarouselItemContainer.replace('__INDEX__', index))).toHaveAttribute('href', mainBodyProductListCarouselCarModels[index]['ViewHref']);
			await expect($(aMillionMorePage.mainBodyProductListCarouselItemType.replace('__INDEX__', index))).toBeDisplayed();
			await expect($(aMillionMorePage.mainBodyProductListCarouselItemType.replace('__INDEX__', index))).toHaveText(mainBodyProductListCarouselCarModels[index]['Type']);
			
			await expect($(aMillionMorePage.mainBodyProductListCarouselItemName.replace('__INDEX__', index))).toBeDisplayed();
			await expect($(aMillionMorePage.mainBodyProductListCarouselItemName.replace('__INDEX__', index))).toHaveText(mainBodyProductListCarouselCarModels[index]['Name']);
			
			await expect($(aMillionMorePage.mainBodyProductListCarouselItemSubtype.replace('__INDEX__', index))).toBeDisplayed();
			await expect($(aMillionMorePage.mainBodyProductListCarouselItemSubtype.replace('__INDEX__', index))).toHaveText(mainBodyProductListCarouselCarModels[index]['Subtype']);
			
			await expect($(aMillionMorePage.mainBodyProductListCarouselItemImg.replace('__INDEX__', index))).toBeDisplayed();
			await expect($(aMillionMorePage.mainBodyProductListCarouselItemImg.replace('__INDEX__', index))).toHaveAttribute('src', mainBodyProductListCarouselCarModels[index]['Src']);
			
			await expect($(aMillionMorePage.mainBodyProductListCarouselLearnBtn.replace('__INDEX__', index))).toBeDisplayed();
			await expect($(aMillionMorePage.mainBodyProductListCarouselLearnBtn.replace('__INDEX__', index))).toHaveText(mainBodyProductListCarouselCarModelsLearnText);
			await expect($(aMillionMorePage.mainBodyProductListCarouselLearnBtn.replace('__INDEX__', index))).toHaveAttribute('href', mainBodyProductListCarouselCarModels[index]['ViewHref']);
			
			await expect($(aMillionMorePage.mainBodyProductListCarouselShopBtn.replace('__INDEX__', index))).toBeDisplayed();
			await expect($(aMillionMorePage.mainBodyProductListCarouselShopBtn.replace('__INDEX__', index))).toHaveText(mainBodyProductListCarouselCarModelsShopText);
			await expect($(aMillionMorePage.mainBodyProductListCarouselShopBtn.replace('__INDEX__', index))).toHaveAttribute('href', mainBodyProductListCarouselCarModels[index]['ShopHref']);
			
			await aMillionMorePage.viewNextItemInProductCarousel();
		}
		
		await expect(aMillionMorePage.mainBodyProductListCarouselRechargeBtn).toBeDisplayed();
		await expect(aMillionMorePage.mainBodyProductListCarouselRechargeBtn).toHaveText(mainBodyProductListCarouselRechargeBtnText);
		await expect(aMillionMorePage.mainBodyProductListCarouselRechargeBtn).toHaveAttribute('href', mainBodyProductListCarouselRechargeBtnHrefAttribute);
		
		await expect(aMillionMorePage.mainBodyProductListCarouselMildHybridCarsBtn).toBeDisplayed();
		await expect(aMillionMorePage.mainBodyProductListCarouselMildHybridCarsBtn).toHaveText(mainBodyProductListCarouselMildHybridCarsBtnText);
		await expect(aMillionMorePage.mainBodyProductListCarouselMildHybridCarsBtn).toHaveAttribute('href', mainBodyProductListCarouselMildHybridCarsBtnHrefAttribute);
	});
	
	it.skip('3.8 should show and verify the disclaimer text', async () => {
		await aMillionMorePage.mainBodyDisclaimerContainer.scrollIntoView();
		
		for (let index = 0; index < mainBodyDisclaimerDescriptionText.length; index++) {
			await expect($(aMillionMorePage.mainBodyDisclaimerDescription.replace('__INDEX__', index + 1))).toBeDisplayed();
			await expect($(aMillionMorePage.mainBodyDisclaimerDescription.replace('__INDEX__', index + 1))).toHaveText(mainBodyDisclaimerDescriptionText[index]);
		}
	});
	
	it('3.9 should show and verify the site footer text and hyperlinks as well as the site footer copyright', async () => {
		await aMillionMorePage.mainBodySiteFooterContainer.scrollIntoView();
		
		for (let index = 0; index < mainBodySiteFooterItems.length; index++) {
			await expect($(aMillionMorePage.mainBodySiteFooterItem.replace('__INDEX__', index + 1))).toBeDisplayed();
			await expect($(aMillionMorePage.mainBodySiteFooterItem.replace('__INDEX__', index + 1))).toHaveText(mainBodySiteFooterItems[index]['Name']);
			await expect($(aMillionMorePage.mainBodySiteFooterItem.replace('__INDEX__', index + 1))).toHaveAttribute('href', mainBodySiteFooterItems[index]['Href']);
		}
		
		await expect(aMillionMorePage.mainBodySiteFooterCopyright).toBeDisplayed();
		await expect(aMillionMorePage.mainBodySiteFooterCopyright).toHaveText(mainBodySiteFooterCopyrightText);
	});
});
