/*
 * This section defines test constants used to verify element attribute values
 */

const aMillionMorePage = require('../pageobjects/a-million-more.page.js');

const mainBodyVideoTestimonialsHeaderText = 'One of a million';
const mainBodyVideoTestimonialsDescriptionText = 'Hear the stories from real car crash survivors and see how they\'ve managed to turn an accident into a positive change in their lives.';

const mainBodyVideoTestimonials = [
	{'TitleText': 'Amy',
	  'VideoSrcAttribute': 'https://www.volvocars.com/images/v/-/media/project/contentplatform/data/media/campaigns/amm_id_amy_4x5_clean.mp4',
	  'VideoTypeAttribute': 'video/mp4',
	  'DescriptionText': 'Meet Amy Ma, who survived a multi-vehicle collision thanks to the safety belt.'
	},
	{'TitleText': 'Summer',
	  'VideoSrcAttribute': 'https://www.volvocars.com/images/v/-/media/project/contentplatform/data/media/campaigns/amm_id_summer_4x5_clean.mp4',
	  'VideoTypeAttribute': 'video/mp4',
	  'DescriptionText': 'Hear Summer talk about the collision that destroyed her car, but spared her life thanks to the safety belt.'
	},
	{'TitleText': 'Linda & Molly',
	  'VideoSrcAttribute': 'https://www.volvocars.com/images/v/-/media/project/contentplatform/data/media/campaigns/amm_id_molly_linda_4x5_200915_clean.mp4',
	  'VideoTypeAttribute': 'video/mp4',
	  'DescriptionText': 'If it wasn\'t for the safety belt, Linda & Molly\'s trip to a ski resort could\'ve been their last.'
	},
	{'TitleText': 'Alex',
	  'VideoSrcAttribute': 'https://www.volvocars.com/images/v/-/media/project/contentplatform/data/media/campaigns/amm_id_alex_4x5_clean.mp4',
	  'VideoTypeAttribute': 'video/mp4',
	  'DescriptionText': 'Alex talks about the collision that nearly took his life, but since he was wearing a safety belt only left him with a scar.'
	}
];

/*
 * This section defines the list of test cases
 */

describe('TC0007 - Main Page Element Verification - Video Testimonials', () => {
	beforeEach (async () => {
		await aMillionMorePage.open();
		await aMillionMorePage.acceptCookiesIfDisplayed();
		await aMillionMorePage.mainBodyVideoTestimonialsContainer.scrollIntoView();
	});
	
	it('7.1 should show and verify the video testimonials header and description', async () => {
		await expect(aMillionMorePage.mainBodyVideoTestimonialsHeader).toBeDisplayed();
		await expect(aMillionMorePage.mainBodyVideoTestimonialsHeader).toHaveText(mainBodyVideoTestimonialsHeaderText);
		await expect(aMillionMorePage.mainBodyVideoTestimonialsDescription).toBeDisplayed();
		await expect(aMillionMorePage.mainBodyVideoTestimonialsDescription).toHaveText(mainBodyVideoTestimonialsDescriptionText);
	});
	
	it('7.2 should show and verify the video testimonials video, source, play button, title, and description', async () => {
		for (let index = 0; index < mainBodyVideoTestimonials.length; index++) {
			await $(aMillionMorePage.mainBodyVideoTestimonialsItemContainer.replace('__INDEX__', index + 1)).scrollIntoView();
			await expect($(aMillionMorePage.mainBodyVideoTestimonialsItemVideo.replace('__INDEX__', index + 1))).toBeDisplayed();
			await expect($(aMillionMorePage.mainBodyVideoTestimonialsItemVideoSrc.replace('__INDEX__', index + 1))).toHaveAttribute('src', mainBodyVideoTestimonials[index]['VideoSrcAttribute']);
			await expect($(aMillionMorePage.mainBodyVideoTestimonialsItemVideoSrc.replace('__INDEX__', index + 1))).toHaveAttribute('type', mainBodyVideoTestimonials[index]['VideoTypeAttribute']);
			await expect($(aMillionMorePage.mainBodyVideoTestimonialsItemVideoPlayBtn.replace('__INDEX__', index + 1))).toBeDisplayed();
			await expect($(aMillionMorePage.mainBodyVideoTestimonialsItemTitle.replace('__INDEX__', index + 1))).toBeDisplayed();
			await expect($(aMillionMorePage.mainBodyVideoTestimonialsItemTitle.replace('__INDEX__', index + 1))).toHaveText(mainBodyVideoTestimonials[index]['TitleText']);
			await expect($(aMillionMorePage.mainBodyVideoTestimonialsItemDescription.replace('__INDEX__', index + 1))).toBeDisplayed();
			await expect($(aMillionMorePage.mainBodyVideoTestimonialsItemDescription.replace('__INDEX__', index + 1))).toHaveText(mainBodyVideoTestimonials[index]['DescriptionText']);
		}
	});
});
