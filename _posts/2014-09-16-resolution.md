---
layout: default
title:  "The Great Resolution"
comment: true
---

Clunky resolution systems are those with a lot of repetitive and redundant nature to it, and require constant attention and memorization to both players. When combined with poor effect text, symbols and structure it can make any idea fall apart. Out of all the card games I have been playing (including Online CG that’s about a dozen) I admire Cardfight!! Vanguard’s brilliantly thought out rule set, and after 3000 different cards there has been no more then a couple of line changes to accommodate new mechanics [^1]. All rulings are made by reading the handbook line-by-line. In comparison; MTG is the largest card game and houses an equally large 200 page rulebook. The runner-up, Yugioh, has dug itself into a giant hole by deliberately avoiding clarification on conflicting rulings and leave to the the floor judge to make the best of it. Vanguard is by no means the best, perfect model for resolutions. And the other resolution systems are great models as well with many benefits. Nonetheless, CFVG is a brilliant model to study and develop from. Of course, you can’t take my word for it. So I’m going to go through the different kinds of systems and explain the flaws and improvements they’ve made from previous iterations of resolution design.

<!-- more -->

To be indefinitely board and inaccurate I’m going to define a card effect structure in three parts:

   * Trigger (Red)
   * Condition (Yellow)
   * Result (Green)

If you are hoping to learn the details of actually playing these sample games, Ignore everything I write down and instead point to the references provided at the end of each section. Not that it’s wrong, but rulesharks exist to make you fall into infinitesimal loopholes and penalties. As I have the most experience with MTG, YGO and CFVG I’ll cover those primarily. You can thanks Blaise for indirectly aiding me to add one additional section.
The LIFO stack

I’ll take the 6th definition from wikitionary’s database to describe what a stack is:
    (computing) A linear data structure in which the last data item stored is the first retrieved; a LIFO queue.
LIFO
    (computing, accounting) Last In First Out (describing a stack data structure).

This is the most prominent standard in TCG’s. The core aspect relies on this:

 1.   Play Card A. A goes into the “stack”.
  2.  Play Card B. B goes into the “stack”.
  3.  Play Card C. C goes into the “stack”.

To fill a stack and this:

 1.   Take Card C out of the “stack”.
 2.   Take Card B out of the “stack”.
 3.   Take Card A out of the “stack”.

To empty the stack. The key thing to note is that you can not take Card A out of the stack before Card B is taken out. And Card B can’t be taken out before Card C. The Card on the bottom can’t be removed before taking out the ones on top.

### MTG

FYI, spell := Card

To play a spell in MTG, you first must meet the Condition.

[+]

  *  If you just played a spell, it is added to the stack, and you can either play another spell or let the opponent play a spell.
  *  If your opponent just played a spell, it is added to the stack, and they can either play another spell or let you play a spell.
  * If neither player wants to play a spell (rather, both players consecutively ‘let’ the other play), then the stack empties.

However, the stack isn’t just dumped back out immediately like pudding. It goes one by one; a spell is taken out of the stack, the Result happens, and the active player [^2] can once again choose to play another spell (and hence goes back to [+]). Both players have to once again decline to play a spell before it the next spell in the stack Results.

Continuous effects are like “rules of the game” once in play. You would continue playing as if the game always had that rule. If you played it during a stack, once the Result of the card has past you treat the game as if the rule always existed.

Now we get to “counters”, which is really why WoTC [^3] decided upon a LIFO system. On the resolution of spells that “counter” another spell, the spell chosen to be targeted has all of its text removed, as if it is a completely blank card. When the stack reaches to that card, it ditches the card. Counters exist to stomp and roll all over an opponents plan. Say there was a card who’s Result would win the game. You don’t want that to happen so you play a counter spell to prevent that card from Resulting, therefore buying you time (possibly enough to win the game yourself). This miracle/comeback play is necessary to keep games dynamic and unexpected. If you think about it, it is possible to categorize effects into three areas: those that start a stack (the seed), those that are played in response to a stack (the counter), and those that do not start a stack or can be responded to (the passive/continuous).

For the [finer details of stack and priority](http://www.mtgsalvation.com/articles/15678-priority-and-the-stack) thank Yare for this well written article:

As the activate player, you can cast a spell every step of the stack resolution. Asking for each iteration being forced to announce every decision is incredibly tedious. A stack could be near the end and you can decide to cast something and build another long stack, making the constant unpacking and packing of cards is difficult to track. Long stacks are uncommon as it requires a large amount of mana and cards. But if you cast a spell that let’s you draw cards / add mana, then you grow the chain (because you get a chance to play every time a spell resolves). Have enough of this and you can get infinitely long chains. The MTG engine does not promote huge hands, extensive drawing capabilities or infinite mana, to combat the possibility of these large/long stacks. It does however, limit the growth of resources and therefore makes the game exceedingly long. A lot of this game is spent waiting to gain enough mana, cards, waiting to toolbox, draw non-land.

So the big problems MTG resolution system has are:

  *  Large memory strain for ordered stack events
  *  Redundancy in saying no, especially for long stacks
  *  Constant peckering of both players
  *  Resources are forced limited to reduce stack length [^4]

### YGO

FYI, chain:=stack

To activate a card in ygo, you first must meet the Condition.

  * If you just activated a card, it is added to the chain, and you can either activate another card or let the opponent activate a card.
  * If your opponent just activated a card, it is added to the chain, and they can either activate another card or let you activate a card.
  * If neither player wants to activate a card (rather, both players consecutively ‘let’ the other activate), then the chain empties.

I’d like to point out that Yugioh cards have a “Spell Speed” which acts like a miniature condition. You are not allowed to add to a chain if the Spell Speed of the Card you want to activate is lower than the Spell Speed at the top of the chain.

Just like before, the chain resolves one by one. Unlike stacks, chains do fall like pudding and all the Results happen one after the other with no interruptions. Here is where we get interesting. The Result or Condition of a Card could Trigger a different Card. It could Trigger multiple Cards. So when do we get a chance to apply its Condition or Result?

The simple answer is when the Result of the last Card in the chain is done. But then how do we determine the order of all these Cards? YGO has implemented SEGOC [^5] rules to resolve this issue. The order basically takes all the Cards that have Triggered and allocate them on a new chain based on a few rules.

Continuous effects also fall into the SEGOC rulings, so the Result or Rule the card would implement will not start until all the chain has finished (but before SEGOC clause happens). Note that this isn’t a real solid rule, as there are two rulings about these effects that conflict each other, but effects in this way make it more consistent to the practice established.

For more information about SEGOC try [this article about the resolution of two similar effects](http://ygorulestheory.wordpress.com/2013/04/08/ally-of-justice-catastor-vs-neo-spacian-grand-mole/)

Or, you may explore [the entire blog](http://ygorulestheory.wordpress.com/)

Unlike MTG, YGO tried a new method by forcing chains to completely resolve before play resumes. That cuts out “I choose not to cast” by over 70% [^6]. This also stops chains from being refilled constantly making each chain much shorter on average then stacks.

But SEGOC and Triggers start the same deadly loop. At the end of a chain, a new chain starts with all the Triggered cards put into a new chain, which CAN be included in. So YGO just splits one massive chain into a series of smaller ones. Unfortunately, since the entire chain resolves, having copious amounts of cards that draw or add more cards into play will refresh stocks every time. In MTG by the time you get down to a particular spell the available the conditions and spells in the stack have changed. In YGO it starts all over so while you have a different scenario the abilities in play are all there. So you can tell YGO has to have the same restrictions as MTG to demote extensive chaining. I should also say that users barely have an option of how to order the different effects into the new chain.

So what problems did YGO solve or create?

  *  (+)Memory strain is much less
  *  (+)Redundancy is improving
  *  (+)Less peckering
  *  (-)Multiple chains that have no optional order
  *  (-)Limited Resources to reduce continuous chains
  *  (-)SEGOC Chains have limited user input

Although this last point does not concern the point I’m getting at, YGO has done a significant improvement in the understanding of card effects, now making them both consistent and logic-based.

### FCBF

So YGO and MTG each stack and chain off of each other ad infinitum, which forces their cards to cut significant amounts of resources. Buddyfight aims to shorten the unnecessary drive with a 1 counter clause. Therefore, using cards now works like this:

```
 The turn player chooses to use one card or ability
 The non-turn player may choose to use one Counter
 If they do
 	The turn player may choose to use one Counter
 	If they do
 		Resolve the turn player's Counter
 		Resolve the non-turn player's Counter
 		Resolve the turn player's card or ability
 	If they don't
 		Resolve the non-turn player's Counter
 		Resolve the turn player's card or ability
 If they don't
 	Resolve the turn player's card or ability
```
 
 Likewise, a MTG tower would be like:

```
 The turn player may choose to play a spell
 	If they do
 		The turn player chooses to play a spell
 		If they do
 			The turn player chooses to play a spell
 			If they do			
 				etc..
 		If they don't
 			The non-turn player may choose to play a spell
 			If they do
 				The non-turn player may choose to play a spell
 				If they do
 				etc,
 	If they don't
 		The non-turn player may choose to play a spell
 		If they do
 			The non-turn player may choose to play a spell
 			etc.
 		etc.
 	etc.
 etc.
```

It’s a simple and elegant solution. It doesn’t invite impressive plays, but it solves the problem of large complicated loops.

As it is so simple, my debriefing ends in exactly two sentences due to having nothing to talk about.

So what problems did FCBF solve or create?

  *  (+)Almost no memory strain
  *  (+)No redundancy
  *  (+)Almost no peckering
  *  (-)Stack has very little input
  *  (-)Combos become impossible due to simplicity

### The cache

So we have folly’d with this “ordered” resolution for a long time. After all, it works and everyone is content. We want combos and counter-play, and sacrificing that causes people to feel like the game is overtly simple and childish. That isn’t absolutely true, but it certainly reduces the depth of the effects that effects have.

So this is where I show what neat tricks Vanguard pulls to get the best of both worlds. We start with the definition of a cache:

(computing) A fast temporary storage where recently or frequently used information is stored to avoid having to reload it from a slower storage medium.

Notice that in a cache, order is unimportant.

### CFVG

To activate an effect, it has to meet it’s conditions.

  1. Once you activate it, you Resolve it.
  2. Then for all effects that meet the Trigger, you add those effects into the cache.
  3. The activate player choose one effect that belongs to them and Resolves it.
  4. Then for all effects that meet the Trigger, you add those effects into the cache.

3 and 4 continues until you have no more effects left that is yours. It then becomes your opponent’s turn to resolve all of his effects, until he is done. It keeps going back and forth until the cache is empty.

Counters do not exist in the game, and continuous effects come into play as soon as they are put on the table (they do not go into the cache nor Trigger any effects)

WOW. That is really different from any other card game out there. Let’s see what problems it solves:

 *  It reduces 100% of the “not choosing” plaguing card games. Redundancy is completely obliterated.
 *  It reduces the need to constantly flip between two players
 *  Card Condition and Result activate immediately. Exactly what you would naturally expect [^7]
 *  And unlike FCBF’s solution, it does not simplify the game or reduce combo potential.

The biggest or most obvious part about all this is the removal of counters. But actually, you can still create counter effects (When your unit is retired, call it to {R}) that are actually more interesting than normal counters. MTG/YGO counters are more like a stand off doing almost jack squat, or firing bullets at a Gundam shield. Vanguard is dynamic by letting you succeed, only to be caught by a surprise resurrection or counter attack. You can pull off your dream combo instead of it being violently stuffed by a single spell, and such counters do not merely neglect an action but turn the disadvantage into an advantage in another way (When your unit is retired, send a card from your deck to {Drop})

So what problems did CFVG solve or create?

  *  (-) Some memory strain
  *  (+) No redundancy
  *  (+) No peckering
  *  (+) Combos are completely free and malleable

Based on this small list it seems Vanguard has solved absolutely everything and there is little need to iterate further. However, there is a really really big hole in this.

Let’s have 2 card with these effects;

AUTO(R): During your End Phase, When you draw a card, you may pay the cost. If you do, this unit gets +1000.

AUTO(R): During your opponent End Phase, When one of their units gain power during the End Phase, your opponent draws one card.

Based on the way vanguard works, this can result in an infinite loop, provided there are enough cards in the deck to support the pair. While I documented a 2 card case, it could be viable for any number of units acting together. So that forces most cards to have a counterblast cost or some other cost to make sure if never repeats itself. (If have to say, that is a dumb effect above but it was only used to get the point across).

So if you want to get picky, here are some problems it suffers.

  *  No counters to actually stop plays, therefore creating unstoppable wins [^8]
  *  All effects should have to prevent self-occurring loops
  *  Logic base language does not work with deformed grammar [^9]

### Conclusion

So we had a short article here discussing the various ways to resolve multiple effects, optimally keeping it consistent, open to flexibility, reduces redundancy, and reduces load on memory for more important tasks. While there is no prefect system as so far, nor have I talked about any horrendous ones, the ones I have mentioned are all successful games. So while a well-defined rule set does not correlate to popularity, we know that people are willing to accept imperfections and devise short-cuts in order to enjoy the game keeping the rule sharks out.<i class="fa fa-stop"></i>

<br />

[^1]: I wrote this before the Stride and Deletor mechanics. Oh forbid.
[^2]: The active player is the player who is performing his/her turn. 
[^3]: Wizards of the Coast, creators of Magic The Gathering. 
[^4]: Some may find the last point a positive since it gives you ‘more’ interaction, but in practice it’s very cumbersome and just plain messy. Luckily people have invented short-cuts to go through most of the talking but against a step-by-step AI… 
[^5]: SEGOC := [Simultaneous Effects Go On the Chain](http://yugioh.wikia.com/wiki/Simultaneous_Effects_Go_On_Chain)
[^6]: Percentage to be taken with a grain of salt. If I play a card you counter I counter and we resolve, YGO has to say it EXACTLY 4 times while mtg is AT LEAST 9 times. But the longer the chain, the more it compiles. 
[^7]: I mean, when you throw a ball, would time stop for your opponent to reposition themselves? 
[^8]: Which, if you think about it, is why [HEAL] were created. Bushiroad’s developers really did think of everything. 
[^9]: To be covered in a future article?