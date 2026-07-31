---
title: "Getting started"
description: "Hit the ground running."
date: "Mar 22 2024"
---

### A Quick (And Slightly Technical) History Of Why

Yeah, pretty much, but not quite as absolute as it sounds. We still work within the standard toolkit of stats and stochastic processes, and we do distinguish between typical market movements and extreme ones. What we don't assume is any specific distribution underlying the data. In short, we don't force a specific predefined shape (no assuming a normal curve for example), and instead work backwards. We use the data to try and extract an empirical shape of the asset.

Many practitioners of quantitative finance, and statistics as a whole, have heard about Brownian Motion. They also know the issue with assuming stocks follow that stochastic process. It works great, until it doesn't. The Gaussian/normal assumption underlying that process simply fails to capture the full picture. Extreme movements are more common in these markets than a bell-curve would suggest.

To mitigate this, Merton (one of the authors of the original Black-Scholes formula, which yes, he is not usually named when we talk about the formula, but it *is* technically called Black-Scholes-Merton, but I digress) decided to add something else. He takes Brownian Motion, and adds a term to it. This term not only counts the extreme events as they occur randomly, but also allows the magnitude of that extreme event to vary. Mathematically, we are saying "hey, these black-swan type events happen, and also they are not always the same. Sometimes we can see a drop of 20%, and sometimes we see a drop of 30%." Perfect, now we are getting somewhere. Mathematically, this would be a Compound Poisson Process.

The only issue is, Merton assumed those shocks themselves also follow a log-normal distribution (Gaussian once you take the log). But, it was much better at describing the data, and the base idea was sound.

Soon, other academics and practitioners came up with their own models. All assuming Brownian Motion, plus a term that counts extreme events. What changes is the distribution they use to model those extreme events itself. For example, the Kou Model assumes that the extreme movements follow a double exponential distribution. This not only captures those so-called "fat tails," and probability of extreme events better, but it also lets an extreme upswing and a market crash both have a say in how it weighs and shapes the distribution, instead of just clumping it all together. The model also allows itself to be easier to interpret and connect back to real instruments or events in the market.

While these are all useful and incredibly valuable works, what if we were to take a different approach? What if we agree that the market has typical movements, and extreme ones that we can count, each with a different magnitude. But, we also reject the underlying distributions as a whole? We will accept that it is a stochastic process, but we deny any pure, beautiful mathematical shape, and instead only accept what we see in the data itself? This right here, is the absolute core of Project Bellwether. We only allow ourselves to let the data itself tell us what is normal and what is extreme.
