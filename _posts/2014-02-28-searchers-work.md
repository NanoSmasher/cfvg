---
layout: default
title:  "Making grade 3 searchers work"
comment: true
---

<p>I lie. Since I write up a report after my research I can tell you not to run them. But let&#8217;s be blissfully ignorant and start off with declaring some numbers:</p>
<p>Probability_Calculator ChanceToGetMin1(0,6,4) = 0.67171555<br />
Or about 67% to get a certain grade 3 on turn three assuming you run 4. That also means that (1-.67)*.67 = 22% of the time you&#8217;ll have to ride the &#8216;other&#8217; grade 3. And the remaining 10% is for failing to get either (and that&#8217;s after you have the other ride pieces)</p>
<p>Chance to pull any grade 3 from the searcher 1-(41*40*39*38*37)/(49*48*47*46*45) = 0.60700<br />
Chance to pull the specific grade 3 from the searcher 1-(45*44*43*42*41)/(49*48*47*46*45) = 0.35929</p><!-- more -->
<h2>The generic deck</h2>
<p>So we look at two possibilities:</p>
<p><strong>The normal, non searcher deck</strong></p>
<p><strong>(1)</strong> 67% * [Advantage with main] + 22% * [Advantage with backup]</p>
<p><strong>The searcher deck</strong></p>
<p><strong>(2)</strong> 67% * [Advantage with main &#8211; 0.40] + 12% * [Advantage with main] + 19% * [Advantage with backup &#8211; 1]</p>
<p>12% comes from multiplying 33% by 35.929%. Since we want <strong>(2)</strong> better then <strong>(1)</strong>:</p>
<p>0.67(M-0.4) + 0.12M + 0.19(B &#8211; 1) &#8211; 0.02 &gt; 0.67M + 0.33B<br />
0.79M + 0.19B &#8211; 0.46 &gt; 0.67M + 0.33B<br />
0.13M &#8211; 0.13B &gt; 0.46<br />
0.29M &#8211; 0.29B &gt; 1</p>
<p style="text-align:center;">~roughly speaking~</p>
<p style="text-align:center;"><img src='../../../../../external.html?link=https://s0.wp.com/latex.php?latex=0.29M+-+0.29B+%3E+1+&amp;bg=eff1f5&amp;fg=444444&amp;s=3' alt='0.29M - 0.29B &gt; 1 ' title='0.29M - 0.29B &gt; 1 ' class='latex' /></p>
<h2>The overwhelming pluses</h2>
<p>Well let&#8217;s say your backup gives you no additional advantage* (generic 12k beat stick) while the main gives you a +3 throughout the game. Is it worth it?<br />
*Note: since both grade 3&#8217;s twin drive, we cancel their advantages out and are left with net 0.</p>
<p>0.29(3) &#8211; 0.29(0) ? 1<br />
0.87 ? 1</p>
<p>So no, you are better suited to having no starter at all! VG must supply 3.5 units of advantage to cope with the shortcomings of the searcher.<br />
But after 3.5 you actually do get more advantage then a non searcher! Very important find!</p>
<p>Oh, but what if the either of the following occurs:</p>
<ul>
<li>A different starter can garner you a +0.5.</li>
<li>The other grade 3 has a on-ride or other ability that provide a plus 0.5?</li>
</ul>
<p>In both cases your vanguard will work overtime, having to give you +4.5 to justify a searcher!</p>
<h2>The inexcusable negatives</h2>
<p>Looking at the equation you can also go in reverse, have the backup so bad at vanguard you actually minus for riding it (then if you just stuck with a grade 2). Not as easy to do, as your disadvantage must outweigh your vanguards advantage + additional!</p>
<p>So let&#8217;s have an OP grade 3 whose effect works in RG/hand/soul/drop/deck but has no effect and 3k as vanguard. That&#8217;s like a -6. Your vanguard only really provides a +2, but that&#8217;s fine because your backup is so good. Should you consider a searcher?</p>
<p>0.29(2) &#8211; 0.29(-6) &gt; 1<br />
1.16 &gt; 1</p>
<p>Yay! I can say that there a reason to use this sonofafag. What&#8217;s that? There are no grade 3&#8217;s like that? Well you are right there.</p>
<h2>The negligible selection</h2>
<p>Some other things I will just skim over, provide as a list since lists are convenient</p>
<ul>
<li>Break rides: Even if your breakride generates an insane amount of advantage, chances are your backup will also have some sort of advantage as well and not some generic throw-in.</li>
<li>Crossrides: Calculations are a bit tougher to do since you need to account for pairs, but crossrides have enough pluses by themselves to make sure you don&#8217;t pass the 1 mark.</li>
<li>8k 9k Grade 3&#8217;s: This is a severe handicap and in you could try a searcher. But decks that have those specific cards have better starters and superior builds.</li>
<li>Restraint: These are bad units in general. Most likely you&#8217;ll have multiple backup plans for something like this, reducing a searcher&#8217;s usefulness.</li>
<li>6 grade 3&#8217;s: Using that many will artificially make the searcher seem more effective than it is. (But it is for that case)</li>
<li>10+ grade 3&#8217;s: Presumably you want a checker to generate advantage. I&#8217;d like a very solid backup for this vanguard, so it gives searchers a run for its money.</li>
</ul>
<p>So, is there any deck so far that actually need a grade 3 searcher? I can cheat a little bit and declare the Musketeers have a nice purpose for one. In the optimal deck you&#8217;ll find the generic 12k grade 3 and Cecilia. And her advantage is legendary, by having something that amounts to +2 as well as her efficiency roulette (which can also generate another +2 or +3). But otherwise, I highly advise against using searchers.<i class="fa fa-stop"></i></p>