import React, { useEffect, useState } from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

import Card from './Card';

import classes from './Quote.module.scss';
import Footer from './Footer';

const Quote = () => {
	const randomNumber = Math.floor(Math.random() * 102);
	const getRandomColor = () => {
		const red = Math.floor(Math.random() * 158);
		const green = Math.floor(Math.random() * 158);
		const blue = Math.floor(Math.random() * 158);

		return `rgb(${red}, ${green}, ${blue})`;
	};

	const [quotesData, setQuotesData] = useState(null);
	const [quoteIndex, setQuoteIndex] = useState(randomNumber);
	const [randomColor, setRandomColor] = useState(getRandomColor());

	useEffect(() => {
		fetch(
			'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json',
		)
			.then((res) => res.json())
			.then((data) => setQuotesData(data.quotes));
	}, []);

	const newQuote = () => {
		setQuoteIndex(randomNumber);
		setRandomColor(getRandomColor);
	};

	return (
		<div
			className={classes.background}
			style={{ backgroundColor: randomColor }}
		>
			<Card>
				<h1 id='text' style={{ color: randomColor }}>
					<FaQuoteLeft size='30' style={{ marginRight: '12px' }} />
					{quotesData ? quotesData[quoteIndex].quote : 'Loading'}
				</h1>
				<p id='author' style={{ color: randomColor }}>
					- {quotesData ? quotesData[quoteIndex].author : ''}
				</p>
				<div className={classes.buttons}>
					<div className={classes['share__buttons']}>
						<a
							className={classes.twitter}
							id='tweet-quote'
							href='https://www.twitter.com/intent/tweet'
							style={{ backgroundColor: randomColor }}
						></a>
						<a
							className={classes.tumblr}
							id='tumblr-quote'
							href='https://www.tumblr.com/share'
							style={{ backgroundColor: randomColor }}
						></a>
					</div>
					<div>
						<button
							onClick={newQuote}
							id='new-quote'
							className={classes['new-quote__button']}
							style={{ backgroundColor: randomColor }}
						>
							New quote
						</button>
					</div>
				</div>
			</Card>
			<Footer />
		</div>
	);
};

export default Quote;
