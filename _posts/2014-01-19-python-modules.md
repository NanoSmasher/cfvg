---
layout: default
title:  "Python on Modules up on Github"
comment: true
---
<p>Well the title is self-explanatory. Link here:</p>
<p><a href="https://github.com/NanoSmasher/prob-cfvg">https://github.com/NanoSmasher/prob-cfvg</a></p>
<p>This link can also be accessed from the Research tab. First thing is that, unless you&#8217;ve got a geniuses mind you&#8217;ll have no idea what to do. Even if you have done python. I&#8217;ve only gone through rudimentary cleaning and commenting, which is to say; very bad programming practice. Hopefully given a bit of spare time I&#8217;ll make a pseudo-interface and maybe a GUI eventually.</p>
<h2>Setup</h2>
<p>For the absolute beginner:</p> <!-- more -->
<ol>
<li>Download and Install <a href="http://portablepython.com/wiki/Download/">Portable Python 3.<strong><em>x</em></strong></a> (I&#8217;m using 3.2.5.1 but any other extension should work). It has the IDE set up and everything, so you don&#8217;t have to hassle over setting up the interpreter and PATH.</li>
<li>Either download each file from my github page separately OR hit the button on the right that says download zip to download them all.  You know what to do with zips.</li>
<li>Open up PyScripter-Portable.exe in whatever folder you installed Portable Python in.</li>
<li>File &gt; Open and search for any of the .py files that you acquired from (2)</li>
<li>Hit Run (Shortcut: Crtl+F9)</li>
<li>If you don&#8217;t see any warning or red popping up you are good to go!</li>
<li>Move cursor/caret to the python interpreter at the bottom.</li>
</ol>
<p>So once you have whatever file you have running, there are special commands you can type. For convenience I have italicized and bulleted it . Following this setup, just type in <em>function(arg),</em> where function is the<em> italic </em>part in the list and arg is the arguments or numbers you put in. Here is an example function.</p>
<ul>
<li><em>quickodds</em>(a,b,c,d)</li>
</ul>
<p>Will be shown like this once you hit [Enter]:</p>

![Example interface](/cfvg/assets/img/hyperexample.jpg)

<p>Pay attention to make sure the command you type is the same character by character (this includes capitals). Also be careful with your arguments.</p>
<h2>Modules</h2>
<p>So let&#8217;s look at the files I have so far:</p>
<p><a href="https://github.com/NanoSmasher/prob-cfvg/blob/master/Hyper_Calculator.py">Hyper_Calculator.py</a></p>
<p><span style="color:#ff6600;">Note: Almost nothing else will work if you don&#8217;t have this one file!</span></p>
<p>This file does ALL the heavy lifting. It sports all the probability modules. Things like permutations, combinations, and a function for calculating the hyper-geometric cumulative distribution calculator. Using the Fraction class makes things neat and very precise. You can still use this module for fun with two commands:</p>
<ul>
<li><em>quickodds</em>(a,b,c,d)</li>
</ul>
<p>a: Population size OR number of cards in the deck<br />
b: Possible successes OR number of specific cards you want to pull in the deck<br />
c: Sample size OR number of cards to draw in a row from the current deck<br />
d: # of successes OR number of cards drawn that are those specific cards you wanted</p>
<p>Gives the same result as if you used stattrek&#8217;s calculator</p>
<ul>
<li><em>cascadeodds</em>(a,b,c)</li>
</ul>
<p>Using the same parameters/arguments as <em>quickodds</em>. This simply print the odds for every possible /d/ value.</p>
<p><a href="https://github.com/NanoSmasher/prob-cfvg/blob/master/Quintetwall.py">Quintetwall.py</a></p>
<p>Type in</p>
<ul>
<li><em>foo</em>()</li>
</ul>
<p>Get back average percentage of getting a certain value of shield.<br />
*<em>foo</em>() has no arguments</p>
<p><a href="https://github.com/NanoSmasher/prob-cfvg/blob/master/Ride.py">Ride.py</a></p>
<p>Excluding Generation II (Tsukuyomi, Galahad) this prints probabilities of getting up to grade 3 in three turns based on the input.</p>
<ul>
<li><em>ChanceToGetMin1</em>(ini,end,n,mull,first)</li>
</ul>
<p>This is a masterpiece of pain. The module uses this function extensively. Note that you can skip the latter 2 arguments to save time: <em>ChanceToGetMin1</em>(1,6,4) is the same as <em>ChanceToGetMin1</em>(1,6,4,3,True). Rest of the documentation will appear if you type the function in.</p>
<p>Q: Why am I getting fractions?A: Cause it is accurate. I&#8217;m pretty sure you&#8217;ll learn how to use the <em>print</em>() command.</p>
<ul>
<li><em>BasicRide</em>(gr1,gr2,gr3)</li>
<li><em>AdvanceRide</em>(gr1,gr2,gr3,gr4)</li>
<li><em>Gen1Ride</em>(g1,g2,g3)</li>
<li><em>Gen4Ride</em>(g1,g2,g3)</li>
<li><em>Gen2Ride</em>(gr1,gr2,gr3,r)</li>
</ul>
<p>All but this one expects you to have 4 of each copy already in the deck. This one though, take /r/ as the number of the grade one ride piece. I was doing calculations with this number but it was quite useless later. you can omit r altogether and it&#8217;ll treat is as 4 copies.</p>
<p><a href="https://github.com/NanoSmasher/prob-cfvg/blob/master/TriggerCompare.py">TriggerCompare.py</a></p>
<p>Incomplete.</p>
<p>Once done, it&#8217;ll be the first one written with documentation and cleaning done as I go along. It even has an interface. Therefore, I don&#8217;t have to tell you as much.</p>
<p>What does it do? Something quite a few people are wondering, proof for the best trigger ratio. This program compares the hand, shield and change in damage based on the trigger lineups specified by the user. 16 draw? 9S/5C/2H ? Now you are no longer bound to solid multiples of 4 and 6.</p>
<h2>Conclusion</h2>
<p>That&#8217;s all I have. I&#8217;ll upload and update more of the modules I have to do my research. Hopefully I can have transparent data available for peer review, modifications and the like. Whenever you doubt me, you can check the code and see how it works!<i class="fa fa-stop"></i></p>