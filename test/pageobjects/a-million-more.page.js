const Page = require('./page');

/**
 * page containing specific selectors and methods for a-million-more page
 */
class aMillionMorePage extends Page {
    /**
     * These keywords return selectors for the cookies container
     */
    get cookiesContainerLogo () { return $('//div[@class="optanon-alert-box-logo"]'); }
    get cookiesContainerBody () { return $('//div[@class="optanon-alert-box-body"]//p[@id="alert-box-message"]'); }
    get cookiesContainerAcceptCookiesBtn () { return $('//button[@title="Accept"]'); }
    get cookiesContainerCookieSettingsBtn () { return $('//button[@title="Cookie Settings"]'); }
    
    /**
     * These keywords return selectors for the top navigation bar container
     */
    get navBar () { return $('//div[@id="site-nav-topbar-wrapper"]'); }
    get navBarHomeBtn () { return $('//a[@href="https://www.volvocars.com/intl"]'); }
    get navBarCarsContainerBtn () { return $('//em[@data-testid="nav:carsLabelContainer"]'); }
    get navBarSideNavBtn () { return $('//button[@id="sitenav-sidenav-toggle"]'); }
    
    /**
     * These keywords return selectors for the cars menu desktop container
     */
    get navBarCarsContainerCarsMenuDesktopContainer () { return $('//div[@data-autoid="nav:carMenuDesktop"][@aria-hidden="false"]'); }
    
    /**
     * These keywords return selectors for the side navigation container
     */
    get navBarSideNavigationContainer () { return $('//nav[@id="nav:sideNavigation"]//div[@class="_SN-ah _SN-b _SN-p _SN-s _SN-v"]'); }
    get navBarSideNavCloseBtn () { return $('//button[@data-autoid="nav:siteNavCloseIcon"]'); }
    
    /**
     * These keywords return selectors for the model intro 
     */
    get mainBodyModelIntoHeader () { return $('//div[@data-component="ModelIntro"]//h2'); }
    get mainBodyModelIntoDescription () { return $('//div[@data-component="ModelIntro"]//p'); }
    
    /**
     * These keywords return selectors for the video elements
     */    
    get mainBodyVideo () { return $('//div[@data-component="Video"]//video'); }
    get mainBodyVideoSrc () { return $('//div[@data-component="Video"]//video/source'); }
    get mainBodyVideoPlayButton () { return $('//div[@data-component="Video"]/section/div/button'); }
    get mainBodyVideoWatchTheStoryButton () { return $('//div[@data-component="Video"]//div[@class="a cn"]/button'); }
    
    /**
     * These keywords return selectors for the text statement
     */
    get mainBodyTextStatement () { return $('//div[@data-component="TextStatement"]'); }
    
    /**
     * These keywords return selectors for the icon callouts
     */
    get mainBodyIconCalloutsContainer () { return $('//div[@data-component="IconCallouts"]'); }
     
    get mainBodyIconCalloutsSpeedCapIcon () { return $('//div[@data-autoid="iconCallouts:iconTextItem"]//*[@data-icon="speed-cap"]'); }
    get mainBodyIconCalloutsSpeedCapTitle () { return $('//div[@data-autoid="iconCallouts:iconTextItem"]//*[@data-icon="speed-cap"]/parent::div/following-sibling::div/em'); }
    get mainBodyIconCalloutsSpeedCapDescription () { return $('//div[@data-autoid="iconCallouts:iconTextItem"]//*[@data-icon="speed-cap"]/parent::div/following-sibling::div/div'); }
    
    get mainBodyIconCalloutsHighwayPilotIcon () { return $('//div[@data-autoid="iconCallouts:iconTextItem"]//*[@data-icon="highway"]'); }
    get mainBodyIconCalloutsHighwayPilotTitle () { return $('//div[@data-autoid="iconCallouts:iconTextItem"]//*[@data-icon="highway"]/parent::div/following-sibling::div/em'); }
    get mainBodyIconCalloutsHighwayPilotDescription () { return $('//div[@data-autoid="iconCallouts:iconTextItem"]//*[@data-icon="highway"]/parent::div/following-sibling::div/div'); }
    
    get mainBodyIconCalloutsDriverMonitoringCamerasIcon () { return $('//div[@data-autoid="iconCallouts:iconTextItem"]//*[@data-icon="camera2"]'); }
    get mainBodyIconCalloutsDriverMonitoringCamerasTitle () { return $('//div[@data-autoid="iconCallouts:iconTextItem"]//*[@data-icon="camera2"]/parent::div/following-sibling::div/em'); }
    get mainBodyIconCalloutsDriverMonitoringCamerasDescription () { return $('//div[@data-autoid="iconCallouts:iconTextItem"]//*[@data-icon="camera2"]/parent::div/following-sibling::div/div'); }
    
    get mainBodyIconCalloutsCareKeyIcon () { return $('//div[@data-autoid="iconCallouts:iconTextItem"]//*[@data-icon="key"]'); }
    get mainBodyIconCalloutsCareKeyTitle () { return $('//div[@data-autoid="iconCallouts:iconTextItem"]//*[@data-icon="key"]/parent::div/following-sibling::div/em'); }
    get mainBodyIconCalloutsCareKeyDescription () { return $('//div[@data-autoid="iconCallouts:iconTextItem"]//*[@data-icon="key"]/parent::div/following-sibling::div/div'); }
    
    get mainBodyIconCalloutsLearnMoreAboutCarSafetyTitle () { return $('//a[@data-autoid="iconCallouts:cta"]'); }
    get mainBodyIconCalloutsFooter () { return $('//div[@data-component="IconCallouts"]//div[@data-nosnippet="true"]//p'); }
    
    /**
     * These keywords return selectors for the video testimonials
     */
    get mainBodyVideoTestimonialsContainer () { return $('//div[@data-component="VideoTestimonials"]'); } 
     
    get mainBodyVideoTestimonialsHeader () { return $('//div[@data-component="VideoTestimonials"]//h2'); }
    get mainBodyVideoTestimonialsDescription () { return $('//div[@data-component="VideoTestimonials"]//h2/following-sibling::p'); }
    
    get mainBodyVideoTestimonialsContainer () { return $('//div[@data-autoid="videoTestimonials:container"][__INDEX__]'); }
    get mainBodyVideoTestimonialsVideo () { return $('//div[@data-autoid="videoTestimonials:container"][__INDEX__]//video'); }
    get mainBodyVideoTestimonialsVideoSrc () { return $('//div[@data-autoid="videoTestimonials:container"][__INDEX__]//video/source'); }
    get mainBodyVideoTestimonialsVideoPlayBtn () { return $('//div[@data-autoid="videoTestimonials:container"][__INDEX__]//button'); }
    get mainBodyVideoTestimonialsTitle () { return $('//div[@data-autoid="videoTestimonials:container"][__INDEX__]//em'); }
    get mainBodyVideoTestimonialsDescription () { return $('//div[@data-autoid="videoTestimonials:container"][__INDEX__]//p'); }
    
    get mainBodyVideoTestimonialsAmyContainer () { return $('//div[@data-autoid="videoTestimonials:container"][1]'); }
    get mainBodyVideoTestimonialsAmyVideo () { return $('//div[@data-autoid="videoTestimonials:container"][1]//video'); }
    get mainBodyVideoTestimonialsAmyVideoSrc () { return $('//div[@data-autoid="videoTestimonials:container"][1]//video/source'); }
    get mainBodyVideoTestimonialsAmyVideoPlayBtn () { return $('//div[@data-autoid="videoTestimonials:container"][1]//button'); }
    get mainBodyVideoTestimonialsAmyTitle () { return $('//div[@data-autoid="videoTestimonials:container"][1]//em'); }
    get mainBodyVideoTestimonialsAmyDescription () { return $('//div[@data-autoid="videoTestimonials:container"][1]//p'); }
    
    get mainBodyVideoTestimonialsSummerContainer () { return $('//div[@data-autoid="videoTestimonials:container"][2]'); }
    get mainBodyVideoTestimonialsSummerVideo () { return $('//div[@data-autoid="videoTestimonials:container"][2]//video'); }
    get mainBodyVideoTestimonialsSummerVideoSrc () { return $('//div[@data-autoid="videoTestimonials:container"][2]//video/source'); }
    get mainBodyVideoTestimonialsSummerVideoPlayBtn () { return $('//div[@data-autoid="videoTestimonials:container"][2]//button'); }
    get mainBodyVideoTestimonialsSummerTitle () { return $('//div[@data-autoid="videoTestimonials:container"][2]//em'); }
    get mainBodyVideoTestimonialsSummerDescription () { return $('//div[@data-autoid="videoTestimonials:container"][2]//p'); }
    
    get mainBodyVideoTestimonialsLindaAndMollyContainer () { return $('//div[@data-autoid="videoTestimonials:container"][3]'); }
    get mainBodyVideoTestimonialsLindaAndMollyVideo () { return $('//div[@data-autoid="videoTestimonials:container"][3]//video'); }
    get mainBodyVideoTestimonialsLindaAndMollyVideoSrc () { return $('//div[@data-autoid="videoTestimonials:container"][3]//video/source'); }
    get mainBodyVideoTestimonialsLindaAndMollyVideoPlayBtn () { return $('//div[@data-autoid="videoTestimonials:container"][3]//button'); }
    get mainBodyVideoTestimonialsLindaAndMollyTitle () { return $('//div[@data-autoid="videoTestimonials:container"][3]//em'); }
    get mainBodyVideoTestimonialsLindaAndMollyDescription () { return $('//div[@data-autoid="videoTestimonials:container"][3]//p'); }
    
    get mainBodyVideoTestimonialsAlexContainer () { return $('//div[@data-autoid="videoTestimonials:container"][4]'); }
    get mainBodyVideoTestimonialsAlexVideo () { return $('//div[@data-autoid="videoTestimonials:container"][4]//video'); }
    get mainBodyVideoTestimonialsAlexVideoSrc () { return $('//div[@data-autoid="videoTestimonials:container"][4]//video/source'); }
    get mainBodyVideoTestimonialsAlexVideoPlayBtn () { return $('//div[@data-autoid="videoTestimonials:container"][4]//button'); }
    get mainBodyVideoTestimonialsAlexTitle () { return $('//div[@data-autoid="videoTestimonials:container"][4]//em'); }
    get mainBodyVideoTestimonialsAlexDescription () { return $('//div[@data-autoid="videoTestimonials:container"][4]//p'); }

    /**
     * These keywords return selectors for the decades of innovation section
     */
    get mainBodyDecadesOfInnovationSectionContainer () { return $('//div[@data-component="ImageWithText"]'); }
    get mainBodyDecadesOfInnovationSectionTitle () { return $('//div[@data-component="ImageWithText"]//h2'); }
    get mainBodyDecadesOfInnovationSectionDescription () { return $('//div[@data-component="ImageWithText"]//p'); }
    get mainBodyDecadesOfInnovationSectionLearnMoreBtn () { return $('//div[@data-component="ImageWithText"]//a'); }
    get mainBodyDecadesOfInnovationSectionImg () { return $('//div[@data-component="ImageWithText"]//img'); }
    
    /**
     * These keywords return selectors for the product list carousel
     */
    get mainBodyProductListCarouselContainer () { return $('//div[@data-component="ProductListCarousel"]'); }
    get mainBodyProductListCarouselContainerHeader () { return $('//div[@data-component="ProductListCarousel"]//h2'); }
    
    get mainBodyProductListCarouselItemContainer () { return '//div[@data-component="ProductListCarousel"]//a[@data-autoid="productListCarouselItem-__INDEX__"]'; }
    get mainBodyProductListCarouselItemType () { return '//div[@data-component="ProductListCarousel"]//a[@data-autoid="productListCarouselItem-__INDEX__"]//em'; }
    get mainBodyProductListCarouselItemName () { return '//div[@data-component="ProductListCarousel"]//a[@data-autoid="productListCarouselItem-__INDEX__"]//h4/span[1]'; }
    get mainBodyProductListCarouselItemSubtype () { return '//div[@data-component="ProductListCarousel"]//a[@data-autoid="productListCarouselItem-__INDEX__"]//h4/span[2]'; }
    get mainBodyProductListCarouselItemImg () { return '//div[@data-component="ProductListCarousel"]//a[@data-autoid="productListCarouselItem-__INDEX__"]//img'; }
    get mainBodyProductListCarouselLearnBtn () { return '//div[@data-component="ProductListCarousel"]//a[@data-autoid="productListCarouselItem-__INDEX__"]/following-sibling::div//a[contains(@data-autoid, "link1")]'; }
    get mainBodyProductListCarouselShopBtn () { return '//div[@data-component="ProductListCarousel"]//a[@data-autoid="productListCarouselItem-__INDEX__"]/following-sibling::div//a[contains(@data-autoid, "link2")]'; }

    get mainBodyProductListCarouselPreviousBtn () { return $('//button[@data-autoid="springCarouselPreviousButton"]'); }
    get mainBodyProductListCarouselNextBtn () { return $('//button[@data-autoid="springCarouselNextButton"]'); }
    
    get mainBodyProductListCarouselRechargeBtn () { return $('//div[@data-component="ProductListCarousel"]//a[@data-autoid="ProductListCarousel:cta1"]'); }
    get mainBodyProductListCarouselMildHybridCarsBtn () { return $('//div[@data-component="ProductListCarousel"]//a[@data-autoid="ProductListCarousel:cta2"]'); }

    /**
     * These keywords return selectors for the disclaimer
     */
    get mainBodyDisclaimerContainer () { return $('//div[@data-component="Disclaimer"]'); }
    get mainBodyDisclaimerDescription () { return '//div[@data-component="Disclaimer"]/section/div/div[__INDEX__]//p'; }
    
    /**
     * These keywords return selectors for the site footer
     */
    get mainBodySiteFooterContainer () { return $('//div[@id="vcc-site-footer"]'); }
    get mainBodySiteFooterItem () { return '//div[@id="vcc-site-footer"]//span[@role="listitem"][__INDEX__]//a'; }
    get mainBodySiteFooterCopyright () { return $('//div[@id="vcc-site-footer"]//span[@data-autoid="footer:copyright"]'); }

    /**
     * This keyword is used to accept all cookies when initially navigating to page
     */
    async acceptAllCookies () {
        await this.cookiesContainerAcceptCookiesBtn.click();
    }
    
    /**
     * This keyword is used to open cookie settings menu
     */
    async openCookieSettings () {
        await this.cookiesContainerCookieSettingsBtn.click();
    }
    
    /**
     * This keyword is used to open cars container and view the list of cars
     */
    async openCarsContainer () {
        await this.navBarCarsContainerBtn.click();
    }
    
    /**
     * This keyword is used to close cars container
     */
    async closeCarsContainer () {
        await this.navBarCarsContainerBtn.click();
    }
    
    /**
     * This keyword is used to open side nav container
     */
    async openSideNavContainer () {
        await this.navBarSideNavBtn.click();
    }
    
    /**
     * This keyword is used to close side nav container
     */
    async closeSideNavContainer () {
        await this.navBarSideNavCloseBtn.click();
    }
    
    /**
     * This keyword is used to view the previous item in the product carousel
     */
    async viewPreviousItemInProductCarousel () {
    	await this.mainBodyProductListCarouselPreviousBtn.click();
    }
    
    /**
     * This keyword is used to view the next item in the product carousel
     */
    async viewNextItemInProductCarousel () {
    	await this.mainBodyProductListCarouselNextBtn.click();
    }
    
    /**
     * overwrite specifc options to adapt it to page object
     */
    async open () {
        return super.open('/intl/v/car-safety/a-million-more');
    }
}

module.exports = new aMillionMorePage();
