import React, { useEffect, useState } from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

import Card from './Card';

import classes from './Quote.module.css';

const Quote = () => {
	const randomNumber = Math.floor(Math.random() * 102);

	const [quotesData, setQuotesData] = useState(null);
	const [quoteIndex, setQuoteIndex] = useState(randomNumber);

	useEffect(() => {
		fetch(
			'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json',
		)
			.then((res) => res.json())
			.then((data) => setQuotesData(data.quotes));
	}, []);

	const newQuote = () => {
		setQuoteIndex(randomNumber);
	};

	return (
		<Card>
			<h1 id='text' className={classes.text}>
				<FaQuoteLeft
					size='30'
					style={{ color: 'black', marginRight: '12px' }}
				/>
				{quotesData ? quotesData[quoteIndex].quote : 'Loading'}
			</h1>
			<p id='author' className={classes.author}>
				- {quotesData ? quotesData[quoteIndex].author : ''}
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
					<button
						onClick={newQuote}
						id='new-quote'
						className={classes['new-quote__button']}
					>
						New quote
					</button>
				</div>
			</div>
		</Card>
	);
};

export default Quote;
