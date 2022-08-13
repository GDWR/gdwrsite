---
layout: "../../layouts/BlogPost.astro"
title: "Minecraft Teaches Enterprise Skills"
description: "Here is a sample of some basic Markdown syntax that can be used when writing Markdown content in Astro."
publishDate: "Aug 12 2022"
updatedDate: "Aug 13 2022"
heroImage: "/images/blocky_docker.png"
---

Some time ago Joe Rogan made a comment on his podcast, Joe Rogan Experience, that really irked me. It has stuck with me even years later. In this infamous clip, Joe Rogan stated that he had a "real problem" with video games since they are "real exciting," but the player gets nothing out of them. He went on to discuss an alternative Jiu-Jitsu which he believed was a much better way for a kid to spend their time. His reasoning was that Jiu-Jitsu could lead to opportunities to earn money, but video games could not.

![Joe Rogan's opinion towards video games](https://www.youtube.com/watch?time_continue=67&v=P_SkUqOVP-0&feature=emb_title)

While the overall sentiment that money should be one's driving factor in life is the antithesis of my personal beliefs, that is not what has bothered me all these years. What has continued gnawing at my brain is just how wrong Joe Rogan's statements are. I am not here to debunk what was said on that podcast, but his words have been a source of motivation for myself and one that I hope to spread to others.

# How Video Games Inspire Me

I discovered video games at a very young age. Some of my earliest memories are of playing games on the Nintendo 64 with my dad and brother. All of the different titles seem to blur together for me at this point, but they firmly planted a fascination in my life that will last forever.

I loved (and still love) video games. Before I was capable of learning the skills to make games, I would write out entire documents and descriptions outlining my future game ideas. I only dreamed of creating software that others could enjoy the way I enjoyed video games.

# Passion Leads To Action

It was not until college that I realized I had the skills to learn programming anyone does. All I needed was my computer, the internet, and the motivation. My early days of programming were, of course, game development. I loved making tiny, terrible games that no one would play except for me. Although those early games will probably never see the light of day, they paved the way for me to teach myself other ways of using programming in my life.

One day I joined Discord to better facilitate my gaming needs. This quickly became an eye-opening experience. Not only was Discord an amazing place to meet and share ideas with developers, but I also realized I could write software bots that my friends could interact through the app. I wrote all sorts of utilities, tools, and even games. This lead to me writing and hosting websites that integrated with my Discord bots. Only a few years later I was receiving a job offer from a very large tech company. My skills had grown from min-maxing on League of Legends to managing databases, automating all the boring stuff with Python, writing web applications in Javascript + React, owning and managing multiple webservers, and much more. My abilities were creeping into the Enterprise world.

# Enterprise Minecraft By Example

A more recent example, and the main inspiration of this article, is how Minecraft helped foster my professional skills in programming.

Minecraft is a game that is enjoyed by all ages. Playing this game alone is great, but playing online with friends adds a whole new dimension of enjoyment. There are many issues to overcome when wanting to play Minecraft online with only your friends. To start, you need to host a Minecraft server. This task can be fairly trivial you just spin up a server on your local PC... but what if your friends want to play online when you are not available? Do you leave your gaming desktop or laptop running 24/7? Maybe, but that is not very practical.

![](https://miro.medium.com/max/1400/0*vSIi5NUdbiXlV6f7.png)

# *All* The Research…
So now you do some Googling and you are faced with quite a few options. You can: Build a new computer, purchase a Raspberry Pi, pay for a VPS, use AWS, GCP, DO, CF, too many abbreviations to keep up. Some may be intimidated at this step, but others might continue their research and determine the best solution.

Often the most appealing choice here is to go with a VPS (Virtual Private Server). This allows you to pay a small amount of money every month for resources that could otherwise cost you hundreds of dollars up-front if you had built your own server. At this stage, we are already on "The Cloud" and thinking quite modernly. We have opted to host our services on the cloud and already made steps towards emulating some of the tech giants of this era.

My personal favorite method of hosting a Minecraft server is to do so on Ubuntu and inside of containers using Docker + Docker Compose. This keeps things simple, organized, and easy to manage. Although now we have added two new enterprise-level skills to the mix.

![Blocky Docker Whale](https://miro.medium.com/max/1000/1*zB79QISxpHpCebztNx2tLA.png)

# From Minecraft To Professional Devops

By the time you have a Minecraft server running for your friends to join on, they may have all lost interest already. But who needs them? If you followed the same path as I did for Minecraft, you practically have half the skills necessary to perform professional devops for a big tech company (where there will be new friends anyway).

Being a professional in the tech industry does not mean knowing everything. The greatest skill someone can bring to a software job is the ability to find the information they need. Googling and self-learning are essential skills that can be picked up anywhere. Taking on a problem and finding a reasonable way to solve it is an excellent way to grow one's skills and work their way towards a career in tech.

Through Minecraft you have taught yourself how to configure and manage a VPS, Ubuntu, and Docker. This is just the bare minimum, there are likely a handful of other skills picked up along the way and potential new interests all around.

```yaml
services:  
  mc:    
    image: itzg/minecraft-server    
    ports:      
      - ${SERVER_PORT}:25565      
      - ${RCON_PORT}:25575    
    env_file:      
      - .env    
    environment:      
      EULA: "TRUE"      
      TYPE: "PAPER"    
    tty: true    
    stdin_open: true    
    restart: unless-stopped    
    volumes: - ./data:/data
```

# Conclusion

Motivation and opportunity is all around us every day. The seeds of programming were planted in my brain early in life and have grown to take over much of what I do. It is possible to learn these skills for free, online, from nearly any passion. It just takes time, dedication, and the motivation to sit down and gain new abilities. Video games were an easy path to programming and tech for me, but this opportunity to learn exists anywhere you look for it.
