---
title: "Project Bellwether"
description: "Non-Parametric Financial Market Framework"
date: "July 31 2026"
#demoURL: "https://astro-sphere-demo.vercel.app"
#repoURL: "https://github.com/markhorn-dev/astro-sphere"
---
<div class="note">
    This project is proprietary. Code and results are not public here. However, an internal Julia library used for financial data wrangling and feature engineering will be made public soon.
</div>

Project Bellwether is a quantitative analysis framework and ongoing experiment with two simple rules:

- A human must still make the trading decisions at the end of the day
- Make no assumptions about the underlying distribution of the data 

From these two ideas, the project has grown to be an end-to-end data pipeline, an orchestrated system to go with it, and a research project into stochastic processes, non-parametric tests, and empirical distributions. The near future also holds ML ops, as we test, validate, and soon deploy a suite of models to use. 

This framework *does not* trade for us. It's not suitable for high-frequency trading, or any other form of algorithmic trading. Rather, the end goal of this project is to help the human understand the value-at-risk, the expected return, probability of profit, and which strategies at this current moment would most likely yield the highest return. We also hope to not just integrate the news for model training, but to also show relevant news and other metrics through a TUI. It is, in short, a sober voice for the trader, giving them distilled, statistically sound information they need before they place the trade.

## Really? No Assumptions?

Yeah, pretty much, but not quite as absolute as it sounds. We still work within the standard toolkit of stats and stochastic processes, and we do distinguish between typical market movements and extreme ones. What we don't assume is any specific distribution underlying the data. In short, we don't force a specific predefined shape (no assuming a normal curve for example), and instead work backwards. We use the data to try and extract an empirical shape of the asset. From the choice of statistical tests (including the one we engineered) to the ML and Deep Learning models, this holds true. Tests around classifying movements center around how extreme it is compared to those around them. Metrics to calculate momentum, variance, and kurtosis/kurtosis-like measures are all calculated with non-parameteric methods. We use ranks, binning, and quantiles. To put it simply, if a method or model doesn't fit this constraint, we reject it.

## Current Status

She's alive and kickin'. The core pipeline ingests, cleans, and feature engineers multi-source financial data (alternative data is not yet integrated, but we hope it will be added very soon once the first batch of models are complete and in production), feeds it through our non-parametric jump-detection test, and produces both risk assessments and short-horizon forecasts. As mentioned above, we are currently testing and validating a suite of tree-based models, with deployment coming within weeks of this update.

## What About The Library?

While we were first building out the pipeline, we built the project an internal library for feature engineering in Julia. The user defines a manifest once (columns, paths to data files, etc.), then we then front load it, and the library handles the rest. Computation end-to-end without needing further configuration. On a per function basis, the only thing the user needs to worry about is a few parameters here and there. Furthermore, we are proud of the performance this library can achieve. While there are indeed certain areas that need a quick rewrite to get even more performance, complex calculations like calculating back-adjusted prices based on corporate actions run in *O(n)* time, with an average time across ~28 million rows being 2.3 seconds. However, these are just preliminary results, and we hope to further stress-test these algorithms to get a more accurate picture. These times can also change as we further develop the library. Given that many of these tasks can be repetitive, and are part of the rather tedious data-cleaning phase, we hope that the release of this library (sans any proprietary stuff that affects our alpha/profit) will be of great use to the open-source/Julia community.
