---
layout: default
title:  "Simplified Standard Form Game"
comment: true
---

#Class MaxDamage Extends [Standard, Standard Form Game](/cfvg/standard)

<!-- more -->
<table>
<tbody>
<tr>
<td>Criticals Checked</td>
<td>Heals Checked</td>
<td>Net Damage</td>
<td>Probability</td>
</tr>
<tr>
<td>0</td>
<td>0</td>
<td>3</td>
<td>111/196*7095/9212</td>
</tr>
<tr>
<td>0</td>
<td>1</td>
<td>2</td>
<td>111/196*495/2303</td>
</tr>
<tr>
<td>0</td>
<td>2</td>
<td>1</td>
<td>111/196*135/9212</td>
</tr>
<tr>
<td>0</td>
<td>3</td>
<td>0</td>
<td>111/196*1/4606</td>
</tr>
<tr>
<td></td>
</tr>
<tr>
<td>1</td>
<td>0</td>
<td>4</td>
<td>37/98*21285/30268</td>
</tr>
<tr>
<td>1</td>
<td>1</td>
<td>3</td>
<td>37/98*14190/52969</td>
</tr>
<tr>
<td>1</td>
<td>2</td>
<td>2</td>
<td>37/98*1485/52969</td>
</tr>
<tr>
<td>1</td>
<td>3</td>
<td>1</td>
<td>37/98*45/52969</td>
</tr>
<tr>
<td>1</td>
<td>4</td>
<td>0</td>
<td>37/98*1/211876</td>
</tr>
<tr>
<td></td>
</tr>
<tr>
<td>2</td>
<td>0</td>
<td>5</td>
<td>11/196*19393/30268</td>
</tr>
<tr>
<td>2</td>
<td>1</td>
<td>4</td>
<td>11/196*2365/7567</td>
</tr>
<tr>
<td>2</td>
<td>2</td>
<td>3</td>
<td>11/196*2365/52969</td>
</tr>
<tr>
<td>2</td>
<td>3</td>
<td>2</td>
<td>11/196*110/52969</td>
</tr>
<tr>
<td>2</td>
<td>4</td>
<td>1</td>
<td>11/196*5/211876</td>
</tr>
<tr>
<td>2</td>
<td>5</td>
<td>0</td>
<td>You are funny</td>
</tr>
</tbody>
</table>
<p>Average Damage = 111/196*(7095/9212)*3+111/196*(495/2303)*2+111/196*(135/9212)+4*37/98*(21285/30268)+3*37/98*(14190/52969)+2*37/98*(1485/52969)+37/98*(45/52969)+5*11/196*(19393/30268)+4*11/196*(2365/7567)+3*11/196*(2365/52969)+2*11/196*(110/52969)+11/196*(5/211876)</p>
<p>Don&#8217;t worry if you didn&#8217;t get that. This is a data dump to show how much damage you can deal to the opponent if:</p>
<ul>
<li>you run 12 Crit</li>
<li>they have 4 Heals</li>
<li>you have a 2/2/2</li>
<li>They didn&#8217;t guard any attack</li>
</ul>
<p>Pretty standard stuff. Turn out, the average comes out to be ~3.2. But why do this? Well if you look at my <a title="Standard, Standard Form Game" href="../standard/">massive data dump</a>, it can be a pain to read through all that. So this time, I devised a simpler way to understand intuitively what all those random numbers mean.</p>
<h1>Thought Process</h1>
<p>Think about it. If I attack 3 times, my opponent guards none, how much damage would I expect to deal? Without triggers, the exact number is 3. So when you include triggers, with Critical Triggers &gt; Heal Triggers, you can obviously expect the total to be higher. The chart shows all the possible outcomes and displays it in a chart. So when you get the average, you get the maximum damage that can be dealt in a turn. I shall denote it as D<sub>max</sub>. So let&#8217;s continue with this train of thought. We would use cards in hand to reduce the damage dealt to us. Cards used can be denoted as C<sub>used</sub>. The damage we end up will be denoted as D<sub>end</sub> (Get the pun?). So with all the variables in place, let me show you the following equation:</p>
<p>X = C<sub>used</sub> / (D<sub>max</sub>-D<sub>end</sub>)</p>
<p>Woah, slow down! What the hell is all of this?</p>
<p>Okay, let&#8217;s approach (D<sub>max</sub>-D<sub>end</sub>). You&#8217;ll realize that this number represents the damage we did NOT take, or saved**. C<sub>used</sub> / D<sub>sav</sub> is simply a ratio. Kinda like sales that say &#8220;4 buns for $2&#8243;, it can be represented as 4/2 [bun/$] or 2 buns/$1. In less mathematical terms, with $1 you can get 2 buns. (Or if you go 2/4 [$/bun] you&#8217;ll find out a bun costs about $0.50, which makes it a lot easier to compare prices of similar products). You can also say two buns per dollar. When you look at C<sub>used</sub> / D<sub>sav</sub> it should be interpreted as cards used per -b-u-n- damage saved. So in the end, X represents the number of cards used to prevent 1 damage.</p>
<p>**If I&#8217;m boring or irritating you with so-called obvious math, then just keep going.</p>
<p>Question: If I have two values of X, which value will be better? The higher one or the lower one? Well, ask yourself: &#8220;Would I like to use 8 cards to prevent myself from taking one damage, or use 1 card instead?&#8221; Obviously, the lower the number is better.</p>
<p>So now we come to the standard form game. Rather then detract you, I&#8217;ll just provide some of the key values.</p>
<table>
<tbody>
<tr>
<td>Opponent&#8217;s Attack Plan</td>
<td>Your Defense Plan</td>
<td>Cards Used in total</td>
<td>Damage taken at End of turn</td>
</tr>
<tr>
<td>R&gt;R&gt;V</td>
<td>First attack through, guard rest</td>
<td>2.673</td>
<td>0.9</td>
</tr>
<tr>
<td>R&gt;R&gt;V</td>
<td>Last attack through, guard rest</td>
<td>2.000</td>
<td>1.4</td>
</tr>
<tr>
<td>R&gt;V&gt;R</td>
<td>First attack through, guard rest</td>
<td>3.078</td>
<td>0.9</td>
</tr>
<tr>
<td>R&gt;V&gt;R</td>
<td>Second attack through, guard rest</td>
<td>2.311</td>
<td>1.4</td>
</tr>
<tr>
<td>V&gt;R&gt;R-P</td>
<td>Non-crit rearguard through, guard rest</td>
<td>3.434</td>
<td>0.9</td>
</tr>
<tr>
<td>V&gt;R&gt;R-P</td>
<td>First attack through, guard rest</td>
<td>2.311</td>
<td>1.4</td>
</tr>
</tbody>
</table>
<p>*V&gt;R&gt;R-P means you put the second trigger you check to the same rearguard you applied the first trigger to.</p>
<p>Hey look! We can apply the formula! Let&#8217;s see what we get:</p>
<table>
<tbody>
<tr>
<td>Opponent&#8217;s Attack Plan</td>
<td>Your Defense Plan</td>
<td>Cards used to prevent one damage</td>
</tr>
<tr>
<td>R&gt;R&gt;V</td>
<td>First attack through, guard rest</td>
<td>1.16</td>
</tr>
<tr>
<td>R&gt;R&gt;V</td>
<td>Last attack through, guard rest</td>
<td>1.11</td>
</tr>
<tr>
<td>R&gt;V&gt;R</td>
<td>First attack through, guard rest</td>
<td>1.34</td>
</tr>
<tr>
<td>R&gt;V&gt;R</td>
<td>Second attack through, guard rest</td>
<td>1.28</td>
</tr>
<tr>
<td>V&gt;R&gt;R-P</td>
<td>Non-crit rearguard through, guard rest</td>
<td>1.49</td>
</tr>
<tr>
<td>V&gt;R&gt;R-P</td>
<td>First attack through, guard rest</td>
<td>1.28</td>
</tr>
</tbody>
</table>
<p>So now I can show something that is very easy to understand.</p>
<p>If your opponent V&gt;R&gt;R-P you, then you can see that letting the first attack through is much MUCH better than letting the rearguard. Likewise, R&gt;V&gt;R is the same but the difference is smaller.</p>
<p>If your opponent R&gt;R&gt;V you, then you can take the 1.11 or 1.16 (Letting the second attack through is 1.16 as well). But it doesn&#8217;t matter which you choose, because they are both weaker than 1.28! Say thanks to your opponent helping you conserve your hand!</p>
<h1>Conclusion</h1>
<p>^ Read above<i class="fa fa-stop"></i></p>