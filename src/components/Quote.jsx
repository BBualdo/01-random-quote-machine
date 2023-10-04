import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

import Card from './Card';

import classes from './Quote.module.css';

const Quote = () => {
	return (
		<Card>
			<h1 id='text' className={classes.text}>
				<FaQuoteLeft
					size='30'
					style={{ color: 'black', marginRight: '12px' }}
				/>
				When I was 5 years old, my mother always told me that happiness was the
				key to life. When I went to school, they asked me what I wanted to be
				when I grew up. I wrote down ‘happy’. They told me I didn’t understand
				the assignment, and I told them they didn’t understand life.
			</h1>
			<p id='author' className={classes.author}>
				- John Lennon
			</p>
			<div className={classes.buttons}>
				<div className={classes['share__buttons']}>
					<a
						className={classes.twitter}
						id='tweet-quote'
						href='https://www.twitter.com/intent/tweet'
					></a>
					<a
						className={classes.tumblr}
						id='tumblr-quote'
						href='https://www.tumblr.com/share'
					></a>
				</div>
				<div>
					<button id='new-quote' className={classes['new-quote__button']}>
						New quote
					</button>
				</div>
			</div>
		</Card>
	);
};

export default Quote;
