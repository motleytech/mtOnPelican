Title: Falling into  the sun
Date: 2012-12-03 10:20
Category: Physics, Mathematics, Astronomy, Gravity
Tags: Pi, Newton, Gravity, Sun, Earth, Integration
Authors: Motleytech


Recently, I came across a gem of a physics problem, which had the awesome combination of being easy to comprehend, yet being surprisingly difficult to solve.

The problem is thus:

*The earth orbits around the sun because it has angular momentum. If we stopped the earth in orbit then let it fall straight towards the sun, then how long would it take to reach the sun in seconds?*

Now, I love physics and maths, and I believed that it would be a simple matter to knock this one off. Hah... was I mistaken.

<span style="width: 92%; display:block; margin: 0px auto;">
![Alternate text]({filename}/images/corot_ill.jpg)
</span>

------
All right... first, I did succeed in finding the answer and it turned out to be worthy of all the trouble. But before I tell you what it is, why don't you join me in the journey that starts from the first principles and leads to this *beautiful* result. If you are impatient, just scroll to the bottom for the answer... but if you can hold on to your horses (and don't mind some mathematics), you might enjoy yourself more.

Ok, lets start.

We want to find out the time taken by an object, $m_e$ ( the earth ), to fall towards a much heavier object, $M_s$ ( the sun ), purely under the force of gravity, given that $m_e$ starts to fall at time $t = 0$ from a stationary position a certain distance $(d = 150 \times 10^9 m)$ away. Let us assume that the earth and the sun lie on the $x$ axis and at time $t=0$, let the earth be located at at $x=0$ and the sun at $x=d$.

We know from Newton's Law of Gravitation that the force between the earth and the sun is given by

$$F = \frac{G M_s m_e}{r^2}$$

where

*   $F$ : force in newtons ($\text{kg}\text{ m}\text{ s}^{-2}$)
*   $G$ : gravitational constant : $6.67384 \times 10^{-11}\text{ kg}^{-1}\text{m}^3\text{s}^{-2}$
*   $M_s$ : mass of the sun : $1.989 \times 10^{30}\text{ kg}$
*   $m_e$ : mass of the earth : $5.972 \times 10^{24}\text{ kg}$
*   $r$ : distance between earth and sun in meters (changes as earth falls).
*   at $t=0$, $r = d = 1.496 \times 10^{11}\text{ m}$
