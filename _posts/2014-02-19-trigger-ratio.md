---
layout: default
title:  "Every Trigger Ratio you’ve ever wanted"
comment: true
---

<p>*This article has a tldr; tag</p>
<div style="border-style:solid;border-width:2px;margin-left:50px;font-family:Serif;background-color:#fffacd;">A: I run 6 crit and 6 draw<br />
B: Nah man, that&#8217;s bad. Use 8 crit, 4 draw. Everyone uses it.<br />
C: Why don&#8217;t you run 12 crit?<br />
A&amp;B: Are you a complete idiot? 12 crit is a horrible ratio to run.<br />
C: Why?<br />
A: Just &#8217;cause.<br />
B: Ya.</div>
<p>Not even math can deter these bigots. They usually have lame excuses (draw power gives you pluses!) if any. These are silly claims and I&#8217;m not concerned about convincing them. But for those who are seriously considering the why and are willing to accept the proof before your eyes then this amazing program will do that all for you:</p>

[Trigger comparison (Online)](/cfvg/program/trigger/)

<p>But first, some logic. Why is 12 C/4 H the ideal trigger ratio?</p>
<p>Premise: 1 damage &gt;&gt; 1 card<br />
Premise: Crit and Heal triggers increase/decrease damage by 1<br />
Premise: Stand and Draw triggers increase/decrease cards by 1<br />
Conclusion: Crit and Heal triggers &gt;&gt; Stand and Draw triggers</p>
<!-- more -->

<p>There is a small fallacy as a couple of decks get more then one card per trigger, but those are exceptional cases. Okay so with that out of the way let&#8217;s get started!</p>
<h2>The Interface</h2>

![Trigger comparison interface](/cfvg/assets/img/triggerprogram.png)

<p>If you have any complaints about he interface, leave it. The source code contains a much snazzier interface but isn&#8217;t as convenient to set up.</p>

We first want to figure out is the results of this program matches by hand-done calculations in my [old standard form article](/cfvg/standard, where I stated 12C/4H as the optimal line-up. Here were my results:

<table>
<tbody>
<tr>
<td>Plan</td>
<td>Damage</td>
<td>Shield</td>
<td>Cards</td>
</tr>
<tr>
<td>R&gt;V&gt;R</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>First Attack Through</td>
<td>45/49</td>
<td>25</td>
<td>3 25/321</td>
</tr>
<tr>
<td>Second Attack Through</td>
<td>1 81/220</td>
<td>20 399/479</td>
<td>2 217/698</td>
</tr>
<tr>
<td>V&gt;R&gt;R</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>First Attack Through</td>
<td>1 81/220</td>
<td>18 178/435</td>
<td>2 217/698</td>
</tr>
<tr>
<td>Fewer C/L RG atkThrough</td>
<td>45/49</td>
<td>26 23/25</td>
<td>3 85/196</td>
</tr>
</tbody>
</table>
<p>Converting the result from nice fractions to ugly decimals we get:</p>
<table>
<tbody>
<tr>
<td>Attack Plan</td>
<td>Defensive Measure</td>
<td>Damage</td>
<td>Shield</td>
<td>Cards</td>
</tr>
<tr>
<td>R&gt;V&gt;R</td>
<td>Let RG Through</td>
<td>0.91837</td>
<td>25000</td>
<td>3.0779</td>
</tr>
<tr>
<td>R&gt;V&gt;R</td>
<td>Let VG Through</td>
<td>1.36818</td>
<td>20833</td>
<td>2.3109</td>
</tr>
<tr>
<td>V&gt;R&gt;R</td>
<td>Let VG Through</td>
<td>1.36818</td>
<td>18409</td>
<td>2.3109</td>
</tr>
<tr>
<td>V&gt;R&gt;R</td>
<td>Fewer C/L RG atk Through</td>
<td>0.91837</td>
<td>26920</td>
<td>3.4337</td>
</tr>
</tbody>
</table>
<p>*just to note that I&#8217;m letting the lower crit rearguard through and not the higher crit one</p>
<p>Rearranging&#8230;</p>
<table>
<tbody>
<tr>
<td>Attack Plan</td>
<td>Defensive Measure</td>
<td>Damage</td>
<td>Cards</td>
<td>Shield</td>
</tr>
<tr>
<td>R&gt;V&gt;R</td>
<td>Let VG Through</td>
<td>1.36818</td>
<td>2.3109</td>
<td>20833</td>
</tr>
<tr>
<td>R&gt;V&gt;R</td>
<td>Let RG Through</td>
<td>0.91837</td>
<td>3.0779</td>
<td>25000</td>
</tr>
<tr>
<td>V&gt;R&gt;R</td>
<td>Let VG Through</td>
<td>1.36818</td>
<td>2.3109</td>
<td>18409</td>
</tr>
<tr>
<td>V&gt;R&gt;R</td>
<td>Let RG Through</td>
<td>0.91837</td>
<td>3.4337</td>
<td>26920</td>
</tr>
</tbody>
</table>
<p>So now we compare with the numbers in the program and they should match up&#8230;</p>

![Trigger comparison interface](/cfvg/assets/img/triggerprogram.png)

<p>&#8230;They ALMOST match up. More specifically the only difference is the very last cell. The card loss and shield loss is slightly higher than before but this is on purpose: I made a small error in the other article in terms of attacking. Before the opponent would attack with the low crit unit before the high one, resulting in a potential counter-trigger. But what was more optimal was for the opponent to attack with the higher crit so that the counter-trigger can be avoided. Why no one noticed before is beyond my comprehension.</p>
<p>So now we can get started.</p>
<h2>A solitary game</h2>
<p>Let&#8217;s take the 12C/4H for both teams for starters.</p>
<table>
<tbody>
<tr>
<td colspan="5">12C/4H/0D vs 12C/4H/0D</td>
</tr>
<tr>
<td>Attack Plan</td>
<td>Defensive Measure</td>
<td>Damage</td>
<td>Cards</td>
<td>Shield</td>
</tr>
<tr>
<td>R&gt;V&gt;R</td>
<td>Let VG Through</td>
<td>1.36818</td>
<td>2.3109</td>
<td>20833</td>
</tr>
<tr>
<td>R&gt;V&gt;R</td>
<td>Let RG Through</td>
<td>0.91837</td>
<td>3.0779</td>
<td>25000</td>
</tr>
<tr>
<td>V&gt;R&gt;R</td>
<td>Let VG Through</td>
<td>1.36818</td>
<td>2.3109</td>
<td>18409</td>
</tr>
<tr>
<td>V&gt;R&gt;R</td>
<td>Let RG Through</td>
<td>0.91837</td>
<td>3.4388</td>
<td>27653</td>
</tr>
<tr>
<td>Damage you heal</td>
<td>0.16</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Cards you draw</td>
<td>0</td>
<td></td>
<td></td>
<td></td>
</tr>
</tbody>
</table>
<p>Let&#8217;s start at say, 2 damage. If we take it like that:</p>
<table>
<tbody>
<tr>
<td>P1 dmg</td>
<td>P1 card</td>
<td>P1 shield</td>
<td>P2 dmg</td>
<td>P2 card</td>
<td>P2 shield</td>
</tr>
<tr>
<td>-0.16327</td>
<td>0.0000</td>
<td>0</td>
<td>1.36818</td>
<td>2.3109</td>
<td>20833</td>
</tr>
<tr>
<td>1.20491</td>
<td>2.3109</td>
<td>20833</td>
<td>1.20491</td>
<td>2.3109</td>
<td>20833</td>
</tr>
<tr>
<td>1.04164</td>
<td>2.3109</td>
<td>20833</td>
<td>2.57309</td>
<td>4.6218</td>
<td>41666</td>
</tr>
<tr>
<td>2.40982</td>
<td>4.6218</td>
<td>41666</td>
<td>2.40982</td>
<td>4.6218</td>
<td>41666</td>
</tr>
</tbody>
</table>
<p>From here, the damage is just about 4 to 4. Now the plan switches to V&gt;R&gt;R to kill the hand:</p>
<table>
<tbody>
<tr>
<td>2.24655</td>
<td>4.6218</td>
<td>41666</td>
<td>3.32819</td>
<td>8.0606</td>
<td>69319</td>
</tr>
<tr>
<td>3.16492</td>
<td>8.0606</td>
<td>69319</td>
<td>3.16492</td>
<td>8.0606</td>
<td>69319</td>
</tr>
</tbody>
</table>
<p>And from here it becomes a battle of <a href="thunkofcardgames.blogspot.com/2013/05/bass-values.html" target="_blank">B.A.S.S.</a>. From here we start turn #9. As before this is completely neglecting the various abilities of cards and assuming complete uniformity. If you are wondering what the 0.16492 portion mean, it is the chance you&#8217;ll die, before that turn. (since in that chance, you&#8217;ll have 6 damage instead of 5)</p>
<h2>Trigger Dump</h2>
<p>We&#8217;ll compare three common line-ups against each other and see if they hold merit (By common I mean those that I see frequently run.) Those are 12C, 8C/4D &amp; 6C/6H. With my program the data is easy to acquire:</p>
<table>
<tbody>
<tr>
<td colspan="5">12C/4H/0D vs 8C/4H/4D</td>
</tr>
<tr>
<td>Attack Plan</td>
<td>Defensive Measure</td>
<td>Damage</td>
<td>Cards</td>
<td>Shield</td>
</tr>
<tr>
<td>R&gt;V&gt;R</td>
<td>Let VG Through</td>
<td>1.36818</td>
<td>2.1893</td>
<td>20833</td>
</tr>
<tr>
<td>R&gt;V&gt;R</td>
<td>Let RG Through</td>
<td>0.91837</td>
<td>2.9963</td>
<td>25000</td>
</tr>
<tr>
<td>V&gt;R&gt;R</td>
<td>Let VG Through</td>
<td>1.36818</td>
<td>2.1893</td>
<td>18409</td>
</tr>
<tr>
<td>V&gt;R&gt;R</td>
<td>Let RG Through</td>
<td>0.91837</td>
<td>3.3571</td>
<td>27653</td>
</tr>
<tr>
<td>Damage you heal</td>
<td>0.1633</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Cards you draw</td>
<td>0.0000</td>
<td></td>
<td></td>
<td></td>
</tr>
</tbody>
</table>
<table>
<tbody>
<tr>
<td colspan="5">8C/4H/4D vs 12C/4H/0D</td>
</tr>
<tr>
<td>Attack Plan</td>
<td>Defensive Measure</td>
<td>Damage</td>
<td>Cards</td>
<td>Shield</td>
</tr>
<tr>
<td>R&gt;V&gt;R</td>
<td>Let VG Through</td>
<td>1.21824</td>
<td>2.3426</td>
<td>21100</td>
</tr>
<tr>
<td>R&gt;V&gt;R</td>
<td>Let RG Through</td>
<td>0.91837</td>
<td>3.0779</td>
<td>25000</td>
</tr>
<tr>
<td>V&gt;R&gt;R</td>
<td>Let VG Through</td>
<td>1.21824</td>
<td>2.3426</td>
<td>18937</td>
</tr>
<tr>
<td>V&gt;R&gt;R</td>
<td>Let RG Through</td>
<td>0.91837</td>
<td>3.3265</td>
<td>26905</td>
</tr>
<tr>
<td>Damage you heal</td>
<td>0.1633</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Cards you draw</td>
<td>0.1633</td>
<td></td>
<td></td>
<td></td>
</tr>
</tbody>
</table>
<table>
<tbody>
<tr>
<td colspan="5">12C/4H/0D vs 6C/4H/6D</td>
</tr>
<tr>
<td>Attack Plan</td>
<td>Defensive Measure</td>
<td>Damage</td>
<td>Cards</td>
<td>Shield</td>
</tr>
<tr>
<td>R&gt;V&gt;R</td>
<td>Let VG Through</td>
<td>1.36818</td>
<td>2.1285</td>
<td>20833</td>
</tr>
<tr>
<td>R&gt;V&gt;R</td>
<td>Let RG Through</td>
<td>0.91837</td>
<td>2.9554</td>
<td>25000</td>
</tr>
<tr>
<td>V&gt;R&gt;R</td>
<td>Let VG Through</td>
<td>1.36818</td>
<td>2.1285</td>
<td>18409</td>
</tr>
<tr>
<td>V&gt;R&gt;R</td>
<td>Let RG Through</td>
<td>0.91837</td>
<td>3.3163</td>
<td>27653</td>
</tr>
<tr>
<td>Damage you heal</td>
<td>0.1633</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Cards you draw</td>
<td>0.0000</td>
<td></td>
<td></td>
<td></td>
</tr>
</tbody>
</table>
<table>
<tbody>
<tr>
<td colspan="5">6C/4H/6D vs 12C/4H/0D</td>
</tr>
<tr>
<td>Attack Plan</td>
<td>Defensive Measure</td>
<td>Damage</td>
<td>Cards</td>
<td>Shield</td>
</tr>
<tr>
<td>R&gt;V&gt;R</td>
<td>Let VG Through</td>
<td>1.14327</td>
<td>2.3583</td>
<td>21233</td>
</tr>
<tr>
<td>R&gt;V&gt;R</td>
<td>Let RG Through</td>
<td>0.91837</td>
<td>3.0779</td>
<td>25000</td>
</tr>
<tr>
<td>V&gt;R&gt;R</td>
<td>Let VG Through</td>
<td>1.14327</td>
<td>2.3583</td>
<td>19202</td>
</tr>
<tr>
<td>V&gt;R&gt;R</td>
<td>Let RG Through</td>
<td>0.91837</td>
<td>3.2704</td>
<td>26480</td>
</tr>
<tr>
<td>Damage you heal</td>
<td>0.1633</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Cards you draw</td>
<td>0.2449</td>
<td></td>
<td></td>
<td></td>
</tr>
</tbody>
</table>
<h2>The analysis</h2>
<p>That was the easy part. We&#8217;ll start with 12C vs 8C/4D and again we start at 2 damage and check the score with the 12C going first:</p>
<table>
<tbody>
<tr>
<td>P1 dmg</td>
<td>P1 card</td>
<td>P1 shield</td>
<td>P2 dmg</td>
<td>P2 card P2 shield</td>
<td></td>
</tr>
<tr>
<td>-0.16327</td>
<td>0.0000</td>
<td>0</td>
<td>1.36818</td>
<td>2.1893</td>
<td>20833</td>
</tr>
<tr>
<td>1.05497</td>
<td>2.3426</td>
<td>21100</td>
<td>1.20491</td>
<td>2.0260</td>
<td>20833</td>
</tr>
<tr>
<td>0.89170</td>
<td>2.3426</td>
<td>21100</td>
<td>2.57309</td>
<td>4.2153</td>
<td>41666</td>
</tr>
<tr>
<td>2.10994</td>
<td>4.6852</td>
<td>42200</td>
<td>2.40982</td>
<td>4.0520</td>
<td>41666</td>
</tr>
<tr>
<td>1.94667</td>
<td>4.6852</td>
<td>42200</td>
<td>3.32819</td>
<td>7.4091</td>
<td>69319</td>
</tr>
<tr>
<td>3.16491</td>
<td>7.0278</td>
<td>63300</td>
<td>3.16492</td>
<td>7.2458</td>
<td>69319</td>
</tr>
</tbody>
</table>
<p>WAIT WHAT? The damage is equal (to 0.00001)! Wow this was surprising for me too. This implies you&#8217;ll send an opponent to the endgame as the same rate regardless of what ratio you have. But look closely at turn 7. You see here the opponent switches gears to defend a V&gt;R&gt;R, while they still need to perform R&gt;V&gt;R for one more turn. In fact, this means a 12C player forces an opponent into the end game one entire turn earlier!</p>
<p>But that&#8217;s not all. Remember how the opponent was drawing all those cards? Well ironically they ended up using more cards then the 12C player! (7.2458&gt;7.0278). They also lost more shield in the process. So, after seeing this, is it really necessary to continue?</p>
<h2>But the 12C went first!</h2>
<p>Oh, I see how it is.  Make me do more work. We&#8217;ll have the 8C go first this time:</p>
<table>
<tbody>
<tr>
<td>P1 dmg</td>
<td>P1 card</td>
<td>P1 shield</td>
<td>P2 dmg</td>
<td>P2 card P2 shield</td>
<td></td>
</tr>
<tr>
<td>-0.16327</td>
<td>-0.1633</td>
<td>0</td>
<td>1.21824</td>
<td>2.3426</td>
<td>21100</td>
</tr>
<tr>
<td>1.20491</td>
<td>2.0260</td>
<td>20833</td>
<td>1.05497</td>
<td>2.3426</td>
<td>21100</td>
</tr>
<tr>
<td>1.04164</td>
<td>1.8627</td>
<td>20833</td>
<td>2.27321</td>
<td>4.6852</td>
<td>42200</td>
</tr>
<tr>
<td>2.40982</td>
<td>4.0520</td>
<td>41666</td>
<td>2.10994</td>
<td>4.6852</td>
<td>42200</td>
</tr>
<tr>
<td>2.24655</td>
<td>3.8887</td>
<td>41666</td>
<td>3.32818</td>
<td>7.0278</td>
<td>63300</td>
</tr>
<tr>
<td>3.16492</td>
<td>7.2458</td>
<td>69319</td>
<td>3.16491</td>
<td>7.0278</td>
<td>63300</td>
</tr>
</tbody>
</table>
<p>Are you surprised that the end result is the same? Because I&#8217;m not.</p>
<h2>Try Again</h2>
<p>Okay maybe I picked a perfectly chosen ratio. Or maybe&#8230;you need to draw more! Cause that&#8217;s going to alleviate the problem right?</p>
<p>I&#8217;ll let the 6C/6D have the first blow</p>
<table>
<tbody>
<tr>
<td>P1 dmg</td>
<td>P1 card</td>
<td>P1 shield</td>
<td>P2 dmg</td>
<td>P2 card P2 shield</td>
<td></td>
</tr>
<tr>
<td>-0.16327</td>
<td>-0.2449</td>
<td>0</td>
<td>1.14327</td>
<td>2.3583</td>
<td>21233</td>
</tr>
<tr>
<td>1.20491</td>
<td>1.8836</td>
<td>20833</td>
<td>0.98000</td>
<td>2.3583</td>
<td>21233</td>
</tr>
<tr>
<td>1.04164</td>
<td>1.6387</td>
<td>20833</td>
<td>2.12327</td>
<td>4.7166</td>
<td>42466</td>
</tr>
<tr>
<td>2.40982</td>
<td>3.7672</td>
<td>41666</td>
<td>1.96000</td>
<td>4.7166</td>
<td>42466</td>
</tr>
<tr>
<td>2.24655</td>
<td>3.5223</td>
<td>41666</td>
<td>3.10327</td>
<td>7.0749</td>
<td>63699</td>
</tr>
<tr>
<td>3.16492</td>
<td>6.8386</td>
<td>69319</td>
<td>2.94000</td>
<td>7.0749</td>
<td>63699</td>
</tr>
</tbody>
</table>
<p>It is interesting to note that the amount of damage we reduced is about the same as the card advantage they opponent gains and since damage &gt; cards they got the bad deal out of it.<br />
There is one other catch-22 you need to pay attention to when using draws; they have cut shield. So in fact, the opponent is playing with a 30000 shield handicap. If you factor that in it will only make a 6C/6D even worse so I left it out.</p>
<h2>Conclusion</h2>
<h1><span style="color:#ff6600;">tldr; 12C pwns</span></h1>
<p>Now that I&#8217;ve sweetened your knowledge, you can determine other things like:</p>
<ul>
<li>I need more draws! 8D/4C works right? (no)</li>
<li>Will 8C/4D or 6C/6D win if they faced each other? (8c)</li>
<li>Is 16 Critical is better than 16 Heal? (no)</li>
<li>Now we&#8217;ve seen 12C in action, but what if it was fighting a pure 16C? (exercise)</li>
<li>What if a player always goes V&gt;R&gt;R?</li>
<li>Who will win: 12C only R&gt;R&gt;V or 16D and optimal? (16d)</li>
<li>Would criticals be worse if damage went up to 10? (no)</li>
<li>What if the effects of triggers doubled?</li>
<li>The optimal grade ratio? [brute force may be useful] (16h)</li>
<li>Trigger line-up that isn&#8217;t 16? [requires a code change]</li>
<li>Deck has more then 50 cards? [requires a code change]</li>
<li>How does stand triggers mix it up? [requires a code change]</li>
</ul>
<p>If you have a fabulous result to pass to me please let me know!<i class="fa fa-stop"></i></p>