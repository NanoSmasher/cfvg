---
layout: default
title:  "Grade Ratio Dump"
comment: true
---

<p><span style="color:#ff0000;">Small Update: I&#8217;ve been in contact with TehNacho, and there may have been a slight error in my original program. </span>I have changed it slightly to reflect our discussion.</p>
<p>~Python~</p>
<p>So I do program some other stuff like C#, but for the purposes for my experiment I chose Python as you don&#8217;t need too many {} and variable/function setup is spontaneous<br />
The experiment is simply a brute force method that runs through all grade ratios to find out the one with the highest consistency. If I have a speck of time, I might even update it to match grade 4&#8217;s and grade 3 searchers. But for now, here is the data.</p><!-- more -->
<h2>Data</h2>
<p>Here is the python files for my work:</p>
<p>[Insert disclaimer]<br />
# I must say that I am not responsible for anything that happens to your computer, mind or whatever as a result of downloading/using/distributing my program.</p>
<p>[insert copyright]<br />
# Technically I can&#8217;t be sued for any phrases I use but just in case, whatever vanguard related info in these documents are not copyrighted to me but rather Bushiroad (R). All rights reserved and all that.</p>
<p><a href="https://github.com/NanoSmasher/prob-cfvg/blob/master/Hyper_Calculator.py" target="_blank">Hyper_Calculator</a></p>
<p><a href="https://github.com/NanoSmasher/prob-cfvg/blob/master/Hyper_Calculator.py" target="_blank">Probability_Calculator</a></p>
<p><a href="https://github.com/NanoSmasher/prob-cfvg/blob/master/BestRide.py" target="_blank">BestRide</a></p>
<p><span style="color:#ff0000;">IMPORTANT!</span> The specific program I&#8217;m running is found in BestRide.py, so just type in &#8220;CheckAll()&#8221; in the command line to see the results. Took me about 4 seconds to run the entire thing.</p>
<p>If you don&#8217;t know anything about Python, I suggest downloading Python Portable, install defaults, opening the file and just hit F6 and follow my instructions. If you want to know more about Python (like programming it and stuff), I suggest &#8220;a byte of python&#8221; by Swaroop.</p>
<h2>How I did it</h2>
<p>So <strong>Hyper_Calculator</strong> has a bunch of functions that do all the real meat. It includes the basic Permutation and Combination, but it also has the HyperGeometric Culmulative Probability formula referenced by <a href="http://stattrek.com/probability-distributions/hypergeometric.aspx">statrek</a>. (OR, you can just use the one on the sidebar :3) This file actual has no relation to vanguard whatsoever, having general functions I will use later on.</p>
<p><strong>Probability_Calculator</strong> on the other hand, has functions specific to vanguard. (Honestly, I don&#8217;t know how to name files). The largest function is aptly named: ChanceToGetMin1() .</p>
<p style="text-align:right;">It takes in an initial point (like the start of the game), an end point (End of Turn 2 for instance), number of copies, mulligan and turn order as its arguments. The code from then on is dead simple: It simply uses the HGCC function from the first file over every notch of calculations needed. It finds the failure of getting at least 1 card (or, getting no copies) given &#8216;n&#8217; copies in the starting hand, failure for first turn draw, fail for second turn draw, etc. With all of the chance events, the computer sorts the data into an array. Depending on what the points are, it then takes a chunk of the array and multiplies all of them to get a combined failure in that none of the events will succeed. Then it finds the complementary (the 1-x thing) value and returns it.</p>
<p>The other two functions basically use this function. RideElements() takes the grade ratio presented and computes the chance to succeed each individual grade. BasicRide() multiplies the three values from RideElements() to present the final probability. It may sound very long, but this is the EXACT process you need to take in order to find it out by hand.</p>
<p><strong>Brute</strong> is simple. It is a brute force program (Named Brute() for originality) which loops through every single grade ratio there is, and runs BasicRide() on each. Complete() takes the resulting chance and compares it to the top five chances, and if it is greater then any one of them it inserts itself into the list (Bumping all the previous values down one). Then it spits out the top five values in an easy to read format.</p>
<h2>Results</h2>
<pre><del>The top 5 ratios (ordered gr1-gr2-gr3) for highest ride consistency are:
1st 12-11-10 at 83.12275%
2nd 12-12-9 at 82.83491%
3rd 13-11-9 at 82.79305%
4th 11-12-10 at 82.76725%
5th 13-10-10 at 82.62338%
Created by the Brampton Booster

</del>The top 5 ratios (ordered gr1-gr2-gr3) for highest ride consistency are:
1st 12-11-10 at 82.94168%
2nd 12-12-9 at 82.62922%
3rd 11-12-10 at 82.59501%
4th 13-11-9 at 82.57942%
5th 13-10-10 at 82.43425%
Created by the Brampton Booster<del>
</del></pre>
<p>&nbsp;</p><i class="fa fa-stop"></i>