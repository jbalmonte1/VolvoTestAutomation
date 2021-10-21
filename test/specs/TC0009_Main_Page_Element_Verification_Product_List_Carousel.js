/*
 * This section defines test constants used to verify element attribute values
 */

const aMillionMorePage = require('../pageobjects/a-million-more.page.js');

const mainBodyProductListCarouselContainerHeaderText = 'Explore our models';
const mainBodyProductListCarouselCarModelsLearnText = "LEARN";
const mainBodyProductListCarouselCarModelsShopText = "SHOP";
const mainBodyProductListCarouselCarModels = [
	{'Type': 'SUV', 
	  'Name': 'XC90 Recharge',
	  'Subtype': 'plug-in hybrid',
	  'ViewCarHref': '/intl/v/cars/xc90-hybrid',
	  'ViewCarPageTitle': 'Volvo XC90 Recharge plug-in hybrid | Volvo Cars',
	  'ViewCarPageUrl': 'https://www.volvocars.com/intl/v/cars/xc90-hybrid',
	  'ShopCarHref': 'https://www.volvocars.com/intl/build/xc90-hybrid',
	  'ShopCarPageTitle': 'Design your XC90 Recharge | Volvo Cars International',
	  'ShopCarPageUrl': 'https://www.volvocars.com/intl/build/xc90-hybrid',
	  'Src': 'https://www.volvocars.com/images/v/-/media/project/contentplatform/data/media/my22/car-images/xc90-recharge-my22-responsive.jpg?h=300&iar=0'
	},
	{'Type': 'SUV', 
	  'Name': 'XC60 Recharge',
	  'Subtype': 'plug-in hybrid',
	  'ViewCarHref': '/intl/v/cars/xc60-hybrid',
  	  'ViewCarPageTitle': 'Volvo XC60 Recharge plug-in hybrid | Volvo Cars',
	  'ViewCarPageUrl': 'https://www.volvocars.com/intl/v/cars/xc60-hybrid',
	  'ShopCarHref': 'https://www.volvocars.com/intl/build/xc60-hybrid',
	  'ShopCarPageTitle': 'Design your XC60 Recharge | Volvo Cars International',
	  'ShopCarPageUrl': 'https://www.volvocars.com/intl/build/xc60-hybrid',
	  'Src': 'https://www.volvocars.com/images/v/-/media/project/contentplatform/data/media/my22/car-images/xc60-recharge-my22-responsive.jpg?h=300&iar=0'
	},
	{'Type': 'SUV', 
	  'Name': 'XC40 Recharge',
	  'Subtype': 'plug-in hybrid',
	  'ViewCarHref': '/intl/v/cars/xc40-hybrid',
	  'ViewCarPageTitle': 'Volvo XC40 Recharge plug-in hybrid | Volvo Cars',
	  'ViewCarPageUrl': 'https://www.volvocars.com/intl/v/cars/xc40-hybrid',
	  'ShopCarHref': 'https://www.volvocars.com/intl/build/xc40-hybrid',
	  'ShopCarPageTitle': 'Design your XC40 Recharge | Volvo Cars International',
	  'ShopCarPageUrl': 'https://www.volvocars.com/intl/build/xc40-hybrid',
	  'Src': 'https://www.volvocars.com/images/v/-/media/project/contentplatform/data/media/my22/car-images/xc40-recharge-my22-responsive.jpg?h=300&iar=0'
	},
	{'Type': 'SUV', 
	  'Name': 'XC40 Recharge',
	  'Subtype': 'pure electric',
	  'ViewCarHref': '/intl/v/cars/xc40-electric',
	  'ViewCarPageTitle': 'Volvo XC40 Recharge pure electric | Volvo Cars',
	  'ViewCarPageUrl': 'https://www.volvocars.com/intl/v/cars/xc40-electric',
	  'ShopCarHref': 'https://www.volvocars.com/intl/build/xc40-electric',
	  'ShopCarPageTitle': 'Design your XC40 Recharge | Volvo Cars International',
	  'ShopCarPageUrl': 'https://www.volvocars.com/intl/build/xc40-electric',
	  'Src': 'https://www.volvocars.com/images/v/-/media/project/contentplatform/data/media/recharge/xc40_bev_responsive.jpg?h=300&iar=0'
	},
	{'Type': 'ESTATE', 
	  'Name': 'V90 Recharge',
	  'Subtype': 'plug-in hybrid',
	  'ViewCarHref': '/intl/v/cars/v90-hybrid',
	  'ViewCarPageTitle': 'Volvo V90 Recharge plug-in hybrid | Volvo Cars',
	  'ViewCarPageUrl': 'https://www.volvocars.com/intl/v/cars/v90-hybrid',
	  'ShopCarHref': 'https://www.volvocars.com/intl/build/v90-hybrid',
	  'ShopCarPageTitle': 'Design your V90 Recharge | Volvo Cars International',
	  'ShopCarPageUrl': 'https://www.volvocars.com/intl/build/v90-hybrid',
	  'Src': 'https://www.volvocars.com/images/v/-/media/project/contentplatform/data/media/my22/car-images/v90-recharge-my22-responsive.jpg?h=300&iar=0'
	},
	{'Type': 'ESTATE', 
	  'Name': 'V60 Recharge',
	  'Subtype': 'plug-in hybrid',
	  'ViewCarHref': '/intl/v/cars/v60-hybrid',
	  'ViewCarPageTitle': 'Volvo V60 Recharge plug-in hybrid | Volvo Cars',
	  'ViewCarPageUrl': 'https://www.volvocars.com/intl/v/cars/v60-hybrid',
	  'ShopCarHref': 'https://www.volvocars.com/intl/build/v60-hybrid',
	  'ShopCarPageTitle': 'Design your V60 Recharge | Volvo Cars International',
	  'ShopCarPageUrl': 'https://www.volvocars.com/intl/build/v60-hybrid',
	  'Src': 'https://www.volvocars.com/images/v/-/media/project/contentplatform/data/media/my22/car-images/v60-recharge-my22-responsive.jpg?h=300&iar=0'
	},
	{'Type': 'SEDAN', 
	  'Name': 'S90 Recharge',
	  'Subtype': 'plug-in hybrid',
	  'ViewCarHref': '/intl/v/cars/s90-hybrid',
	  'ViewCarPageTitle': 'Volvo S90 Recharge plug-in hybrid | Volvo Cars',
	  'ViewCarPageUrl': 'https://www.volvocars.com/intl/v/cars/s90-hybrid',
	  'ShopCarHref': 'https://www.volvocars.com/intl/build/s90-hybrid',
	  'ShopCarPageTitle': 'Design your S90 Recharge | Volvo Cars International',
	  'ShopCarPageUrl': 'https://www.volvocars.com/intl/build/s90-hybrid',
	  'Src': 'https://www.volvocars.com/images/v/-/media/project/contentplatform/data/media/my22/car-images/s90-recharge-my22-responsive.jpg?h=300&iar=0'
	},
	{'Type': 'SEDAN', 
	  'Name': 'S60 Recharge',
	  'Subtype': 'plug-in hybrid',
	  'ViewCarHref': '/intl/v/cars/s60-hybrid',
	  'ViewCarPageTitle': 'Volvo S60 Recharge plug-in hybrid | Volvo Cars',
	  'ViewCarPageUrl': 'https://www.volvocars.com/intl/v/cars/s60-hybrid',
	  'ShopCarHref': 'https://www.volvocars.com/intl/build/s60-hybrid',
	  'ShopCarPageTitle': 'Design your S60 Recharge | Volvo Cars International',
	  'ShopCarPageUrl': 'https://www.volvocars.com/intl/build/s60-hybrid',
	  'Src': 'https://www.volvocars.com/images/v/-/media/project/contentplatform/data/media/my22/car-images/s60-recharge-my22-responsive.jpg?h=300&iar=0'
	}
];

const mainBodyProductListCarouselRechargeBtnText = 'RECHARGE';
const mainBodyProductListCarouselRechargeBtnHrefAttribute = '/intl/v/cars/recharge';

const rechargePageTitle = 'Plug-in hybrid and Pure electric cars | Volvo Cars';
const rechargePageUrl = 'https://www.volvocars.com/intl/v/cars/recharge';

const mainBodyProductListCarouselMildHybridCarsBtnText = 'MILD HYBRID CARS';
const mainBodyProductListCarouselMildHybridCarsBtnHrefAttribute = '/intl/v/cars/other-powertrains';

const mildHybridCarsPageTitle = 'Mild hybrids and other powertrains | Volvo Cars';
const mildHybridCarsPageUrl = 'https://www.volvocars.com/intl/v/cars/other-powertrains';

/*
 * This section defines the list of test cases
 */

describe('TC0009 - Main Page Element Verification - Product List Carousel', () => {
	beforeEach (async () => {
		await aMillionMorePage.open();
		await aMillionMorePage.acceptCookiesIfDisplayed();
		await aMillionMorePage.mainBodyProductListCarouselContainer.scrollIntoView();
	});
	
	it('9.1 should show and verify the product list carousel header', async () => {
		await expect(aMillionMorePage.mainBodyProductListCarouselContainerHeader).toBeDisplayed();
		await expect(aMillionMorePage.mainBodyProductListCarouselContainerHeader).toHaveText(mainBodyProductListCarouselContainerHeaderText);
	});	
	
	it('9.2 should show and verify the product list carousel pagination buttons', async () => {
		await expect(aMillionMorePage.mainBodyProductListCarouselPreviousBtn).toBeDisplayed();
		await expect(aMillionMorePage.mainBodyProductListCarouselNextBtn).toBeDisplayed();
	});
	
	it('9.3 should show and verify the product list carousel items', async () => {
		for (let index = 0; index < mainBodyProductListCarouselCarModels.length; index++) {
			await aMillionMorePage.open();
			await aMillionMorePage.mainBodyProductListCarouselContainer.scrollIntoView();
			await aMillionMorePage.seekItemInProductCarousel(index);
			
			await expect($(aMillionMorePage.mainBodyProductListCarouselItemContainer.replace('__INDEX__', index))).toBeExisting();
			await expect($(aMillionMorePage.mainBodyProductListCarouselItemContainer.replace('__INDEX__', index))).toHaveAttribute('href', mainBodyProductListCarouselCarModels[index]['ViewCarHref']);
			await aMillionMorePage.navigateToViewCarPage($(aMillionMorePage.mainBodyProductListCarouselItemContainer.replace('__INDEX__', index)));
			await expect(browser).toHaveTitle(mainBodyProductListCarouselCarModels[index]['ViewCarPageTitle']);
			await expect(browser).toHaveUrl(mainBodyProductListCarouselCarModels[index]['ViewCarPageUrl']);			
			
			await aMillionMorePage.open();
			await aMillionMorePage.mainBodyProductListCarouselContainer.scrollIntoView();
			await aMillionMorePage.seekItemInProductCarousel(index);
			
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
			await expect($(aMillionMorePage.mainBodyProductListCarouselLearnBtn.replace('__INDEX__', index))).toHaveAttribute('href', mainBodyProductListCarouselCarModels[index]['ViewCarHref']);
			
			await aMillionMorePage.navigateToViewCarPage($(aMillionMorePage.mainBodyProductListCarouselLearnBtn.replace('__INDEX__', index)));
			await expect(browser).toHaveTitle(mainBodyProductListCarouselCarModels[index]['ViewCarPageTitle']);
			await expect(browser).toHaveUrl(mainBodyProductListCarouselCarModels[index]['ViewCarPageUrl']);			
			
			await aMillionMorePage.open();
			await aMillionMorePage.mainBodyProductListCarouselContainer.scrollIntoView();
			await aMillionMorePage.seekItemInProductCarousel(index);
			
			await expect($(aMillionMorePage.mainBodyProductListCarouselShopBtn.replace('__INDEX__', index))).toBeDisplayed();
			await expect($(aMillionMorePage.mainBodyProductListCarouselShopBtn.replace('__INDEX__', index))).toHaveText(mainBodyProductListCarouselCarModelsShopText);
			await expect($(aMillionMorePage.mainBodyProductListCarouselShopBtn.replace('__INDEX__', index))).toHaveAttribute('href', mainBodyProductListCarouselCarModels[index]['ShopCarHref']);
			
			await aMillionMorePage.navigateToShopCarPage($(aMillionMorePage.mainBodyProductListCarouselShopBtn.replace('__INDEX__', index)));
			await expect(browser).toHaveTitle(mainBodyProductListCarouselCarModels[index]['ShopCarPageTitle']);
			await expect(browser).toHaveUrl(mainBodyProductListCarouselCarModels[index]['ShopCarPageUrl']);
		}
	});
	
	it('9.4 should show and verify the product list carousel recharge button', async () => {
		await expect(aMillionMorePage.mainBodyProductListCarouselRechargeBtn).toBeDisplayed();
		await expect(aMillionMorePage.mainBodyProductListCarouselRechargeBtn).toHaveText(mainBodyProductListCarouselRechargeBtnText);
		await expect(aMillionMorePage.mainBodyProductListCarouselRechargeBtn).toHaveAttribute('href', mainBodyProductListCarouselRechargeBtnHrefAttribute);
		await aMillionMorePage.navigateToRechargePage();
		await expect(browser).toHaveTitle(rechargePageTitle);
		await expect(browser).toHaveUrl(rechargePageUrl);
	});
	
	it('9.5 should show and verify the product list carousel mild hybrid cars button', async () => {
		await expect(aMillionMorePage.mainBodyProductListCarouselMildHybridCarsBtn).toBeDisplayed();
		await expect(aMillionMorePage.mainBodyProductListCarouselMildHybridCarsBtn).toHaveText(mainBodyProductListCarouselMildHybridCarsBtnText);
		await expect(aMillionMorePage.mainBodyProductListCarouselMildHybridCarsBtn).toHaveAttribute('href', mainBodyProductListCarouselMildHybridCarsBtnHrefAttribute);
		await aMillionMorePage.navigateToMildHybridCarsPage();
		await expect(browser).toHaveTitle(mildHybridCarsPageTitle);
		await expect(browser).toHaveUrl(mildHybridCarsPageUrl);
	});
});
