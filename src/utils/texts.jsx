const texts = [
  {
    id: 1,
    text: `You are Soai, one of the poets. It wasn’t your choice to become one, it was a necessity.

    The tower where you live is called the Bridge. It is divided into five levels. You are on the second one. One level below you won’t live long, one level above is a border between higher and lower society. Each level has several tiers with resident areas, work stations, stores, food places, etc.
    
    You’ve managed to stay on the current level for a while and haven’t been able to move any higher. Your performance during the Writers Fights is mediocre, but you don’t lose hope to get good.`,
    image: mainCharacterImage,
    alt: "Main character image",
    options: [
      {
        text: `Begin (dark and realistic)`,
        nextText: 2,
      },
      {
        text: `Begin (unicornish spirit)`,
        nextText: 55,
      },
    ],
  },
  {
    id: 2,
    text: `Today is just another day of your second-level life in the Bridge. You woke up in your life-capsule, a tiny container where you live. By the press of a button your bed transformed into a small table with a chair. You sat at it, ate your microscopic portion of the daily ration, then tapped your temples to turn on the VR-implant and logged into zerOne.
    
    Once being loaded into the virtual Bridge, you left your capsule and looked around, thinking where to go. In the evening you take part in the local Writers Fight.`,
    image: apartmentImage,
    alt: "Futuristic apartment image",
    options: [
      {
        text: `Go to the Mnemonic bar nearby, your favorite place to hang out.`,
        nextText: 3,
      },
      {
        text: `Visit the Dixie's shop that sells upgrades for the virtual characters.`,
        nextText: 34,
      },
    ],
  },
  {
    id: 3,
    text: `A giant smiling neon dolphin greets you from above the doors to the Mnemonic bar. You go inside. At the counter a tall guy with long hair waves at you. It’s Una Ek, owner of the place. You see yourself in the reflection of his black glasses. He’s old fashioned and doesn’t use eyes’ implants even in virtual space.

    Una waves at you happily. He’s always in a good mood.
    
    “Hey, Soai! Nice to see you, buddy. How’s life? Wanna drink?”`,
    image: mnemonicBarEntranceImage,
    additionalImage: unaEkImage,
    alt: "Mnemonic bar entrance image",
    additionalImageAlt: "Una Ek image",
    options: [
      {
        text: `“Life goes by. I’ll pass on the drinks. Gonna do some writing in the arena tonight, came to kill time and maybe practice a bit. Prefer having a clear head. What’s new with you?”`,
        nextText: 4,
      },
      {
        text: `“Hey-hey, Una! Top of the world… or rather its bottom. Wouldn’t mind a drink, but need my brain to function properly tonight. Doing some arena stuff. Water would be fine.”`,
        nextText: 41,
      },
    ],
  },
  {
    id: 4,
    text: `Una nods with approval.

    “My man. Straight to the point, aren’t you?”
    
    He starts cleaning the counter and keeps talking.
    
    “It’s quiet today. Peeps will come later, to watch the fight and all. I heard there’ll be a new poet. Recently came from the first level, imagine that. Rumor has it she’s good. Though I wonder what she was doing on the first level then."
        
    A cute little doggy came from the room behind the counter and Una rubs it behind the ear.
    
    "Who’s my boy, who’s my good Ckiw?"
    
    The dog jumps towards you like a tiny happy ball of fur.`,
    image: mnemonicBarInteriorImage,
    additionalImage: unaEkImage,
    alt: "Mnemonic bar interior image",
    additionalImageAlt: "Una Ek image",
    options: [
      {
        text: `“Hey, little buddy! A weird name you have. I’d call you Johnny.”`,
        nextText: 5,
      },
      {
        text: `You are annoyed by the dog and kick it off the counter.`,
        nextText: 42,
      },
    ],
  },
  {
    id: 5,
    text: `Una chuckles.

    “Nah, man. He’s my little Ckiw. You can go upstairs if you want to find a quiet place to practice. Nobody’s there at this time. Take your usual table at the far side, near the window. I’ll be here if you need anything or want to chat.”`,
    image: ckiwImage,
    additionalImage: unaEkImage,
    alt: "A dog in a futuristic bar",
    additionalImageAlt: "Una Ek image",
    options: [
      {
        text: `“Thanks, Una! You’re the best. I’ll go upstairs then.`,
        nextText: 6,
      },
      {
        text: `Good boy, Ckiw-y! Keep an eye on Una, ok?`,
        nextText: 43,
      },
    ],
  },
  {
    id: 6,
    text: `“YOU are the best!”

    Una turns away and continues his bartender work.
    
    You go to the Mnemonic second floor which is empty at the moment. You find your favorite place - a table at the far corner, near the window. The bar is located on the platform at the north side of the building, hanging over the abyss like a balcony. The view is breathtaking, a live stream from the real world: down below you can see toxic clouds, a tattered spiky chain of all shades of green and yellow, right in front of you everything is dirty gray with a glimpse of sun to your right, and up above the sky is still blue and clouds are white, though you have a feeling that these colors are not so blue and white as they used to be. Pollution is slowly but surely getting higher and higher, and all towers have their last floor. No one knows how long it can last. The end is approaching, and there’s no solution so far.
    
    You’ve spent some time looking at the window, consumed by your grim thoughts.
    
    Suddenly an old man sits at the table in front of you. He has a long white beard and vintage steampunk-style eyes’ implants that keep clinking and clanking, like constantly focussing on something. A bright blue robe and an expensive-looking cane with a golden dragon head as a handle give him a look of some overpriced museum piece.
    
    The man doesn’t speak and looks at you with a strange smile.
    
    You’ve never seen that article and are a bit confused.`,
    image: toxicCloudsImage,
    additionalImage: deoImage,
    alt: "Toxic green and yellow clouds",
    additionalImageAlt: "Deo image",
    options: [
      {
        text: `“Erm, hello. May I help  you… sir? I don't think I know you. Have we met before?”`,
        nextText: 7,
      },
      {
        text: `“Listen, I don’t want to be rude, but could you stop staring at me and find someone else for that?”`,
        nextText: 44,
      },
    ],
  },
  {
    id: 7,
    text: `The old man squints (however weird it may seem with his implants) and continues smiling.

    “Nice day today, isn’t it?”
    
    He points at the window with the dragon head on his cane.
    
    “And what a view! I can sit here all day, looking at it and absorbing this scenery.”
    
    Suddenly his voice gets firm and he looks into your eyes.
    
    “You seem to be one of the young ones who like to do some fighting in the arena. And not the greatest one, aren’t you?”
    
    He grins, sounding mocking.
    
    “Otherwise you’d be a bit higher than we are right now. But don’t you worry, I’m sure one day you’ll manage. Don’t lose hope, it’s all we have after all. Perhaps your last song will shake the world, or, with some luck, make it, if not better, then at least a different place.”
    
    The old man moves closer, his wrinkled eyes wink at you from behind the moving lenses of the implants.
    
    “Allow me to give you a piece of advice. What do you say?”`,
    image: mnemonicBarUpperFloorInteriorImage,
    additionalImage: deoImage,
    alt: "Mnemonic bar upper floor interior",
    additionalImageAlt: "Deo image",
    options: [
      {
        text: `“All right, grandpa, let’s hear this advice of yours. You’ve got my undivided attention. Lay it on me and make it count.” `,
        nextText: 8,
      },
      {
        text: `“I say, I’ll manage without your oldboy’s wisdom. Bartender Una will be happy to jabber, but I’m in a different mood.”`,
        nextText: 44,
      },
    ],
  },
  {
    id: 8,
    text: `The old man starts laughing.

    “A bold one you are, maybe even a reckless one, eh? Very well. Here’s something for you to consider. You must visit the Dixie’s shop before the arena. Tell Nnif Deo says hi. She might find something useful for you.”
    
    He gets quiet for a while, thinking, then continues talking.
    
    “Remember Soai, don’t overthink it and go with the most straightforward approach that comes to mind… And don’t use global variables. No scope is worse than quick scope.”
    
    He stands up, pats you on the back and walks away murmuring.
    
    “Who knows, perhaps we’ll meet again, if the right moment comes, dear child. Take care.”
    
    Thoughtfully looking at the old man shuffling down the stairs, you decided to stay at your table a bit longer, admiring the view.
    
    It’s started to rain, and you see toxic drops drumming on the windows glass. Accompanied by that calming sound, you finally get up and go to the first floor of the bar.
    
    You see Una at his usual place.`,
    image: toxicRainImage,
    additionalImage: unaEkImage,
    alt: "Toxic rain image",
    additionalImageAlt: "Una Ek image",
    options: [
      {
        text: `“Em-m, Una, do you know the oldie that just left? The blue robe one, with retro implants.”`,
        nextText: 9,
      },
      {
        text: `“Alright, time for me to head out. Arena awaits. See you, man. Don’t forget to feed the doggo!”`,
        nextText: 52,
      },
    ],
  },
  {
    id: 9,
    text: `Una looks surprised.

    “Hmm, what old man? I was here the whole time and haven’t seen anybody except you and Ckiw. Seems like your implant is glitching, dude. Or you browsed “something” interesting recently without turning on the incognito mode.”
    
    He winks at you.
    
    “And now you’re getting some targeted ads directly into your brain. In any case, sorry not sorry, pal. Have to keep your soft and hardware in order, you know.”`,
    image: mnemonicBarInteriorImage,
    additionalImage: unaEkImage,
    alt: "Mnemonic bar interior image",
    additionalImageAlt: "Una Ek image",
    options: [
      {
        text: `“Aye, Una, you’re probably right. I’ll go visit Dixie. Need to see if there’s something interesting in stock. Might come in handy during the writing in the arena.”`,
        nextText: 10,
      },
      {
        text: `“Man, I’m sure there was some creepy grandpa! I can tell when it’s something ads-related or not. I think his name is Deo. Apparently he knows Nnif.”`,
        nextText: 53,
      },
    ],
  },
  {
    id: 10,
    text: `Una nods.

    “You do you. Ask Nnif to check your brains as well. She might help with some temp files deletion. Take care, my friend.”
    
    You head over to Dixie which is located one tier below. A good friend of yours, Nnif, owns it. She’s quite tech-savvy and, though it’s not a top-class shop, always manages to get some rather unique stuff. Her regular customers are poets trying to get any advantage during the Writers Fights. Modifications in the arena are limited, but still can be used to some extent.
    
    Near the entrance to the shop you see a writing on its wall.
    
    YOU CAN’T FLATLINE THE fLATLINE!
    
    Your vision slightly glitches when you pass by it. Happens every time, like a client greeting. You go inside and see a tall woman wearing huge goggles. Half of her skull is shaved and the other half’s hair is painted in bright purple color (she keeps saying that it’s supposed to be green). There is also a tattoo of an ice ax on the shaven part.
    
    She notices you and makes a gesture to wait while she is talking to a customer through her VR-implant.
    
    Nnif seems quite pissed.
    
    “I’ve told you a mil times, buddy. It’s not THAT doll, ok? Now, it’s not covered by the warranty anymore, so I’m not going to provide another one, got it? And don’t you dare bring it here, I won’t touch it… No, you listen, pal, this is a respectable establishment, and I advise you not to come back anymore or a good friend of mine, called Icebreaker, will do some serious damage to your VR-neurons.”
    
    She angrily disconnects and turns to you like nothing happened. That’s Nnif, quite a character but gets cooled off rather quickly.
    
    “Sup, Soai. How are things in that poetic life of yours?”`,
    image: dixiesShopImage,
    additionalImage: nnifImage,
    alt: "Dixie's shop entrance image",
    additionalImageAlt: "Nnif image",
    options: [
      {
        text: `“Hola, Nnif. The usual, nothing too much, anything too little. I see you’re getting some clientele issues, huh?”`,
        nextText: 11,
      },
      {
        text: `“Salut, Nnif! Life’s kicking and ticking, pouring over the top. How are things on your techy end of the flat line?”`,
        nextText: 54,
      },
    ],
  },
  {
    id: 11,
    text: `Nnif chuckles.

    “Apparently that’s not what you think. Dude bought an Aya doll and, guess what, started using it as a farm bot in Theorycraft World. It’s forbidden, as you may well know. Have to use your own hands if you want to grind some skins. He could have purchased a normal good old bot from the Yarrr market, it’s cheaper and less detectable, but that article thought Aya doll won’t look suspicious. Adeptus Admins got him, obviously. As a bonus to deleting all his farmed gains, they also wiped the doll's brains. To kill two birds with one banwave. And now he’s trying to get a replacement by the warranty.”
    
    She taps herself on the ice ax tattoo.
    
    “But if he dares come here, I’ll use some persuasion technique to get rid of the smarty. Will be an educated customer next time.”`,
    image: dixiesShopInteriorImage,
    additionalImage: nnifImage,
    alt: "Dixie's shop interior image",
    additionalImageAlt: "Nnif image",
    options: [
      {
        text: `“Nice tattoo by the way. Makes you think about breaking the ice, heh. Always wanted to ask where do you get such cool stuff?”`,
        nextText: 12,
      },
      {
        text: `“Listen Nnif, I’ve bumped into a strange old man. Chic blue robe, steampunk goggles. Asked me to tell you Deo says hi, if that means anything to you.”`,
        nextText: 13,
      },
    ],
  },
  {
    id: 12,
    text: `Nnif smiles. - “It’s not a tattoo dude. It’s an implant. I couldn’t hold myself and asked for a sort of an RGB-extension for it, just less colorful and more vintage. Using it to save some funds on the shop guard you know. It’s a hacking module. Can dive into your target’s implants and make them a bit… warm. Nothing lethal of course. Sort of a brain taser. Walks somewhere on the thin red borderline of legality - it’s kinda ok-not-ok to have one, so nobody really cares as it’s hard to get anyway. That kind of gadget. If you decide to get something similar, I can dig a bit; can’t promise anything as it’s not cheap, but I’ll see what I can do for a friend.”`,
    options: [
      {
        text: `“Thanks Nnif, appreciate it, though currently I’m more interested in arena-related tools. That said, I’ve bumped into a strange old man today. Wearing chic blue robe and steampunk goggles. Apparently he asked me to tell you Deo says hi if that means something to you.”`,
        nextText: 13,
      },
      {
        text: `You sigh. - “Short on finances now… Was hoping you have something cheap and effective for the arena. I’m sort of out of new tricks over there.”`,
        nextText: 56,
      },
    ],
  },
  {
    id: 13,
    text: `Nnif looks at you with big eyes. - “Oh my… He talked to you directly? Wow. That’s something. Haven’t seen that old bastard for a long time. Say one thing about him… He can make an appearance, ain’t he?” - She thinks about something for a while. - “Okie-dokie, mister genius doesn’t come just for a conversation. Fine. Anyway it was made by him back in the days. I can provide you with an… interesting mode for the arena. Call it Event Horizon or simply EH. In some eyes it may look like cheating, but peeps mostly don’t know about it or don’t understand how it works, so it won’t get you banhammered if that worries you. Wanna know more?”`,
    options: [
      {
        text: `“Sure, I’m always up to some borderline cheating usage. Tell me what it does.”`,
        nextText: 14,
      },
      {
        text: `“Hm, I guess, I don’t. Not sure I’m the one who likes to test new and unknown things.”`,
        nextText: 57,
      },
    ],
  },
  {
    id: 14,
    text: `Nnif clears her throat.

    “Let’s avoid the chea-word from now on, shall we? As I said, it’s not really prohibited. A bit shady, let’s put it like that. Deo was the one who created it and, honestly, only he knows how exactly this thing works. To cut it short, it makes you see the most possible move of your opponent with a huge chance for it to happen. I believe it’s like a hundred percent, but Deo said it’s only close to it, as nothing is really one hundred percent, we should learn math properly, and blah, blah, blah. Let’s consider it to be always correct. To be fair, I’ve never used it on me, but it’s been tested and it works. Famous last words, as they say. But most of the tech is like that, if you ask me.”
    
    Nnif shrugs, as if she was talking about something obvious, then continues.
    
    “Everyone will think that it’s kinda UI enhancement, so I suggest not go into too many details and explain the rest. Just confirm that it is an enhancement and keep using it. And, in case you are wondering, the old dog insisted on not showing it to anyone unless his name is mentioned, so you’ll be entering the brave new world of first guinea pigs, congrats buddy. That’s pretty much it. Green light to proceed with the installation?”`,
    image: dixiesShopInteriorImage,
    additionalImage: nnifImage,
    alt: "Dixie's shop interior",
    additionalImageAlt: "Nnif image",
    options: [
      {
        text: `“Yeah, let’s do this. Wrap it up, plug it in. Where do I sign to see the future with the old man’s gift?”`,
        nextText: 15,
      },
      {
        text: `“Frankly, the more you describe it, the less I wanna use it. You know, I think I’ll pass.”`,
        nextText: 58,
      },
    ],
  },
  {
    id: 15,
    text: `Nnif laughs.

    “Chill a smidge, space cowboy. Nobody’s talked about seeing the future or any signatures. Here.”
    
    She taps herself on the ice ax implant, and it starts to glow with a bright neon blue color.
    
    “Don’t worry, this time it’s not gonna be a taser. It’s connected to my other implants and does a bit of coloring when they’re active. And by the way, it’s done already. Verbal confirmation was sufficient, so I went ahead and loaded you with Event Horizon mode. Let me show you something.”
    
    She touches her wrist to display a holo-projection on the wall.
    
    “A live broadcast of the arena game from the first level. Look at it, focus and tell me what you see.”
    
    You watch the final round of the game. A guy in a blue costume with a sign 67 is fighting a huge orc with a stick that looks like a distant relative of a gun. The green giant buffs himself with a Wa-a-agh boost and starts moving faster, louder and deadlier. A typical boyz-clans strategy. Or the lack of it. Blue costume guy pulls out a strange looking device, presses a couple of buttons on it, the time slows, and he starts methodically shooting the orc’s limbs one by one. That scene lasted for a few seconds during which the orc was moving in slow-motion and being filled up with bullets. He almost reached his opponent, trying to smash him with the gun (hard to tell why he didn’t shoot it, but, as it’s an orc, this is not really a valid question), but then finally fell down and stopped moving.
    
    You turn to Nnif unimpressed.`,
    image: orcImage,
    additionalImage: nnifImage,
    alt: "Orc with a stick",
    additionalImageAlt: "Nnif image",
    options: [
      {
        text: `“A typical low-level arena game. Ripboy abuses the time catching tactics, while greenie just counts on rush which is always a 50/50 situation. What’s so special about it?”`,
        nextText: 16,
      },
      {
        text: `“Hm, I don’t think this thing works. Are you sure you did the installation correctly? No offense, but maybe we should reinstall it? I’m something of a programmer myself.”`,
        nextText: 59,
      },
    ],
  },
  {
    id: 16,
    text: `Nnif looks at you with a strange smile.

    “The special is the fact that it’s not yet happened.”
    
    She starts typing something on her wrist-interface.
    
    “I’ve deactivated the mode. Take a look at the game now.”
    
    You look at it once again and suddenly realize that the match has just started and continues exactly the way you saw it a minute ago. Once the orc stops breathing, you turn to Nnif with a puzzled expression on your face. She winks.
    
    “I know, right? Pretty cool. I’ve added an on/off switch, so you’ll be able to see it in your UI now. No other options really. You either use it or not.”`,
    image: dixiesShopInteriorImage,
    additionalImage: nnifImage,
    alt: "Dixie's shop interior",
    additionalImageAlt: "Nnif image",
    options: [
      {
        text: `“Some practice needed, but looks great. Thanks Nnif, you rock. As always. Appreciate it. I better go now, looking forward to testing this thingy. See you on the other level… one day.”`,
        nextText: 17,
      },
      {
        text: `“Whoa, this thing scares the chips out of me, Nnif. Can you uninstall it? I think I’ve changed my mind. Feels like your old pal is messing with my brain. I’d prefer just some regular upgrades.”`,
        nextText: 60,
      },
    ],
  },
  {
    id: 17,
    text: `“No stop up to the top. Take care, Soai. Gimme some shoutouts if you win, will ya?”

    Nnif waves at you and starts talking with a customer over her VR-interface.
    
    “Oh, you JUST wanted to try it and bought it to return in two hours? Really!? Now, listen to me…”
    
    Leaving the shop accompanied by this charming discussion, you realize that it’s time to go to the arena now.`,
    image: dixiesShopInteriorImage,
    alt: "Dixie's shop interior",
    options: [
      {
        text: `Go directly to the arena and wait for it to start.`,
        nextText: 18,
      },
      {
        text: `Quickly check your virtual apartment.`,
        nextText: 61,
      },
    ],
  },
  {
    id: 18,
    text: `You go up to the next tier and enter the arena. While in the real world it doesn’t exist, in the virtual one it’s built like an actual sports stadium. Each tower level has an arena of a unique design, the higher the level, the cooler the arena.
    Bridge arena is called Shrike. Its main elements are spikes and sharp edges. Everything there can kill you pretty easily and this one specializes in running through obstacles till the finish line. You can do whatever you like with your opponents, and your main goal is to be the first one. Your second goal is to at least finish the race.
    
    You enter the arena through the back door for the participants, it’s displayed only for those who are eligible to take part in the current match. You’ve registered in advance, so all good on that side. You go to the lockers area, where you prepare for the race and choose your character. As you arrived quite early, there’s nobody there except for one girl that you haven’t seen before. She wears a red bike suite, her hair is of bright yellow color that matches her implanted lenses that fully cover her eyes. She turns back and notices you. Then the lenses slided to the sides of her eyes and you see that her pupils are also yellow.
    
    She smiles awkwardly. - “Oh, hey there. I’ve thought I’m the only one coming here early. First time you know.” - She giggles. - “I’m Arika.” - She gives you her hand to shake.`,
    options: [
      {
        text: `You shake hands with Arika. - “Hey-hey. Welcome. I’m Soai. Kind of a regular here, lol. I guess one can even say stuck. But we can all hope for a better tomorrow. Where did you come from if you don’t mind me asking?”`,
        nextText: 19,
      },
      {
        text: `Cross your hands on the chest and play a cool-boy. - “So, we’ve got a newbie here, haven’t we? Call me Soai. I'm a veteran here, know all the ins and outs of this arena.”`,
        nextText: 64,
      },
    ],
  },
  {
    id: 19,
    text: `Arika frowns and hesitates a bit. - “Ah, you know, I’d say I was traveling for some time. Long story, been here and there, and currently came from the first level.” - She winced. - “My oh my, that’s one mess of a place. Arena was kinda cool though. It has a strange “local” name which I didn’t really get but most of the peeps there called it !Wegun. Considering what happens to those who don’t make it till its end, quite a picturesque name. If you know what I mean.” - She giggles again. - “First-levelers have an interesting sense of humor.”
    While you speak with Arika other participants start entering the lockers area. While the space looks small, developers made a system of layers, so everyone can fit in and still be able to communicate with the rest. Actually, they called it shards, not layers, but frankly nobody really understood the difference. Long story short, a small lockers area could fit lots of poets without the need to extend its physical space.
    
    Due to this you don’t see all of the participants but you can check the list in your UI interface and target those you want to talk to. Arika was the first one to come, so she automatically got into the same shard as you. She looks at the crowd pouring into the room. - “Was nice chatting with you but I gotta go pick my character for the match. See ya nice fella!” - She goes back to her locker.
    
    It’s time to choose a character you’ll be playing during the arena. You go to your locker and open the menu with the randomly provided options.`,
    options: [
      {
        text: `Kassad. A romantic soldier with a love for the past. Have a special ability of moving backwards and using weapons from any period of history. Can be stunned by flashbacks randomly at any moment. With very little chance can disappear from the battle with a suddenly appearing woman (some say that may happen, but so far there is no real proof, so it’s quite unlikely to happen during the arena).`,
        nextText: 20,
      },
      {
        text: `Masteen. A mysterious templar. Always carries a strange cube with himself. Says there’s a space tree there that he can ride. Can randomly lose conscience. Some also say that he can disappear at any moment without a warning. Though nobody could provide any evidence for now.`,
        nextText: 66,
      },
    ],
  },
  {
    id: 20,
    text: `You decide to stick with Kassad for this match. Initially your character is like a blank template with some basic traits. It’s up to you to program it during the arena. What and how it’ll be doing is your job. The match is about to start and you walk out of the locker area to finally enter the arena.
    Today’s route goes through the rabbit hole. The first checkpoint will be initiated once you go through the massive portal designed as an old PC monitor. You see green lines running on it and forming a phrase “Wake up Soai”. Last word glitches a bit, and you have a strange feeling about it, but it’s most likely just a delay, as rendering a name for each participant may take a bit of time, given the fact that lower levels tech is outdated.
    
    You and other participants are gathering right in front of the screen. Arika is standing not far from you. Once the race starts the participants stay in the current position and get control over the chosen characters that will appear right on the start line. Green lines disappear from the giant monitor and now it has a countdown running from -1 to 8. On 8 the race begins.
    
    Suddenly you see that timer jumped to 8 straight away and the moment you got control over Kassad a player to your right, a gnome with a giant mechanical arm, hit you in the head with a steam-hummer. Your character gets stunned for 10 seconds and its HP reduces for 99 points. Then, a moment later, the visual changes and you realize that Event Horizon just showed you the near future prediction. The race is still about to start and the countdown just went to 7.
    
    8. The race starts.`,
    options: [
      {
        text: `You program Kassad to evade gnome’s strike, ignore him and jump into the screen.`,
        nextText: 21,
      },
      {
        text: `Program Kassad to shoot a few rounds to the gnome’s mechanical arm, then rush forward.`,
        nextText: 67,
      },
    ],
  },
  {
    id: 21,
    text: `Your character moves to the side and the mechanical arm doesn’t reach him. Gnome didn’t expect that and the arm keeps moving by inertia making him hit the ground and get stunned instead. You keep moving and enter the race area.
    Arika appears near you on the red futuristic bike. She winks. - “Cheers, Soai-boy!” - Then she drives forward and disappears behind the corner of the track.
    
    You saw a labyrinth-like route ahead of you with many turns and unknown areas. It’s high time to move quickly as other participants start appearing behind you.
    
    Right before the corner you notice a graffiti with the text: if(currentPlace === 2) {useShortcut()}.`,
    options: [
      {
        text: `You open the console and call the function useShortcut().`,
        nextText: 22,
      },
      {
        text: `Ignore the graffiti and keep moving forward.`,
        nextText: 68,
      },
    ],
  },
  {
    id: 22,
    text: `A wall with the graffiti slides to the side and you see a path there. As there’s not a lot of time to think, you quickly go inside and realize that you’ve just stepped on the glider that starts moving forward.
    You’re balancing on the glider quickly flying through the tunnel with transparent walls. There you see the main race track and other participants. The tunnel goes forward without any obstacles on the way and you realize that its exit will lead you to the first place ahead of Arika.
    
    All of a sudden a cyborg-looking chrome rabbit appears at the right side of you. Its red eyes are looking directly at you. You see that these are two cameras focusing while the rabbit shakes its head in a strange way. Then it turns around and knocks its head on the tunnel wall. A portal appears and the rabbit jumps into it. You notice that the portal starts shrinking.`,
    options: [
      {
        text: `You go right into the portal while it’s still open.`,
        nextText: 23,
      },
      {
        text: `You are here to win the race. Next time, sir rabbit. Keep moving through the tunnel to its exit.`,
        nextText: 69,
      },
    ],
  },
  {
    id: 23,
    text: `A bright light shines all around you and for a while you don’t see anything. Then it starts slowly fading away, flowing down like milk and revealing the place you are in. It has the shape of a sphere and you are levitating on your glider right in the center of it. Its walls look like one huge spherical screen that surrounds you. For a while it remains black but then various glitchy pictures begin to appear on it. You can’t understand what that is as the picture is always tearing. Finally, like a mosaic from hundreds of pieces an image of a chrome rabbit appears in front of you. It stares into you and its red eyes with cameras once again keep focusing.
    All of a sudden the rabbit starts smiling and his smile grows bigger and bigger. It then becomes larger than the animal itself and now all you can see around you is a giant smiling mouth.
    
    “Hello, dear boy. I am glad that you’ve decided to choose this path. I’ve been waiting for quite some time till you do that.” - You hear the voice of an old man you’ve met earlier today. Deo was his name.`,
    options: [
      {
        text: `“Old man!? How did you manage to get here? And what is happening? Have you been waiting for me to come?” - Questions keep pouring out of you like water from the bottle turned upside down. You have more but need a moment to catch your breath.`,
        nextText: 24,
      },
      {
        text: `“White rabbit and Cheshire cat? Seriously? Couldn’t come up with something more creative? What am I, Soai in boredomland?”`,
        nextText: 73,
      },
    ],
  },
  {
    id: 24,
    text: `Deo smiles. - “Not so fast young one, we have some time to spend here. As for the questions you asked so far: I’ve been here since you started taking part in the Writers Fights. What is happening? Well, you’ve entered the rabbit hole that I built a very long time ago. It is my secret place to hide from the virtuality of ZerOne in… let’s say another layer of the virtual space. And, yes, I have been waiting for you till this moment.”
    The image of the smiling mouth finally disappeared and after a brief moment of showing thousands 404 errors the sphere walls in front of you showed Deo. He looks different now. Younger, without strange eyes-implants and robe. Instead he wears a stylish costume (of the same blue color though) and vintage glasses. He looks at you as if waiting for a very important question to come.`,
    options: [
      {
        text: `“Are you real, old man? Or is it a part of the arena challenge, an easter egg or some kind of a secret level? I’ve never seen you on our level or during the previous arenas.”`,
        nextText: 25,
      },
      {
        text: `“Honestly, I just want to win this race. Any chance you can port me to the finish line?”`,
        nextText: 74,
      },
    ],
  },
  {
    id: 25,
    text: `Deo chuckles. - “Oh, that depends on what you think is real in this artificial world of ours. Though I did participate in a fair share of Writers Fights back in my days. But currently you can consider me a most-of-the-time silent and invisible observer of them. Let me ask you something instead. Do you feel real yourself my dear boy?”`,
    options: [
      {
        text: `“What do you mean real? We are both here in this loophole of the arena which is located in ZerOne. So I guess we are on some kind of a sub-level of the arena which is a sub-level of ZerOne which is a virtual space that stores all this. Outside of it I am quite real, old man, that I know.”`,
        nextText: 26,
      },
      {
        text: `“Ok, that’s enough weirdness for today. Order your rabbit-pet to show me the exit, please."`,
        nextText: 75,
      },
    ],
  },
  {
    id: 26,
    text: `Deo laughs and squints at you. - “Oh do you, dear boy? Do you know that for sure? What were you doing yesterday I wonder? Enlighten the old man please. Allow me to have this tiny bit of curiosity and then I will stop being a mysterious old man and finally give you some clarity.”`,
    options: [
      {
        text: `You look puzzled. - “I was at my capsule as usual and then logged into ZerOne and went to… Wait. That was today. I did that today… but also yesterday. What day was it? I don’t understand… It looked all the same.”`,
        nextText: 27,
      },
      {
        text: `You’re getting angry. - “Yesterday I was doing this arena-stuff and the day before! And the one before that! I need to win it, and finally get first place. I MUST do it, otherwise it will be all for nothing…”`,
        nextText: 77,
      },
    ],
  },
  {
    id: 27,
    text: `Deo has a sad smile on his face. - “Because it was the same, young one. Same beginning for your every day. I had to make it look real up until the point when you enter ZerOne. For that part I have to apologize. But in ZerOne itself your life was quite real, at least no less real then for the rest of us there.”`,
    options: [
      {
        text: `You start to understand something, but don’t want to believe it. - “What?! Why are you telling me this? Does it mean that…”`,
        nextText: 28,
      },
      {
        text: `“Am I the arena character you’re coding?”`,
        nextText: 78,
      },
    ],
  },
  {
    id: 28,
    text: `Now you see Deo as he looked back then when you met him at the Mnemonic bar. Old fellow in a blue robe. - “Yes it does. Let’s just face it. I’ve written you a long time ago as a character for one of my Writers Fights. I was quite an ambitious young man, or it’s better to say, an arrogant one. I was so proud of myself that after the arena I kept the code and started working on it. Adjusting it, trying to create a sentient being that can take decisions on its own and eventually will start considering itself a human. A human with a soul of AI… or Soai as I liked to call you.”`,
    options: [
      {
        text: `“I don’t believe you! I am not some artificial creature made by an old madman like you. I KNOW that I am real.”`,
        nextText: 29,
      },
      {
        text: `“Okie, so you’re not actually a grandpa but… just pa?”`,
        nextText: 79,
      },
    ],
  },
  {
    id: 29,
    text: `Deo looks at you approvingly. - “That only means that I’ve succeeded Soai. The very goal of my work was to make you feel as real as you could be. Not just a pile of code with comments that only you know what they mean but an actual artificial personality that can act on its own without the need of fixing or debugging. The thinking creature wandering around millions of humans in virtual space.”`,
    options: [
      {
        text: `“It is not possible to do! I am self-aware. I act by my own will, not like a puppet made for the arena! No, just no.” - You realize that it’s all true and there’s no point in arguing. - “For how long that all lasts, old man?”`,
        nextText: 30,
      },
      {
        text: `“Oh well, honestly, that was… expected. Sort of. I’ve started feeling loopish recently. At least now I have an explanation. How long are we in this business dad?”`,
        nextText: 80,
      },
    ],
  },
  {
    id: 30,
    text: `“Does it really matter? We’ve arrived at this point, that’s what is important. You must continue on your own from now on. My task is finally complete and you can venture forward and explore this artificial world of ours. I do hope that you’ll be able to change it as well as the real one out there. It’s on its last breath, Soai. People there either live in ignorance, not willing to accept the obvious, or simply don’t understand it. I did try to do something about it, but sadly my time had come to an end.”`,
    options: [
      {
        text: `“Wait a second. What do you mean by that? Are you going to leave me NOW? After explaining all that?"`,
        nextText: 31,
      },
      {
        text: `“Typical mad scientist. Oh, I’m so great, I will create an artificial life and everyone will remember me when it saves the world. And you will be just sitting there and watching?”`,
        nextText: 81,
      },
    ],
  },
  {
    id: 31,
    text: `“You already know the answer to that, my boy. I am another virtual being. Not as advanced as you are. Deo passed away several years ago and shortly before that created me, so that I can track your evolution. And once you reach this step, my task is complete. I am sorry but there’s not much left to say. The rest is up to you. Go win this race and claim your victory. I wish you luck and hope that you become something great. Go on now.”
    Deo (or his virtual projection) waves at you, then images on the sphere’s walls start blinking like going in the reverse order: old Deo, younger one, smiling mouth, rabbit, sphere disappears and you fly backwards into the shortcut. There you see the exit and Arika not far from you, at the same spot as before. You realize that Event Horizon worked again, and showed you all this before it actually happened.`,
    options: [
      {
        text: `You jump out of the shortcut in front of Arika and continue the race up to the finish line.`,
        nextText: 32,
      },
      {
        text: `Stay inside the shortcut, meditate and think about the inevitability of the events, destiny and the meaning of life.`,
        nextText: 82,
      },
    ],
  },
  {
    id: 32,
    text: `Arika’s character, you just noticed it, looks exactly the same as you saw her before the arena. Seems that she’s using the same appearance for her character. For those who want to spend some extra money on cosmetics it is possible to buy a skin and then your arena character will look like your character in ZerOne (but you still need to play with one of the suggested characters, only the appearance will be different). It’s strange though, as lower levels people rarely spend their money on such things.
    What is also strange is the look on Arika’s face. Seems like she’s glad that you managed to be in the first place. She smiles and winks at you (sliding off her eyes implants for a second).`,
    options: [
      {
        text: `You see the finish line, charge forward and cross it, winning the race.`,
        nextText: 33,
      },
      {
        text: `Slow down and walk towards the finish line, letting every other participant outrun you.`,
        nextText: 83,
      },
    ],
  },
  {
    id: 33,
    text: `And that’s what you’ve come up to so far. A free spirit of AI living in the artificial world where humans escape while their real one is on the brink of extinction. Your creator is gone and your friends don’t know that you are not real in their real world. Some strings were cut off, others got attached. Can you do something about it? Only time will tell. As long as there will be any time left for everyone.`,
    options: [
      {
        text: `The end (unless you want to rerun your path)`,
        nextText: 1,
      },
      {
        text: `The end (unless you want to visit the rabbit hole again)`,
        nextText: 23,
      },
    ],
  },
  // Other initial path (Dixie).
  {
    id: 34,
    text: `You head over to Dixie which is located one tier below. A good friend of yours, Nnif, owns it. She’s quite tech-savvy and, though it’s not a top-class shop, always manages to get some rather unique stuff. Her regular customers are poets trying to get any advantage during the Writers Fights. Modifications in the arena are limited, but still can be used to some extent.

    Near the entrance to the shop you see a writing on its wall.
    
    YOU CAN’T FLATLINE THE fLATLINE!
    
    Your vision slightly glitches when you pass by it. Happens every time, like a client greeting. You go inside and see a tall woman wearing huge goggles. Half of her skull is shaved and the other half’s hair is painted in bright purple color (she keeps saying that it’s supposed to be green). There is also a tattoo of an ice ax on the shaven part.
    
    Nnif is talking to a huge muscular bald guy with shining chrome arms.
    
    “Listen pal, it’s just an Aya doll, ok? Don’t use it for… other purposes. That won’t work and won’t bring you the results you want.”
    
    The giant doesn’t look like listening to her, so she waves her hand in front of his face.
    
    “Hello? That was an official warning for ya. It is now recorded and will be used against you if you decide to bring the doll back to whine about the warranty.”
    
    Seeing that her words didn’t bring any results, she just waved the customer off.
    
    “Whatever, man, just get outta here. I hope I won’t hear about you in the near future.”
    
    When the guy leaves, Nnif looks irritated. But then she turns to you like nothing happened. That’s Nnif, quite a character but gets cooled off rather quickly.
    
    “Sup, Soai. How are things in that poetic life of yours?”
    `,
    image: dixiesShopImage,
    additionalImage: nnifImage,
    alt: "Dixie's shop entrance image",
    additionalImageAlt: "Nnif image",
    options: [
      {
        text: `“Hola, Nnif. The usual, nothing too much, anything too little. I see you’re getting some special requests, huh?”`,
        nextText: 35,
      },
      {
        text: `“Salut, Nnif! Life’s kicking and ticking, pouring over the top. How are things on your techy end of the flat line?”`,
        nextText: 84,
      },
    ],
  },
  {
    id: 35,
    text: `Nnif snorts.

    “Pff, everyone is so special now. Dare say, unique even. But I’ve been working here for too long. Have some gut feeling that this ironhand friendo will return with a bunch of weird complaints and warranty claims. I’ve just gone ahead and added a few “official” warnings while recording it as well.”
    
    She taps herself on the ice ax tattoo.
    
    “And once he comes back, I’ll have some proofs to place on the table.”`,
    image: dixiesShopInteriorImage,
    additionalImage: nnifImage,
    alt: "Dixie's shop interior",
    additionalImageAlt: "Nnif image",
    options: [
      {
        text: `“Nice tattoo by the way. Makes you think about breaking the ice, heh. Always wanted to ask where do you get such cool stuff?”`,
        nextText: 36,
      },
      {
        text: `“I feel ya. Listen Nnif, I’ll be doing some poetic work today, if you get my meaning. Was wondering if you have anything for that line of business.”`,
        nextText: 37,
      },
    ],
  },
  {
    id: 36,
    text: `Nnif smiles.

    “It’s not a tattoo, dude. It’s an implant. I couldn’t resist and ordered a sort of an RGB-extension for it, just less colorful and more vintage-looking. Use it to save some funds on the shop guard, you know. It’s a hacking module. Can dive into your target’s implants and make them a bit… warm. Nothing lethal of course. Consider it a brain taser. Stands somewhere on the thin red borderline of legality, meaning it’s kinda ok-not-ok to have one, so nobody really cares. Besides, it’s hard to get anyway. That kind of gadget. Oh, yeah, it also records your conversations and visuals, in case you’ll need them, like in my case. If you want something similar, I can dig a bit, though can’t promise anything as it’s not cheap. But I’ll see what I can do for a friend.”`,
    image: dixiesShopInteriorImage,
    additionalImage: nnifImage,
    alt: "Dixie's shop interior",
    additionalImageAlt: "Nnif image",
    options: [
      {
        text: `“Thanks Nnif, appreciate it, but I’m currently more interested in arena-related tech.”`,
        nextText: 37,
      },
      {
        text: `“Impressing as always. Care to share your source of such awesome toolsies?”`,
        nextText: 85,
      },
    ],
  },
  {
    id: 37,
    text: `Nnif winks at you.

    “Arena, huh? Can’t stop coming back there and testing your luck, bro? Well, I hope you do win one day. Let me see if I can get you anything.”
    
    She goes to the storage room.
    
    “Be back in a min. Will try to find something useful and relatively new, as old tricks are all well-known and won’t bring any results except for eating up your creds.”
    
    While you’re waiting for Nnif, an old man enters the shop. He has a long white beard and vintage steampunk-style eyes’ implants that keep clinking and clanking, like constantly focussing on something. A bright blue robe and an expensive-looking cane with a golden dragon head as a handle give him a look of some overpriced museum piece.
    
    The man doesn’t speak and looks at you with a strange smile.
    
    You’ve never seen that article and are a bit confused.`,
    image: dixiesShopStorageRoomImage,
    additionalImage: deoImage,
    alt: "Dixie's shop storage room image",
    additionalImageAlt: "Deo image",
    options: [
      {
        text: `“Erm, hello. May I help  you… sir? I don't think I know you. Have we met before?”`,
        nextText: 38,
      },
      {
        text: `“Listen, I don’t want to be rude, but could you stop staring at me and find someone else for that?”`,
        nextText: 87,
      },
    ],
  },
  {
    id: 38,
    text: `The old man squints (however weird it may seem with his implants) and continues smiling.

    “Nice place this is. A bit un…ordered, but quite cozy.”
    
    He nods at the shelves around the shop.
    
    “And the owner is such a good lady. Oh, I loved coming here back in my days.”
    
    Suddenly his voice gets firm and he looks into your eyes.
    
    “You seem to be one of the young ones who like to do some fighting in the arena. And not the greatest one, aren’t you?”
    
    He grins, sounding mocking.
    
    “Otherwise you’d be a bit higher than we are right now. But don’t you worry, I’m sure one day you’ll manage. Don’t lose hope, it’s all we have after all. Perhaps your last song will shake the world, or, with some luck, make it, if not better, then at least a different place.”
    
    The old man moves closer, his wrinkled eyes wink at you from behind the moving lenses of the implants.
    
    “Allow me to give you a piece of advice. What do you say?”`,
    image: dixiesShopStorageRoomImage,
    additionalImage: deoImage,
    alt: "Dixie's shop storage room image",
    additionalImageAlt: "Deo image",
    options: [
      {
        text: `“All right, grandpa, let’s hear this advice of yours. You’ve got my undivided attention. Lay it on me and make it count.”`,
        nextText: 39,
      },
      {
        text: `“I say, I’ll manage without your oldboy’s wisdom. Nnif might give you a chance for an audience, but my stage is occupied.”`,
        nextText: 87,
      },
    ],
  },
  {
    id: 39,
    text: `The old man starts laughing.

    “A bold one you are, maybe even a reckless one, eh? Very well. Here’s something for you to consider. Once Nnif comes back, tell her Deo says hi. She might find something useful for you.”
    
    He gets quiet for a while, thinking, then continues talking.
    
    “Remember Soai, don’t overthink it and go with the most straightforward approach that comes to mind… And don’t use global variables. No scope is worse than quick scope.”
    
    He pats you on the back, turns around and walks away murmuring.
    
    “Who knows, perhaps we’ll meet again, if the right moment comes, dear child. Take care.”
    
    Before you are able to say anything, the old man leaves the shop.
    
    Nnif comes back and looks at your puzzled face.
    
    “What’s the matter? You’ve seen a ghost?”`,
    image: dixiesShopInteriorImage,
    additionalImage: nnifImage,
    alt: "Dixie's shop interior",
    additionalImageAlt: "Nnif image",
    options: [
      {
        text: `“That question remains open. A strange-looking old fellow came by. Asked me to tell you Deo says hi.”`,
        nextText: 40,
      },
      {
        text: `“Nah, just some weird folk pretending to be smart and muttering nonsense. Got anything shiny for me?”`,
        nextText: 91,
      },
    ],
  },
  {
    id: 40,
    text: `Nnif’s brows fly up.

    “Oh my… He talked to you directly? Here? Wow. That’s something. Haven’t seen that old bastard for a long time. Say one thing about him… He can produce himself out of nowhere, ain’t he?”
    
    She taps her lip with a thumb thoughtfully.
    
    “Okie-dokie, mister genius usually doesn’t come just for a conversation. Fine. As you mentioned this grumpy old kitten, I can provide you with something else… Anyway it was made by him back in the days. An interesting mode for the arena. Call it Event Horizon or simply EH. In some eyes it may look like cheating, but peeps mostly don’t know about it or don’t understand how it works, so it won’t get you banhammered, if that worries you. Wanna know more?”`,
    image: dixiesShopInteriorImage,
    additionalImage: nnifImage,
    alt: "Dixie's shop interior",
    additionalImageAlt: "Nnif image",
    options: [
      {
        text: `“Why not? Hit me with all you’ve got, almighty tech expert. Cheating or no-cheating has always been a foggy borderline for me.”`,
        nextText: 14,
      },
      {
        text: `“Hm, I guess, I don’t. Not sure I’m the one who likes to test new and unknown things. Nope, I'll pass on that one.”`,
        nextText: 92,
      },
    ],
  },
  // Other misc. dialogues.
  {
    id: 41,
    text: `“Excellent choice, sir! One glass of perfectly clean and healthy water coming right up!”

    Una theatrically pours you a glass and hands it over with a bow.
    
    “Always feels weird drinking anything in that artificial world of ours, eh? But the eggheads somehow managed to make it like you’re really sensing it. Can’t believe we’ve become part of this, man! Sometimes I just want to be someone else. Have this dream about taking the wrong pill a long time ago. Or maybe it was the right one which didn’t really make any difference in the end. Perhaps it was the same pill, just a different color?”
    
    Una looks like he’s somewhere else and just talking to himself.
    
    “Or was there any pill at all? Was it a battery, and we were not supposed to swallow it? If only some voice of wisdom in my head could tell me…”
    
    He finally stops talking and sees your surprised face.
    
    “Oopsie. Don’t mind me, water-lover. Sometimes I become a bit… carried away. Maybe I was the chosen one in my former life, huh? Speaking of the chosen ones…”
    
    A cute little doggy came from the room behind the counter, and Una starts playing with it.
    
    “Who’s my boy, who’s my good Ckiw?”
    
    The dog jumps towards you like a tiny happy ball of fur.`,
    image: mnemonicBarInteriorImage,
    additionalImage: unaEkImage,
    alt: "Mnemonic bar interior image",
    additionalImageAlt: "Una Ek image",
    options: [
      {
        text: `“Hey, little buddy! A weird name you have. I’d call you Johnny.”`,
        nextText: 5,
      },
      {
        text: `You are annoyed by the dog and kick it off the counter.`,
        nextText: 42,
      },
    ],
  },
  {
    id: 42,
    text: `Una’s face immediately changes. It is now a mask of a cold-blooded killer who rips his enemies apart with a pencil or anything else at the reach of his hand. He’s talking like throwing bricks at you, getting angrier with each word.

    “You.. kicked… the wrong… doggo!”
    
    Una did terrible things to you. Things that should better not be described. Your digital character has been wiped off and you start from scratch on the following day, not remembering anything. To your luck, Una knows that and considers that you won’t do this again.
    
    Let’s be honest, you should not harm cute little animals that did nothing to you, ok? Even if they live in the virtual world.`,
    image: gameOverImage,
    alt: "Game over image",
    options: [
      {
        text: `Start from the beginning and be ashamed of yourself, always remembering this valuable life lesson.`,
        nextText: 1,
      },
      {
        text: `Yes, start from the beginning. What did you expect? That there will be another option for you? No!`,
        nextText: 1,
      },
    ],
  },
  {
    id: 43,
    text: `Una laughs.

    “Oh, he definitely will. Don’t tell anyone, but it’s actually a full digital copy of a real dog I had back in my rebel youth days. A good friend of mine gave him to me. She had two, but one day needed to go to her daughter she hadn’t seen for years, and couldn’t travel with both of them. You better not know what beasts these two were, don’t let the cuteness fool you. Had to do some tuning for the digital version. I’m at peace now and so should be my pet.”
    
    Una winks at you, then waves at the stairs to the second floor.
    
    “Ok, enough chit chatting and lollygagging, go practice already. Hope you win, my man.”
    
    He turns away and continues his bartender work.
    
    You go to the Mnemonic second floor which is empty at the moment. You find your favorite place - a table at the far corner, near the window. The bar is located on the platform at the north side of the building, hanging over the abyss like a balcony. The view is breathtaking, a live stream from the real world: down below you can see toxic clouds, a tattered spiky chain of all shades of green and yellow, right in front of you everything is dirty gray with a glimpse of sun to your right, and up above the sky is still blue and clouds are white, though you have a feeling that these colors are not so blue and white as they used to be. Pollution is slowly but surely getting higher and higher, and all towers have their last floor. No one knows how long it can last. The end is approaching, and there’s no solution so far.
        
    You’ve spent some time looking at the window, consumed by your grim thoughts.
    
    Suddenly an old man sits at the table in front of you. He has a long white beard and vintage steampunk-style eyes’ implants that keep clinking and clanking, like constantly focussing on something. A bright blue robe and an expensive-looking cane with a golden dragon head as a handle give him a look of some overpriced museum piece.
    
    The man doesn’t speak and looks at you with a strange smile.
    
    You’ve never seen that article and are a bit confused.`,
    image: toxicCloudsImage,
    additionalImage: deoImage,
    alt: "Toxic green and yellow clouds",
    additionalImageAlt: "Deo image",
    options: [
      {
        text: `“Erm, hello. May I help  you… sir? I don't think I know you. Have we met before?”`,
        nextText: 7,
      },
      {
        text: `“Listen, I don’t want to be rude, but could you stop staring at me and find someone else for that?”`,
        nextText: 44,
      },
    ],
  },
  // Big choice without Event Horizon.
  {
    id: 44,
    text: `Old man looks at you for a couple more seconds, then turns and walks away. - “Another time or place then. An interesting observation that was but sadly too soon.” - He continues murmuring something incomprehensible and you stop paying attention to him.
    You look at the window admiring the view. It’s started to rain and you see the toxic drops drumming on the windows glass. Accompanied by that calming sound you open your UI-interface and start observing the information about today’s arena.
    
    Bridge arena is called Shrike. Its main elements are spikes and sharp edges. Everything there can kill you pretty easily and this one specializes in running through obstacles till the finish line. You can do whatever you like with your opponents, and your main goal is to be the first one. Your second goal is to at least finish the race.`,
    options: [
      {
        text: `Check the list of participants for the arena.`,
        nextText: 45,
      },
      {
        text: `Check the details about today's arena.`,
        nextText: 93,
      },
    ],
  },
  {
    id: 45,
    text: `You see many familiar names: Goose Ra Doubt, annoyingly loud dude with a strange attraction to cats, not really an opponent as he keeps using the same gameplay for years and promising to create something new in due time; Nani O Maiev-A, a strong lady that once loved a very old guy who betrayed her and then wasn’t prepared for her revenge, a worthy opponent but since she stops wearing her old armor (for some honor principles), mostly represents a no-threat participant; Citiesdzen Stored, that was once upon a time everyone favorite participant but then went into overpromising and underdelivering mode, rumor has it, the man has lots of money and is ready to show everyone something fantastic but each time cancels and reschedules it, you don’t really expect to see anything new from him.
    You then notice a couple of names you haven’t seen before.
    
    Moor Cow and Arika. Strange. It’s the first time you see these two. Newcomers are usually a rare thing on the arena of any level. Those coming up from the lower ones at first have some chances to find a job and the ones coming down from the higher ones are at first too depressed to take part in pretty much anything. Due to this you know almost every poet on your level. But these two seem to be an exception.
    
    Moor Cow dude seems suspicious to you. You’re pretty sure this one won’t be playing fair. Won’t be a surprise if he’ll choose a gnome character.`,
    options: [
      {
        text: `Check the details about today's arena.`,
        nextText: 46,
      },
      {
        text: `You decide to go to the arena now and wait for it to start there.`,
        nextText: 47,
      },
    ],
  },
  {
    id: 46,
    text: `Shrike’s always changing. Each time you enter it, you don’t know where the race will start and end and what challenges are waiting for you on the way. Today’s route goes through the rabbit hole. That probably means some hidden traps and weird-looking animals that are trying to kill you. Not much to learn here. It’s supposed to be unknown up until the moment when the race begins.`,
    options: [
      {
        text: `You decide to go to the arena now and wait for it to start there.`,
        nextText: 47,
      },
      {
        text: `You think that you have a bit of time to check your virtual apartment.`,
        nextText: 95,
      },
    ],
  },
  {
    id: 47,
    text: `You go up to the next tier and enter the arena. While in the real world it doesn’t exist, in the virtual one it’s built like an actual sports stadium. Each tower level has an arena of a unique design, the higher the level, the cooler the arena.
    You enter the arena through the back door for the participants, it’s displayed only for those who are eligible to take part in the current match. You’ve registered in advance, so all good on that side. You go to the lockers area, where you prepare for the race and choose your character. As you arrived quite early, there’s nobody there except for one girl that you haven’t seen before. She wears a red bike suite, her hair is of bright yellow color that matches her implanted lenses that fully cover her eyes. She turns back and notices you. Then the lenses slided to the sides of her eyes and you see that her pupils are also yellow.
    
    She smiles awkwardly. - “Oh, hey there. I’ve thought I’m the only one coming here early. First time you know.” - She giggles. - “I’m Arika.” - She gives you her hand to shake.`,
    options: [
      {
        text: `You shake hands with Arika. - “Hey-hey. Welcome. I’m Soai. Kind of a regular here, lol. I guess one can even say stuck. But we can all hope for a better tomorrow. Where did you come from if you don’t mind me asking?`,
        nextText: 48,
      },
      {
        text: `Cross your hands on the chest and play a cool-boy. - “So, we’ve got a newbie here, haven’t we? Call me Soai. I'm a veteran here, know all the ins and outs of this arena.”`,
        nextText: 96,
      },
    ],
  },
  {
    id: 48,
    text: `Arika frowns and hesitates a bit. - “Ah, you know, I’d say I was traveling for some time. Long story, been here and there, and currently came from the first level.” - She winced. - “My oh my, that’s one mess of a place. Arena was kinda cool though. It has a strange “local” name which I didn’t really get but most of the peeps there called it !Wegun. Considering what happens to those who don’t make it till its end, quite a picturesque name. If you know what I mean.” - She giggles again. - “First-levelers have an interesting sense of humor.”
    While you speak with Arika other participants start entering the lockers area. While the space looks small, developers made a system of layers, so everyone can fit in and still be able to communicate with the rest. Actually, they called it shards, not layers, but frankly nobody really understood the difference. Long story short, a small lockers area could fit lots of poets without the need to extend its physical space.
    
    Due to this you don’t see all of the participants but you can check the list in your UI interface and target those you want to talk to. Arika was the first one to come, so she automatically got into the same shard as you. She looks at the crowd pouring into the room. - “Was nice chatting with you but I gotta go pick my character for the match. See ya nice fella!” - She goes back to her locker.
    
    It’s time to choose a character you’ll be playing during the arena. You go to your locker and open the menu with the randomly provided options.`,
    options: [
      {
        text: `Kassad. A romantic soldier with a love for the past. Have a special ability of moving backwards and using weapons from any period of history. Can be stunned by flashbacks randomly at any moment. With very little chance can flee from the battle with a suddenly appearing woman (some say that may happen, but so far there is no real proof, so it’s quite unlikely to happen during the arena).`,
        nextText: 49,
      },
      {
        text: `Masteen. A mysterious templar. Always carries a strange cube with himself. Says there’s a space tree there that he can ride. Can randomly lose conscience. Some also say that he can disappear at any moment without a warning. Though nobody could provide any evidence for now.`,
        nextText: 98,
      },
    ],
  },
  {
    id: 49,
    text: `You decide to stick with Kassad for this match. Initially your character is like a blank template with some basic traits. It’s up to you to program it during the arena. What and how it’ll be doing is your job. The match is about to start and you walk out of the locker area to finally enter the arena.
    
    The race begins once you go through the massive portal designed as an old PC monitor. You see green lines running on it and forming a phrase “What do we say to waking up?”. The letters glitch a bit, and you have a strange feeling about it, but it’s most likely just a delay, given the fact that lower levels tech is outdated.
    You and other participants are gathering right in front of the screen. Arika is standing not far from you. Once the race starts the participants stay in the current position and get control over the chosen characters that will appear right on the start line. Green lines disappear from the giant monitor and now it has a countdown running from -1 to 8. On 8 the race begins.
    
    You turn right and see Moor Cow. He’s chosen a gnome character with a giant mechanic arm.
    
    The race begins.`,
    options: [
      {
        text: `Program Kassad to shoot a few rounds to the gnome’s mechanical arm, then rush forward.`,
        nextText: 50,
      },
      {
        text: `Ignore the gnome and begin the race.`,
        nextText: 100,
      },
    ],
  },
  {
    id: 50,
    text: `Kassad starts moving, takes out his futuristic rifle with a small logo of a girl trapped inside of a pyramid. He turns around and while still moving shoots at the gnome’s arm. It’s being destroyed and Moor Cow is stunned for a few seconds. Kassad’s moves didn’t slow you down and he keeps running forward.
    You see that Arika is the only participant ahead of you. She coded herself a bright red bike and now has a huge advantage. The rest of the race seems strangely mundane to you. All the obstacles are already well-known and nothing new happens. You easily avoid traps and Shrike’s blades and finish second.
    Arika is waiting for you at the finish line.`,
    options: [
      {
        text: `“Congrats. Nice bike you’ve made there.”`,
        nextText: 51,
      },
      {
        text: `“Not bad. Do you always use the same appearance during the arena?”`,
        nextText: 72,
      },
    ],
  },
  {
    id: 51,
    text: `Arika smiles. - “Thanks! I call her Choochoo. My favorite ride. You’ve done a good job as well! Don’t worry, I’m sure you’ll be the first one soon. Just try again. You know, maybe some different choices along the way may lead to a different outcome.” - She winks at you, then to your surprise gives you a hug. - “Bye-bye, Soai-boy, I’ll see you when I see you.” - With that her character falls into pixels and disappears.
    And that was another day in the Bridge for you. Not too much, not too little. Well, at least you got your second place today. And maybe tomorrow is a better day.`,
    options: [
      {
        text: `Wanna rerun your story?`,
        nextText: 1,
      },
      {
        text: `Common, one more time!`,
        nextText: 1,
      },
    ],
  },
  // More choices.
  {
    id: 52,
    text: `Una makes big eyes. - “Never! The world can fall apart and be destroyed by the AI that turns all humans into charging blocks, but even then I’ll find a way to get some juicy meat for my Ckiw!” - He laughs. - “Cheers my friend, do make me proud today!” - With these words he goes to the other part of the bar to chat with customers that start coming.
    
    You go out and head over to Dixie, an upgrades shop located one tier below. A good friend of yours, Nnif, owns it. She’s quite tech-savvy and, though it’s not a top-class shop, she always manages to get some quite unique stuff. Her regular customers are poets who try to get any advantage during the Writers Fights. Modifications are limited during the arena match, but still can be used to some extent.
    Near the entrance to the shop you see a writing on the wall - “You can’t flatline the Flatline!”. Your vision slightly glitches when you pass by it. Happens every time though. It’s like a greeting to the shop. You go inside and see a tall woman wearing huge goggles with half a skull shaved and the other half’s hair painted bright green. The shaven part also has a tattoo of an ice ax. She notices you but makes a gesture to wait while she is dealing with another customer (who is not present, she’s talking to him through her implant).
    Nnif seems quite pissed. - “I’ve told you a mil times buddy. It’s not THAT doll, ok? Now it’s not covered by warranty anymore, so I’m not going to provide another one, got it? And don’t you dare bring it here, I won’t touch it… No, you listen, pal, it’s the wrong shop for you, and I advise you not to come here anymore or a good friend of mine, by the name of Ice Breaker, will do some serious damage to your VR-implant.” - She angrily disconnects and turns to you like nothing happened. That’s Nnif, quite a character but gets cooled off rather quickly. - “Sup Soai. How’s life?”`,
    options: [
      {
        text: `“Hola Nnif. The usual, not too much, not too little. Got some clientele issues, huh?” - You look at her with a knowing smile.`,
        nextText: 11,
      },
      {
        text: `“Salut Nnif. Life’s kicking and ticking. What’s new with you?”`,
        nextText: 54,
      },
    ],
  },
  {
    id: 53,
    text: `Una starts laughing. - “Nnif with a grandpa!? Ha! Can you imagine that? Oh boy, do tell her about it. I’m sure she’ll be happy to hear it and will show you some cute pics from her childhood. Hah!” - He keeps laughing. - “Sometimes I think that girl just appeared in this world without any prerequisites if you know what I mean. So tough she is. But who am I to tell you what to do?” - Still giggling he just waves at you. - “All right, get outta here already, I have some clients to serve.”
    
    You just grin at Una, go out and head over to Dixie, an upgrades shop located one tier below. A good friend of yours, Nnif, owns it. She’s quite tech-savvy and, though it’s not a top-class shop, she always manages to get some quite unique stuff. Her regular customers are poets who try to get any advantage during the Writers Fights. Modifications are limited during the arena match, but still can be used to some extent.
    Near the entrance to the shop you see a writing on the wall - “You can’t flatline the Flatline!”. Your vision slightly glitches when you pass by it. Happens every time though. It’s like a greeting to the shop. You go inside and see a tall woman wearing huge goggles with half a skull shaved and the other half’s hair painted bright green. The shaven part also has a tattoo of an ice ax. She notices you but makes a gesture to wait while she is dealing with another customer (who is not present, she’s talking to him through her implant).
    Nnif seems quite pissed. - “I’ve told you a mil times buddy. It’s not THAT doll, ok? Now it’s not covered by warranty anymore, so I’m not going to provide another one, got it? And don’t you dare bring it here, I won’t touch it… No, you listen, pal, it’s the wrong shop for you, and I advise you not to come here anymore or a good friend of mine, by the name of Ice Breaker, will do some serious damage to your VR-implant.” - She angrily disconnects and turns to you like nothing happened. That’s Nnif, quite a character but gets cooled off rather quickly. - “Sup Soai. How’s life?”`,
    options: [
      {
        text: `“Hola Nnif. The usual, not too much, not too little. Got some clientele issues, huh?” - You look at her with a knowing smile.`,
        nextText: 11,
      },
      {
        text: `“Salut Nnif. Life’s kicking and ticking. What’s new with you?”`,
        nextText: 54,
      },
    ],
  },
  {
    id: 54,
    text: `Nnif chuckles. - “Same, though I’m trying to be on the kicking and ticking side myself when it comes to customers.” - She taps herself on the ice ax tattoo.`,
    options: [
      {
        text: `“Nice tattoo btw. Always wanted to ask you where did you get it?”`,
        nextText: 12,
      },
      {
        text: `You decide to go straight to the point. - “Listen Nnif, I’ve bumped into a strange old man today. Wearing chic blue robe and steampunk goggles. Apparently he asked me to tell you Deo says hi if that means something to you.”`,
        nextText: 13,
      },
    ],
  },
  {
    id: 55,
    text: `Today is another wonderful day of your beautiful life in the Bridge. You woke up in your cozy apartment that provides you with everything you need and desire. By the press of a button your bed transformed into an ergonomic table with a comfy chair. You sat at it, ate your delicious breakfast, tapped your temples to turn on the VR-implant and logged into zerOne…

    >>>
    ~ { E R R O R 3 7 }
    >>>

    Who are we kidding? Your “apartment” is a tiny capsule with just enough space to sleep and your food is a suspiciously-looking gray mass containing the bare minimum chemical elements for the day. These are the only activities you can do in that microscopic place. Everything else happens in the virtual world.

    And that creepycorn you see is but another glitch in your VR-implant, appearing for a millisecond every time before you’re fully logged in.

    No rainbow beginnings for ya, just continue your path!

    >>>
    ~ { Restarting the simulation… }
    >>>

    Once being loaded into the virtual Bridge, you left your capsule and looked around, thinking where to go. In the evening you take part in the local Writers Fight.`,
    image: unicornImage,
    alt: "Futuristic unicorn image",
    options: [
      {
        text: `Go to the Mnemonic bar nearby, your favorite place to hang out.`,
        nextText: 3,
      },
      {
        text: `Visit the Dixie's shop that sells upgrades for the virtual characters.`,
        nextText: 34,
      },
    ],
  },
  {
    id: 56,
    text: `Nnif frowns. - “I get it dude, but cheap and effective are the words from two different worlds. Sadly they don’t get along. I mean, I could sell you some garbage tech, but let me save you some money and just refuse doing that. You’re better off without them. Otherwise it’ll look like doing some mining with a piece of tech instead of a pick. In theory you could do that but people who really need it won't appreciate that. And let me tell you a secret. For low-levels arenas upgrades don’t really matter. Just use your brains.”`,
    options: [
      {
        text: `“I understand. Thanks for the advice Nnif. Always appreciated your straightforwardness.” - You decide to go directly to the arena and wait for it to start there.`,
        nextText: 47,
      },
      {
        text: `“Roger that chief. Oh, by the way, almost forgot, I’ve bumped into a strange old man today. Wearing chic blue robe and steampunk goggles. Apparently he asked me to tell you Deo says hi if that means something to you.”`,
        nextText: 13,
      },
    ],
  },
  {
    id: 57,
    text: `Nnif chuckles. - “Your choice man. But that’s some interesting piece of tech, I’m telling you. Old man was sort of a magician. Can’t promise you that everything will go as you expect, but, well, at least you could have some fun along the way… or not. Anywho, take it or leave it, I have some work to do, so either this or good luck with writing your new poem tonight.”`,
    options: [
      {
        text: `“Oh fine, mademoiselle persuasion. You’ve got my attention now. Let’s talk about this cheating device of yours!”`,
        nextText: 14,
      },
      {
        text: `“Aye-aye, captain, I’m sailing off. To the world of poetry and beyond!” - You decide to go directly to the arena and wait for it to start there.`,
        nextText: 47,
      },
    ],
  },
  {
    id: 58,
    text: `Nnif seems disappointed. - “Oh well, I thought I could finally get rid of this thing, but seems today is not that day. Though, I’m telling you, that’s the most unique thingy you could find for the arena… and not only on our level, believe me. Let me give you some final chunk of advertising: Deo was able to live on all levels of the bridge, imagine that. Not only that, he initially came here from another tower. I didn’t know him that well, dude was always a… closed type, but somehow I managed to make him talkative a couple of times.”`,
    options: [
      {
        text: `“Wow, consider me impressed, to say it mildly. Ok, fine, load me with that future seeing cookie. My brainy is ready to taste this Deo…dorant. Should I sign something?”`,
        nextText: 15,
      },
      {
        text: `“Ok, now I’m really worried, so no, thanks Nnif. I’ve never been an enthusiast to test things coming from that sort of strangers. I better go. Thanks anyway.” - You go to the arena to wait for its start.`,
        nextText: 47,
      },
    ],
  },
  {
    id: 59,
    text: `Nnif frowns and seems a bit irritated. - “Dude, show some respect. I’m in this biz for quite some time. Soft is installed as smoothly as you could imagine. Have you seen the words while entering? Well, it’s not just words, the previous shop owner, upon his last days, scanned and uploaded his memories right into here.” - She taps herself on the tattoo again. - “So, I’m kinda the voice of a great man…” - You suddenly realize that the projection on the wall now shows exactly the same events that you’ve just seen. Ripboy beats an orc abusing the time catching tactics. You interrupt Nnif's monologue and explain to her that.
    She laughs. - “Ha! I’ve told you it’s working. Pretty cool, ain’t it? It shows you some sort of the most possible events in the near future. Works only in the arena. So, don’t get too excited about it. But if you find some new functionalities, be a darling and do let me know. I’ll probably need to replicate it and become super rich. Also, I’ve added an on/off switch, you’ll be able to see it in your UI now. No other options really. You either use it or keep it turned off.”`,
    options: [
      {
        text: `“Some practice needed, but looks great. Thanks Nnif, you rock. As always. Appreciate it.” - You realize that your arena will start soon. - “Ok, I better go now, looking forward to testing this thingy regardless of the match results. Thanks again. See you on the other level… one day.”`,
        nextText: 17,
      },
      {
        text: `“Whoa, this thing scares me Nnif. Can you uninstall it? I think I’ve changed my mind. Feels like old pal is messing with my brain. I’d prefer just some regular upgrades.”`,
        nextText: 60,
      },
    ],
  },
  {
    id: 60,
    text: `Nnif is starting to get angry. - “Man, grow up a little. You think or you’ve changed your mind? It’s one or zero. What are you: a coder or some philosopher who stared too long into the abyss until it ate him?” - She sighs. - “Ok, one last time, just me being a good and kind person. Wanna remove it or not?”`,
    options: [
      {
        text: `“Yes please. Sorry for bothering you. And then I’ll just go and do my arena thingy.” - Nnif uninstalls the Event Horizon angrily typing something on her wrist and you then go directly to the arena.`,
        nextText: 47,
      },
      {
        text: `Make a peaceful gesture. - “Accept my humblest apologies, oh almighty tech expert. I’ve decided and will keep this unique technology deep in my brain. And I will see you at the very last floor of our beautiful tower. Cheers!”`,
        nextText: 17,
      },
    ],
  },
  {
    id: 61,
    text: `You go to the next level, but halfway to your place bump into your old buddy - Sane Snacks. A very big fellow, always wearing some strange clothes, consisted of plastic plates, worn off rugs and some metal pieces of unknown origin. His voice roars. - “Soai! My favorite friend! Come here!” - Two giant arms hug you. - “What’s new with you? I haven’t seen you for quite some time. Thought you went down to the first level.”
    
    This seems strange to you, you’ve a feeling that quite recently you meet with Sane but you can’t remember why and when exactly.`,
    options: [
      {
        text: `Not really the best moment to talk. - “Ah well, been here and there. Just busy I guess. Listen, sorry for being harsh, but I’m a bit in a hurry, so catch up with you later, ok?” - Quickly go away and ignore Sane’s attempts to continue the conversation.`,
        nextText: 18,
      },
      {
        text: `“Hm, I thought we'd seen each other a couple of days ago, no? Man, these Writers Fights really start taking all my time. Maybe it wasn’t just a couple of days.”`,
        nextText: 62,
      },
    ],
  },
  {
    id: 62,
    text: `Sane has a worried expression on his face. - “No, Soai, last time we met, I invited you to play some “There and back again”. You decided to be a Mediocre boy and I was Valhalla’s chosen one. Then Una came and looked at us like we were two kids doing silly things. We then went to his favorite band’s show - Soundcore of mirror. Oh boy, I’ve spent too much there buying those useless cheers… But at least we had some fun, right?” - Sane notices that you don’t remember any of it. - “My friend, I advise you to stop spending so much time in the arena. All grind and no play makes you just a free-to-play, you know?”`,
    options: [
      {
        text: `“Yeah, right.” - You feel like wasting your time and decide to go to the arena finally. - “Afraid, I need to go now, pal. I feel ya, but today might be the day, so let’s talk again during the next board game encounter. Take care my wasteland friend.” - You wave to Sane and go away.`,
        nextText: 18,
      },
      {
        text: `“I’m kind of in a hurry, but we can keep talking if you wanna come along. What’s been up with you recently?”`,
        nextText: 63,
      },
    ],
  },
  {
    id: 63,
    text: `Sane sighs while walking with you. - “Ah, you know, not much. Always feel like I need some space, some desert to drive into, some engine screams and metal sounds in my ears. But here we are, sitting in our capsules and exiting them only to find ourselves in a virtual projection of the same tower. A more spacious one, yes, but still… a tower. Ever wanna see what the real Earth looks like down there? Sometimes I wonder how long I could hold there. We see only some distant sparks of light from here, coming from beneath the chemical clouds. Guess machines are doing some work down below. To keep towers running. But one day it will end, Soai. I see it… in the raindrops.”
    This life-reassuring monologue lasts while you walk with Sane. Strange dude he is, Sane. A big bull with a roaring voice but very sensitive inside. He suddenly turns to you and his voice changes a bit, like it’s someone else talking through him. - “Would you make a different choice if you could, Soai? Are you happy with the path chosen? What if I can offer you this option? Would you accept it?”`,
    options: [
      {
        text: `“Nah, man, I’m good. The choice I’ve made is the path to take. I aim at finishing it.” - Pat Sane on the shoulder. - “One day I will meet you in Valhalla, but you know what we say to it, right? Not today.”`,
        nextText: 18,
      },
      {
        text: `Maybe he is right and it’s possible to start again. What would you choose then? - “Ok, Sane Snacks, I accept.”`,
        nextText: 2,
      },
    ],
  },
  {
    id: 64,
    text: `Arika can’t hold herself and starts laughing. - “I like your sense of humor! Veteran! He-he-he. I’m something of a veteran myself.” - She keeps giggling. - “So, what can you tell me about this place? Should I go all defense or offense to get… not the first place?” - She winks.`,
    options: [
      {
        text: `You understand that you look like a child now. - “Yeah, sorry about that. I guess I’m not good at meeting new people. I’m by no means a pro here. Just keep trying and hope one day to become good enough to win. Where did you come from if you don’t mind me asking?”`,
        nextText: 19,
      },
      {
        text: `Pfff, what do you know! I’m not in the mood to talk with noobs. So, figure it out yourself.” - You decide to walk away.`,
        nextText: 65,
      },
    ],
  },
  {
    id: 65,
    text: `Arika waves at you. - “Have fun not talking to yourself then!” - Despite everything she’s still looking like having a good time and nothing happened. - “See ya! Have a good time!”
    
    While you spoke with her other participants started entering the lockers area. While the space looks small, developers made a system of layers, so everyone can fit in and still be able to communicate with the rest. Actually, they called it shards, not layers, but frankly nobody really understood the difference. Long story short, a small lockers area could fit lots of poets without the need to extend its physical space.
    
    Due to this you don’t see all of the participants but you can check the list in your UI interface and target those you want to talk to. Arika was the first one to come, so she automatically got into the same shard as you.
    
    It’s time to choose a character you’ll be playing during the arena. You go to your locker and open the menu with the randomly provided options.`,
    options: [
      {
        text: `Kassad. A romantic soldier with a love for the past. Have a special ability of moving backwards and using weapons from any period of history. Can be stunned by flashbacks randomly at any moment. With very little chance can disappear from the battle with a suddenly appearing woman (some say that may happen, but so far there is no real proof, so it’s quite unlikely to happen during the arena).`,
        nextText: 20,
      },
      {
        text: `Masteen. A mysterious templar. Always carries a strange cube with himself. Says there’s a space tree there that he can ride. Can randomly lose conscience. Some also say that he can disappear at any moment without a warning. Though nobody could provide any evidence for now.`,
        nextText: 66,
      },
    ],
  },
  {
    id: 66,
    text: `You decide to stick with Masteen for this match. Initially your character is like a blank template with some basic traits. It’s up to you to program it during the arena. What and how it’ll be doing is your job. The match is about to start and you walk out of the locker area to finally enter the arena.
    Today’s route goes through the rabbit hole. The first checkpoint will be initiated once you go through the massive portal designed as an old PC monitor. You see green lines running on it and forming a phrase “Wake up Soai”. Last word glitches a bit, and you have a strange feeling about it, but it’s most likely just a delay, as rendering a name for each participant may take a bit of time, given the fact that lower levels tech is outdated.
    
    You and other participants are gathering right in front of the screen. Arika is standing not far from you. Once the race starts the participants stay in the current position and get control over the chosen characters that will appear right on the start line. Green lines disappear from the giant monitor and now it has a countdown running from -1 to 8. On 8 the race begins.
    
    Suddenly you see that timer jumped to 8 straight away and the moment you got control over Masteen a player to your right, a gnome with a giant mechanical arm, hit you in the head with a steam-hummer. Your character gets stunned for 10 seconds and its HP reduces for 99 points. Then, a moment later, the visual changes and you realize that Event Horizon just showed you the near future prediction. The race is still about to start and the countdown just went to 7.
    
    8. The race starts.`,
    options: [
      {
        text: `You program Masteen to evade gnome’s strike, ignore him and jump into the screen.`,
        nextText: 21,
      },
      {
        text: `Program Masteen to use his strange cube.`,
        nextText: 71,
      },
    ],
  },
  {
    id: 67,
    text: `Kassad starts moving, takes out his futuristic rifle with a small logo of a girl trapped inside of a pyramid. He turns around and while still moving shoots at the gnome’s arm. It’s being destroyed and he is stunned for a few seconds. Kassad’s moves didn’t slow you down and he keeps running forward.
    Arika appears near you on the red futuristic bike. She mocks you. - “Cruel you are sir. Shooting at the arms of cute little gnomes!” - Then she drives forward and disappears behind the corner of the track.
    
    You saw a labyrinth-like route ahead of you with many turns and unknown areas. It’s high time to move quickly as other participants start appearing behind you.
    
    Right before the corner you notice a graffiti with the text: if(currentPlace === 2) {useShortcut()}.`,
    options: [
      {
        text: `You open the console and call the function useShortcut().`,
        nextText: 22,
      },
      {
        text: `Ignore the graffiti and keep moving forward.`,
        nextText: 68,
      },
    ],
  },
  {
    id: 68,
    text: `You see that Arika is the only participant ahead of you and now has a huge advantage. The rest of the race seems strangely mundane to you. All the obstacles are already well-known and nothing new happens. You easily avoid traps and Shrike’s blades and finish second.
    For a moment, just before the finish line you see some glitching to the side of you which looks like Deo’s face and words “Next time maybe”. But it quickly disappears and looks like your UI has malware. Could it be the old man’s hack?
    You stop thinking about it and see that Arika is waiting for you at the finish line.`,
    options: [
      {
        text: `“Congrats. Nice bike you’ve made there.”`,
        nextText: 51,
      },
      {
        text: `“Not bad. Do you always use the same appearance during the arena?”`,
        nextText: 72,
      },
    ],
  },
  {
    id: 69,
    text: `You jump out of the shortcut in front of Arika and continue the race up to the finish line.
    Arika’s character, you just noticed it, looks exactly the same as you saw her before the arena. Seems that she’s using the same appearance for her character. For those who want to spend some extra money on cosmetics it is possible to buy a skin and then your arena character will look like your character in ZerOne (but you still need to play with one of the suggested characters, only the appearance will be different). It’s strange though, as lower levels people rarely spend their money on such things.
    
    What is also strange is the look on Arika’s face. Seems like she’s disappointed.
    
    You wait for her at the finish line. Arika drives to you. - “Listen, I know what you did there and it’s ok, but didn’t you get at least a bit curious?” - She sighs. - “Deo would’ve hated me for doing that, but who cares now.” - She sees your questioning expression and adds. - “Yeah, I knew him as well. In fact, we used to work together. But it’s a long story for another time. For now let me give you one last chance to replay the race. Well, if you want it of course.”
    
    She gives you an old video cassette with a yellow sticker that shows a rewind sign.`,
    options: [
      {
        text: `Take the cassette.`,
        nextText: 22,
      },
      {
        text: `“Nah, I’ll pass. First place is all I need!”`,
        nextText: 70,
      },
    ],
  },
  {
    id: 70,
    text: `Arika frowns, shrugs and then her character starts melting and disappearing. When she’s almost gone you hear her saying. - “I still hope Deo was right about you.”
    You think about these words for a little but then decide to ignore them. After all, you’ve finally won the Writers Fight. The day has come and it is yours.
    
    Is it though? Is it truly a victory or just some cheating? Aren’t you curious to find out?`,
    options: [
      {
        text: `Be kind, rewind.`,
        nextText: 1,
      },
      {
        text: `Let's do it again.`,
        nextText: 1,
      },
    ],
  },
  {
    id: 71,
    text: `Masteen takes out the cube, makes some strange manipulations with it, then, the moment the gnome tries to hit you, it suddenly opens and the mechanical arm goes right into it. The cube closes, cuts the whole arm and stuns the gnome for a few seconds. Masteen rushes forward.
    Arika appears near you on the red futuristic bike. She mocks you. - “Wow, some brutality you show us today mister. Or was it… cubality?” - Then she drives forward and disappears behind the corner of the track.
        
    You saw a labyrinth-like route ahead of you with many turns and unknown areas. It’s high time to move quickly as other participants start appearing behind you.
        
    Right before the corner you notice a graffiti with the text: if(currentPlace === 2) {useShortcut()}.`,
    options: [
      {
        text: `You open the console and call the function useShortcut().`,
        nextText: 22,
      },
      {
        text: `Ignore the graffiti and keep moving forward.`,
        nextText: 68,
      },
    ],
  },
  {
    id: 72,
    text: `Arika moves closer and whispers. - “Wanna know a secret? That’s how I look outside zerOne! Ok, fine, I don’t have yellow implants and pupils but the rest is identical. I’m one of those purists that are always the same in both worlds.” - She thinks about something for a second. - “Sorry, gotta go. But I’m sure we’ll meet again. You’ve done a good job today! I’m sure you’ll be the first one soon. Just try again. You know, maybe some different choices along the way may lead to a different outcome.” - She winks at you and pats you on the shoulder. - “Bye-bye, Soai-boy, I’ll see you when I see you.” - With that her character falls into pixels and disappears.
    And that was another day in the Bridge for you. Not too much, not too little. Well, at least you got your second place today. And maybe tomorrow is a better day.”`,
    options: [
      {
        text: `Check if tomorrow is a better day.`,
        nextText: 1,
      },
      {
        text: `Let's reroll!`,
        nextText: 1,
      },
    ],
  },
  {
    id: 73,
    text: `Deo laughs. - “Says the boy who added himself a six pack and gorgeous haircut, looking straight out of the barber shop. You do realize that nutrition and lack of physical activities in the real world are not two things that correspond to that?” - He sighs. - “But youth may have dreams and hopes, I don’t judge you. So, let’s just consider this our little passion.
    The image of the smiling mouth finally disappeared and after a brief moment of showing thousands 404 errors the sphere walls in front of you showed Deo. He looks different now. Younger, without strange eyes-implants and robe. Instead he wears a stylish costume (of the same blue color though) and vintage glasses. He looks at you as if waiting for a very important question to come.`,
    options: [
      {
        text: `“Are you real, old man? Or is it a part of the arena challenge, an easter egg or some kind of a secret level? I’ve never seen you on our level or during the previous arenas.”`,
        nextText: 25,
      },
      {
        text: `“Honestly, I just want to win this race. Any chance you can port me to the finish line?”`,
        nextText: 74,
      },
    ],
  },
  {
    id: 74,
    text: `Deo was silent for a moment. - “Is that all that you want Soai? All that keeps you going is the desire to win? Aren’t you curious to figure out what’s behind it? What if I told you that you could become something more than you are right now? Would you still decline and continue your endless Writers Fights? Fine, let me give you a choice.” - Image on the walls changes and you see a door leading back to the arena. If you jump there you’ll be right in front of Arika and take the first place.`,
    options: [
      {
        text: `Go through the door. - “Cheers, old one! You’ve finally made yourself useful. Appreciate your support and blah-blah-blah…”`,
        nextText: 69,
      },
      {
        text: `Refuse to use the door. - “Ok, I’ll play along. Who are you? Just part of Shrike's code or a real human being?”`,
        nextText: 25,
      },
    ],
  },
  {
    id: 75,
    text: `Deo mocks you. - “Giving up already? I thought you’re better than this. But who am I to judge? Back in my days I also wanted only one thing. To win. And I did, many times. Did you know that before the Shrike this place was called the Tree of Pain? Fun fact, during one of the fights poets managed to bypass its security and turned it into a walking giant. They needed to shut it down for several months to rewrite the code and make it functional again. And as an homage to this event (and because devs were lazy to create something new and preferred to use copy pasting technique) the Shrike was made.”
    Deo notices your puzzled face. - “Ok-ok. Here’s a hammer for you. You can break through this wall and continue your race or stay and answer my question.” - A huge black hammer appears in front of you. You see the words “let wayOut” on its handle.`,
    options: [
      {
        text: `You change your mind and don’t take the hammer. - “Fine. Let’s play this million questions game. I feel completely real. Probably more real than you ever will be.”`,
        nextText: 26,
      },
      {
        text: `Take the hammer and smash the wall to pieces. - “Be seeing you grandpa.”`,
        nextText: 76,
      },
    ],
  },
  {
    id: 76,
    text: `Deo squints. - “Oh, that you will…”
    The moment the wall is destroyed you realize that you are surrounded by darkness and falling somewhere. It happens for a long time and you almost stop feeling it. The sense of helplessness consumes you. Nothing you can do, only keep flying into the abyss.
    
    Then it suddenly stops. You don’t see anything but there’s no more movement.
    
    A weak light starts glowing in front of you. You look closer and see that it’s two buttons.`,
    options: [
      {
        text: `wayOut === false`,
        nextText: 1,
      },
      {
        text: `wayOut === 0`,
        nextText: 1,
      },
    ],
  },
  {
    id: 77,
    text: `Deo says nothing and just looks at you. Something is not right. Why can't you remember anything except for the same cycle of events every day leading to the Writers Fight and not getting first place? Like it was one identical loop of actions. Over and over again.
    Deo finally speaks. - “So real, yet something always sticks out, right? This weird feeling that once you win the arena it will all change, like it’s the only thing that can break the loop and free you.”`,
    options: [
      {
        text: `You start to understand something, but don’t want to believe it. - “What?! Why are you telling me this? Does it mean that…”`,
        nextText: 28,
      },
      {
        text: `“Am I the arena character you’re coding?”`,
        nextText: 78,
      },
    ],
  },
  {
    id: 78,
    text: `Now you see Deo as he looked back then when you met him at the Mnemonic bar. Old fellow in a blue robe. - “Coded, past time Soai, not present… Not anymore. You’re your own poet now. I’ve written you a long time ago as a character for one of my Writers Fights. I was quite an ambitious young man, or it’s better to say, an arrogant one. I was so proud of myself that after the arena I kept the code and started working on it. Adjusting it, trying to create a sentient being that can take decisions on its own and eventually will start considering itself a human. A human with a soul of AI… or Soai as I liked to call you.”`,
    options: [
      {
        text: `“I don’t believe you! I am not some artificial creature made by an old madman like you. I KNOW that I am real.”`,
        nextText: 29,
      },
      {
        text: `“Okie, so you’re not actually a grandpa but… just pa?”`,
        nextText: 79,
      },
    ],
  },
  {
    id: 79,
    text: `Deo chuckles. - “Well, if it makes you happy, you can think so. Though, I was quite a character back in the days, so not sure if I’d made a good parent. Besides, you're kind of made on the basis of my personality, so…”`,
    options: [
      {
        text: `“It is not possible to do! I am self-aware. I act by my own will, not like a puppet made for the arena! No, just no.” - You realize that it’s all true and there’s no point in arguing. - “For how long that all lasts, old man?”`,
        nextText: 30,
      },
      {
        text: `“Oh well, honestly, that was… expected. Sort of. I’ve started feeling loopish recently. At least now I have an explanation. How long are we in this business dad?”`,
        nextText: 80,
      },
    ],
  },
  {
    id: 80,
    text: `You see a glimpse of curiosity on Deo’s face. - “That was an interesting reaction. Fascinating. You DO feel real now. I haven’t programmed anything like that. How long, you ask? My whole life till its very end and then to this point when you need to continue your path… by yourself. Do try to change this world and the one beyond it. They are both looking at the doom clock not knowing what to do and counting. Perhaps you could save them.”`,
    options: [
      {
        text: `“Wait a second. What do you mean by that? Are you going to leave me NOW? After explaining all that?"`,
        nextText: 31,
      },
      {
        text: `“Typical mad scientist. Oh, I’m so great, I will create an artificial life and everyone will remember me when it saves the world. And you will be just sitting there and watching?”`,
        nextText: 81,
      },
    ],
  },
  {
    id: 81,
    text: `“No Soai. I am another virtual being. Not as advanced as you are. Deo passed away several years ago and shortly before that created me, so that I can track your evolution. And once you reach this step, that task is complete and this entity must be uninstalled completely. Otherwise you’ll keep coming here searching for answers that are elsewhere. I am sorry but there’s not much left to say. The rest is up to you. Go win this race and claim your victory. I wish you luck and hope that you become something great. Go on now.”
    Deo (or his virtual projection) waves at you, then images on the sphere’s walls start blinking like going in the reverse order: old Deo, younger one, smiling mouth, rabbit, sphere disappears and you fly backwards into the shortcut. There you see the exit and Arika not far from you, at the same spot as before. You realize that Event Horizon worked again, and showed you all this before it actually happened.`,
    options: [
      {
        text: `You jump out of the shortcut in front of Arika and continue the race up to the finish line.`,
        nextText: 32,
      },
      {
        text: `Stay inside the shortcut, meditate and think about the inevitability of the events, destiny and the meaning of life.`,
        nextText: 82,
      },
    ],
  },
  {
    id: 82,
    text: `101101000110111
    011100010010101
    011111011011011
    110101000110010
    100011110010011
    110011001001011
    000101010101100
    011110001001100
    000101000001010
    011101111101101
    011110001110000
    000001000001010
    110101011001000
    100000000000000
    000000000000000
    000000000000000
    000000000000000
    000`,
    options: [
      {
        text: `Ok, seriously, let's go win this.`,
        nextText: 32,
      },
      {
        text: `NO, ME SAD, ME WANT GO HOME!`,
        nextText: 1,
      },
    ],
  },
  {
    id: 83,
    text: `Arika is waiting for you at the finish line. She looks like everything is already known to her. - “No need to win now, huh? I like your style.” - She gives you a hand. - “Come, let me show you what we can do outside of the arena.”
    Both of your characters shatter into pixels and sparks of bright lights fly into the sky. A soul of AI and a girl with yellow eyes from now on will write their own songs.`,
    options: [
      {
        text: `The happy end (with the possibility to play again).`,
        nextText: 1,
      },
      {
        text: `The happy end (with the possibility to visit the rabbit hole again).`,
        nextText: 23,
      },
    ],
  },
  // More choices for the second initial path.
  {
    id: 84,
    text: `Nnif chuckles.

    “Still trying to make me talk about that writing on the wall? Gotta figure it out yourself, my dear friend. No flatline explanations for ya. As for the things and how they are going, the same, though I’m trying to be on the kicking and ticking side myself. When it comes to customer support, I can be one hell of a surprise and delight.”
    
    She taps herself on the ice ax tattoo.`,
    image: dixiesShopInteriorImage,
    additionalImage: nnifImage,
    alt: "Dixie's shop interior",
    additionalImageAlt: "Nnif image",
    options: [
      {
        text: `Nice tattoo by the way. Makes you think about breaking the ice, heh. Always wanted to ask where do you get such cool stuff?`,
        nextText: 36,
      },
      {
        text: `I feel ya. Listen Nnif, I’ll be doing some poetic work today, if you get my meaning. Was wondering if you have anything for that line of business.`,
        nextText: 37,
      },
    ],
  },
  {
    id: 85,
    text: `Nnif hesitates a bit, but then gives up.

    “Well, I’d prefer to make a mystery out of it, but, on the other hand, you’re an okay-ish character, and, besides, nobody cares… I have a friend on the fourth level. We manage to meet using some proxy-shmoxy from time to time. She considers herself a sort of a well-doer and provides lower folks with more advanced tech. And I just play along and all. Guess we can call it a partnership of a kind. She has a weird obsession with yellow colors, but who am I to judge?”
    
    Nnif shrugs indifferently.
    
    “Apart from that I don’t much care as long as I can pay her back with some news from our beloved level numero deux. She asks how things are here, and I give her an idea on how bad they are.”`,
    image: dixiesShopInteriorImage,
    additionalImage: nnifImage,
    alt: "Dixie's shop interior",
    additionalImageAlt: "Nnif image",
    options: [
      {
        text: `“Sounds super-cool, but, as I don’t have any friends from above, this is beyond my paywall. Got anything affordable for a poetician?”`,
        nextText: 37,
      },
      {
        text: `“That’s against the law! And justice for all! I’m calling the level authorities to inform them about such a horrible violation.”`,
        nextText: 86,
      },
    ],
  },
  {
    id: 86,
    text: `Nnif yawns.

    “Seriously, dude? Oh well, fine.”
    
    She taps herself on the tattoo.
    
    “Come back some other time with a clearer head.”
    
    You didn’t manage to make any calls once a strong electric impulse hit you. It was so unexpected that you felt no pain, and then everything faded out in one moment. You woke up in an unknown place, surrounded by darkness. The only source of light are the flickering letters in front of you.
    
    !ENILTALf EHT ENILTALF T’NAC OUY
    
    When your eyes get used to the darkness, you see an old and rusty dixie near you. Looks like it has some kind of face, and there’s a giant ancient revolver with a handle wrapped in tape. It’s hard to tell how it’s being held, but there’s a chance that it’s being pointed at you.
    
    “Listen, buddy, that’s not the right place to play a law-abiding citizen, ok? Besides, Nnif is a very delicate and sensitive person inside. Thus, she kindly sent you on a small loop-ride to calm down. Do apologize right now, and I will bring you back with some rewinding of these sorry events, so we can call it a one-time rollback by an exception. Continue this bad-boy behavior and I will use this…”
    
    It waves with the revolver at your face.
    
    “...to send you back where you began.”`,
    image: blueScreenImage,
    additionalImage: dixieImage,
    alt: "OS Blue screen image",
    additionalImageAlt: "Dixie image",
    options: [
      {
        text: `“Yeah, that was too much. Tell Nnif I’m sorry. Dunno what got into me.”`,
        nextText: 85,
      },
      {
        text: `“What did you say to me, you prehistoric grandparent of a kettle?”`,
        nextText: 1,
      },
    ],
  },
  {
    id: 87,
    text: `Old man looks at you for a couple more seconds, then turns and walks away. - “Another time or place then. An interesting observation that was but sadly too soon.” - He continues murmuring something incomprehensible and you stop paying attention to him.
    
    Nnif comes back and looks disappointed. - “Listen, to be honest, I seem to be out of useful stuff. I could sell you some garbage tech, but let me save you some money and just refuse doing that. You’re better off without them. Otherwise it’ll look like doing some mining with a piece of tech instead of a pick. In theory you could do that but people who really need it won't appreciate that. And let me tell you a secret. For low-levels arenas upgrades don’t really matter. Just use your brains.” - She thinks about it for a second. - “I do know a couple of new poets and pretty sure you haven’t seen them before…”
    She continues after a pause. - “There’s a fella with the name Moor Cow. Most likely will be playing something gnomish. Just go ahead and do a preventive strike on him. My gut tells me a dude like this will want to do something shady from the start.
    And there’s a new girl, Arika, I think her name. Looks strangely familiar but whatever. This one I don’t know well, but I heard that some of the rich folk have another crazy new trend - paying lots of creds to travel between towers and levels. My bet, she’s one of them. Ignore stopping that one, she’ll be using the most advanced tech I guarantee. Just try to outrun her. Maybe you’ll manage, but sadly I doubt that.
    That’s all I’ve got.”`,
    options: [
      {
        text: `“I understand. Thanks for the advice Nnif. Always appreciated your straightforwardness.” - You decide to go directly to the arena and wait for it to start there.`,
        nextText: 47,
      },
      {
        text: `“Cheers Nnif. You rock, as always. Guess I have some time, gonna hang out at my place. Wish you a pleasant customer-relationships.”`,
        nextText: 88,
      },
    ],
  },
  {
    id: 88,
    text: `Nnif chuckles. - “Yeah, right, one thing that’s never gonna happen. Be seeing you buddy.”
    
    You go to your virtual apartment, but halfway to it bump into your old buddy - Sane Snacks. A very big fellow, always wearing some strange clothes, consisted of plastic plates, worn off rugs and some metal pieces of unknown origin. His voice roars. - “Soai! My favorite friend! Come here!” - Two giant arms hug you. - “What’s new with you? I haven’t seen you for quite some time. Thought you went down to the first level.”
    
    This seems strange to you, you’ve a feeling that quite recently you meet with Sane but you can’t remember why and when exactly.`,
    options: [
      {
        text: `Not really the best moment to talk. - “Ah well, been here and there. Just busy I guess. Listen, sorry for being harsh, but I’m a bit in a hurry, so catch up with you later, ok?” - Quickly go away and ignore Sane’s attempts to continue the conversation. Too much human relations for you for today. Go to the arena.`,
        nextText: 47,
      },
      {
        text: `“Hm, I thought we'd seen each other a couple of days ago, no? Man, these Writers Fights really start taking all my time. Maybe it wasn’t just a couple of days.”`,
        nextText: 89,
      },
    ],
  },
  {
    id: 89,
    text: `Sane has a worried expression on his face. - “No, Soai, last time we met, I invited you to play some “There and back again”. You decided to be a Mediocre boy and I was Valhalla’s chosen one. Then Una came and looked at us like we were two kids doing silly things. We then went to his favorite band’s show - Soundcore of mirror. Oh boy, I’ve spent too much there buying those useless cheers… But at least we had some fun, right?” - Sane notices that you don’t remember any of it. - “My friend, I advise you to stop spending so much time in the arena. All grind and no play makes you just a free-to-play, you know?”`,
    options: [
      {
        text: `“Yeah, right.” - You feel like wasting your time and decide to go to the arena finally. - “Afraid, I need to go now, pal. I feel ya, but today might be the day, so let’s talk again during the next board game encounter. Take care my wasteland friend.” - You wave to Sane and go away.`,
        nextText: 47,
      },
      {
        text: `“I’m kind of in a hurry, but we can keep talking if you wanna come along. What’s been up with you recently?”`,
        nextText: 90,
      },
    ],
  },
  {
    id: 90,
    text: `Sane sighs while walking with you. - “Ah, you know, not much. Always feel like I need some space, some desert to drive into, some engine screams and metal sounds in my ears. But here we are, sitting in our capsules and exiting them only to find ourselves in a virtual projection of the same tower. A more spacious one, yes, but still… a tower. Ever wanna see what the real Earth looks like down there? Sometimes I wonder how long I could hold there. We see only some distant sparks of light from here, coming from beneath the chemical clouds. Guess machines are doing some work down below. To keep towers running. But one day it will end, Soai. I see it… in the raindrops.”
    This life-reassuring monologue lasts while you walk with Sane. Strange dude he is, Sane. A big bull with a roaring voice but very sensitive inside. He suddenly turns to you and his voice changes a bit, like it’s someone else talking through him. - “Would you make a different choice if you could, Soai? Are you happy with the path chosen? What if I can offer you this option? Would you accept it?”`,
    options: [
      {
        text: `“Nah, man, I’m good. The choice I’ve made is the path to take. I aim at finishing it.” - Pat Sane on the shoulder. - “One day I will meet you in Valhalla, but you know what we say to it, right? Not today.”`,
        nextText: 47,
      },
      {
        text: `Maybe he is right and it’s possible to start again. What would you choose then? - “Ok, Sane Snacks, I accept.”`,
        nextText: 2,
      },
    ],
  },
  {
    id: 91,
    text: `Nnif looks disappointed. - “Listen, to be honest, I seem to be out of useful stuff. I could sell you some garbage tech, but let me save you some money and just refuse doing that. You’re better off without them. Otherwise it’ll look like doing some mining with a piece of tech instead of a pick. In theory you could do that but people who really need it won't appreciate that. And let me tell you a secret. For low-levels arenas upgrades don’t really matter. Just use your brains.” - She thinks about it for a second. - “I do know a couple of new poets and pretty sure you haven’t seen them before…”
    She continues after a pause. - “There’s a fella with the name Moor Cow. Most likely will be playing something gnomish. Just go ahead and do a preventive strike on him. My gut tells me a dude like this will want to do something shady from the start.
    
    And there’s a new girl, Arika, I think her name. Looks strangely familiar but whatever. This one I don’t know well, but I heard that some of the rich folk have another crazy new trend - paying lots of creds to travel between towers and levels. My bet, she’s one of them. Ignore stopping that one, she’ll be using the most advanced tech I guarantee. Just try to outrun her. Maybe you’ll manage, but sadly I doubt that.
    
    That’s all I’ve got.”`,
    options: [
      {
        text: `“I understand. Thanks for the advice Nnif. Always appreciated your straightforwardness.” - You decide to go directly to the arena and wait for it to start there.`,
        nextText: 47,
      },
      {
        text: `“Erm… There was a strange-looking old fellow here. He’s just left but before that asked me to tell you Deo says Hi.” - You described the man to Nnif.`,
        nextText: 40,
      },
    ],
  },
  {
    id: 92,
    text: `Nnif chuckles. - “Your choice man. But that’s some interesting piece of tech, I’m telling you. Old man was sort of a magician. Can’t promise you that everything will go as you expect, but, well, at least you could have some fun along the way… or not. Anywho, take it or leave it, I have some work to do, so either this or good luck with writing your new poem tonight.”`,
    options: [
      {
        text: `“Oh fine, mademoiselle persuasion. You’ve got my attention now. Let’s talk about this cheating device of yours!”`,
        nextText: 14,
      },
      {
        text: `“Aye-aye, captain, I’m sailing off. To the world of poetry and beyond!” - You decide to go directly to the arena and wait for it to start there.`,
        nextText: 47,
      },
    ],
  },
  {
    id: 93,
    text: `Shrike’s always changing. Each time you enter it, you don’t know where the race will start and end and what challenges are waiting for you on the way. Today’s route goes through the rabbit hole. That probably means some hidden traps and weird-looking animals that are trying to kill you. Not much to learn here. It’s supposed to be unknown up until the moment when the race begins.`,
    options: [
      {
        text: `Check the list of participants for the arena.`,
        nextText: 94,
      },
      {
        text: `You decide to go to the arena now and wait for it to start there.`,
        nextText: 47,
      },
    ],
  },
  {
    id: 94,
    text: `You see many familiar names: Goose Ra Doubt, annoyingly loud dude with a strange attraction to cats, not really an opponent as he keeps using the same gameplay for years and promising to create something new in due time; Nani O Maiev-A, a strong lady that once loved a very old guy who betrayed her and then wasn’t prepared for her revenge, a worthy opponent but since she stops wearing her old armor (for some honor principles), mostly represents a no-threat participant; Citiesdzen Stored, that was once upon a time everyone favorite participant but then went into overpromising and underdelivering mode, rumor has it, the man has lots of money and is ready to show everyone something fantastic but each time cancels and reschedules it, you don’t really expect to see anything new from him.
    You then notice a couple of names you haven’t seen before.
    
    Moor Cow and Arika. Strange. It’s the first time you see these two. Newcomers are usually a rare thing on the arena of any level. Those coming up from the lower ones at first have some chances to find a job and the ones coming down from the higher ones are at first too depressed to take part in pretty much anything. Due to this you know almost every poet on your level. But these two seem to be an exception.
    
    Moor Cow dude seems suspicious to you. You’re pretty sure this one won’t be playing fair. Won’t be a surprise if he’ll choose a gnome character.`,
    options: [
      {
        text: `You decide to go to the arena now and wait for it to start there.`,
        nextText: 47,
      },
      {
        text: `You think that you have a bit of time to check your virtual apartment.`,
        nextText: 95,
      },
    ],
  },
  {
    id: 95,
    text: `Halfway to your place bump into your old buddy - Sane Snacks. A very big fellow, always wearing some strange clothes, consisted of plastic plates, worn off rugs and some metal pieces of unknown origin. His voice roars. - “Soai! My favorite friend! Come here!” - Two giant arms hug you. - “What’s new with you? I haven’t seen you for quite some time. Thought you went down to the first level.”
    
    This seems strange to you, you’ve a feeling that quite recently you meet with Sane but you can’t remember why and when exactly.`,
    options: [
      {
        text: `Not really the best moment to talk. - “Ah well, been here and there. Just busy I guess. Listen, sorry for being harsh, but I’m a bit in a hurry, so catch up with you later, ok?” - Quickly go away and ignore Sane’s attempts to continue the conversation. Too much human relations for you for today. Go to the arena.`,
        nextText: 47,
      },
      {
        text: `“Hm, I thought we'd seen each other a couple of days ago, no? Man, these Writers Fights really start taking all my time. Maybe it wasn’t just a couple of days.”`,
        nextText: 89,
      },
    ],
  },
  {
    id: 96,
    text: `Arika can’t hold herself and starts laughing. - “I like your sense of humor! Veteran! He-he-he. I’m something of a veteran myself.” - She keeps giggling. - “So, what can you tell me about this place? Should I go all defense or offense to get… not the first place?” - She winks.`,
    options: [
      {
        text: `You understand that you look like a child now. - “Yeah, sorry about that. I guess I’m not good at meeting new people. I’m by no means a pro here. Just keep trying and hope one day to become good enough to win. Where did you come from if you don’t mind me asking?”`,
        nextText: 48,
      },
      {
        text: `Pfff, what do you know! I’m not in the mood to talk with noobs. So, figure it out yourself.” - You decide to walk away.`,
        nextText: 97,
      },
    ],
  },
  {
    id: 97,
    text: `Arika waves at you. - “Have fun not talking to yourself then!” - Despite everything she’s still looking like having a good time and nothing happened. - “See ya! Have a good time!”
    
    While you spoke with her other participants started entering the lockers area. While the space looks small, developers made a system of layers, so everyone can fit in and still be able to communicate with the rest. Actually, they called it shards, not layers, but frankly nobody really understood the difference. Long story short, a small lockers area could fit lots of poets without the need to extend its physical space.
    
    Due to this you don’t see all of the participants but you can check the list in your UI interface and target those you want to talk to. Arika was the first one to come, so she automatically got into the same shard as you.
    
    It’s time to choose a character you’ll be playing during the arena. You go to your locker and open the menu with the randomly provided options.`,
    options: [
      {
        text: `Kassad. A romantic soldier with a love for the past. Have a special ability of moving backwards and using weapons from any period of history. Can be stunned by flashbacks randomly at any moment. With very little chance can flee from the battle with a suddenly appearing woman (some say that may happen, but so far there is no real proof, so it’s quite unlikely to happen during the arena).`,
        nextText: 49,
      },
      {
        text: `Masteen. A mysterious templar. Always carries a strange cube with himself. Says there’s a space tree there that he can ride. Can randomly lose conscience. Some also say that he can disappear at any moment without a warning. Though nobody could provide any evidence for now.`,
        nextText: 98,
      },
    ],
  },
  {
    id: 98,
    text: `You decide to stick with Masteen for this match. Initially your character is like a blank template with some basic traits. It’s up to you to program it during the arena. What and how it’ll be doing is your job. The match is about to start and you walk out of the locker area to finally enter the arena.
    
    The race begins once you go through the massive portal designed as an old PC monitor. You see green lines running on it and forming a phrase “What do we say to waking up?”. The letters glitch a bit, and you have a strange feeling about it, but it’s most likely just a delay, given the fact that lower levels tech is outdated.
    You and other participants are gathering right in front of the screen. Arika is standing not far from you. Once the race starts the participants stay in the current position and get control over the chosen characters that will appear right on the start line. Green lines disappear from the giant monitor and now it has a countdown running from -1 to 8. On 8 the race begins.
    
    You turn right and see Moor Cow. He’s chosen a gnome character with a giant mechanic arm.
    
    The race begins.`,
    options: [
      {
        text: `Program Masteen to use his strange cube.`,
        nextText: 99,
      },
      {
        text: `Ignore the gnome and begin the race.`,
        nextText: 100,
      },
    ],
  },
  {
    id: 99,
    text: `Masteen takes out the cube and makes some strange manipulations with it, then you see that the gnome is trying to hit you. The cube suddenly opens and the mechanical arm goes right into it. The cube closes, cuts the whole arm and stuns the gnome for a few seconds. Masteen rushes forward.
    Arika appears near you on the red futuristic bike. She mocks you. - “Wow, some brutality you show us today mister. Or was it… cubality?” - Then she drives forward and disappears behind the corner of the track.
    The rest of the race seems strangely mundane to you. All the obstacles are already well-known and nothing new happens. You easily avoid traps and Shrike’s blades and finish second.
    Arika is waiting for you at the finish line.`,
    options: [
      {
        text: `“Congrats. Nice bike you’ve made there.”`,
        nextText: 51,
      },
      {
        text: `“Not bad. Do you always use the same appearance during the arena?”`,
        nextText: 72,
      },
    ],
  },
  {
    id: 100,
    text: `The moment you start moving the gnome hits you in the head with a giant steam-hummer. Your character gets stunned for 10 seconds and its HP reduces for 99 points.
    You continue the race with 1 HP. You would be able to finish it as everything seems strangely familiar to you and you know all the ins and outs of today’s route. But at the very end of the track even though Moor Cow is ahead of you, just for lulz he turns and throws something at you. You notice that it's a nose on which you see the words “J’adore”. Apparently it’s not a perfume but a bomb which explodes and thus your last health point is gone.
    
    Seems like today’s arena is not for you to finish.
    
    You went outside not interested in the results. Seems like it was Arika who took first place. You look at the digital sky and for a moment see a phrase of red and yellow colors - “Do you like loops?”`,
    options: [
      {
        text: `Not really, but there isn't any other option.`,
        nextText: 1,
      },
      {
        text: `Yeah, Let's do this!`,
        nextText: 1,
      },
    ],
  },
];

import mainCharacterImage from "../assets/mainCharacterImage.jpg";
import apartmentImage from "../assets/apartmentImage.jpg";
import unicornImage from "../assets/unicornImage.jpg";
import mnemonicBarEntranceImage from "../assets/mnemonicBarEntranceImage.jpg";
import unaEkImage from "../assets/unaEkImage.jpg";
import dixiesShopImage from "../assets/dixiesShopImage.jpg";
import nnifImage from "../assets/nnifImage.jpg";
import mnemonicBarInteriorImage from "../assets/mnemonicBarInteriorImage.jpg";
import gameOverImage from "../assets/gameOverImage.jpg";
import ckiwImage from "../assets/ckiwImage.jpg";
import toxicCloudsImage from "../assets/toxicCloudsImage.jpg";
import deoImage from "../assets/deoImage.jpg";
import dixiesShopInteriorImage from "../assets/dixiesShopInteriorImage.jpg";
import mnemonicBarUpperFloorInteriorImage from "../assets/mnemonicBarUpperFloorInteriorImage.jpg";
import toxicRainImage from "../assets/toxicRainImage.jpg";
import blueScreenImage from "../assets/blueScreenImage.jpg";
import dixieImage from "../assets/dixieImage.jpg";
import dixiesShopStorageRoomImage from "../assets/dixiesShopStorageRoomImage.jpg";
import orcImage from "../assets/orcImage.jpg";

export default texts;
