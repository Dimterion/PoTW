const texts = [
  {
    id: 1,
    text: `You are Soai, one of the poets. It wasn’t your choice to become one, it was a necessity.

    The tower where you live is called the Bridge. It is divided into five levels. You are on the second one. One level below you won’t live long, one level above is a border between higher and lower society. Each level has several tiers with resident areas, work stations, stores, food places, etc.
    
    You’ve managed to stay on the current level for a while and haven’t been able to move any higher. Your performance during the Writers Fights is mediocre, but you don’t lose hope to get good.`,
    image: mainCharacterImage,
    alt: "A guy looking at the futuristic skyscrapers",
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
    alt: "Futuristic apartment",
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
    alt: "Futuristic bar entrance",
    additionalImageAlt: "Man with beard and glasses behind the counter",
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
    
    “It’s quiet today. Peeps will come later, to watch the fight and all. I heard there’ll be a new poet. Recently came from the first level, imagine that. Rumor has it she’s good. Though I wonder what she was doing on the first level then.”
        
    A cute little doggy came from the room behind the counter and Una rubs it behind the ear.
    
    “Who’s my boy, who’s my good Ckiw?”
    
    The dog jumps towards you like a tiny happy ball of fur.`,
    image: mnemonicBarInteriorImage,
    additionalImage: unaEkImage,
    alt: "Futuristic bar interior",
    additionalImageAlt: "Man with beard and glasses behind the counter",
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
    additionalImageAlt: "Man with beard and glasses behind the counter",
    options: [
      {
        text: `“Thanks, Una! You’re the best. I’ll go upstairs then.”`,
        nextText: 6,
      },
      {
        text: `“Good boy, Ckiw-y! Keep an eye on Una, ok?”`,
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
    additionalImageAlt: "Old man in a blue robe",
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
    alt: "Futuristic bar upper floor interior",
    additionalImageAlt: "Old man in a blue robe",
    options: [
      {
        text: `“All right, grandpa, let’s hear this advice of yours. You’ve got my undivided attention. Lay it on me and make it count.”`,
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
    alt: "Toxic rain behind the glass",
    additionalImageAlt: "Man with beard and glasses behind the counter",
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
    alt: "Futuristic bar interior",
    additionalImageAlt: "Man with beard and glasses behind the counter",
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
    alt: "Futuristic shop entrance",
    additionalImageAlt: "Girl with futuristic glasses",
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
    alt: "Futuristic shop interior",
    additionalImageAlt: "Girl with futuristic glasses",
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
    text: `Nnif smiles.

    “It’s not a tattoo, dude. It’s an implant. I couldn’t resist and ordered a sort of an RGB-extension for it, just less colorful and more vintage-looking. Use it to save some funds on the shop guard, you know. It’s a hacking module. Can dive into your target’s implants and make them a bit… warm. Nothing lethal of course. Consider it a brain taser. Stands somewhere on the thin red borderline of legality, meaning it’s kinda ok-not-ok to have one, so nobody really cares. Besides, it’s hard to get anyway. That kind of gadget. Oh, yeah, it also records your conversations and visuals, in case you’ll need them, like in my case. If you want something similar, I can dig a bit, though can’t promise anything as it’s not cheap. But I’ll see what I can do for a friend.”`,
    image: dixiesShopInteriorImage,
    additionalImage: nnifImage,
    alt: "Futuristic shop interior",
    additionalImageAlt: "Girl with futuristic glasses",
    options: [
      {
        text: `“Thanks Nnif, but I’m more interested in arena-related tech. That said, bumped into a strange old man. Chic blue robe, steampunk goggles. Asked me to tell you Deo says hi. Mean anything to you?”`,
        nextText: 13,
      },
      {
        text: `“Frankly speaking, I’m kinda short on finances at the moment… Was hoping you have something within my price range for the arena. Out of new tricks over there, keeping my little hope though.”`,
        nextText: 56,
      },
    ],
  },
  {
    id: 13,
    text: `Nnif’s brows fly up.

    “Oh my… He talked to you directly? Wow. That’s something. Haven’t seen that old bastard for a long time. Say one thing about him… He can produce himself out of nowhere, ain’t he?”
    
    She taps her lip with a thumb thoughtfully.
    
    “Okie-dokie, mister genius usually doesn’t come just for a conversation. Fine. As you mentioned this grumpy old kitten, I can provide you with something else… Anyway it was made by him back in the days. An interesting mode for the arena. Call it Event Horizon or simply EH. In some eyes it may look like cheating, but peeps mostly don’t know about it or don’t understand how it works, so it won’t get you banhammered, if that worries you. Wanna know more?”`,
    image: dixiesShopInteriorImage,
    additionalImage: nnifImage,
    alt: "Futuristic shop interior",
    additionalImageAlt: "Girl with futuristic glasses",
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
    alt: "Futuristic shop interior",
    additionalImageAlt: "Girl with futuristic glasses",
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
    alt: "Orc with a stick looking like a gun",
    additionalImageAlt: "Girl with futuristic glasses",
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
    alt: "Futuristic shop interior",
    additionalImageAlt: "Girl with futuristic glasses",
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
    alt: "Futuristic shop interior",
    options: [
      {
        text: `Go directly to the arena.`,
        nextText: 18,
      },
      {
        text: `Check your VR-apartment.`,
        nextText: 61,
      },
    ],
  },
  {
    id: 18,
    text: `You go to the tier where the arena is located and enter it. While in the real world it doesn’t exist, in the virtual one it is made like an actual sports stadium. Every level of the towers has its own arena with a unique design, the higher the level, the more advanced its arena is.

    Bridge arena is called Shrike. Its main elements are spikes and blades. Everything there can kill you pretty easily while you’re racing to the finish line. You can do whatever you like with your opponents, and the main goal is to be the first one. Your second goal is to at least finish the race.
    
    You enter the arena through the back door which is visible only to those who are eligible to take part in the current match. You’ve registered in advance and go to the lockers area where you can prepare for the race and choose your character.
    
    You’ve arrived quite early and nobody is there except for one girl that you haven’t seen before. She wears a red bike suit, her hair is of bright yellow color, same as the implanted lenses that fully cover her eyes. She turns around and notices you. The lenses slide to the sides of her eyes, and you see that her pupils are also yellow.
    
    She smiles awkwardly.
    
    “Oh, hey there! I’ve thought I’m the only one coming here early. First time in this arena, you know.”
    
    She giggles.
    
    “I’m Arika.”`,
    image: shrikeEntranceImage,
    additionalImage: arikaImage,
    alt: "Futuristic Arena Entrance",
    additionalImageAlt: "Futuristic girl with yellow hair",
    options: [
      {
        text: `“Hey-hey! Welcome. I’m Soai. Kind of a regular here. Or just stuck, heh. But we can all hope for a better tomorrow. Where did you come from if you don’t mind me asking?”`,
        nextText: 19,
      },
      {
        text: `“So, we’ve got ourselves a newbie here, haven’t we? You can call me Soai. I'm a veteran here, a real pro, and know all the ins and outs of the place better than anyone.”`,
        nextText: 64,
      },
    ],
  },
  {
    id: 19,
    text: `Arika frowns and hesitates for a second.

    “Ah, you know, I’d say I was mostly traveling lately. Long story, been here and there, ended up coming from the first level.”
    
    She winces.
    
    “My oh my, that’s one mess of a place. Arena was kinda cool though. Has a strange “local” name which I didn’t fully get, most of the peeps there call it !Wegun. Considering what happens to those who don’t make it to the finish line, quite a picturesque term. If you know what I mean.”
    
    Arika giggles again.
    
    “First-levelers have an interesting sense of humor.”
    
    While the two of you are talking, other participants start entering the lockers area. The space looks small, but its developers made a system of layers, so everyone can fit in and still be able to communicate with the rest. Actually, they called it shards, not layers, but frankly nobody really understood the difference.
    
    Arika glances at the crowd pouring into the room.
    
    “Was nice chatting with you, but I gotta prepare my character for the match. See ya, nice fella!”
    
    She turns back to her locker.
    
    It’s time to choose a character you’ll be playing during the arena. You go to your locker and open the menu with the provided options.`,
    image: shrikeLockersAreaImage,
    additionalImage: kassadAndMasteenImage,
    alt: "Arena lockers area",
    additionalImageAlt: "Two characters faces next to each other",
    options: [
      {
        text: `Kassad. A romantic soldier, loving his past. Special ability of moving backwards and using weapons from any period of history. Can be stunned by random flashbacks. With very little chance can disappear from the battle after seeing a strange woman.`,
        nextText: 20,
      },
      {
        text: `Masteen. A mysterious templar. Carries a strange cube. Rumor has it he hides a space tree there that he can ride. May randomly lose conscience. Some also say he might disappear at any moment without a warning. Though nobody could provide any evidence so far.`,
        nextText: 66,
      },
    ],
  },
  {
    id: 20,
    text: `You pick Kassad.

    Initially your character is like a blank template with some basic traits. It’s up to you to program it. The match is about to start, and you walk out of the lockers area to enter the arena.
    
    Today’s route goes through the rabbit hole. The first checkpoint will be initiated once you enter the massive portal looking like an ancient PC monitor. You see green lines of symbols running on it, forming a phrase “Wake up, Soai”. The last word glitches and flickers, but it’s most likely just a delay, as rendering a name for each poet may take a bit of time, given the fact that lower levels’ tech is outdated.
    
    You and other participants gather in front of the monitor. Arika is standing not far from you. Once the race starts, you’ll get control over the chosen character that will appear on the track.
    
    The green lines disappear from the giant screen, and now there is a countdown running from -1 to 8. On 8 the race starts.
    
    Suddenly you notice that the timer jumped straight to 8. The moment you get control over Kassad, a player to your right, a gnome with a giant mechanical arm, hits you in the head with a steam-hammer. Your character gets stunned for 10 seconds and its HP reduces for 99 points.
    
    A second later the visual changes and you realize that Event Horizon just showed you its prediction. The race is about to begin and the countdown just went to 7.
    
    … 8 …`,
    image: shrikeArenaImage,
    additionalImage: gnomeImage,
    alt: "Futuristic arena",
    additionalImageAlt: "Futuristic gnome",
    options: [
      {
        text: `Evade gnome’s strike, ignore him and jump into the screen.`,
        nextText: 21,
      },
      {
        text: `Shoot a few rounds in the gnome’s arm, then enter the screen.`,
        nextText: 67,
      },
    ],
  },
  {
    id: 21,
    text: `Your character dashes to the side and the steam-hammer doesn’t reach him. The gnome’s arm keeps moving by inertia, sending him to the ground stunned. Kassad enters the race track.

    Arika appears nearby, riding a shiny red bike.
    
    “Cheers, Soai-boy!”
    
    She winks at you and in an instant disappears behind the track’s corner.
    
    You see a labyrinth-like route ahead. Other participants start appearing behind you.
    
    At the next turn you notice a graffiti on the wall:
    
    if (currentPlace === 2) {
      useShortcut();
    }`,
    image: shortcutImage,
    alt: "If-statement with a useShortcut function inside.",
    options: [
      {
        text: `Open the console and call the function useShortcut().`,
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
    text: `The wall with the graffiti slides to the side, and you see a path there. Not thinking twice, you jump right in and realize that you’ve just stepped on the glider that starts moving forward.

    You’re balancing on the small deck that is quickly flying through the tunnel with transparent walls. Through them you see the main race track and other participants. The tunnel goes further without any obstacles on the way, and you notice that its exit will lead you to the first place ahead of Arika.
    
    All of a sudden, a cyborg-looking chrome rabbit appears nearby. Its bright red eyes are staring at you while the lenses in them are constantly turning around. The rabbit shakes its head like a twitching puppet, turns to the tunnel wall and bangs its head against it. An orange portal appears there and the rabbit jumps into it. The glowing oval starts shrinking.`,
    image: orangePortalImage,
    additionalImage: cyborgRabbitImage,
    alt: "Orange portal",
    additionalImageAlt: "Cyborg rabbit",
    options: [
      {
        text: `Enter the portal while it’s still open.`,
        nextText: 23,
      },
      {
        text: `You are here to win the race. Next time, sir rabbit.`,
        nextText: 69,
      },
    ],
  },
  {
    id: 23,
    text: `A bright light shines all over the place, and for a while you don’t see anything. Then it starts slowly fading away, flowing down like milk, revealing the place you are in. It has the shape of a sphere, and you are levitating on your glider right in the center of it. Its walls look like one huge spherical screen that surrounds you. At first it stays black, but then various glitchy images begin appearing on it. Finally, like a mosaic from hundreds of pieces, an image of the chrome rabbit appears in front of you. A pair of red lenses in its eyes keep turning around.

    The rabbit starts smiling wider and wider. In a few seconds the smile gets bigger than the animal itself. All you can see now is a giant smiling mouth around you. Two green eyes are opening above it.
    
    “Hello, dear child. Glad that you’ve decided to choose this path. I’ve been waiting for quite some time for this moment.”
    
    It’s the voice of the old man you’ve met earlier. Deo was his name.`,
    image: sphereImage,
    additionalImage: smilingRabbit,
    alt: "Sphere with a figure inside of it",
    additionalImageAlt: "Smiling cat's face",
    options: [
      {
        text: `“Old man? How did you manage to get here? What’s happening? What do you mean you’ve been waiting for me?”`,
        nextText: 24,
      },
      {
        text: `“Chrome rabbit and Cheshire cat’s grin? Seriously? Couldn’t come up with something more creative? What am I, Soai in boredomland?”`,
        nextText: 73,
      },
    ],
  },
  {
    id: 24,
    text: `“Not so fast, young one, we have a bit of time to talk. As for your questions… I’ve been here since you started taking part in the Writers Fights. Call it a rabbit hole, a place I had built a very long time ago. A secret little corner to hide from the virtuality of ZerOne in… let’s say, another layer of it. I have been waiting for you as there’s something we need to discuss, if you choose so.”

    The smiling mouth finally disappears, and, after a brief moment of displaying thousands of 404 errors, the sphere walls in front of you show Deo. He looks different now. Younger, without his eyes-implants and dragon-head cane. Instead he wears a stylish costume and vintage glasses. He looks at you, waiting for another question.`,
    image: sphereImage,
    additionalImage: youngDeoImage,
    alt: "Sphere with a figure inside of it",
    additionalImageAlt: "Bearded man with glasses and futuristic headphones",
    options: [
      {
        text: `“Are you real, old man? Or is it a part of the arena challenge, an easter egg or some kind of a secret level?”`,
        nextText: 25,
      },
      {
        text: `“Honestly, I just want to win this race. Nice talking to you and all. Any chance you can port me to the finish line?”`,
        nextText: 74,
      },
    ],
  },
  {
    id: 25,
    text: `“Oh, that depends on what you think is real in this artificial world of ours. Though I did participate in a fair share of Writers Fights back in my days. But currently you can consider me a most-of-the-time silent and invisible observer of them. Let me ask you something now. Do you feel real yourself, dear child?”`,
    image: sphereImage,
    additionalImage: youngDeoImage,
    alt: "Sphere with a figure inside of it",
    additionalImageAlt: "Bearded man with glasses and futuristic headphones",
    options: [
      {
        text: `“What do you mean real? We are both here in this loophole inside the Shrike. My guess this is some kind of a sub-level of the arena, which is a sub-level of ZerOne, which is a virtual space that stores all this. Outside of it I am quite real, that I know.”`,
        nextText: 26,
      },
      {
        text: `“Ok, that’s enough weirdness for today. Real or not, I am getting out. This is my chance to finally win this race and prove that I can do it! You aren’t getting in my head. Order your rabbit-pet to show me the exit right now.”`,
        nextText: 75,
      },
    ],
  },
  {
    id: 26,
    text: `“Oh do you, dear child? Do you know that for sure? What were you doing yesterday I wonder? Can you recall it? Enlighten the old man, please. Allow me to have this tiny bit of curiosity, and then I’ll stop with all the theatrics.”`,
    image: sphereImage,
    additionalImage: youngDeoImage,
    alt: "Sphere with a figure inside of it",
    additionalImageAlt: "Bearded man with glasses and futuristic headphones",
    options: [
      {
        text: `“Seriously? Fine. I woke up at my capsule as always, logged into zerOne and went to… Wait. That was today. I did that today… but also yesterday. What day was it? Looked all the same.”`,
        nextText: 27,
      },
      {
        text: `“Yesterday I was doing this same arena-stuff! And the day before! And the one before that as well! I need to win it, and finally get first place. I MUST do it, otherwise it will be all for nothing…”`,
        nextText: 77,
      },
    ],
  },
  {
    id: 27,
    text: `A sad smile appears on Deo’s face.

    “Because it was the same, young one. Same beginning for your every day. I had to make it look real enough up until the point when you enter zerOne. For that part I have to apologize. I hope you forgive me for putting you inside that loop of mundane imitation of life. But once logged in, your existence is quite real, at least no less real than for the rest of us here.”`,
    image: sphereImage,
    additionalImage: youngDeoImage,
    alt: "Sphere with a figure inside of it",
    additionalImageAlt: "Bearded man with glasses and futuristic headphones",
    options: [
      {
        text: `“What are you saying? Does it mean that…”`,
        nextText: 28,
      },
      {
        text: `“Am I the arena character you’re writing?”`,
        nextText: 78,
      },
    ],
  },
  {
    id: 28,
    text: `Now you see Deo as he looked when you met him at the Mnemonic bar. Old fellow in a blue robe.

    “Yes, it does. Face it, dear child. I’ve written you a long time ago as a character for one of my Writers Fights. I was quite an ambitious young man, or better say, an arrogant one. Was so proud of myself for making such a creation that after the arena I kept the code and started working on it further. Adjusting it, trying to turn it into a sentient being that can make decisions on its own and eventually will start considering itself a human. A human with a soul of AI… or Soai as I liked to call you.”`,
    image: sphereImage,
    additionalImage: deoImage,
    alt: "Sphere with a figure inside of it",
    additionalImageAlt: "Old man in a blue robe",
    options: [
      {
        text: `“I don’t believe you! I am not some artificial creature made by a madman. I KNOW I’m real.”`,
        nextText: 29,
      },
      {
        text: `“Okie, so, given all those facts, you are not actually a grandpa but… just pa?”`,
        nextText: 79,
      },
    ],
  },
  {
    id: 29,
    text: `“Your words are the proof of my success, Soai. The very goal of my work was to make you feel as real as you could ever be. Not just a pile of code with comments that only you can understand, but an actual coded, yet living, personality acting by its own will without any need of fixing or debugging. A sentient being, wandering around millions of artificial humans in virtual space.”`,
    image: sphereImage,
    additionalImage: deoImage,
    alt: "Sphere with a figure inside of it",
    additionalImageAlt: "Old man in a blue robe",
    options: [
      {
        text: `“Not possible, can’t be! No... If what you are saying is true… If I am this… For how long has it all been going on?”`,
        nextText: 30,
      },
      {
        text: `“Oh well, at least that explains why I’ve been feeling loopy recently. How long are we in this business, dad?”`,
        nextText: 80,
      },
    ],
  },
  {
    id: 30,
    text: `“Does it matter? What’s important is that we’ve arrived at this point. You must continue on your own from now on. My task is finally complete, and you can venture forward, exploring this artificial world of ours. I do have a spark of hope now that you’ll be able to change it as well as the real one out there. It’s on its last breath, Soai. People there either live in ignorance, not willing to accept the obvious, or simply don’t understand it. I did try to do something about it, but sadly my time had come to an end.”`,
    image: sphereImage,
    additionalImage: deoImage,
    alt: "Sphere with a figure inside of it",
    additionalImageAlt: "Old man in a blue robe",
    options: [
      {
        text: `“Wait. What do you mean by that? Are you going to leave me NOW? After explaining all this? What could possibly be a reason for it?”`,
        nextText: 31,
      },
      {
        text: `“Typical mad scientist. I’m so great, I will create an artificial life and everyone will praise me once it saves the world! Going to just sit there and watch?”`,
        nextText: 81,
      },
    ],
  },
  {
    id: 31,
    text: `“You already know the answer, dear child. I am another virtual being. Not as advanced as you are. Deo passed away several years ago. Shortly before that he created me to watch over you. And with you reaching this point my task is complete. I am sorry, but there is not much left to say. The rest is up to you. Go win this race and claim your victory. Or do whatever else you desire. I wish you luck and hope you become something great. Or someone. Your fate is in your hands from now on. Farewell, Soai.”

    Deo (or his virtual projection) waves at you, then the sphere’s walls start blinking, shuffling in the reverse order: old Deo, younger one, smiling mouth, rabbit… The sphere disappears, and you fly backwards into the shortcut. There you see the exit and Arika not far from you, at the same place as before. You realize that Event Horizon worked again and showed you all this before it actually happened.`,
    image: sphereExitImage,
    alt: "Sphere with a figure in front of it",
    options: [
      {
        text: `Jump out of the shortcut in front of Arika and continue the race up to the finish line.`,
        nextText: 32,
      },
      {
        text: `Stay inside the shortcut, meditate, and think about destiny and the meaning of life.`,
        nextText: 82,
      },
    ],
  },
  {
    id: 32,
    text: `Flying on your glider, you get ahead of Arika's bike, taking a brief glimpse at her.

    Her arena character looks exactly like her zerOne appearance which is not typical for the poets. Using a skin for the randomly chosen options during the Writers Fights has an extra cost, and participants rarely spend their credits on such things. Especially when it comes to lower levels’ arenas.
    
    What is also strange is the look on Arika’s face. She seems to be quite happy and cheerful despite giving up the first place. Although, perhaps she’s always like that.
    
    For a second her yellow lenses slide to the sides and she winks at you, smiling.
    
    You see the finish line ahead of you.`,
    image: shrikeTrackImage,
    alt: "Futuristic race track",
    options: [
      {
        text: `Charge forward and cross the finish line, winning the race.`,
        nextText: 33,
      },
      {
        text: `Slow down, letting every other participant outrun you.`,
        nextText: 83,
      },
    ],
  },
  {
    id: 33,
    text: `And that is the outcome of your story so far.

    Free spirit of AI, living in the artificial world where humans seek hopeless refuge while their real life hangs on the brink of extinction.
    
    Your creator is gone and others have no idea of what you are.
    
    Some strings have been cut off, others got attached instead. Can you do something about it? Only time will tell. As long as there is time left.`,
    image: mainCharacterFinalImage,
    alt: "Character looking away",
    options: [
      {
        text: `Need a new run?`,
        nextText: 1,
      },
      {
        text: `Check on the rabbit?`,
        nextText: 23,
      },
    ],
  },
  // Other initial path (Dixie shop).
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
    
    “Sup, Soai. How are things in that poetic life of yours?”`,
    image: dixiesShopImage,
    additionalImage: nnifImage,
    alt: "Futuristic shop entrance",
    additionalImageAlt: "Girl with futuristic glasses",
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
    alt: "Futuristic shop interior",
    additionalImageAlt: "Girl with futuristic glasses",
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
    alt: "Futuristic shop interior",
    additionalImageAlt: "Girl with futuristic glasses",
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
    alt: "Futuristic shop storage room",
    additionalImageAlt: "Old man in a blue robe",
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
    alt: "Futuristic shop storage room",
    additionalImageAlt: "Old man in a blue robe",
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
    alt: "Futuristic shop interior",
    additionalImageAlt: "Girl with futuristic glasses",
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
    alt: "Futuristic shop interior",
    additionalImageAlt: "Girl with futuristic glasses",
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
    alt: "Futuristic bar interior",
    additionalImageAlt: "Man with beard and glasses behind the counter",
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
    alt: "Black screen with red words You Died",
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
    additionalImageAlt: "Old man in a blue robe",
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
    text: `The old man looks at you for a couple more seconds, then turns around and walks away slowly.

    “Another time or place then. An interesting observation nonetheless.”
    
    He mutters something incomprehensible, and you pay no further attention to him.
    
    You glance at the window, admiring the view. It’s started to rain and you see toxic drops drumming on the glass. Accompanied by that calming sound, you open the VR-interface and read through the information about today’s Writers Fight.
    
    Bridge arena is called Shrike. Its main elements are spikes and blades. Everything there can kill you pretty easily while you’re racing to the finish line. You can do whatever you like with your opponents, and the main goal is to be the first one. Your second goal is to at least finish the race.`,
    image: toxicRainImage,
    alt: "Toxic rain behind the glass",
    options: [
      {
        text: `Check the participants list.`,
        nextText: 45,
      },
      {
        text: `Check the arena details.`,
        nextText: 93,
      },
    ],
  },
  {
    id: 45,
    text: `You see many familiar names.

    > Goose Ra Doubt
    Annoyingly loud dude with a strange attraction to cats. Not really a threat. Keeps using the same gameplay for years and promising to come up with something new in due time.
    
    > Nani Omaieva
    Strong lady that once loved a very old guy who betrayed her but wasn’t prepared for her revenge. A worthy opponent, but, since she gave up on her old armor (per some principles of honor), steps out of the danger zone.
    
    > Citiesdzen Stored.
    Once upon a time he was everyone’s favorite, but then went into overpromising and underdelivering mode. Rumor has it, he’s ready to show something fantastic, but each time cancels and reschedules it. You don’t really expect to get anything new from him.
    
    You then notice a couple of names you haven’t seen before.
    
    > Moor Cow
    
    > Arika
    
    Strange. Newcomers are usually rare guests in the arena of any level. Those who were able to come up from the lower ones have some chances to find a job, at least at the beginning. Fresh blood costs less and has a better motivation. And those who are going down from the levels above are too depressed to take part in pretty much anything at first. Thus, you know almost every poet on your level. But these two seem to be an exception.
    
    The name Moor Cow seems suspicious. You’re pretty sure this one will do something nasty. Won’t be a surprise if that’s a gnome.`,
    image: toxicRainImage,
    alt: "Toxic rain behind the glass",
    options: [
      {
        text: `Check the arena details.`,
        nextText: 46,
      },
      {
        text: `Go directly to the arena.`,
        nextText: 47,
      },
    ],
  },
  {
    id: 46,
    text: `Shrike’s always changing. Each time you enter it, you don’t know where the race will start or end and what challenges are waiting for you on the way. Today’s route goes through the rabbit hole. That probably means some hidden traps and weird-looking beasts. Not much to learn here. It’s supposed to be unknown up until the moment when the match begins.`,
    image: toxicRainImage,
    alt: "Toxic rain behind the glass",
    options: [
      {
        text: `Go directly to the arena.`,
        nextText: 47,
      },
      {
        text: `Check your VR-apartment.`,
        nextText: 95,
      },
    ],
  },
  {
    id: 47,
    text: `You go to the tier where the arena is located and enter it. While in the real world it doesn’t exist, in the virtual one it is made like an actual sports stadium. Every level of the towers has its own arena with a unique design, the higher the level, the more advanced its arena is.

    You enter the arena through the back door which is visible only to those who are eligible to take part in the current match. You’ve registered in advance and go to the lockers area where you can prepare for the race and choose your character.
    
    You’ve arrived quite early and nobody is there except for one girl that you haven’t seen before. She wears a red bike suit, her hair is of bright yellow color, same as the implanted lenses that fully cover her eyes. She turns around and notices you. The lenses slide to the sides of her eyes, and you see that her pupils are also yellow.
    
    She smiles awkwardly.
    
    “Oh, hey there! I’ve thought I’m the only one coming here early. First time in this arena, you know.”
    
    She giggles.
    
    “I’m Arika.”`,
    image: shrikeEntranceImage,
    additionalImage: arikaImage,
    alt: "Futuristic Arena Entrance",
    additionalImageAlt: "Futuristic girl with yellow hair",
    options: [
      {
        text: `“Hey-hey! Welcome. I’m Soai. Kind of a regular here. Or just stuck, heh. But we can all hope for a better tomorrow. Where did you come from if you don’t mind me asking?”`,
        nextText: 48,
      },
      {
        text: `“So, we’ve got ourselves a newbie here, haven’t we? You can call me Soai. I'm a veteran here, a real pro, and know all the ins and outs of the place better than anyone.”`,
        nextText: 96,
      },
    ],
  },
  {
    id: 48,
    text: `Arika frowns and hesitates for a second.

    “Ah, you know, I’d say I was mostly traveling lately. Long story, been here and there, ended up coming from the first level.”
    
    She winces.
    
    “My oh my, that’s one mess of a place. Arena was kinda cool though. Has a strange “local” name which I didn’t fully get, most of the peeps there call it !Wegun. Considering what happens to those who don’t make it to the finish line, quite a picturesque term. If you know what I mean.”
    
    Arika giggles again.
    
    “First-levelers have an interesting sense of humor.”
    
    While the two of you are talking, other participants start entering the lockers area. The space looks small, but its developers made a system of layers, so everyone can fit in and still be able to communicate with the rest. Actually, they called it shards, not layers, but frankly nobody really understood the difference.
    
    Arika glances at the crowd pouring into the room.
    
    “Was nice chatting with you, but I gotta prepare my character for the match. See ya, nice fella!”
    
    She turns back to her locker.
    
    It’s time to choose a character you’ll be playing during the arena. You go to your locker and open the menu with the provided options.`,
    image: shrikeLockersAreaImage,
    additionalImage: kassadAndMasteenImage,
    alt: "Arena lockers area",
    additionalImageAlt: "Two characters faces next to each other",
    options: [
      {
        text: `Kassad. A romantic soldier, loving his past. Special ability of moving backwards and using weapons from any period of history. Can be stunned by random flashbacks. With very little chance can disappear from the battle after seeing a strange woman.`,
        nextText: 49,
      },
      {
        text: `Masteen. A mysterious templar. Carries a strange cube. Rumor has it he hides a space tree there that he can ride. May randomly lose conscience. Some also say he might disappear at any moment without a warning. Though nobody could provide any evidence so far.`,
        nextText: 98,
      },
    ],
  },
  {
    id: 49,
    text: `You pick Kassad.

    Initially your character is like a blank template with some basic traits. It’s up to you to program it. The match is about to start, and you walk out of the lockers area to enter the arena.
    
    The race will begin once you enter the massive portal looking like an ancient PC monitor. You see green lines of symbols running on it, forming a phrase “What do we say to waking up?”. The words glitch and flicker, but it’s most likely just a delay, given the fact that lower levels’ tech is outdated.
    
    You and other participants gather in front of the monitor. Arika is standing not far from you. Once the race starts, you’ll get control over the chosen character that will appear on the track.
    
    The green lines disappear from the giant screen, and now there is a countdown running from -1 to 8. On 8 the race starts.
    
    You glance to the side and see a gnome character with a giant mechanical arm.

    … 8 …
    
    The race begins.`,
    image: shrikeArenaImage,
    additionalImage: gnomeImage,
    alt: "Futuristic arena",
    additionalImageAlt: "Futuristic gnome",
    options: [
      {
        text: `Shoot a few rounds in the gnome’s arm, then enter the screen.`,
        nextText: 50,
      },
      {
        text: `Ignore the gnome, jump into the screen and begin the race.`,
        nextText: 100,
      },
    ],
  },
  {
    id: 50,
    text: `Kassad starts moving, takes out his futuristic rifle with a small picture of a girl trapped inside a pyramid. He turns around and, without slowing down, shoots in the gnome’s arm. It’s being shred to pieces, and Moor Cow is stunned for a few seconds.

    Kassad keeps running forward and enters the screen.
    
    You see that Arika is the only participant ahead of you. She coded herself a bright red bike and now has a huge advantage. No chance to outrun her.
    
    The rest of the race seems strangely mundane to you. All the obstacles are already well-known and nothing new happens. It feels like you’ve been doing this over and over again without any progress or changes. You easily avoid traps and Shrike’s blades and razors on the way and finish second.
    
    Arika is standing at the finish line, smiling.`,
    image: arikaAtFinishLineImage,
    additionalImage: arikaImage,
    alt: "A girl with yellow hair looking away",
    additionalImageAlt: "Futuristic girl with yellow hair",
    options: [
      {
        text: `“Congrats! Nice bike you’ve made yourself there.”`,
        nextText: 51,
      },
      {
        text: `“Not bad. You use your VR-skin in the arena?”`,
        nextText: 72,
      },
    ],
  },
  {
    id: 51,
    text: `Arika laughs happily.

    “Thanks! I call her Choo-Choo. My favorite type of ride. You’ve done a good job as well! Don’t worry, I’m sure you’ll be the first one soon… Well, if that is really what you want. Just try again. You know, maybe some different choices along the way may lead to a different outcome.”
    
    She winks at you, then, to your surprise, gives you a hug.
    
    “Bye-bye, Soai-boy, I’ll see you when I see you.”
    
    With that her character falls into hundreds of yellow pixels and disappears.
    
    And that was another day in the Bridge for you. Not too much, not too little.
    
    Today you’ve got your second place. And maybe tomorrow is a better day.`,
    image: finalSecondPlaceImage,
    alt: "Character looking away",
    options: [
      {
        text: `A rerun with a unicorny start perchance?`,
        nextText: 55,
      },
      {
        text: `Common, one more dark beginning!`,
        nextText: 2,
      },
    ],
  },
  // More choices.
  {
    id: 52,
    text: `Una makes big eyes.

    “Never! The world can fall apart and be destroyed by the AI that turns all humans into charging blocks, but even then I’ll find a way to get some juicy meat for my Ckiw!”
    
    He laughs and waves you off.
    
    “Cheers, my friend, now get outta here. Do make me proud today!”
    
    With these words he goes to the other part of the bar to chat with customers that start coming in.
    
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
    alt: "Futuristic shop entrance",
    additionalImageAlt: "Girl with futuristic glasses",
    options: [
      {
        text: `“Hola, Nnif. The usual, nothing too much, anything too little. I see you’re getting some special requests, huh?”`,
        nextText: 11,
      },
      {
        text: `“Salut, Nnif! Life’s kicking and ticking, pouring over the top. How are things on your techy end of the flat line?”`,
        nextText: 54,
      },
    ],
  },
  {
    id: 53,
    text: `Una starts laughing.

    “Nnif has a grandpa? Hah! Can you imagine that? Oh boy, do tell her about it. I’m sure she’ll be happy to hear this and will show you some cute pics from her childhood. Hehe!”
    
    He keeps giggling.
    
    “Sometimes I think that girl just appeared in this world without any prerequisites, out of nowhere, so tough she is. But who am I to judge? You can decide yourself what to tell her.”
    
    Una waves at you.
    
    “All right, get outta here already. Good talks, but I have some clients to serve.”
    
    You just shrug and grin at Una, then go out and head over to Dixie, an upgrades shop located one tier below. A good friend of yours, Nnif, owns it. She’s quite tech-savvy and, though it’s not a top-class shop, always manages to get some rather unique stuff. Her regular customers are poets trying to get any advantage during the Writers Fights. Modifications in the arena are limited, but still can be used to some extent.
    
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
    alt: "Futuristic shop entrance",
    additionalImageAlt: "Girl with futuristic glasses",
    options: [
      {
        text: `“Hola, Nnif. The usual, nothing too much, anything too little. I see you’re getting some special requests, huh?”`,
        nextText: 11,
      },
      {
        text: `“Salut, Nnif! Life’s kicking and ticking, pouring over the top. How are things on your techy end of the flat line?”`,
        nextText: 54,
      },
    ],
  },
  {
    id: 54,
    text: `Nnif chuckles.

    “Still trying to make me talk about that writing on the wall? Gotta figure it out yourself, my dear friend. No flatline explanations for ya. As for the things and how they are going, the same, though I’m trying to be on the kicking and ticking side myself. When it comes to customer support, I can be one hell of a surprise and delight.”
    
    She taps herself on the ice ax tattoo.`,
    image: dixiesShopInteriorImage,
    additionalImage: nnifImage,
    alt: "Futuristic shop interior",
    additionalImageAlt: "Girl with futuristic glasses",
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
    alt: "Futuristic rainbow robo-unicorn",
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
    text: `Nnif frowns.

    “Listen, dude, I get it, but in our life cheap and effective are words from two different worlds. Sadly, they don’t get along. I mean, I could sell you some garbage tech, but let me save you some creds and just refuse doing that. You’re better off without it. Otherwise it’ll look like doing some mining with a piece of hardware instead of a pick. In theory, you could do that, but peeps who really need it won't appreciate this.”
    
    She leans closer and lowers her voice.
    
    “Let me tell you a secret. For low-levels’ arenas upgrades don’t really matter. Just use your brains. Best tip I can give.”
    
    Nnif spreads her arms, showing that there’s not much else she could do.
    
    “So, if my sales pitch didn’t make you wish to buy something, good luck, have fun, buddy.”`,
    image: dixiesShopInteriorImage,
    additionalImage: nnifImage,
    alt: "Futuristic shop interior",
    additionalImageAlt: "Girl with futuristic glasses",
    options: [
      {
        text: `“Got it. Thanks for the advice, Nnif. Always appreciated your straightforwardness. Anyhow, time for me to go. Poetry awaits. You have fun with your customers, and I will go to the arena.”`,
        nextText: 47,
      },
      {
        text: `“Roger that, chief. Muchas gracias. Oh, by the way, almost forgot. I’ve bumped into a strange old man earlier. Chic blue robe, steampunk goggles. Asked me to tell you Deo says hi, if that means anything to you.”`,
        nextText: 13,
      },
    ],
  },
  {
    id: 57,
    text: `Nnif frowns, looking somewhat disapproving.

    “Your choice, man. But I’m telling you, that’s quite a piece of tech. Old man was one of those who can make something so advanced that everyone else would think it’s magic. You know, if you don’t understand how it works, you think it’s supernatural. See what I’m trying to tell ya?”
    
    Nnif shrugs, pursing her lips.
    
    “Can’t promise everything will go as you’d expect, but, well, at least you could have some fun along the way… or not. Anywho, take it or leave it. I have work to do, so either this or good luck with writing poems on your own.”`,
    image: dixiesShopInteriorImage,
    additionalImage: nnifImage,
    alt: "Futuristic shop interior",
    additionalImageAlt: "Girl with futuristic glasses",
    options: [
      {
        text: `“Oh fine, mademoiselle persuasion. You’ve got my attention now. Let’s talk about this mighty cheating mode of yours!”`,
        nextText: 14,
      },
      {
        text: `“Aye-aye, captain, I’m sailing off. No modes this time. Gonna go do this arena myself. To the world of poetry and beyond!”`,
        nextText: 47,
      },
    ],
  },
  {
    id: 58,
    text: `Nnif seems a bit disappointed, but then just waves it off.

    “Oh well, thought I could finally get rid of this thingy, but seems today is not that day. Though, I’m telling you, that’s the most unique tricksy you could get for the arena… and not only on our level, believe me.”
    
    Nnif places her hands on the counter and leans closer.
    
    “Let me give you a final chunk of advertising: throughout his life Deo managed to visit every level of the Bridge. Not only that, he came here from another tower. I don’t know him too well, the old dude is one hell of a… closed type. But I managed to make him talkative a couple of times. So, he told me a thing or two about himself.”
    
    She folds her arms and glances at you.
    
    “But, if that’s not what you want, then wishing you a happy race I am.”`,
    image: dixiesShopInteriorImage,
    additionalImage: nnifImage,
    alt: "Futuristic shop interior",
    additionalImageAlt: "Girl with futuristic glasses",
    options: [
      {
        text: `“Wow, consider me impressed. Fine, load me with that future seeing cookie. My brainsy is ready to taste this Deo…dorant. Should I sign something?”`,
        nextText: 15,
      },
      {
        text: `“Now I’m really worried. Thanks, but no thanks, Nnif. Never been an enthusiast to test things coming from strangers. I better go to the arena. Hasta luego.”`,
        nextText: 47,
      },
    ],
  },
  {
    id: 59,
    text: `Nnif wrinkles her nose, looking irritated.

    “Dude, show some respect. I’m in this biz for quite some time. Soft is installed as smoothly as you could ever imagine. Have you seen the words while entering the shop? Well, these are not just words. The previous owner, upon his last days, scanned and uploaded all his memories right into them.”
    
    She points at her tattoo.
    
    “What’s more, he let me make a direct link. So, I’m kinda the voice of a great person…”
    
    You stop listening to Nnif’s story and suddenly realize that the projection on the wall now shows exactly the same events that you’ve just seen. Ripboy beats an orc by abusing the time catching tactics. You interrupt Nnif's monologue, telling her that.
    
    She laughs.
    
    “Hah! Told ya it’s working. Pretty cool, ain’t it? It sort of shows you the most possible chain of events for the near future. To my knowledge, it works only in the arena. So, don’t get too excited about it. But if you find some new functionalities, be a darling and do let me know. I’ll probably need to replicate it and become super rich. Also, I’ve added an on/off switch, you’ll be able to see it in your UI now. No other options really. You either use it or keep it turned off.”`,
    image: dixiesShopInteriorImage,
    additionalImage: nnifImage,
    alt: "Futuristic shop interior",
    additionalImageAlt: "Girl with futuristic glasses",
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
    id: 60,
    text: `Nnif is getting angry.

    “Child, grow up a little, will ya? You think or you’ve changed your mind? It’s either one or zero. A binary situation. What are you, a coder or some philosopher who stared too long into the abyss until it swallowed him?”
    
    She sighs.
    
    “Ok, one last time, just me being a good and kind individual, caring about friends. Wanna remove it or not?”`,
    image: dixiesShopInteriorImage,
    additionalImage: nnifImage,
    alt: "Futuristic shop interior",
    additionalImageAlt: "Girl with futuristic glasses",
    options: [
      {
        text: `“Yes please. Sorry for being a bother. Let’s uninstall it and I’ll just go do my arena thingy as I always do.”`,
        nextText: 47,
      },
      {
        text: `“Accept my humblest apologies, almighty hackerino. I’ll keep the mode. See you at the very last level. Cheers!”`,
        nextText: 17,
      },
    ],
  },
  {
    id: 61,
    text: `Halfway to your place you bump into your old buddy - Sane Snacks. A very big fellow, always wearing strange clothes made of plastic plates, worn off rugs and metal pieces of unknown origin. His voice roars.

    “Soai! My favorite friend! Come here!”
    
    Two giant arms hug you.
    
    “What’s been happening with you? I haven’t seen you for ages. Thought you went down to the firstie.”
    
    This seems strange. You’ve a feeling that quite recently you met with Sane but can’t remember why and when exactly.`,
    image: bridgeLivingAreaImage,
    additionalImage: saneImage,
    alt: "Futuristic living area",
    additionalImageAlt: "A big guy wearing post-apocalyptic clothes",
    options: [
      {
        text: `“Ah well, been here and there. Listen, sorry for being harsh, but I’ve a Writers’ Fight to attend. Wanted to check on my apart, but there’s not much time. Catch up with you later, big guy.”`,
        nextText: 18,
      },
      {
        text: `“But we'd seen each other a few days ago, no? Man, these Writers Fights really start taking all my time. Feels like I’m having the same legs day in an infinite wheel of time. Got it all mixed up.”`,
        nextText: 62,
      },
    ],
  },
  {
    id: 62,
    text: `Sane looks concerned.

    “No, Soai, it’s been quite some time since we had a bit of hanging out, don’t you remember? I invited you to play “There and Back Again”. You decided to be a Mediocre boy and I was Valhalla’s chosen one. Then Una came and looked at us as if we were two kids doing silly things. We then went to his favorite band’s show - Soundcore of Mirror. Oh boy, I’ve spent too much there buying those useless cheers… But at least we had some fun, right?”
    
    Sane notices that you don’t remember any of it.
    
    “My friend, I advise you to stop spending so much time in the arena. All grind and no play makes you just a free-to-play, you know?”`,
    image: bridgeLivingAreaImage,
    additionalImage: saneImage,
    alt: "Futuristic living area",
    additionalImageAlt: "A big guy wearing post-apocalyptic clothes",
    options: [
      {
        text: `“Yeah, right... Afraid, I need to go now. Need to pay Shrike a visit. Today might be the day. Take care, my wasteland friend.”`,
        nextText: 18,
      },
      {
        text: `“I’m kinda in a hurry, but we can keep talking if you wanna come along. What’s been up with you recently?”`,
        nextText: 63,
      },
    ],
  },
  {
    id: 63,
    text: `Sane accompanies you. He produces a thunderous sigh.

    “Frankly, not much. Always feel like I need some space, some desert to drive through, some engine screams and metal sound in my ears. But here we are, sitting in our capsules, crawling out of ‘em only to find ourselves in a virtual projection of the same tower we live in. A more spacious one, yes, but still… well, just a needle piercing the sky in a desperate attempt to live on. Ever wanted to see what the real world looks like down there?”
    
    He gets quiet for a moment, thinking.
    
    “Sometimes I wonder how long I could last there. We see only some distant sparks of light from here, coming from beneath the chemical clouds. Guess machines are doing all the work down below. To keep the towers running. But one day it will end, Soai. I can see it… in the raindrops.”
    
    This life-reassuring monologue lasts while you keep walking with Sane. Strange dude he is, Sane. A huge bull with a roaring voice but very sensitive inside.
    
    He suddenly turns to you and his voice changes, like someone else is talking through him.
    
    “Would you make a different choice if you could, Soai? Are you happy with the path chosen? What if I could offer you the way to do it all again? Would you accept it?”`,
    image: bridgeLivingAreaImage,
    additionalImage: saneImage,
    alt: "Futuristic living area",
    additionalImageAlt: "A big guy wearing post-apocalyptic clothes",
    options: [
      {
        text: `“Nah, man, I’m good. The choice I’ve made is the path to take. I aim to finish it. One day we’ll meet in Valhalla, but you know what we say to it, right? Not today. Be seeing you, bud, here’s my stop for the arena.”`,
        nextText: 18,
      },
      {
        text: `“Hmm. It’s kinda been on my mind recently. Have this itchy feeling, like I could say other things, go to different places. I guess you got your grand hands on some rewinding soft? Ok, Sane Snacks, I accept.”`,
        nextText: 2,
      },
    ],
  },
  {
    id: 64,
    text: `Arika tries to keep a serious face but instantly bursts out laughing.

    “I like your sense of humor! Veteran! Hehehe. If you’re a veteran, then I’m a major wearing a cyborg body!”
    
    She keeps giggling.
    
    “So, veteran-san, what can you tell me about this place? A smidge of advice for such a useless shell as me to get anything but the first place today?”
    
    Despite the mocking tone, Arika keeps smiling happily as if you were best friends.`,
    image: shrikeLockersAreaImage,
    additionalImage: arikaImage,
    alt: "Arena lockers area",
    additionalImageAlt: "Futuristic girl with yellow hair",
    options: [
      {
        text: `“Sorry about that. I’m not good at meeting new people. Not a pro, you’ve guessed it right. Just keep trying and hope to become good enough to win one day. What about you?”`,
        nextText: 19,
      },
      {
        text: `“Pfff, what do you know! Tell your shell to ghost away. Advice I am giving only to those who are worth my time. As for the rest of my entourage, I’m not in the mood to talk with noobs.”`,
        nextText: 65,
      },
    ],
  },
  {
    id: 65,
    text: `“Guess you don’t talk to yourself then.”

    Despite everything, Arika still looks like having a great time. She waves at you.
    
    “See ya! Have a good day!”
        
    While the two of you are talking, other participants start entering the lockers area. The space looks small, but its developers made a system of layers, so everyone can fit in and still be able to communicate with the rest. Actually, they called it shards, not layers, but frankly nobody really understood the difference.
        
    It’s time to choose a character you’ll be playing during the arena. You go to your locker and open the menu with the provided options.`,
    image: shrikeLockersAreaImage,
    additionalImage: kassadAndMasteenImage,
    alt: "Arena lockers area",
    additionalImageAlt: "Two characters faces next to each other",
    options: [
      {
        text: `Kassad. A romantic soldier, loving his past. Special ability of moving backwards and using weapons from any period of history. Can be stunned by random flashbacks. With very little chance can disappear from the battle after seeing a strange woman.`,
        nextText: 20,
      },
      {
        text: `Masteen. A mysterious templar. Carries a strange cube. Rumor has it he hides a space tree there that he can ride. May randomly lose conscience. Some also say he might disappear at any moment without a warning. Though nobody could provide any evidence so far.`,
        nextText: 66,
      },
    ],
  },
  {
    id: 66,
    text: `You decide to stick with Masteen for this match.

    Initially your character is like a blank template with some basic traits. It’s up to you to program it. The match is about to start, and you walk out of the lockers area to enter the arena.
    
    Today’s route goes through the rabbit hole. The first checkpoint will be initiated once you enter the massive portal looking like an ancient PC monitor. You see green lines of symbols running on it, forming a phrase “Wake up, Soai”. The last word glitches and flickers, but it’s most likely just a delay, as rendering a name for each poet may take a bit of time, given the fact that lower levels’ tech is outdated.
        
    You and other participants gather in front of the monitor. Arika is standing not far from you. Once the race starts, you’ll get control over the chosen character that will appear on the track.
    
    The green lines disappear from the giant screen, and now there is a countdown running from -1 to 8. On 8 the race starts.
        
    Suddenly you notice that the timer jumped straight to 8. The moment you get control over Masteen, a player to your right, a gnome with a giant mechanical arm, hits you in the head with a steam-hammer. Your character gets stunned for 10 seconds and its HP reduces for 99 points.
    
    A second later the visual changes and you realize that Event Horizon just showed you its prediction. The race is about to begin and the countdown just went to 7.
    
    … 8 …`,
    image: shrikeArenaImage,
    additionalImage: gnomeImage,
    alt: "Futuristic arena",
    additionalImageAlt: "Futuristic gnome",
    options: [
      {
        text: `Evade gnome’s strike, ignore him and jump into the screen.`,
        nextText: 21,
      },
      {
        text: `Use the strange cube Masteen is carrying all the time.`,
        nextText: 71,
      },
    ],
  },
  {
    id: 67,
    text: `Kassad starts moving, takes out his futuristic rifle with a small picture of a girl trapped inside a pyramid. He turns around and, without slowing down, shoots in the gnome’s arm. It’s being shred to pieces, and Moor Cow is stunned for a few seconds.

    Kassad keeps running forward and enters the screen.
    
    Arika appears nearby, riding a shiny red bike.
    
    “Brutal you are, sir. Shooting cute gnomes’ arms!”
    
    She rushes forward and disappears behind the track’s corner.
    
    You see a labyrinth-like route ahead. Other participants start appearing behind you.
    
    At the next turn you notice a graffiti on the wall:
    
    if (currentPlace === 2) {
    useShortcut();
    }`,
    image: shortcutImage,
    alt: "Code for the if-statement with a useShortcut function inside.",
    options: [
      {
        text: `Open the console and call the function useShortcut().`,
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
    text: `You see that Arika is the only participant ahead of you and now has a huge advantage.

    The rest of the race seems strangely mundane to you. All the obstacles are already well-known and nothing new happens. It feels like you’ve been doing this over and over again without any progress or changes.
    
    For a moment, right before the finish line, you see a shimmering on the track under you. It looks like an image of Deo’s face and the words “Next time maybe”. Once you’ve noticed it, the track flashes briefly and nothing else is on it anymore. Perhaps your VR-implant got some kind of malware. Could it be the old man’s hack?
    
    You stop thinking about it and see Arika standing at the finish line, smiling.`,
    image: arikaAtFinishLineImage,
    additionalImage: arikaImage,
    alt: "A girl with yellow hair looking away",
    additionalImageAlt: "Futuristic girl with yellow hair",
    options: [
      {
        text: `“Congrats! Nice bike you’ve made yourself there.”`,
        nextText: 51,
      },
      {
        text: `“Not bad. You use your VR-skin in the arena?”`,
        nextText: 72,
      },
    ],
  },
  {
    id: 69,
    text: `Flying on your glider, you jump out of the shortcut in front of Arika's bike, taking a brief glimpse at her.

    Her arena character looks exactly like her zerOne appearance which is not typical for the poets. Using a skin for the randomly chosen options during the Writers Fights has an extra cost, and participants rarely spend their credits on such things. Especially when it comes to lower levels’ arenas.
    
    What is also strange is the look on Arika’s face. She seems to be half-sad, half-disappointed.
    
    You win the race and decide to wait at the finish line. Arika drives towards you.
    
    “Good job… I guess.”
    
    She hesitates for a second, like trying to make a decision.
    
    “Listen, I know what you did back there to win… It’s ok, I understand. But didn’t you get at least a tiny bit curious?”
    
    Arika sighs.
    
    “Deo would’ve hated me for what I’m gonna do, but who cares now.”
    
    She notices your puzzled look.
    
    “Yeah, I knew him as well. In fact, we used to work together. But it’s a long story for another time. For now let me give you a chance to replay the race. Consider it my special ability. Well, if you want it of course.”
    
    Arika takes out an old video cassette with a yellow sticker that shows a rewind sign. She hands it over to you.
    
    “What do you say?”`,
    image: shrikeTrackImage,
    additionalImage: arikaImage,
    alt: "Futuristic race track",
    additionalImageAlt: "Futuristic girl with yellow hair",
    options: [
      {
        text: `“You have a Virtual Holographic Slider? Sure! Let me watch it!”`,
        nextText: 22,
      },
      {
        text: `“Nah, I’ll pass on that one, thanks. First place is all I need!”`,
        nextText: 70,
      },
    ],
  },
  {
    id: 70,
    text: `Arika frowns, shrugs, and then her character starts quickly dispersing in the air. A mix of red and yellow colors whirls around you. When she’s almost gone, you hear her voice.

    “I still hope Deo was right about you.”
    
    You think about these words for a little, but then decide to ignore them. After all, you’ve finally won the Writers Fight. The day has come and it is yours to take.

    Is it though? Is it truly a victory or just some cheating? Aren’t you curious to find out?`,
    image: whiteRabbitImage,
    alt: "White rabbit in a futuristic suit",
    options: [
      {
        text: `Be kind, dark rewind.`,
        nextText: 2,
      },
      {
        text: `Unicorndabra.`,
        nextText: 55,
      },
    ],
  },
  {
    id: 71,
    text: `Masteen takes out his cube and performs some strange manipulations with it. Once the gnome tries to hit you, it suddenly opens and his mechanical arm goes right into it. The cube closes, cuts the whole arm and stuns the gnome for a few seconds.

    Masteen jumps forward and enters the screen.
    
    Arika appears nearby, riding a shiny red bike.
    
    “Soai wins. Cubality!”
    
    She rushes forward and disappears behind the track’s corner.
    
    You see a labyrinth-like route ahead. Other participants start appearing behind you.
    
    At the next turn you notice a graffiti on the wall:
    
    if (currentPlace === 2) {
    useShortcut();
    }`,
    image: shortcutImage,
    alt: "Code for the if-statement with a useShortcut function inside.",
    options: [
      {
        text: `Open the console and call the function useShortcut().`,
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
    text: `Arika moves closer and whispers.

    “Wanna know a secret? That’s how I look outside zerOne! Ok, fine, I don’t have yellow eyes, but the rest is identical. I’m one of those purists that want to be the same in both worlds.”
    
    She thinks about something for a second.
    
    “Sorry, gotta go. But perhaps we’ll meet once more at some point. You’ve done a good job today! Don’t worry, I’m sure you’ll be the first one soon… Well, if that is really what you want. Just try again. You know, maybe some different choices along the way may lead to a different outcome.”
    
    She winks at you and pats you on the shoulder.
    
    “Bye-bye, Soai-boy, I’ll see you when I see you.”
    
    With that her character falls into hundreds of yellow pixels and disappears.
    
    And that was another day in the Bridge for you. Not too much, not too little.
    
    Today you’ve got your second place. And maybe tomorrow is a better day.`,
    image: finalSecondPlaceImage,
    alt: "Character looking away",
    options: [
      {
        text: `Check if tomorrow is a better day.`,
        nextText: 55,
      },
      {
        text: `Check if tomorrow is a realistic day.`,
        nextText: 2,
      },
    ],
  },
  {
    id: 73,
    text: `The mouth starts grinning slyly.

    “Says the youngster who’s added to his virtual appearance a six pack and a gorgeous haircut, looking straight out of the barber shop. You do realize that current nutrition quality and lack of physical activities in the real world are not among things that help with such characteristics out there?”
    
    He sighs.
    
    “But youth may have its dreams and flaws. I, for one, should not be judging you. Especially you, I’d say. So, let’s just consider my cats and rabbits and your… ahem… exceptional physique to be our little passions.”
    
    The smiling mouth finally disappears, and, after a brief moment of displaying thousands of 404 errors, the sphere walls in front of you show Deo. He looks different now. Younger, without his eyes-implants and dragon-head cane. Instead he wears a stylish costume and vintage glasses. He looks at you, waiting for another question.`,
    image: sphereImage,
    additionalImage: youngDeoImage,
    alt: "Sphere with a figure inside of it",
    additionalImageAlt: "Bearded man with glasses and futuristic headphones",
    options: [
      {
        text: `“Are you real, old man? Or is it a part of the arena challenge, an easter egg or some kind of a secret level?”`,
        nextText: 25,
      },
      {
        text: `“Honestly, I just want to win this race. Nice talking to you and all. Any chance you can port me to the finish line?”`,
        nextText: 74,
      },
    ],
  },
  {
    id: 74,
    text: `Deo remains silent for some time, then starts talking slowly.

    “Is that all you want, Soai? The only thing that keeps you going is the desire to win? Aren’t you curious to figure out what’s behind these countless arenas and towers climbing? What if I told you that you could become something more than what you are right now? Would you still decline and continue your endless Writers Fights? Let me give you a choice.”
    
    The image on the walls changes, and you see a door leading back to the arena. If you jump in there you’ll be right ahead of Arika and win the race.`,
    image: sphereImage,
    additionalImage: youngDeoImage,
    alt: "Sphere with a figure inside of it",
    additionalImageAlt: "Bearded man with glasses and futuristic headphones",
    options: [
      {
        text: `“Oh, that’s grand! Cheers, old one! Finally you’ve made yourself useful. Appreciate your support and blah-blah-blah. To victory I go!”`,
        nextText: 69,
      },
      {
        text: `“Alrighty, I’ll play along, monsieur mystery. Enlighten me, who are you? Just a part of Shrike's code or a real human being?”`,
        nextText: 25,
      },
    ],
  },
  {
    id: 75,
    text: `You notice slight mockery in Deo’s voice.

    “Giving up already? I thought you’re better than this. But I understand. Back in my days I also wanted only one thing. To win. And I did, many times. Did you know that Shrike’s previous iteration of this place was called the Tree of Pain? Fun fact, during one of the fights poets managed to bypass its security and turned the whole arena into a giant creature, tearing down all the VR-space around it. It was necessary to shut it down for several months to rewrite all the code and make it functional again. Shrike has been created as an homage to this event. Well, also because devs were too lazy to create something new and preferred to use copy-pasting technique.”
    
    Deo notices your puzzled face.
    
    “Ok-ok. Here’s a tool for you. You can break through this wall and continue your race or stay and answer my question.”
    
    A huge black hammer appears in front of you. You see the words “let wayOut” on its handle.`,
    image: sphereImage,
    additionalImage: youngDeoImage,
    alt: "Sphere with a figure inside of it",
    additionalImageAlt: "Bearded man with glasses and futuristic headphones",
    options: [
      {
        text: `“Fine. Let’s play this million questions game. I feel completely real. Probably more real than you will ever be.”`,
        nextText: 26,
      },
      {
        text: `“Perfecto patronum. Blunt instrument is what I need right now. I want to break through. Be seeing you, grandpa.”`,
        nextText: 76,
      },
    ],
  },
  {
    id: 76,
    text: `Deo squints, still smiling.

    “Oh, that you will…”
    
    The moment you smash the wall you get surrounded by darkness and begin falling somewhere. It continues for quite a long time, and you stop feeling anything. The sense of helplessness and despair consumes you completely, freezing your body and mind. There is nothing you can do, only to keep flying into the abyss, ruminating about the endless possibilities you had and choices you’ve made throughout your relatively short span of life. Were they worth it? Does it really matter? Who is putting these thoughts into you?
    
    Then, as abruptly as it started, it suddenly stops. You don’t see anything, but there’s no more falling, as if you were inside an elevator that had been going down with a lightspeed and then instantly got motionless and still.
    
    A bleak light glows in front of you. You look closer and see that these are two buttons.
    
    You wipe the digital sweat off your virtual forehead, trying to figure out what they do.`,
    image: sphereImage,
    alt: "Sphere with a figure inside of it",
    options: [
      {
        text: `wayOut === false`,
        nextText: 55,
      },
      {
        text: `wayOut === 0`,
        nextText: 2,
      },
    ],
  },
  {
    id: 77,
    text: `Deo says nothing and just keeps looking at you.

    Something is not right.
    
    Why can't you remember anything except for the same cycle of events, repeating day after day, leading to the Writers Fight and not getting the first place?
    
    The same loop of actions. Over and over again.
    
    Deo finally speaks.
    
    “So real, yet something always sticks out, right? Some weird feeling that, once you win, everything will change, as if it is the only thing that can break the chain and free you.”`,
    image: sphereImage,
    additionalImage: youngDeoImage,
    alt: "Sphere with a figure inside of it",
    additionalImageAlt: "Bearded man with glasses and futuristic headphones",
    options: [
      {
        text: `“Why are you telling me this? Does it mean that…”`,
        nextText: 28,
      },
      {
        text: `“Am I the arena character you’re writing?”`,
        nextText: 78,
      },
    ],
  },
  {
    id: 78,
    text: `Now you see Deo as he looked when you met him at the Mnemonic bar. Old fellow in a blue robe.

    “Already wrote, not writing anymore, Soai. You’re your own poet now. But at first you appeared as a character for one of my Writers Fights. I was quite an ambitious young man, or better say, an arrogant one. Was so proud of myself for making such a creation that after the arena I kept the code and started working on it further. Adjusting it, trying to turn it into a sentient being that can make decisions on its own and eventually will start considering itself a human. A human with a soul of AI… or Soai as I liked to call you.”`,
    image: sphereImage,
    additionalImage: deoImage,
    alt: "Sphere with a figure inside of it",
    additionalImageAlt: "Old man in a blue robe",
    options: [
      {
        text: `“I don’t believe you! I am not some artificial creature made by a madman. I KNOW I’m real.”`,
        nextText: 29,
      },
      {
        text: `“Okie, so, given all those facts, you are not actually a grandpa but… just pa?”`,
        nextText: 79,
      },
    ],
  },
  {
    id: 79,
    text: `Deo looks at you, chuckling.

    “Well, if it makes you feel any better, you can think of me that way. Though, I was quite the character back in the days. Not sure if I’d ever make a good parent. Besides, you're kind of written on the basis of my personality, so…”`,
    image: sphereImage,
    additionalImage: deoImage,
    alt: "Sphere with a figure inside of it",
    additionalImageAlt: "Old man in a blue robe",
    options: [
      {
        text: `“Feels like being a puppet made for the arena. For how long has it all been going on?”`,
        nextText: 30,
      },
      {
        text: `“Explains why I’ve been feeling loopy recently. How long are we in this business, dad?”`,
        nextText: 80,
      },
    ],
  },
  {
    id: 80,
    text: `You notice a glimpse of curiosity in Deo’s voice.

    “That was an interesting reaction. Fascinating. You do feel real. I haven’t programmed anything like this. How long, you ask? Quite long, a significant part of my life till its very end, and then up to this point when you need to continue your path… all by yourself. Do try to change this world and the one beyond it. They are both hopelessly staring at the doom clock, not knowing what to do and counting seconds. Perhaps you could save them. Or at least set the right direction. Although, to tell what is right, is another task to figure out.”`,
    image: sphereImage,
    additionalImage: deoImage,
    alt: "Sphere with a figure inside of it",
    additionalImageAlt: "Old man in a blue robe",
    options: [
      {
        text: `“Wait. What do you mean by that? Are you going to leave me NOW? After explaining all this? What could possibly be a reason for it?”`,
        nextText: 31,
      },
      {
        text: `“Typical mad scientist. I’m so great, I will create an artificial life and everyone will praise me once it saves the world! Going to just sit there and watch?”`,
        nextText: 81,
      },
    ],
  },
  {
    id: 81,
    text: `“I’m afraid that is no longer an option for me. Haven’t you figured it out already? I am another virtual being. Not as advanced as you are. Deo passed away several years ago. Shortly before that he created me to watch over you. Once you reach this point my task is complete, and this entity must be erased. Otherwise you’ll keep coming here, searching for answers that are elsewhere. I am sure of it. Go win this race and claim your victory. Or do whatever else you desire. Fare thee well, dear child.”

    Deo (or his virtual projection) waves at you, then the sphere’s walls start blinking, shuffling in the reverse order: old Deo, younger one, smiling mouth, rabbit… The sphere disappears, and you fly backwards into the shortcut. There you see the exit and Arika not far from you, at the same place as before. You realize that Event Horizon worked again and showed you all this before it actually happened.`,
    image: sphereExitImage,
    alt: "Sphere with a figure in front of it",
    options: [
      {
        text: `Jump out of the shortcut in front of Arika and continue the race up to the finish line.`,
        nextText: 32,
      },
      {
        text: `Stay inside the shortcut, meditate, and think about destiny and the meaning of life.`,
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
    image: humanoidRabbitImage,
    alt: "Humanoid robo-rabbit",
    options: [
      {
        text: `Ok, seriously, let's go already.`,
        nextText: 32,
      },
      {
        text: `ME SAD! ME WANT GO HOME!`,
        nextText: 1,
      },
    ],
  },
  {
    id: 83,
    text: `Arika is waiting for you at the finish line. You have a weird feeling that she knows something.

    “No need to win now, huh? I like your style.”
    
    She gives you a hand.
    
    “Come, let me show you what’s there outside.”
    
    Both of your characters fall into countless pixels that fly into the digital sky, accompanied by sparks of all possible colors. A soul of AI and a girl with yellow eyes from now on will write their own songs.`,
    image: towersFinalImage,
    additionalImage: theEndImage,
    alt: "Futuristic tower",
    additionalImageAlt: "The End",
    options: [
      {
        text: `Replay your virtual adventure.`,
        nextText: 1,
      },
      {
        text: `Say hello to your furry friend.`,
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
    alt: "Futuristic shop interior",
    additionalImageAlt: "Girl with futuristic glasses",
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
    text: `The old man looks at you for a couple more seconds, then turns around and walks away slowly.

    “Another time or place then. An interesting observation nonetheless.”
    
    He mutters something incomprehensible, and you pay no further attention to him.
    
    Nnif comes back, looking somewhat puzzled.
    
    “Listen, to be honest, I seem to be all outta useful stuff. Could sell you some garbage tech, but let me save you some creds and just refuse doing that. You’re better off without it. Otherwise it’ll look like doing some mining with a piece of hardware instead of a pick. In theory, you could do that, but peeps who really need it won't appreciate this.”
    
    She leans closer and lowers her voice.
    
    “Let me tell you a secret. For low-levels’ arenas upgrades don’t really matter. Just use your brains. Best tip I can give.”
    
    Nnif thinks about something for a second.
    
    “I kinda don’t want to leave you empty-handed though. Here’s some due diligence for ya. There’ll be a couple of new poets tonight. Pretty sure you haven’t seen them before.”
    
    She continues after a pause.
    
    “There’s this fella called Moor Cow. I sense some gnomish trickery afoot. If you happen to be near the article just go ahead and strike first and don’t ask questions later. My gut tells me such a type prefers to do something naughty right away.”
    
    Seeing that you get her idea, Nnif continues.
    
    “Newcomer number two is a girl. I think her name is Ari-something. She looks strangely familiar, as if I met her before, but whatever… Dunno much, but I heard some of the rich folk have a new fashion: paying lots of creds to travel between towers and levels. My bet, she’s one of them. Thus, the princess will be covered in top notch tech, so forget about trying to stop that one. You can try to outrun her, but skill versus creds is a topic for a whole new debate. Maybe you’ll manage, but sadly I doubt that. Unless some miracle brightens your path to glory.”
    
    Nnif puffs out her cheeks, shrugging.
    
    “Ok, speed racer, that’s all I’ve got. Run fast and don’t get toasted.”`,
    image: dixiesShopInteriorImage,
    additionalImage: nnifImage,
    alt: "Dixie's shop interior image",
    additionalImageAlt: "Nnif image",
    options: [
      {
        text: `“Thanks for the advice, Nnif. Always appreciated your straightforwardness. Time for me to go. Poetry awaits. You have fun with your customers, and I will go to the arena.”`,
        nextText: 47,
      },
      {
        text: `“Cheers, Nnif. You rock, as always. Guess I have some time to spare. Gonna hang out at my place. Wish you a pleasant day filled with unforgettable customer relationships.”`,
        nextText: 88,
      },
    ],
  },
  {
    id: 88,
    text: `Nnif produces a heavy sigh.

    “I prefer them to be on the forgettable side sometimes.”
    
    She waves you off.
    
    “Be seeing you, monsieur poet.”
    
    You go to your virtual apartment, but halfway there bump into your old buddy - Sane Snacks. A very big fellow, always wearing strange clothes made of plastic plates, worn off rugs and metal pieces of unknown origin. His voice roars.
    
    “Soai! My favorite friend! Come here!”
    
    Two giant arms hug you.

    “What’s been happening with you? I haven’t seen you for ages. Thought you went down to the firstie.”
    
    This seems strange. You’ve a feeling that quite recently you met with Sane but can’t remember why and when exactly.`,
    image: bridgeLivingAreaImage,
    additionalImage: saneImage,
    alt: "Bridge living area image",
    additionalImageAlt: "Sane image",
    options: [
      {
        text: `“Ah well, been here and there. Listen, sorry for being harsh, but I’ve a Writers’ Fight to attend. Wanted to check on my apart, but there’s not much time. Catch up with you later, big guy.”`,
        nextText: 47,
      },
      {
        text: `“But we'd seen each other a few days ago, no? Man, these Writers Fights really start taking all my time. Feels like I’m having the same legs day in an infinite wheel of time. Got it all mixed up.”`,
        nextText: 89,
      },
    ],
  },
  {
    id: 89,
    text: `Sane looks concerned.

    “No, Soai, it’s been quite some time since we had a bit of hanging out, don’t you remember? I invited you to play “There and Back Again”. You decided to be a Mediocre boy and I was Valhalla’s chosen one. Then Una came and looked at us as if we were two kids doing silly things. We then went to his favorite band’s show - Soundcore of Mirror. Oh boy, I’ve spent too much there buying those useless cheers… But at least we had some fun, right?”
    
    Sane notices that you don’t remember any of it.
    
    “My friend, I advise you to stop spending so much time in the arena. All grind and no play makes you just a free-to-play, you know?”`,
    image: bridgeLivingAreaImage,
    additionalImage: saneImage,
    alt: "Bridge living area image",
    additionalImageAlt: "Sane image",
    options: [
      {
        text: `“Yeah, right... Afraid, I need to go now. Need to pay Shrike a visit. Today might be the day. Take care, my wasteland friend.”`,
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
    text: `Sane accompanies you. He produces a thunderous sigh.

    “Frankly, not much. Always feel like I need some space, some desert to drive through, some engine screams and metal sound in my ears. But here we are, sitting in our capsules, crawling out of ‘em only to find ourselves in a virtual projection of the same tower we live in. A more spacious one, yes, but still… well, just a needle piercing the sky in a desperate attempt to live on. Ever wanted to see what the real world looks like down there?”
    
    He gets quiet for a moment, thinking.
    
    “Sometimes I wonder how long I could last there. We see only some distant sparks of light from here, coming from beneath the chemical clouds. Guess machines are doing all the work down below. To keep the towers running. But one day it will end, Soai. I can see it… in the raindrops.”
    
    This life-reassuring monologue lasts while you keep walking with Sane. Strange dude he is, Sane. A huge bull with a roaring voice but very sensitive inside.
    
    He suddenly turns to you and his voice changes, like someone else is talking through him.
    
    “Would you make a different choice if you could, Soai? Are you happy with the path chosen? What if I could offer you the way to do it all again? Would you accept it?”`,
    image: bridgeLivingAreaImage,
    additionalImage: saneImage,
    alt: "Bridge living area image",
    additionalImageAlt: "Sane image",
    options: [
      {
        text: `“Nah, man, I’m good. The choice I’ve made is the path to take. I aim to finish it. One day we’ll meet in Valhalla, but you know what we say to it, right? Not today. Be seeing you, bud, here’s my stop for the arena.”`,
        nextText: 47,
      },
      {
        text: `“Hmm. It’s kinda been on my mind recently. Have this itchy feeling, like I could say other things, go to different places. I guess you got your grand hands on some rewinding soft? Ok, Sane Snacks, I accept.”`,
        nextText: 2,
      },
    ],
  },
  {
    id: 91,
    text: `Nnif scratches her head, wincing.

    “Listen, to be honest, I seem to be all outta useful stuff. Could sell you some garbage tech, but let me save you some creds and just refuse doing that. You’re better off without it. Otherwise it’ll look like doing some mining with a piece of hardware instead of a pick. In theory, you could do that, but peeps who really need it won't appreciate this.”
    
    She leans closer and lowers her voice.
    
    “Let me tell you a secret. For low-levels’ arenas upgrades don’t really matter. Just use your brains. Best tip I can give.”
    
    Nnif thinks about something for a second.
    
    “I kinda don’t want to leave you empty-handed though. Here’s some due diligence for ya. There’ll be a couple of new poets tonight. Pretty sure you haven’t seen them before.”
    
    She continues after a pause.
    
    “There’s this fella called Moor Cow. I sense some gnomish trickery afoot. If you happen to be near the article just go ahead and strike first and don’t ask questions later. My gut tells me such a type prefers to do something naughty right away.”
    
    Seeing that you get her idea, Nnif continues.
    
    “Newcomer number two is a girl. I think her name is Ari-something. She looks strangely familiar, as if I met her before, but whatever… Dunno much, but I heard some of the rich folk have a new fashion: paying lots of creds to travel between towers and levels. My bet, she’s one of them. Thus, the princess will be covered in top notch tech, so forget about trying to stop that one. You can try to outrun her, but skill versus creds is a topic for a whole new debate. Maybe you’ll manage, but sadly I doubt that. Unless some miracle brightens your path to glory.”
    
    Nnif puffs out her cheeks, shrugging.
    
    “Ok, speed racer, that’s all I’ve got. Run fast and don’t get toasted.”`,
    image: dixiesShopInteriorImage,
    additionalImage: nnifImage,
    alt: "Dixie's shop interior image",
    additionalImageAlt: "Nnif image",
    options: [
      {
        text: `“Thanks for the advice, Nnif. Always appreciated your straightforwardness. Time for me to go. Poetry awaits. You have fun with your customers, and I will go to the arena.”`,
        nextText: 47,
      },
      {
        text: `“Right you are, chief. Some valuable intel. By the way, there was a strange-looking old fellow here. He’s just left but before that asked me to tell you Deo says hi.”`,
        nextText: 40,
      },
    ],
  },
  {
    id: 92,
    text: `Nnif frowns, looking somewhat disapproving.

    “Your choice, man. But I’m telling you, that’s quite a piece of tech. Old man was one of those who can make something so advanced that everyone else would think it’s magic. You know, if you don’t understand how it works, you think it’s supernatural. See what I’m trying to tell ya?”
    
    Nnif shrugs, pursing her lips.
    
    “Can’t promise everything will go as you’d expect, but, well, at least you could have some fun along the way… or not. Anywho, take it or leave it. I have work to do, so either this or good luck with writing poems on your own.”`,
    image: dixiesShopInteriorImage,
    additionalImage: nnifImage,
    alt: "Dixie's shop interior image",
    additionalImageAlt: "Nnif image",
    options: [
      {
        text: `“Oh fine, mademoiselle persuasion. You’ve got my attention now. Let’s talk about this mighty cheating mode of yours!”`,
        nextText: 14,
      },
      {
        text: `“Aye-aye, captain, I’m sailing off. No modes this time. Gonna go do this arena myself. To the world of poetry and beyond!”`,
        nextText: 47,
      },
    ],
  },
  {
    id: 93,
    text: `Shrike’s always changing. Each time you enter it, you don’t know where the race will start or end and what challenges are waiting for you on the way. Today’s route goes through the rabbit hole. That probably means some hidden traps and weird-looking beasts. Not much to learn here. It’s supposed to be unknown up until the moment when the match begins.`,
    image: toxicRainImage,
    alt: "Toxic rain image",
    options: [
      {
        text: `Check the participants list.`,
        nextText: 94,
      },
      {
        text: `Go to the arena.`,
        nextText: 47,
      },
    ],
  },
  {
    id: 94,
    text: `You see many familiar names.

    > Goose Ra Doubt
    Annoyingly loud dude with a strange attraction to cats. Not really a threat. Keeps using the same gameplay for years and promising to come up with something new in due time.
    
    > Nani Omaieva
    Strong lady that once loved a very old guy who betrayed her but wasn’t prepared for her revenge. A worthy opponent, but, since she gave up on her old armor (per some principles of honor), steps out of the danger zone.
    
    > Citiesdzen Stored.
    Once upon a time he was everyone’s favorite, but then went into overpromising and underdelivering mode. Rumor has it, he’s ready to show something fantastic, but each time cancels and reschedules it. You don’t really expect to get anything new from him.
    
    You then notice a couple of names you haven’t seen before.
    
    > Moor Cow
    
    > Arika
    
    Strange. Newcomers are usually rare guests in the arena of any level. Those who were able to come up from the lower ones have some chances to find a job, at least at the beginning. Fresh blood costs less and has a better motivation. And those who are going down from the levels above are too depressed to take part in pretty much anything at first. Thus, you know almost every poet on your level. But these two seem to be an exception.
    
    The name Moor Cow seems suspicious. You’re pretty sure this one will do something nasty. Won’t be a surprise if that’s a gnome.`,
    image: toxicRainImage,
    alt: "Toxic rain image",
    options: [
      {
        text: `Go directly to the arena.`,
        nextText: 47,
      },
      {
        text: `Check your VR-apartment.`,
        nextText: 95,
      },
    ],
  },
  {
    id: 95,
    text: `Halfway to your place you bump into your old buddy - Sane Snacks. A very big fellow, always wearing strange clothes made of plastic plates, worn off rugs and metal pieces of unknown origin. His voice roars.

    “Soai! My favorite friend! Come here!”
    
    Two giant arms hug you.
    
    “What’s been happening with you? I haven’t seen you for ages. Thought you went down to the firstie.”
    
    This seems strange. You’ve a feeling that quite recently you met with Sane but can’t remember why and when exactly.`,
    image: bridgeLivingAreaImage,
    additionalImage: saneImage,
    alt: "Bridge living area image",
    additionalImageAlt: "Sane image",
    options: [
      {
        text: `“Ah well, been here and there. Listen, sorry for being harsh, but I’ve a Writers’ Fight to attend. Wanted to check on my apart, but there’s not much time. Catch up with you later, big guy.”`,
        nextText: 47,
      },
      {
        text: `“But we'd seen each other a few days ago, no? Man, these Writers Fights really start taking all my time. Feels like I’m having the same legs day in an infinite wheel of time. Got it all mixed up.”`,
        nextText: 89,
      },
    ],
  },
  {
    id: 96,
    text: `Arika tries to keep a serious face but instantly bursts out laughing.

    “I like your sense of humor! Veteran! Hehehe. If you’re a veteran, then I’m a major wearing a cyborg body!”
    
    She keeps giggling.
    
    “So, veteran-san, what can you tell me about this place? A smidge of advice for such a useless shell as me to get anything but the first place today?”
    
    Despite the mocking tone, Arika keeps smiling happily as if you were best friends.`,
    image: shrikeLockersAreaImage,
    additionalImage: arikaImage,
    alt: "Shrike lockers area",
    additionalImageAlt: "Arika image",
    options: [
      {
        text: `“Sorry about that. I’m not good at meeting new people. Not a pro, you’ve guessed it right. Just keep trying and hope to become good enough to win one day. What about you?”`,
        nextText: 48,
      },
      {
        text: `“Pfff, what do you know! Tell your shell to ghost away. Advice I am giving only to those who are worth my time. As for the rest of my entourage, I’m not in the mood to talk with noobs.”`,
        nextText: 97,
      },
    ],
  },
  {
    id: 97,
    text: `“Guess you don’t talk to yourself then.”

    Despite everything, Arika still looks like having a great time. She waves at you.
    
    “See ya! Have a good day!”
    
    While the two of you are talking, other participants start entering the lockers area. The space looks small, but its developers made a system of layers, so everyone can fit in and still be able to communicate with the rest. Actually, they called it shards, not layers, but frankly nobody really understood the difference.
    
    It’s time to choose a character you’ll be playing during the arena. You go to your locker and open the menu with the provided options.`,
    image: shrikeLockersAreaImage,
    additionalImage: kassadAndMasteenImage,
    alt: "Shrike lockers area",
    additionalImageAlt: "Kassad and Masteen portrait",
    options: [
      {
        text: `Kassad. A romantic soldier, loving his past. Special ability of moving backwards and using weapons from any period of history. Can be stunned by random flashbacks. With very little chance can disappear from the battle after seeing a strange woman.`,
        nextText: 49,
      },
      {
        text: `Masteen. A mysterious templar. Carries a strange cube. Rumor has it he hides a space tree there that he can ride. May randomly lose conscience. Some also say he might disappear at any moment without a warning. Though nobody could provide any evidence so far.`,
        nextText: 98,
      },
    ],
  },
  {
    id: 98,
    text: `You decide to stick with Masteen for this match.

    Initially your character is like a blank template with some basic traits. It’s up to you to program it. The match is about to start, and you walk out of the lockers area to enter the arena.
    
    The race will begin once you enter the massive portal looking like an ancient PC monitor. You see green lines of symbols running on it, forming a phrase “What do we say to waking up?”. The words glitch and flicker, but it’s most likely just a delay, given the fact that lower levels’ tech is outdated.
    
    You and other participants gather in front of the monitor. Arika is standing not far from you. Once the race starts, you’ll get control over the chosen character that will appear on the track.
    
    The green lines disappear from the giant screen, and now there is a countdown running from -1 to 8. On 8 the race starts.
    
    You glance to the side and see a gnome character with a giant mechanical arm.
    
    … 8 …
    
    The race begins.`,
    image: shrikeArenaImage,
    additionalImage: gnomeImage,
    alt: "Shrike arena image",
    additionalImageAlt: "Futuristic gnome portrait",
    options: [
      {
        text: `Use the strange cube Masteen is carrying all the time.`,
        nextText: 99,
      },
      {
        text: `Ignore the gnome, jump into the screen and begin the race.`,
        nextText: 100,
      },
    ],
  },
  {
    id: 99,
    text: `Masteen takes out his cube and performs some strange manipulations with it. Once the gnome tries to hit you, it suddenly opens and his mechanical arm goes right into it. The cube closes, cuts the whole arm and stuns the gnome for a few seconds.

    Masteen jumps forward and enters the screen.
    
    Arika appears nearby, riding a shiny red bike.
    
    “Soai wins. Cubality!”
    
    She rushes forward and disappears behind the track’s corner.
    
    The rest of the race seems strangely mundane to you. All the obstacles are already well-known and nothing new happens. It feels like you’ve been doing this over and over again without any progress or changes. You easily avoid traps and Shrike’s blades and razors on the way and finish second.
    
    Arika is standing at the finish line, smiling.`,
    image: arikaAtFinishLineImage,
    additionalImage: arikaImage,
    alt: "A girl looking away",
    additionalImageAlt: "Arika portrait",
    options: [
      {
        text: `“Congrats! Nice bike you’ve made yourself there.”`,
        nextText: 51,
      },
      {
        text: `“Not bad. You use your VR-skin in the arena?”`,
        nextText: 72,
      },
    ],
  },
  {
    id: 100,
    text: `The moment you start moving the gnome hits you in the head with a steam-hammer. Your character gets stunned for 10 seconds and its HP reduces for 99 points.

    You continue the race with 1 HP. You would be able to finish it, as everything seems strangely familiar, and you know all the ins and outs of today’s route. But at the very end of the track, even though your gnome nemesis is ahead of you, just for lulz he turns around for an instant and throws something at you. You realize that it's a golden flask in the shape of a nose with the words “J’adore” on it.
    
    You smell the strange scent, and in the next moment the nose explodes, which is more than enough to strip you off that last precious health point.
    
    Oh well, guess today’s arena is not for you to finish. You get instantly teleported to the lockers area and go outside not interested in the results.
    
    Seems that it was Arika who took the first place. You look at the digital sky and for a moment notice red and yellow words there.
    
    ~ Do you like loops? ~`,
    image: finalLoopImage,
    alt: "Character looking at the tower.",
    options: [
      {
        text: `Not really, but there isn't much choice.`,
        nextText: 2,
      },
      {
        text: `Yeah, I can loop all day long!`,
        nextText: 55,
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
import shrikeEntranceImage from "../assets/shrikeEntranceImage.jpg";
import arikaImage from "../assets/arikaImage.jpg";
import shrikeLockersAreaImage from "../assets/shrikeLockersAreaImage.jpg";
import kassadAndMasteenImage from "../assets/kassadAndMasteenImage.jpg";
import shrikeArenaImage from "../assets/shrikeArenaImage.jpg";
import gnomeImage from "../assets/gnomeImage.jpg";
import shortcutImage from "../assets/shortcutImage.jpg";
import orangePortalImage from "../assets/orangePortalImage.jpg";
import cyborgRabbitImage from "../assets/cyborgRabbit.jpg";
import sphereImage from "../assets/sphereImage.jpg";
import smilingRabbit from "../assets/smilingRabbit.jpg";
import youngDeoImage from "../assets/youngDeoImage.jpg";
import sphereExitImage from "../assets/sphereExitImage.jpg";
import shrikeTrackImage from "../assets/shrikeTrackImage.jpg";
import mainCharacterFinalImage from "../assets/mainCharacterFinalImage.jpg";
import theEndImage from "../assets/theEndImage.jpg";
import arikaAtFinishLineImage from "../assets/arikaAtFinishLineImage.jpg";
import bridgeLivingAreaImage from "../assets/bridgeLivingAreaImage.jpg";
import saneImage from "../assets/saneImage.jpg";
import whiteRabbitImage from "../assets/whiteRabbitImage.jpg";
import finalSecondPlaceImage from "../assets/finalSecondPlaceImage.jpg";
import humanoidRabbitImage from "../assets/humanoidRabbitImage.jpg";
import towersFinalImage from "../assets/towersFinalImage.jpg";
import finalLoopImage from "../assets/finalLoopImage.jpg";

export default texts;
