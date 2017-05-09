import React from 'react'

//Here is the baby info page, in general is where all the details in size thru time.


var BabyInfoPage = React.createClass({
	render: function() {
		return(
			<div>
				<Banner02 />
				<BabySizes />
			</div>
			) 
	}
})

const Banner02 = React.createClass({
	render: function() {
		return(
			<div>
				<h1>Embaraz Arte</h1>
					<ul>
						<li className='a baby-page'><a href="#login">SIGN UP</a></li>
					</ul>
			</div>
			)
	}
})


const BabySizes = React.createClass({
	render: function() {
		return(
			<div className="babySizesbox">
			<div className="insidebox">
				<div className="image">			
						<img src="../images/week9.jpg"/>
						<div className="info">
							<h3>Week 9</h3>
							<h3>Your Baby is the Size of a Sushi Roll</h3>
							<p>It’s one of those sad, harsh truths about being a pregnant lady: Though you can technically eat a roll if it’s veggie or fully-cooked (hello, California roll)—many mamas-to-be tend to take a bit of a break from their fave Japanese takeout for a few months. But if your hubs is over there chowing down, go ahead and admire his dinner: one piece of that sushi roll is about the size of your baby, at 0.90 inch and 0.07 ounces.</p>
						</div>
						<span className="previous arrow">&lt;</span>	
						<span className="next arrow">&gt;</span>	
				</div>	
	      </div>

	      <div className="insidebox">
				<div className="image">			
						<img src="../images/week11.jpg"/>
						<div className="info">
							<h3>Week 11</h3>
							<h3>Your Baby is the Size of a Ping Pong Ball</h3>
							<p>Gone are those late 3 a.m. nights at your local watering hole, playing beer pong with your then-boyfriend, now-husband until it was time for last call. (These days you’re, cough, lucky to make it on Netflix before passing out.) Even if you’re not getting boozy like you did in college, you might be experiencing more gas and feeling the bloat, without the brewskis. But all those bodily changes are for good reason: baby is growing fast! At 1.61 inches and 0.25 ounces.</p>
						</div>
						<span className="previous arrow">&lt;</span>	
						<span className="next arrow">&gt;</span>	
				</div>	
	      </div>

	      <div className="insidebox">
				<div className="image">			
						<img src="../images/week14.jpg"/>
						<div className="info">
							<h3>Week 14</h3>
							<h3>Your Baby is the Size of Bicycle Bell</h3>
							<p>You’re in your second trimester now and that means your babe is about to take off on a growth spurt and you’re about to feel a lot better than you did in the first third of your pregnancy. You might even feel up to taking some bicycle laps around your local park or neighborhood with your hubby or bestie—and we totally approve of a ‘Baby On Board’ sign for the front of your basket. You might not need a bell, depending on where you live, but if you have one, admire it: that’s the size of your little one this week. At 3.42 inches and 1.52 ounces.</p>
						</div>
						<span className="previous arrow">&lt;</span>	
						<span className="next arrow">&gt;</span>	
				</div>	
	      </div>


	      <div className="insidebox">
				<div className="image">			
						<img src="../images/week15.jpg"/>
						<div className="info">
							<h3>Week 15</h3>
							<h3>Your Baby is the Size of a Mixed Tape</h3>
							<p>When you told your mom you were expecting, she may have offered you one of her old cassette tapes that she listened to when she was expecting you. (or how your love for your mom grows when you figure out you’re going to become one, too)—but you smiled and took it. While you likely need to go to your local vintage or thrift store to find a cassette player, think about your prized Backstreet Boys tape back in the day: that’s the size of your baby right now! She’s about 3.98 inches and 2.47 ounces.</p>
						</div>
						<span className="previous arrow">&lt;</span>	
						<span className="next arrow">&gt;</span>	
				</div>	
	      </div>


	      <div className="insidebox">
				<div className="image">			
						<img src="../images/week18.jpg"/>
						<div className="info">
							<h3>Week 18</h3>
							<h3>Your Baby is the Size of a Side of Guac</h3>
							<p>Let’s get one thing clear: while you’re not technically ‘eating for two’ as the old adage says, we are firm believers in giving your body (and your baby!) what it wants. And if hubs’s preference for Mexican is just making you crave tequila, entice him to drink that entire pitcher of margaritas in your honor (since you can’t) while you devour a side (or three) of guac. Baby’s about the size of your fave side dish, at 5.59 inches and 6.70 ounces.</p>
						</div>
						<span className="previous arrow">&lt;</span>	
						<span className="next arrow">&gt;</span>	
				</div>	
	      </div>

	      <div className="insidebox">
				<div className="image">			
						<img src="../images/week21.jpg"/>
						<div className="info">
							<h3>Week 21</h3>
							<h3>Your Baby is the Size Of a Bottle of Sriracha</h3>
							<p>Craving noodles tonight? Or maybe something savory and sweet that definitely doesn’t go together, but your 10.51 inch and 12.70 ounces mini-me says it does? You might be craving random foods like crazy and you may even have a hankering for something spicy. Pick up a bottle of the cult favorite—Sriracha—to fulfill those Netflix binge munchies. Hold it close, since that’s baby’s size right now. </p>
						</div>
						<span className="previous arrow">&lt;</span>	
						<span className="next arrow">&gt;</span>	
				</div>	
	      </div>


	      <div className="insidebox">
				<div className="image">			
						<img src="../images/week24.jpg"/>
						<div className="info">
							<h3>Week 24</h3>
							<h3>Your Baby is the Size of a French Press</h3>
							<p>Of all the things you have to give up when you’re pregnant (like white wine. Or red wine. Or any wine. Did we mention wine?!), one thing that luckily isn’t a no-no is coffee—in moderation. And with those sometimes-restless nights where no position feels like the right one, you’re thankful for that morning brew. Give that java an upgrade with a French press this week since that’s what size she is right now: 11.81 inches and 1.32 pounds. Another cool feature you can talk about over breakfast with the hubs? Imagining what her sweet face looks like, since now, it’s fully formed.</p>
						</div>
						<span className="previous arrow">&lt;</span>	
						<span className="next arrow">&gt;</span>	
				</div>	
	      </div>




			</div>
		)
	}
})




export default BabyInfoPage






