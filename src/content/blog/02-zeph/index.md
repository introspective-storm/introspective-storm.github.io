---
title: "If You Like Pina Coladas..."
description: "How trying to find something different just ended up creating Zeph"
date: "July 31 2026"
---

Almost to the date, Project Bellwether has been something I have been working on for a year. While I absolutely adore that project, and continue to work on it (I mean come on, we finally have models giving us real signals!), it is true that working on the same project day in and day out can wear you down. For a while, I was able to avoid this by choosing different aspects of the projects that need to be done. Like choosing different tickets off Jira or Linear for different parts of the code base so you don't end up rewriting the entirety of that api in one go. That worked for a while, till I had everything complete, operational and ready to ship, except for model training.

As many of you know, model training is not as glamorous as it sounds, and it doesn't even sound that glamorous to begin with. It mostly involves writing the same test/train split you have done a thousand times, writing the same tests or calling the same functions to validate the model to go along with it, and in the meantime, you get to sit and stare at your terminal printing a new line every 2 hours, only for it to throw an error or an exception 6 hours in. Fun stuff.

After another batch of validation scripts, and staring at the same codebase for almost a year, I had enough. To be clear, I still wanted to work on Project Bellwether, but I realised that for the majority of the time the past year, I never really had other projects to work on that just let me relax, learn something new without much stakes, and have fun doing it. You can love everything you do, both work and project-wise. But sometimes, you just need a break.

I wanted to do something completely different than the statistics heavy, ML filled pipeline I was working with.

Yeah that didn't happen.

Anyways, introducing Zeph, a TUI to help you automate away the boring parts of model testing.

See, it was when I was tired, wanting to work on something new, and also realised how annoying it was to script the same model testing script over and over, just with slightly different flavors, that I realised I was doomed to never leave the data side of things. Even if I did, it was merely like Persephone spending time on earth, knowing full well she has to return to Hades soon. And you know? I wouldn't have it any other way.

## What's all this then?
Zeph is a model and framework agnostic tool to help you quickly validate and stress test your models. All from the terminal. Select your model, data, and the tests you want to run, and let Zeph take care of the rest. Take a look at the results when its done through the dashboard, or export certain results, charts, or graphs.

Currently, Zeph is under development, with its first alpha release coming soon. The project has a MIT license, so please feel free to take, share, break, do whatever you would like with the code. PRs are always welcome.

## So, You Ended Up Building Another Analytic Tool...
Yeah, I did.

See, Project Bellwether is proprietary, I can't share the code for that. But I do believe that project made me a much better coder. I had to build the entire pipeline, orchestration logic, custom statistical tests, optimizations, etc., all from scratch. I had also really enjoyed using Go as a part of Project Bellwether, and wanted to explore the language more. Lastly, while I have public repos with MIT and other forgiving licenses, this will be my first time giving back to the open-source community specifically.

It was a perfect storm. I wanted to start a new project so I have breaks from Bellwether, I wanted to learn more about the nuances of a language, I wanted to use what I learned in Bellwether to ship higher quality code for the open-source community, and I get to build a tool that I wanted to build for myself, and hope others would find it useful as well.
