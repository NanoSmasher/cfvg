---
layout: default
title:  "Melodramatic Final Turns"
comment: true
---

<a name="nine"></a>

### It’s over 9000(0)! <a href="#back">*</a>

[tl;dr – The data](/cfvg/melodramatic/#tldr)

When looking at a ‘final turn’ gambits people consider how likely your opponent can walk out unfazed, and whether the setup is just plain absurdity. So I’m going to go from very standard finishers to the 0.01% miracles and find out just when is it a plain overkill. We can use TehNACHO’s B.A.S.S values, but we are inclined to forget an extra stage sitting on every vanguard attack (for safe measures) and the 0.55 stages per attack due to triggers.

<!-- more -->

### The Notation

Let’s consider an early Set 2 ‘Final Turn’, riding soul saver dragon. In essence this move dealt a 3/3v/4 or about 11.55 stages (A 3-stage rg, a 3-stage vg, and a 4-stage rg makes 10 stages; then add the +1 from the vg and +1 for triggers). Sitting with \60/ makes living through this turn no sweat. Though we are missing one type of card that would make this even sweeter; can you guess what it is?

![Blau Dunkelheit](/cfvg/assets/img/EB08-008.png)

Yep. Perfect guards are able to shun out an entire 4 stages of Soul saver rage meaning you no longer have to worry about stocking up on a 6 triggers, making sure your guard stays nice and fluffy. This means SS[Final] is more around a 7.55 or \40/ shield. In fact, if you decide to guard the 4-stage RG instead, it drops to 7 or flat \35/.

Lastly, we also need to exercise extreme caution in using final turn gambits when the opponent is only at 4 damage. Since we know that everybody uses 12 Crit, we are inevitably forced to take a rg hit in order to stay in the game. At this point, we have a 1/3 chance to check a trigger and reduce all future stages by 1. If we put that into the already reduced stage count, we get a pleasurable 3.67 (PG the RG!) or \20/ and a PG to secure the chance of survival.

So the notation. I’ve thought about the different ways to go about it, but I think I’m going into one looking like this:

{# of Perfect guards} [ {stages for 5 damage} | {stages for 4 damage} ]

If you consider the entire SS:Final, the results look like:

**SS:Final**

```
0	[	11.55	|	7.88	]
1	[	7 	|	3.67	]
2	[	3	|	0	]
```

What are you looking at specifically though? It’ll be mainly the middle-right number. This is a frequent scenario in which your opponent is holding a PG captive while sitting at 4 damage, and you are considering on whether to make a break for it or not. If you are using SS:Final you need your opponent to have less than 4 cards, 4 cards with max 2\5/. As you can tell, SS:Final is bridging on the weakest final turn combo.

For quick reference, divide all the numbers here by two and add two for every PG to get the “Approximate number of cards in hand to live”. It isn’t accurate, but nonetheless you can see that you need to have the opponent to have < 6 cards to win at 5 damage, and < 4 cards to win at 4 damage.

**SS:Final-simplified**

```
0 {6|4}
1 {6|4}
2 {6|0}
```

Let’s add some fire. Introducing Palamedes and his good friend, Palamedes. So 4/4v/4 makes:

**SS+P:Final**

```
0	[	13.55	|	8.33	]
1	[	8.55	|	4.67	]
2	[	4	|	0	]
```

Which is just one stage more. Wonderful.

---------------------------------------------------------------------------------------------------------------------

So from now on you’ll see this kind of notation pop up to judge the strength of final turns. And to judge them we would need a reference point or a ‘standard’ final turn. This is shown below for now, but we will derive this later on.

**Standard:Final**

```
0	[	14.55	|	11.22	]
1	[	10.55	|	7.55	]
2	[	7	|	4.33	]
```

### Kinds of Final turns

Except if you are going Glendios, a finishing blow come from getting enough hits in to seal the deal. This mainly falls into four categories:

  1.  Power up vanguard
  2.  Power up rearguard
  3.  Attack with vanguard multiple times
  4.  Attack with rearguard multiple times

Keep in mind the relative strengths; 5 1-stage attacks vs 1 5-stage attacks may favour the former, but 1 15-stage attack is slightly tougher to judge. So I’m just going to show off a bunch of different Final Turn situations and generalize the capabilities of each one.

#### Power up Melody

Let’s start with the easiest pair.

Powering up the Vanguard to nonsensical levels usually begs a Perfect guard to the face, but troublesome if they don’t have one. Then again, this is also beneficial to the rearguard situation too so this is probably the final turn ability you’ll want to avoid (despite the show drooling over these kinds of finishers).

I’m sure everyone is bored to death with the +10000 abilities, and to be completely honest that 39k Tyrannolegend or that 45k Ezel isn’t in the top-tier of vanguard power. I am also going to leave out DI for the next section.

![Ultimate Lifeform, Cosmo Lord](/cfvg/assets/img/BT03-008.jpg)

Cosmolord had a hilarious combo way back in Set 3 that no one really tried. Combined with a BR, let’s assume a really typical scene of 5 rearguards and one being Anthrodroid. From reading these two effects, you can reason a combo of standing&resting Anthrodroid multiple times pumps Cosmolord by 15k. If you rest all the rearguards as well, you get another +15000.

Here is the coolest part. If you have Hungry Dumpty, Claydoll Mechanic, Muscle Hercules, or even Red Lightning in hand you get a free 6k (one for the rest, one for the unflip). If we also had Tough boy in hand the final output of Cosmolord is [58 + 6x + 3y] where x is the number of those extra unflip units and y is the nonflippers. You only need 7 cards in hand to reach…

100000!

*Death Army Bishop and Knight are actually more cost-to-rest efficient but even then this is just an absurd idea.

**Cosmo:Final**

```
0	[	19	|	19	]
1	[	0	|	0	]
```

---------------------------------------------------------------------------------

So next is rearguard power and oh boy do they like to do this one. So many decks imitate this but nothing comes close to the insanity of Dantarain+Abyss. It absolutely ridiculous to calculate the power because of how irregular the power tends to be. This is influenced on:

  *  The amount of soul before the breakride
  *  The number of Dimension Creepers to be blasted (Note extra soul charges can net another one)
  *  The plausible use of Shirley and other soulchargers
  *  As a fixed constant, Greedy hand will almost always bring in a Creeper

But let’s try a rough sketch of how powerful this can be. We can safely assume at least two but usually three creepers, a greedy, at least one other soulcharge unit, and 10 soul? So the math gets a bit wonky but trying to work it out

**Just on the BR (w/o the CONT skill)**

```
Generic		Abyss(10)	Generic
10		21		10
	
Doreen		Greedy		Doreen
6		5		6
```

**After greedy and 3 creepers and stuff**

```
Generic		Abyss(16)	Generic
10000		21000		10000
	
Doreen		Doreen		Doreen
30000		24000		30000
```

**After Abyss x 2**

```
Generic		Abyss(20)	Generic
10000		59000		10000
	
Doreen		Doreen		Doreen
42000		36000		42000
```

**And finally the CONT**

```
Generic		Abyss(20)	Generic
10000		59000		30000
	
Doreen		Doreen		Doreen
62000		36000		62000
```

Or for the 13/17v/17 stages:

**Abyss:Final**

```
0	[	48.55	|	34.88	]
1	[	30.55	|	17.22	]
2	[	13	|	0	]
```

Even at a portion of the power (2 less creepers, maybe 5 soul to start) you are still looking an incredible numbers here. Just for a check, compare this to “SS+P:Final” and you’ll find this to be close to 4 times better.

#### Zealing

![Reality Witch, Rias](/cfvg/assets/img/EB11-004.png)

Ironically, I won’t be discussing the pattern for Galaxy Beast, Zeal or it’s Gundam counterpart. Instead, we will stare into the eyes of these witches and their extremely powerful curses. At Legion’s best they can drop out anywhere from 25k to 45k from the opponent, which is the inverse of having all your columns gain the same amount. [STAND] will make this a nightmare but let’s just say that zealing is one of the greatest finishers in vanguard. I believe you can compute a matrix for a 11/13v/11 so I’ll leave this one aside for now.

### The Emperors of Strength

Who can talk about multiple rearguard attacks without a mention at Aqua Force? So let’s bring up on of the best representatives of the AqF: Genovious. I know Maelstrom and other 3rd/4th types are also relevant but when it comes to multiple attacks this guy delivers.

Let’s also live in a pretend world where the opponent’s vanguard is 10k and we have a perfect field. Originally I had 4 Lysanders on the field, before realizing I can’t Counterblast to get the last attack so I replaced one with Diamantes. So on the breakride of Trans-core:

Diamantes|Genovious|Lysander
Lysande|---|Lysander

The resulting stage attacks goes something like 1/1/1/1/5v/1/1/1/1

**AqF:Final**

```
0	[	14.55	|	10.88	]
1	[	8.55	|	5.22	]
2	[	7	|	4	]
```

One thing multiple rearguard attacks have over power columns is that the bottom-right value won’t be zero: The opponent will need additional guard even for the best case (4DMG and 2PG).

--------------------------------------------------------------------------

So this is where I would get into Nova grappler since they had that standing premise back in Set 1, but I’ve promoted them to a better position. So instead we’ll talk about the dirty Spike Brothers and one of the first examples of true final turns. The Emperor+Juggernaut combo has been notorious in delivering extremely powerful rushes. To keep this short, the following chart serves as a kind of ‘standard’ for a respectable final turn:

{Emperor+Juggernauts-BadEnd, and 4 Juggernaut attacks for 2/2/3v/3/3}

**E+J-B:Final (or Standard:Final)**

```
0	[	14.55	|	11.22	]
1	[	10.55	|	7.55	]
2	[	7	|	4.33	]
```

In numbers this is slightly superior to Genvious but in practice this combination is much more severe.

**Standard:Final-simplified**

```
0 {7|6}
1 {7|6}
2 {8|6}
```

Here I can explain the shortcoming of the simplified version. Looking at the 6’s down the side, and seeing that we have 4 attacks around 3 stages, the opponent really needs 8 or more cards to ‘ensure’ safety. I’ll be best to memorize what the opponent has in hand, but for those without solid short-term solutions then these keys here are easier to digest.

![Bad End Dragger](/cfvg/assets/img/BT10-019.jpg) 

With Set 10 we gained access to Bad End Dragger, one of the most insane skills in the game. While I would love to provide a chart for Bad End and Emperor, Set 15 threw gold at us with Bloody Ogre and Frozen Orge. Frozen extends an additional 3 attacks by and both vanguard skills give us +3 stages for any attacker. This is quite a force to be reckoned with and even hearing Frozen -> Frozen -> Frozen -> Silver sounds scary. The 3/3/3/5/6v/7/7 becomes

**Blood:Final**

```
0	[	35.55	|	29.55	]
1	[	28	|	22.33	]
2	[	21	|	15.67	]
```

This is very very good. Interesting to note the clashing with Abyss:Final, who has a stronger top-half, but falters in the bottom half. It means that Abyss:Final is a strong gust that will force that last damage through, while Blood:Final is battering ram to strip all of your opponent’s remaining health. Bloody:Final is slightly better for those 5 to 3 damage match-ups as a comeback mechanism, but Abyss makes your death at 5 inevitable.

### Re-standing 101

So now we are into the realm of re-standing vanguards (Or rather, multiple vanguard attacks). They have the benefit of always forcing an additional stage of their calculated values, gaining additional power from break-rides, fizzing the effectiveness of counter triggers, and multiple twin drives. Let’s start with the often called lamest one of the bunch — Dragonic Descendant and its 3v/4v/2/2 rage:

**EDD:Final**

```
0	[	14.1	|	12.1	]
1	[	9.1	|	7.1	]
2	[	5.1	|	3.1	]
```

While it is about 1/2 a card worse than the standard, remember that the standard requires 2 Juggernauts, 2 counterblasts, becomes a self minus 3.45, and empties all attackers if the opponent manages to survive. Descendant however requires just 1 card, 1 counterblast, and is actually a self plus 0.1. Since the net effect is a plus, you can run the same final turn again. So I guess it isn’t a complete stomping final but the near perfect consistency makes Descendants game extremely difficult to face. If you have even one 3 stage column or pumped the vanguard by 5k, then you are looking at something that is strictly better than the standard.

The supreme successor to Descendant looks to be Omniscience of the Sacred Regalia, Minerva. In addition to her own ability we have Witch of Frogs and Witch of Birds that allow for rearguard attacks. Read this again: Multiple vanguard and rearguard attacks. This is the guide to death for most of today’s format. Nothing can come close to stopping so many insane attacks. But enough chit-chat, you want numbers. So assuming a Himiko BR granting an attack lineup of 3/4/4v/4v/1/2 creates:

**Omni:Final**

```
0	[	21.1	|	16.43	]
1	[	16.1	|	11.77	]
2	[	11.1	|	7.1	]
```

And this sanity creates a +2 (on average. I know this isn’t Minerva’s full extent with the double soulblasting but it would not be much more then 1.5 cards)

##WARNING. THE FOLLOWING SECTION CONTAINS ABSOLUTELY RIDICULOUS NUMBERS AND EPIC MECHS. PLEASE REMOVE SCOUTER AND CRUSH IT AS A PREEMPTIVE MEASURE

![Cat Butler](/cfvg/assets/img/EB01-019.jpg)

Cat Butler. Kat Bulter. KaxBuller. HaxBullet.
When the ruling was announced that Cat Butler can stand NG Legions, the world went crazy building Raizers. And justly so. After a bit of playing around, I found out that a pure (read: no Frozen Ogre fetchers) Nova deck has the best output with 3 Cat Butlers and two mates. With 3 Butlers, your vanguard will be standing three times which means 4 vanguard attacks. That’s like an octa-check or octative drive. 8 free cards and the chance of getting multiple triggers is immensely high. Then every time you attack with your vanguard your fellow rearguards also stand and gain a stage, so this snowballs into itself. The attack will looks something like this:

1/1/5v/1/1/4v/2/2/4v/3/3/4v/4/4

14 attacks! Is that even legal? Then you’ll love to see the table becomes:

**Cat:Final**

```
0	[	45.2	|	39.87	]
1	[	39.2	|	34.2	]
2	[	34.2	|	29.53	]
```

And for reference

**Abyss:Final**

```
0	[	48.55	|	34.88	]
1	[	30.55	|	17.22	]
2	[	13	|	0	]
```

This just wounds Abyss in so many places. Multiple Raizer re-stands are terrifying and it justly serves Nova Grapplers as Tier 0, churning out quality competition from the very beginning. Make no mistake, Raizers are the embodiment of gruesome fatalities.

##The king of vanguard overkill

So would it be surprising to know that this Nova Grappler deck ISN’T EVEN NG’S FINAL FORM!? It has ben personally coined in the Vmundi community as “Za Warudo”, and you’ll find out why in a moment.

![Daredevil Samurai](/cfvg/assets/img/EB08-024.png)

![Bare Down Samurai](/cfvg/assets/img/EB08-013.png)

Meet the Samurais. They each gets 3k for every Nova Grappler restood.

![Mond Blaukluger](/cfvg/assets/img/EB08-003.png)

Meet Mond Blaukluger. He stands all rearguards, so that means all Samurais get (3000*5 = 15000) a 3 stage boost.

![Asura Kaiser](/cfvg/assets/img/EB08-004.png)

Meet Asura Kaiser. He allows the Samurai condition to activate.

![Immortal, Asura Kaiser](/cfvg/assets/img/EB08-001.png)

Now kneel before the king of vanguard, Immmortal Asura. He is a self stander and so he activates Samurai’s effect.

![Mond Blaukluger](/cfvg/assets/img/EB08-003.png)

That activates this dudes skill

![Daredevil Samurai](/cfvg/assets/img/EB08-024.png) | ![Bare Down Samurai](/cfvg/assets/img/EB08-013.png)

And triggers these guys again.

So what do you get, when you have a field of Samurais who gain 15000 when you attack with the vanguard, and gain 15000 again when you swing again? Oh, something like…

<a name="back"></a>

###### (1) 16000

###### (2) 16000

#####(3) 45000

#### (4) 52000

### (5) 57000

## (6) 73000

## **(7) 87000**

# **(8) <a href="#nine">92000</a>**

Have some fun with 2/2/8v/9/9/13v/15/15 and you get

<a name="tldr"></a>

**Za Warudo:Final**

```
0	[	76.1	|	71.77	]
1	[	60.55	|	56.55	]
2	[	45.55	|	41.88	]
```

Let’s do a massive reference right here to show you that nothing here even comes close:

**SS:Final**

```
0	[	11.55	|	7.88	]
1	[	7	|	3.67	]
2	[	3	|	0	]
```

**SS+P:Final**

```
0	[	13.55	|	8.33	]
1	[	8.55	|	4.67	]
2	[	4	|	0	]
```

**EDD:Final**

```
0	[	14.1	|	12.1	]
1	[	9.1	|	7.1	]
2	[	5.1	|	3.1	]
```

**AqF:Final**

```
0	[	14.55	|	10.88	]
1	[	8.55	|	5.22	]
2	[	7	|	4	]
```

**Standard:Final**

```
0	[	14.55	|	11.22	]
1	[	10.55	|	7.55	]
2	[	7	|	4.33	]
```

**Omni:Final**

```
0	[	21.1	|	16.43	]
1	[	16.1	|	11.77	]
2	[	11.1	|	7.1	]
```

**Blood:Final**

```
0	[	35.55	|	29.55	]
1	[	28	|	22.33	]
2	[	21	|	15.67	]
```

**Cat:Final**

```
0	[	45.2	|	39.87	]
1	[	39.2	|	34.2	]
2	[	34.2	|	29.53	]
```

**Abyss:Final**

```
0	[	48.55	|	34.88	]
1	[	30.55	|	17.22	]
2	[	13	|	0	]
```

**Cosmo:Final**

```
0	[	19	|	19	]
1	[	0	|	0	]
```

---------------------------------------------------------------------------------

### Conclusion, The TRUE king of vanguard overkill

Thought this just an oversight? That’s because it probably is. But you know Bushiroad, they can’t let their pet clans get overshadowed by Mega Drill equipped Gurrens. So they snuck a small combo in Gold Paladin that is able to loop into itself infinitely. Basically it requires a Liberator Margaux, Blaster Blade Liberator, BBL’s unflipper, and a plusser every time you superior call. The details have just been released but you’ll have to wait for my optimization of this build (and the others I’ve talked about in this article). But for now: ![c-c-combo breaker](/cfvg/assets/img/ccombo.png) <i class="fa fa-stop"></i>

[^1]: It’s so mainstream you’ll hear your great-grandchildren say it.
