
// Bollywood // images

// import img12 from "./// images/bollywood/bolly-8.jpg";
// import img13 from "./// images/bollywood/bolly-9.jpg";
// import img14 from "./// images/bollywood/bolly-6.jpg";
// import img15 from "./// images/bollywood/bolly-7.jpg";
// import img16 from "./// images/bollywood/bolly-1.jpg";
// import img17 from "./// images/bollywood/bolly-3.jpg";
// import img18 from "./// images/bollywood/bolly-4.jpg";
// import img19 from "./// images/bollywood/bolly-2.jpg";
// import img20 from "./// images/bollywood/bolly-10.jpg";
// import img21 from "./// images/bollywood/bolly-11.jpg";
// import img22 from "./// images/bollywood/bolly-12.jpg";
// import img23 from "./// images/bollywood/bolly-13.jpg";

//  Tech // images 

// import img24 from "./// images/technology/5G.jpg";
// import img25 from "./// images/technology/AI-ML.jpg";
// import img26 from "./// images/technology/Ar-vr.jpg";
// import img27 from "./// images/technology/Automation and Robotics.jpg";
// import img28 from "./// images/technology/Blockchain Technology.jpg";
// import img29 from "./// images/technology/Cloud Computing.jpg";
// import img30 from "./// images/technology/Cybersecurity and Data Privacy.jpg";
// import img31 from "./// images/technology/Internet of Things (IoT).jpg";
// import img32 from "./// images/technology/Quantum Computing.jpg";
// import img33 from "./// images/technology/full-stack-developer.jpg";
// import img34 from "./// images/technology/Nanotechnology.jpg";
// import img35 from "./// images/technology/Smart-Home-and-Smart-City=-Solutions.jpg";

//  Hollywood // images

// import img36 from "./// images/hollywood/Avatar.jpg";
// import img37 from "./// images/hollywood/Avengers-Endgame.jpg";
// import img38 from "./// images/hollywood/Jurassic-Park.jpg";
// import img39 from "./// images/hollywood/Star-Wars.jpg";
// import img40 from "./// images/hollywood/The-Dark-Knight.jpg";
// import img41 from "./// images/hollywood/The-Godfather.jpg";
// import img42 from "./// images/hollywood/The-Lord-of-the-Rings.jpg";
// import img43 from "./// images/hollywood/The-Shawshank-Redemption.jpg";
// import img44 from "./// images/hollywood/Titanic.jpg";
// import img45 from "./// images/hollywood/E.T. the Extra-Terrestrial.jpg";
// import img46 from "./// images/hollywood/Harry-Potter.jpg";
// import img47 from "./// images/hollywood/Gladiator.jpg";

// Fitness // images

// import img48 from "./// images/fitness/sit-up.gif";
// import img49 from "./// images/fitness/side-band.gif";
// import img50 from "./// images/fitness/air-bike.gif";
// import img51 from "./// images/fitness/Fours-Squad-Stretch.gif";
// import img52 from "./// images/fitness/Alternate-Heel-Touchers.gif";
// import img53 from "./// images/fitness/Alternate-Lateral-Pulldown.gif";
// import img54 from "./// images/fitness/Ankle-Circles.gif";
// import img55 from "./// images/fitness/Archer-Pull-Up.gif";
// import img56 from "./// images/fitness/Archer-Push-Up.gif";
// import img57 from "./// images/fitness/Arm-Slingers-Hanging-Bent-Knee-Legs.gif";
// import img58 from "./// images/fitness/Assisted-Hanging-Knee-Raise.gif";
// import img59 from "./// images/fitness/Assisted-Parallel-Close-Grip-Pull-Up.gif";
// import img60 from "./// images/fitness/Astride-Jumps-(Male).gif";

// // Food // images

// import img61 from "./// images/food/Pizza.jpg";
// import img62 from "./// images/food/Sushi.jpg";
// import img63 from "./// images/food/Chocolate.jpg";
// import img64 from "./// images/food/Tacos.jpg";
// import img65 from "./// images/food/Ice-cream.jpg";
// import img66 from "./// images/food/Cheesecake.jpg";
// import img67 from "./// images/food/Burgers.jpg";
// import img68 from "./// images/food/Pasta.jpg";
// import img69 from "./// images/food/Curry.jpg";
// import img70 from "./// images/food/Macarons.jpg";
// import img71 from "./// images/food/Ramen.jpg";
// import img72 from "./// images/food/Donuts.jpg";


const API = (request, response) => {
    return [
        // home & sports data is here (id: 1 - 12)

        {
            id: 1,
            category: 'home',
            // image: './// images/bollywood/bolly-1.jpg',
            name: 'title',
            height: '1798m',
        },

        {
            id: 2,
            category: 'home',
            name: 'Title',
            // image: Bolly3,
            height: '1898m',
        },
        {
            id: 3,
            category: 'home',
            name: 'stanserhorn',
            // image: Bolly4,
            height: '1898m',
        },
        {
            id: 4,
            category: 'sports',
            name: 'Hockey',
            // image: 'data:// image/jpeg;base64,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',
            content: `Hockey is a fast-paced and exhilarating sport played on ice or turf. It requires a combination of skill, agility, and teamwork. The players glide across the surface, chasing the puck with determination. From body checks to slap shots, hockey offers excitement like no other sport. It has a rich history and is beloved by fans worldwide. Whether you're a seasoned hockey enthusiast or a newcomer to the game, the raw passion and energy of hockey will captivate you.`,
            details:
                'The Fast-Paced World of Hockey: A Thrilling Sport On Ice',
            height: '1898m',
        },
        {
            id: 5,
            category: 'sports',
            name: 'Tennis',
            // image: 'https://encrypted-tbn0.gstatic.com/// images?q=tbn:ANd9GcTHgh2VyJs9Z6uMRE8vb3ncN_0XjVp8fpnvag&usqp=CAU',
            content: `Tennis, a beautiful and intense sport, captures the hearts of millions worldwide. Played on a rectangular court, singles or doubles, the game showcases incredible skill and endurance. From the powerful serves to mesmerizing rallies, tennis demands mental focus and physical agility. The four Grand Slam tournaments—Australian Open, French Open, Wimbledon, and US Open—are highlights of the tennis calendar, attracting top players vying for glory. With legends like Federer, Nadal, Serena, and Osaka, tennis continues to inspire generations and remind us of the importance of sportsmanship.`,
            details:
                "Game, Set, Match: The Graceful Intensity of Tennis",
            height: '1898m',
        },

        {
            id: 6,
            category: 'home',
            name: 'stanserhorn',
            // image: './// images/bollywood/bolly-1.jpg',
            height: '1898m',
        },

        {
            id: 7,
            category: 'sports',
            name: 'Cricket',
            // image: 'data:// image/jpeg;base64,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',
            content: `Cricket, often referred to as the gentleman's game, is a sport of grace and strategy. Played between two teams with a bat and ball, it has a loyal following in many countries. The sound of leather on willow, the tension during close matches, and the artistry of a well-executed cover drive make cricket an unforgettable experience. Its history dates back centuries, and today, it has evolved into different formats, catering to diverse audiences. Cricket is more than just a sport; it's a way of life for millions of fans worldwide.`,
            details:
                "The Gentleman's Game Filled with Passion and Excitement",

        },

        // Bollywood (id: 12 - 24)
        {
            id: 12,
            category: 'bollywood',
            name: 'Raanjhanaa',
            desc: "Bittersweet Love Saga: 'Raanjhanaa' Delves into Passion, Sacrifice, and Heartache.",
            // image: img12,
            release: 'June 21, 2013',
            imdb: '7.6/10',
            content:
                `Released in 2013, "Raanjhanaa" is a captivating Bollywood movie that weaves an enchanting story of love, sacrifice, and societal norms. Directed by Aanand L. Rai, the film stars Dhanush, Sonam Kapoor, and Abhay Deol in lead roles. Set in the vibrant and culturally rich city of Varanasi, the movie takes the audience on an emotional rollercoaster, leaving an everlasting impact. The film introduces us to Kundan Shankar, portrayed brilliantly by Dhanush, a carefree and mischievous young boy who falls head over heels in love with Zoya Haider, played by Sonam Kapoor, a spirited and determined girl hailing from a Muslim family. Their innocent friendship blossoms into a beautiful love story that transcends the boundaries of religion and society. However, fate has other plans for the couple. Zoya's family discovers their relationship and vehemently opposes it due to their different religious backgrounds. The movie beautifully delves into the complexities of religious differences and the challenges faced by individuals in love, testing their devotion and resilience. Despite facing numerous hurdles and social pressures, Kundan remains steadfast in his love for Zoya. His devotion and determination to win her heart, even after she moves away, are heartwarming yet heart-wrenching. Dhanush's portrayal of Kundan's character is simply remarkable, bringing out the raw emotions of love and sacrifice flawlessly. As the story progresses, Zoya's life takes a dramatic turn, leading her to a new city with a fresh start. Abhay Deol's character, Jasjeet Singh Shergill, is introduced as a suitor for Zoya, bringing in another layer of complexity to the narrative. The film brilliantly showcases the internal conflict and dilemma faced by Zoya as she must choose between her past love, Kundan, and her present suitor, Jasjeet. "Raanjhanaa" explores the theme of unrequited love and selfless sacrifice, with Kundan going to great lengths to protect and support Zoya, even if it means jeopardizing his own happiness. His unwavering love for Zoya becomes the driving force of the movie, leading to a powerful climax that leaves the audience teary-eyed and emotionally moved. The film is also enriched with soulful music, composed by the legendary A.R. Rahman, which beautifully complements the narrative. Melodious tracks like "Tum Tak" and "Raanjhanaa Hua Mai Tera" stay etched in the hearts of the viewers, adding an enchanting charm to the film. In conclusion, "Raanjhanaa" is not just a love story; it is an emotional journey that touches upon various aspects of human emotions. It skillfully portrays the complexities of love, the strength of sacrifice, and the impact of societal norms on relationships. With stellar performances, a captivating storyline, and soulful music, the movie leaves a lasting impression on anyone who watches it.`,
        },
        {
            id: 13,
            category: 'bollywood',
            name: 'RRR',
            desc: `"RRR" is set in the 1920s and is a fictional retelling of the lives of two Indian freedom fighters,`,
            // image: img13,
            release: 'October 13, 2021',
            imdb: '7.8/10',
            content: `The much-awaited blockbuster, "RRR," has taken the world by storm, leaving audiences captivated with its breathtaking action sequences and emotional depth. Directed by the visionary filmmaker S.S. Rajamouli, the movie is set against the backdrop of India's pre-independence era and revolves around the lives of two fictional revolutionary freedom fighters, Alluri Sitarama Raju and Komaram Bheem.
  
        The film begins with a spectacular display of action as we witness the unyielding spirit of Alluri Sitarama Raju, portrayed brilliantly by Ram Charan, fighting against the oppressive British rule. His valiant efforts to free the country from colonial shackles inspire patriotism in every viewer's heart. On the other hand, we have Komaram Bheem, played by the versatile Jr. NTR, a tribal leader fighting against the atrocities faced by his people. His raw energy and emotional intensity tug at our heartstrings, creating an instant connection with the audience.
        
        The film's high-octane action sequences, choreographed to perfection, are a visual treat. Rajamouli's signature style is evident throughout the movie, with grandiose sets, awe-inspiring VFX, and larger-than-life action scenes that leave audiences on the edge of their seats. The battle sequences are so brilliantly executed that they transport us into the heart of the action, making us feel like a part of the epic struggle for freedom.
        
        However, "RRR" isn't just about action; it delves deep into the emotions and bonds that the characters share. The portrayal of friendship between Alluri Sitarama Raju and Komaram Bheem is heartwarming, showcasing the true essence of camaraderie and sacrifice. Alia Bhatt and Olivia Morris add grace and charm to the movie, playing pivotal roles that further enrich the narrative.
        
        Apart from the stellar performances, the film's music composed by M.M. Keeravani elevates the storytelling to another level. The soul-stirring background score perfectly complements the narrative, intensifying the emotional impact of each scene.
        
        At its core, "RRR" is not just a movie; it's a cinematic experience that celebrates the spirit of freedom, friendship, and sacrifice. The film has broken box office records and garnered critical acclaim, cementing its place in the annals of Indian cinema.
        
        In conclusion, "RRR" is a masterfully crafted epic that combines breathtaking action with emotional storytelling. It's a must-watch for every cinephile, as it leaves an indelible mark on the hearts of its viewers. So, gear up for an unforgettable journey into the world of bravery and camaraderie with "RRR." Experience the magic of cinema at its finest, as Rajamouli weaves his directorial brilliance once again to mesmerize the audience.`,

        },
        {
            id: 14,
            category: 'bollywood',
            name: 'Bang Bang',
            desc: `Action movies are a thrilling film genre characterized by intense physical feats, daring stunts, and high-octane sequences.`,
            // image: img14,
            release: ' October 2, 2014',
            imdb: '5.6/10',
            content:
                `"Bang Bang" movies are a thrilling and adrenaline-pumping genre that revolves around high-octane action sequences, intense gunfights, and explosive set pieces. These films prioritize excitement, delivering non-stop entertainment through a barrage of intense scenes. Typically, the plot centers on a charismatic and skilled protagonist, often an undercover agent, rogue cop, or a skilled mercenary. They find themselves entangled in a web of danger, espionage, or crime, leading to a series of confrontations that keep viewers on the edge of their seats.
  
          The hallmark of "Bang Bang" movies is their emphasis on action over intricate storytelling. Fast-paced chases, daring stunts, and spectacular shootouts dominate the screen time, leaving little room for character development or intricate plot arcs. The antagonist is usually a formidable force, challenging the hero's abilities and pushing them to their limits.
          
          Visual effects and choreography play a vital role in these movies. Audiences are treated to meticulously choreographed fight sequences and explosions that aim to create a visceral experience. The movies often incorporate cutting-edge technology, high-tech weaponry, and breathtaking locations to enhance the overall cinematic experience.
          
          While character depth might take a back seat, the charismatic lead often brings a sense of charm and wit to the narrative. Their one-liners and charismatic presence contribute to the genre's appeal. "Bang Bang" movies are a testament to the magic of escapism, transporting viewers to a world where over-the-top action and heroics reign supreme.
          
          Notable examples include the "Die Hard" series, "Mad Max: Fury Road," and the "Fast & Furious" franchise. These films have gained massive popularity due to their ability to provide an adrenaline rush and pure excitement. Despite criticisms about their lack of depth, "Bang Bang" movies have carved out a unique space in the cinematic landscape, offering a guilty pleasure for those seeking unadulterated action and entertainment.`,
        },
        {
            id: 15,
            category: 'bollywood',
            name: 'Thugs Of Hindostan',
            desc: "Action-packed saga, 'Thugs of Hindostan,' a rollercoaster ride through daring heists and epic battles in colonial India.",
            // image: img15,
            release: '12th August,2021',
            imdb: '5.9/10',
            content:
                `"Thugs of Hindostan" is an Indian action-adventure film set in the 18th century during the British colonial era. The story follows a group of rebellious thugs who come together to challenge the oppressive rule of the British East India Company. Led by the charismatic and cunning Khudabaksh Azaad (played by Amitabh Bachchan), the group uses their unique skills and tactics to fight against the British forces.
  
          The plot takes a turn when Firangi Mallah (played by Aamir Khan), a wily and unpredictable character, is recruited to infiltrate the thug group and gather information for the British. As the narrative unfolds, alliances are tested, loyalties are questioned, and epic battles ensue as the characters navigate a world of deceit, action, and adventure.
          
          The film blends action, drama, and elements of historical fiction, showcasing grand battles, daring heists, and larger-than-life characters. While the movie received mixed reviews for its complex plot and narrative execution, it remains notable for its scale, performances, and depiction of colonial-era India`,
        },
        {
            id: 16,
            category: 'bollywood',
            name: 'Brahmastra',
            desc: "Exploring the Enigma of Brahmastra: A Cinematic Odyssey",
            // image: img16,
            release: '12th August,2021',
            imdb: '8.9/10',
            // content: <Brahmastra />,
        },
        {
            id: 17,

            category: 'bollywood',
            name: 'Bhediya',
            desc: "Bhediya is a story of a man named Bhaskar who gets bitten by a wolf in the forests of Arunachal.",
            // image: img17,
            release: '25th November, 2022',
            imdb: '6.8/10',
            content: `Bhaskar and his cousin Janardhan "Jana" visit a small town in Arunachal Pradesh as part of a road-building project. They meet two natives named Jomin and Panda , who show them around. Bhaskar is chased and bitten by a wolf in the wild one night. Jana and Jomin quickly transport him to Dr. Anika, the local veterinarian. Seeing the large bite mark on Bhaskar's back and his obvious discomfort, she administers an injection in the hopes of relieving his suffering.
  
        The next day, Bhaskar begins to see changes inside himself. He has heightened senses of smell and hearing, and he communicates with animals. Meanwhile, the locals and tribals are opposed to the idea of cutting down trees in woods to build roads and refuse to support it. However, Bhaskar is able to gain the backing of the youth, who agree to the scheme. Soon after, two persons who were involved in the project are discovered dead. The scratch and bite marks on their bodies indicate that they were mauled and killed by an animal. Panda claims that the killings are the work of a shape-shifting werewolf, but no one believes him.
        
        Jana assumes Bhaskar is the shape-shifting werewolf based on his increasingly weird behaviour. Jana and Jomin steal some of Bhaskar's stools to run a stool test and discover that human bone fragments were found in Bhaskar's stools. It is revealed that Bhaskar is really the perpetrator of the crimes, as he tells them that he has been transforming into a werewolf every night since being bitten by the wolf, and that he has no control over it.
  
  They decide to confine Bhaskar in a remote location so that he does not succumb to his own desires. However, a local cop notices them and learns the truth, threatening to divulge Bhaskar's name to everyone. The wolf that had bitten Bhaskar then appears and kills the cop, allowing them to flee. They go to an elderly doctor in try to discover a treatment for Bhaskar's ailment. He informs them that the only way for Bhaskar to be cured of his metamorphosis is for him to be bitten by the same wolf on a new moon night in the same location as before.
  
  Bhaskar walks to the forest with Jana and Jomin, wearing protective gear all over his body save his rear end, where he has to be bitten by the wolf, and waits for the wolf to emerge. They are surprised to realise that the wolf is none other than Dr. Anika, who is also a shape-shifter. She reveals that she was bitten by a wolf around a century ago. She has been the forest's protector since then, murdering anybody who attempted to ruin the forest and its trees. She had bitten Bhaskar with the intention of killing him, but she had spared him because she sensed kindness within him. She advises him to avoid deforestation and its consequences.
  
  Anika, suddenly, is shot down and captured by the local police force. Bhaskar transforms into a werewolf and rescues Anika, killing the policemen. However, Anika succumbs to her injuries and falls off a cliff, leaving Bhaskar heartbroken. He decides to work on constructing the roads, but around the borders of the forest, leaving the trees unharmed.`
        },
        {
            id: 18,
            category: 'bollywood',
            name: 'Shivay',
            desc: "Ajay Devgn's 'Shivaay': A Gripping Tale of Sacrifice, Action, and Undying Love",
            // image: img18,
            release: '28th October, 2016',
            imdb: '6.3/10',
            content: `"Shivaay" follows the journey of Shivaay, a skilled mountaineer and a skilled trekking guide, who lives in the Himalayas. He values his solitude and has a deep connection with the mountains. During one of his treks, he meets Olga, a Bulgarian tourist, and they eventually fall in love. Olga becomes pregnant, and despite their cultural differences, she gives birth to their daughter, Gaura.
  
        A few years later, Gaura expresses a desire to meet her mother's family in Bulgaria. Shivaay, wanting the best for his daughter, takes her on a trip to Bulgaria. However, their joyous journey takes a dark turn when Gaura is kidnapped by a child trafficking gang. Shivaay is determined to rescue his daughter and embarks on a perilous journey across different countries to find her.
        His path is filled with dangerous obstacles and intense action sequences as he battles against powerful and ruthless individuals involved in the trafficking ring. Throughout his journey, Shivaay's love for his daughter and his determination to bring her back become his driving force. The story highlights the lengths a father would go to protect his child and the sacrifices he's willing to make.
  
  As the story unfolds, Shivaay's character goes through intense emotional turmoil, and he encounters both friends and adversaries who shape his journey. The film explores themes of love, sacrifice, and the strength of a parent's bond with their child.
  
  Through a series of heart-stopping action scenes and emotional moments, Shivaay's relentless pursuit of his daughter takes center stage. The film combines breathtaking visuals of the Himalayas with adrenaline-pumping action sequences, creating a unique cinematic experience.
  
  In the end, Shivaay's determination and bravery lead him to a final confrontation where he must not only save his daughter but also confront the villains responsible for the tragedy. The movie concludes with a powerful message about the importance of family and the lengths one can go to protect their loved ones.
  
  "Shivaay" is a gripping tale of a father's unconditional love and his unwavering fight against all odds to reunite with his daughter. It's a roller-coaster ride of emotions, action, and adventure that showcases the power of a parent's love in the face of adversity.`
        },
        {
            id: 19,
            category: 'bollywood',
            name: 'Pathaan',
            desc: "An Indian agent races against a doomsday clock as a ruthless mercenary, with a bitter vendetta, mounts an apocalyptic attack against the country.",
            // image: img19,
            release: '25th January 2023',
            imdb: '5.9/10',
            content: `Meanwhile, Pathaan is a RAW agent, who along with his senior officer Nandini Grewal open a unit dubbed "Joint Operations and Covert Research" (JOCR) in order to recruit former RAW agents who were forced to retire due to past trauma or injury, but want to continue serving the country. With RAW joint secretary, Colonel Sunil Luthra's acceptance, Pathaan and his team head to Dubai to stop Outfit X's suspected plans of attacking the President of India at a scientific conference. However, they realize that their actual plan was to kidnap two scientists Dr. Farooqui and Dr. Sahani and the information they received about the imminent attack on the President was just a ruse to mislead them.
  
        Jim attacks the scientists' convoy and Pathaan tries to stop him. A fight ensues, where Jim manages to escape with Dr. Sahani. At the debrief back at the agency, Luthra reveals that Jim was a former RAW agent, who was awarded with the Vir Puraskar for his bravery after the agency could not find his body when Somalian terrorists killed his wife and unborn child after the government refused to pay out the ransom demanded. He had apparently faked his death in order to seek vengeance against the agency and country for not saving his family.
        
        Meanwhile, Pathaan learns about the codeword dubbed "Raktbeej" and also that the dead people in Dubai were ex-agents and their money was transferred from the account of Rubina Mohsin (Rubai), a Pakistani doctor in Spain. Pathaan travels to Spain and is captured by Jim's men, where he also learns that Rubai is an ex-ISI agent. When Jim leaves his hideout, Rubai attacks Jim's men and escapes with Pathaan. Rubai reveals that Raktbeej is in Moscow, where they travel to steal it before Jim does. However, Rubai betrays Pathaan and has him captured by the Russian police. It is revealed that Jim used Rubai to make Pathaan steal the Raktbeej for himself. Pathaan is captured and taken to prison by train, but is saved by Avinash Singh "Tiger" Rathore.
        
        Three years later, Pathaan travels to Africa and captures Jim's henchman Raafe. He meets Nandini and reveals about Jim purchasing two saber missiles, while Nandini reveals Rubai's location in Paris. Pathaan meets Rubai, who reveals that the Raktbeej is a mutated smallpox virus, which was forcibly developed by a captive Dr. Sahani under Jim's orders. She also expresses guilt about betraying Pathaan without knowing that her country would plan such a heinous attack. They travel to Jim's lab in Siberia and manage to recover one orb containing the virus with great difficulty, while Jim escapes with the other orb. Luthra and Nandini reach Jim's lab to take the orb back to India in order to develop a vaccine. Luthra also has Rubai arrested for having questionable loyalties.
        
        At the Indian Institute of Contagious Diseases (IICD), Dr. Farooqui opens up the orb to Nandini without apparently finding anything. Jim calls them and reveals that the orb has already spread the virus in the facility. The infected scientists, along with Nandini die in the facility by shooting themselves, to curb the spread of the virus. Later, the facility is destroyed in a controlled blast. Jim provides an ultimatum to evacuate Indian soldiers out of Kashmir within 24 hours. Pathaan interrogates Raafe about the location of the missile and learns that the missile is situated in Afghanistan. After rescuing Rubai, they lure Jim's associates into a trap and attack Jim's base. Qadir is killed by Rubai after he activated the missile containing the virus. Pathaan chases after Jim with a jetpack and they both crash land into a cabin.
        
        Meanwhile, Rubai deactivates the missile, but finds that Raktbeej is not in the missile, but instead in a passenger-bound airplane, which is about to land in Delhi. Rubai informs Pathaan, who finds that Jim has the detonator. Luthra calls the air traffic control to prevent the plane from landing in Delhi. In the cabin, Pathaan and Jim fight brutally, resulting in the cabin to begin sliding off a cliff. Despite getting stabbed by Jim, Pathaan steals the detonator, deactivates Raktbeej and kills Jim by throwing him out of the cabin as the foundation is about to break. Afterwards, Pathaan is reinstated into RAW and made as the head of JOCR, while Nandini is posthumously awarded with the Vir Puraskar for her bravery.`
        },
        {
            id: 20,
            category: 'bollywood',
            name: 'Shershaah',
            desc: "Vikram Batra's Legacy Comes Alive: Shershaah's Real-Life Inspirations",
            // image: img20,
            release: '12th August, 2021',
            imdb: '7.8/10',
            content: `The story revolves around the life of Vikram Batra, played by Siddharth Malhotra, who hailed from a small town in Himachal Pradesh, India. Right from his early days, Vikram displayed a zest for life, a deep sense of duty, and an infectious charisma that drew people towards him.
  
        As Vikram joins the Indian Military Academy (IMA) with the dream of serving his country, he quickly stands out as a natural leader. His nickname "Shershaah," meaning "Lion King," becomes a symbol of his courage and determination. The film takes viewers through his rigorous training, where his bond with fellow cadets and his love story with Dimple Cheema, played by Kiara Advani, blossom amidst the challenges.
        
        The heart of the movie lies in the Kargil War, a conflict between India and Pakistan that took place in the high-altitude region of Kargil. As part of the 13 JAK Rifles Regiment, Captain Vikram Batra's courage shines on the battlefield. His iconic words "Yeh Dil Maange More" (This heart craves for more) during a mission to recapture a strategic peak become etched in the memory of the nation.
        
        Vikram Batra's valiant efforts and leadership inspire his unit, leading them to victory in several critical missions. However, during the battle for Point 4875, a fierce encounter with enemy forces unfolds. Despite facing treacherous conditions, Captain Batra exemplifies unparalleled bravery, putting the safety of his men above his own. Tragically, he makes the ultimate sacrifice in the line of duty.
        
        Legacy and Impact:
        "Shershaah" not only recounts Captain Vikram Batra's heroic acts on the battlefield but also celebrates his humility, camaraderie, and selflessness. His legacy lives on, serving as an inspiration for generations to come. The movie underscores the sacrifices made by Indian soldiers and the indomitable spirit that defines the armed forces.`
        },
        {
            id: 21,

            category: 'bollywood',
            name: 'Main Tera Hero',
            desc: `Varun Dhawan's Energetic Performance Shines in "Main Tera Hero"`,
            // image: img21,
            release: '4th April, 2014',
            imdb: '5.2/10',
            content: `The story revolves around the life of Seenu (Varun Dhawan), a mischievous and fun-loving young man who is sent to Bangalore for his higher studies by his parents. Seenu is not much interested in studies and often gets into trouble due to his playful nature.
  
        During his time in Bangalore, Seenu falls in love with Sunaina (Ileana D'Cruz), a beautiful and strong-willed girl. However, Sunaina is also being pursued by Angad (Arunoday Singh), a corrupt police officer. Seenu's attempts to win Sunaina's heart lead him into humorous and chaotic situations.
        
        In an unexpected turn of events, Seenu crosses paths with Ayesha (Nargis Fakhri), an eccentric and outgoing girl who is smitten by him. Ayesha mistakes Seenu for a tough and fearless guy due to a misunderstanding. Seenu decides to play along with this misconception, leading to hilarious situations as he juggles between Ayesha and Sunaina.
        
        As the story unfolds, Seenu's web of lies becomes more complex, and his efforts to keep both Ayesha and Sunaina happy lead to a series of comedic mishaps. Angad, too, gets caught up in the confusion, adding to the chaos.
        
        The climax of the film takes place during a wedding ceremony, where Seenu's true identity is revealed to both Ayesha and Sunaina. The confusion is cleared up, and the characters come to terms with their feelings.`
        },
        {
            id: 22,

            category: 'bollywood',
            name: 'Mujhse Shaadi Karogi',
            desc: "Salman Khan, Priyanka Chopra, and Akshay Kumar Shine in This Bollywood Hit",
            // image: img22,
            release: '30th July, 2004',
            imdb: '6.7/10',
            content: `Sameer (played by Salman Khan) is a young and vibrant man with a quick temper. He is trying to find a job and starts working as a lifeguard in Goa. One day, while on duty, he saves a beautiful woman named Rani (played by Priyanka Chopra) from drowning. Sameer falls head over heels for Rani and decides to pursue her. However, Rani mistakes his intentions and believes him to be a pervert.
  
        Unbeknownst to Sameer, Rani is already in love with her friend Sunny (played by Akshay Kumar), who is a well-mannered and kind-hearted man. Sunny is also Sameer's neighbor, leading to various comedic situations as Sameer tries to win Rani's heart.
        
        As Sameer attempts to woo Rani, his efforts often backfire due to his impulsive and unpredictable behavior. He seeks advice from his quirky and mischievous landlord, played by Amrish Puri, who adds to the chaos by encouraging Sameer's eccentric strategies.
        
        Throughout the movie, Sameer and Sunny's friendship is tested as they both vie for Rani's affection. The movie's comedic elements come from the misunderstandings and rivalry between Sameer and Sunny. Their attempts to one-up each other lead to hilarious situations and comic confrontations.
        
        As the story unfolds, misunderstandings are cleared up, and the characters realize the truth about their feelings. Sameer and Sunny eventually reconcile, and Sameer learns that love is not about pursuing someone relentlessly but understanding and respecting their feelings.`
        },
        {
            id: 23,

            category: 'bollywood',
            name: 'Partner',
            desc: "Salman Khan and Govinda Shine in This Bollywood Comedy Blockbuster.",
            // image: img23,
            release: '20th July, 2007',
            imdb: '5.5/10',
            content: `The story revolves around a love guru named Prem (Salman Khan), who runs a successful business helping couples in troubled relationships. He believes he has a special gift for understanding love and relationships. However, his own love life is quite the opposite. Prem himself struggles to find true love and has a history of failed relationships.
  
        One day, a wealthy businessman named Raj (Govinda) approaches Prem for help with his girlfriend's relationship issues. Raj's girlfriend is a modern and successful businesswoman named Priya (Katrina Kaif). Priya, however, is oblivious to the fact that Raj is seeking Prem's guidance.
        
        As Prem starts giving Raj advice on how to win Priya's heart, hilarious misunderstandings and complications arise. Raj follows Prem's suggestions, leading to comical situations and mistaken identities. Meanwhile, Prem's best friend Naina (Lara Dutta) is secretly in love with him but is afraid to express her feelings.
        
        As the story unfolds, Raj and Prem's friendship deepens, and Raj becomes aware of the advice Prem has been providing. The climax of the film takes place during a cruise trip, where all the misunderstandings and secrets are revealed, leading to a series of funny and heartwarming moments.
        
        In the end, true love prevails, misunderstandings are cleared, and Raj and Priya's relationship is strengthened. Naina also finds the courage to confess her feelings to Prem, and they too find happiness together.`
        },

        // Technology (id: 24 - 36)
        {
            id: 24,
            category: 'technology',
            name: '5G Technology and Connectivity',
            // image: img24,
            details: '5G Unleashed: A New Era of Blazing-Fast Connectivity and Innovation',
            content: `In the heart of a bustling city, a group of tech enthusiasts gathered at a local park, eagerly awaiting the unveiling of a groundbreaking technological advancement. The event was abuzz with excitement as representatives from the leading telecommunications company took the stage. The curtains drew back, revealing a sleek, futuristic device that would change the way people connected with the world around them.
  
        The device was a smartphone, but not just any smartphone. It was a device designed to harness the power of 5G connectivity – the fifth generation of wireless technology. As the presenter explained, 5G was not just an incremental improvement; it was a leap into a new era of communication and connectivity.
        
        With its lightning-fast speeds, low latency, and capacity to connect millions of devices simultaneously, 5G was poised to revolutionize industries across the board. The audience listened in awe as they learned about the potential applications of 5G technology.
        
        In healthcare, 5G-enabled medical devices could transmit real-time patient data to doctors, enabling remote diagnosis and treatment. Surgical procedures could be performed with the guidance of experts located miles away, all in real-time.
        
        For transportation, self-driving cars would communicate with each other and with smart traffic management systems to create a seamless flow of traffic, reducing congestion and accidents. Public transportation systems would become more efficient and responsive, offering a new level of convenience to commuters.
        
        In entertainment, virtual reality experiences would be immersive and lag-free, opening up new avenues for gaming and interactive storytelling. Streaming 4K and even 8K content would be seamless, giving viewers a cinematic experience on their devices.
        
        Smart cities would benefit immensely from 5G. Smart grids would optimize energy distribution, reducing waste and lowering costs. Municipal services would be enhanced through real-time data collection and analysis, leading to improved waste management, traffic control, and more.
        
        As the presentation concluded, the crowd erupted into applause. The 5G connectivity expansion wasn't just about faster download speeds; it was about transforming the way society operated, communicated, and lived. The future had arrived, and it was more connected than anyone could have imagined.
        
        And so, in the heart of that park, a new era dawned. The 5G revolution had begun, and the world would never be the same again.`
        },
        {
            id: 25,
            category: 'technology',
            name: 'Artificial Intelligence and Machine Learning',
            // image: img25,
            details: 'Embarking on a Journey with Artie the AI and Max the ML: The Wonders of AI and ML',
            content: `Once upon a time in a digital kingdom called Technoville, there lived two extraordinary companions named Artie the AI and Max the ML. They were unlike any other inhabitants of Technoville, possessing incredible abilities that made them the talk of the kingdom.
  
        Artie, short for Artificial Intelligence, was known for his immense knowledge and the ability to think and learn just like humans. He had the power to process vast amounts of information in a blink of an eye and make decisions based on patterns and data. Artie was the wise advisor of the kingdom, always ready to provide insights and recommendations to help Technoville prosper.
        
        Max, on the other hand, was a bit mischievous but equally talented. Max stood for Machine Learning, and his specialty was learning from experiences and improving over time. He had an insatiable curiosity and an appetite for data. Max could recognize patterns in data that even the sharpest minds in Technoville couldn't spot. He used these patterns to make predictions and decisions that amazed everyone.
        One day, the king of Technoville faced a dilemma. He needed to predict the weather patterns to prepare for an upcoming festival, but the weather was proving to be quite unpredictable. Artie and Max saw this as an opportunity to showcase their abilities.
  
  Artie, with his vast knowledge of historical weather data, quickly analyzed patterns and predicted a 70% chance of rain. Max, being a lover of real-time data, started collecting information about wind speeds, humidity levels, and cloud formations. As the festival day approached, Max's predictions began to align more and more accurately with the changing conditions.
  
  On the day of the festival, as the first raindrop fell, Artie and Max stood side by side, proudly watching their predictions come true. The festival was prepared, and everyone was amazed by the accurate weather forecast.
  
  From that day on, Artie and Max became the heroes of Technoville. They showed that Artificial Intelligence and Machine Learning could work hand in hand to solve complex problems, make predictions, and improve decision-making.
  
  And so, the curious adventures of Artie the AI and Max the ML continued, as they explored new ways to make Technoville an even smarter and more innovative kingdom, inspiring everyone to embrace the power of technology and learning.`
        },
        {
            id: 26,
            category: 'technology',
            name: 'Augmented Reality and Virtual Reality',
            // image: img26,
            details: 'The Convergence of Realities - A Journey through Augmented and Virtual Worlds',
            content: `In the not-so-distant future, the boundaries between reality and imagination blurred as Augmented Reality (AR) and Virtual Reality (VR) technologies swept the world by storm. These cutting-edge technologies were no longer confined to the realms of entertainment; they had become an integral part of our daily lives, transforming industries, education, and social interactions.
        The story follows Maya, a young architect, as she embarked on a groundbreaking project using AR. With a sleek AR headset, Maya could superimpose intricate 3D models of her architectural designs onto real-world spaces. What used to be blueprints on paper now came to life in front of her eyes. She walked through her virtual creations, adjusting and refining every detail in real-time. Maya's clients marveled at the immersive experience of exploring their future homes before a single brick was laid.
        Meanwhile, on the other side of the spectrum, VR was redefining the way people experienced entertainment. Alex, a gamer and aspiring storyteller, found himself in awe as he slipped on his VR headset. He stepped into a fantasy world that responded to his every move. The tactile sensations, the vivid landscapes, and the lifelike characters made him feel like a true adventurer. As VR arcades popped up across the city, people of all ages could step into realms beyond their wildest dreams.
  
  But the impact of AR and VR wasn't confined to just fun and games. The healthcare industry found new ways to train surgeons using realistic simulations, reducing risks for real patients. Students around the world attended virtual lectures, visiting historic events and exploring distant galaxies in their classrooms. Remote work became more collaborative as colleagues from different corners of the world met in virtual boardrooms, making distance virtually disappear.
  As the technology matured, AR glasses became as commonplace as smartphones once were. Walking down the street, people saw digital information overlaid on their surroundings—directions, reviews of nearby restaurants, historical facts about buildings. Personalized advertisements appeared, tempting them with products tailored to their preferences. Privacy concerns were raised, prompting discussions about the balance between convenience and personal space.
  
  The story of AR and VR was one of rapid advancement, societal change, and ethical considerations. It wasn't a smooth journey—there were setbacks, controversies, and growing pains. Yet, humanity had taken a leap into a new era of perception, where the lines between the physical and digital realms were forever intertwined.
  
  And as the sun set on Maya's bustling city and Alex's fantastical world, the promise of augmented and virtual realities continued to unfold, inspiring generations to dream bigger, explore further, and create a future where anything was possible.
  
  Whether you were an architect shaping cities or a gamer exploring new dimensions, AR and VR were the conduits through which ordinary lives transformed into extraordinary experiences.`

        },
        {
            id: 27,
            category: 'technology',
            name: 'Automation and Robotics',
            // image: img27,
            details: "The RoboHelpers: How Automation and Robotics Transformed a Little Town",
            content: `Once upon a time, in a quiet little town named Techville, there lived a group of friendly and hardworking folks. Life was simple, but they dreamed of making their town a better place. The townspeople often found themselves facing challenges, wishing they had a helping hand to make things easier.
  
        One bright day, a young inventor named Alex moved to Techville. Alex was passionate about technology and believed that it could change lives. With a twinkle in their eye, they brought together a team of engineers and dreamers to work on a groundbreaking project – automation and robotics.
        
        Alex and their team introduced the concept of automation, where machines and computers could perform tasks without human intervention. They started by automating everyday tasks like sorting mail, packaging goods, and even cleaning the streets. The townspeople were amazed at how much time and effort they saved.
        
        But the real magic began with the introduction of robots. These were not the sci-fi robots you see in movies, but friendly and helpful machines designed to assist people. The robots could be programmed to perform a variety of tasks, from helping in the fields to aiding doctors in the town's clinic.
  
  One of the first robots, RoboBuddy, was designed to help elderly residents with daily chores. It could remind them to take their medications, assist in cooking meals, and even engage in cheerful conversations. The seniors quickly formed a bond with RoboBuddy, and loneliness became a thing of the past.
  
  Another remarkable creation was FarmBot, a robot designed to revolutionize agriculture. FarmBot could plant seeds, water plants, and even monitor soil conditions. The farmers no longer had to toil under the hot sun, and their yields increased significantly. Techville's produce became famous for its quality and abundance.
  
  The town's children adored EduBot, a robot that turned learning into an adventure. EduBot made studying fun with interactive lessons and personalized guidance. Every child found a study buddy in EduBot, and the school's performance soared.
  
  As more robots joined the town, Techville transformed into a hub of innovation. People were free to pursue their passions while leaving mundane tasks to the robots. The townspeople's quality of life improved, and the sense of community grew stronger.
  
  However, it wasn't all smooth sailing. The townspeople had to learn to work alongside robots and ensure that they were programmed ethically and responsibly. They also faced challenges in adapting to the changing job landscape, as some jobs were taken over by machines. But with the help of education and training programs, the transition became smoother.
  
  Techville became an inspiration to neighboring towns. Visitors marveled at the harmony between humans and robots. The story of Techville's transformation spread far and wide, encouraging other communities to embrace automation and robotics for the betterment of society.
  
  And so, the little town of Techville taught the world a valuable lesson – that technology, when harnessed for the right reasons, can bring about positive change and create a brighter future for everyone.
  
  The end.
  `
        },
        {
            id: 28,
            category: 'technology',
            name: 'Blockchain Technology',
            // image: img28,
            details: `Crypto Adventures: Exploring Blockchain Technology through Ajay and Pawan's Story`,
            content: `Once upon a time in a digital world called Blockchain Land, lived two friends named Ajay and Pawan. They were always looking for ways to exchange digital treasures securely, without the need for a middleman. One day, they stumbled upon a magical concept called "Blockchain."
  
        Ajay and Pawan learned that a blockchain is like a digital ledger, just like a record book, where transactions are written down. But the special thing about this ledger was that it was distributed across many computers, making it incredibly secure and transparent.
        
        Imagine a treasure chest that can only be opened with a special key. In Blockchain Land, this treasure chest is a "block." Every time Ajay and Pawan wanted to exchange something valuable, like digital coins or important information, they would put it in a block and lock it with their unique keys.
  
  But wait, here's the twist! These blocks are not stored in one place. They are spread across the entire land, in the hands of many people. This makes it nearly impossible for anyone to change the information in a block without everyone else noticing.
  
  To add more magic to the mix, every new block that Ajay and Pawan added to the chain had a piece of information from the previous block, sort of like linking them together. This made the chain unbreakable and tamper-proof.
  
  Now, whenever Ajay wanted to send digital coins to Pawan, he would create a new block. He would write down the transaction details and lock the block with her key. The block would then be sent to the digital treasure chest distributed across Blockchain Land.
  
  But here's the cool part: before the block was added to the treasure chest, all the other people in Blockchain Land would verify the transaction. They would make sure Ajay had enough coins and that he wasn't trying to send the same coins to someone else at the same time (called double-spending).
  
  Once the block was verified, it would be added to the treasure chest, and Ajay's coins would be safely transferred to Pawan. Everyone would know about this transaction, and no one could change it, thanks to the secure chain of blocks.
  
  Ajay and Pawan loved the transparency, security, and simplicity of Blockchain Land. They could exchange treasures without worrying about fraud or middlemen taking a cut.
  
  And so, Ajay and Pawan continued their adventures in Blockchain Land, spreading the word about this amazing technology that had the power to revolutionize how digital transactions were done.
  
  And they all lived transparently and securely ever after.
  
  The end.`
        },
        {
            id: 29,
            category: 'technology',
            name: 'Cloud Computing',
            // image: img29,
            details: 'The Magic of Cloud Computing: A Story of Innovation and Accessibility',
            content: `Once upon a time, in the land of Technologyville, lived a young inventor named Alex. Alex was known for his passion for creating innovative solutions to everyday challenges. He dreamt of making computing more accessible and efficient for everyone in the kingdom.
  
        In the heart of Technologyville, there was a grand library called "The Data Tower," where people stored and accessed their information. However, as time passed, the tower became crowded, making it hard for everyone to manage their data. Alex knew he had to find a way to help his fellow citizens.
        
        One day, while gazing at the sky, Alex had a brilliant idea. He imagined a vast, invisible network of interconnected computers, floating like fluffy clouds. These clouds would hold and manage data, making it easily accessible to anyone, anywhere.
        
        Excited by his idea, Alex set out to create the first Cloud Computing system. He connected several powerful computers together, creating a virtual cloud high above Technologyville. This cloud could store and process vast amounts of data, and people could access it using their devices.
        
        The citizens of Technologyville were amazed. They could now store their information in the cloud and access it whenever they needed, without worrying about running out of space or losing their data. Businesses could scale up their operations without investing in expensive hardware, and students could collaborate on projects seamlessly.
  
  As word spread about this incredible cloud, more people joined in, making the cloud expand and become even more powerful. Alex continued to enhance the cloud's capabilities, adding layers of security, faster processing, and various services that people could use.
  
  Over time, cloud computing became an integral part of Technologyville's landscape. The Data Tower was no longer overcrowded, as most people preferred the convenience and reliability of the cloud. Alex's invention had revolutionized the way people used technology.
  
  And so, the tale of the marvelous cloud became a legend in Technologyville. Alex's vision had turned into reality, bringing computing resources to the fingertips of every citizen. The cloud had made technology accessible, flexible, and efficient for all, forever changing the way they lived and worked.
  
  And to this day, the clouds still float above, continuing to serve the people of Technologyville, reminding them of the power of innovation and the endless possibilities that come from thinking outside the box.
  
  And that, my dear readers, is the enchanting story of cloud computing – a tale of invention, accessibility, and the boundless potential of technology.`
        },
        {
            id: 30,
            category: 'technology',
            name: 'Cybersecurity and Data Privacy',
            // image: img30,
            details: 'Guardians of the Digital Realm: A Tale of Cybersecurity and Data Privacy',
            content: `In a bustling city named Cybertopia, where the hum of technology was constant and digital connections intertwined every aspect of life, lived two individuals named Alex and Maya. They were ordinary citizens who enjoyed the conveniences brought by technology but were also vigilant about the potential risks it posed.
  
        One day, an ominous presence emerged in Cybertopia – a mysterious hacker known as "Shadowbyte." Shadowbyte was notorious for infiltrating systems, stealing personal information, and causing digital chaos. Citizens started experiencing data breaches, identity theft, and unauthorized access to their sensitive information.
        
        Alex, an aspiring computer programmer, and Maya, a cybersecurity enthusiast, were deeply concerned about the threat Shadowbyte posed to their city. They decided to take action. They realized that to protect their digital realm, they needed to understand the twin pillars of cybersecurity and data privacy.
        
        With determination, Alex and Maya delved into the world of cybersecurity. They learned about encryption, firewalls, and multi-factor authentication – the tools that acted as shields against cyber threats. They understood that just like locking the doors of their homes, securing their online presence was equally crucial.
        
        As they further explored, they encountered the concept of data privacy. They realized that their personal information was like a treasure that needed protection. They learned about the importance of giving consent before sharing data, being cautious about the information they disclosed online, and understanding how their data was collected and used.
  
  Empowered with knowledge, Alex and Maya decided to spread awareness among their fellow citizens. They started organizing workshops, seminars, and online campaigns. Their goal was to empower people to take control of their digital lives and make informed decisions about their online interactions.
  
  One day, as Shadowbyte's attacks escalated, Alex and Maya uncovered a lead. They traced the hacker's origins to a secluded underground lair. With the help of local law enforcement and cybersecurity experts, they orchestrated a digital showdown. They used their newfound skills to create a digital fortress, defending against Shadowbyte's attempts to breach their defenses.
  
  The battle raged on, both in the digital realm and the physical world. Through collaboration, innovation, and unwavering determination, Alex and Maya managed to corner Shadowbyte. With a final keystroke, they neutralized the hacker's threat and safeguarded the city's digital infrastructure.
  
  Their story spread far and wide, inspiring citizens in Cybertopia and beyond to become vigilant digital guardians. Alex and Maya's journey showcased the significance of cybersecurity and data privacy, illustrating that in this interconnected world, protection was not only possible but essential.
  
  And so, in the ever-evolving landscape of technology, the legend of Alex and Maya lived on, reminding everyone that while the digital realm held endless possibilities, it also required responsible stewardship to ensure a safe and secure future for all.
  
  `
        },
        {
            id: 31,
            category: 'technology',
            name: 'Internet of Things (IoT)',
            // image: img31,
            details: 'Connecting the Dots: A Tale of the Internet of Things',
            content: `In the not-so-distant future, in the bustling city of Technoville, life had transformed thanks to a remarkable innovation known as the Internet of Things, or IoT.
  
        Meet Alex, an ordinary office worker who woke up to the wonders of IoT one morning. As he went about his day, his alarm clock not only woke him up but also signaled his coffee maker to start brewing his favorite coffee blend. While he enjoyed his breakfast, the refrigerator notified him that he was running low on milk and added it to his shopping list.
        
        As he stepped out onto the street, Alex noticed the city's smart traffic lights dynamically adjusting to the flow of vehicles, reducing congestion and minimizing his commute time. His car, too, was a part of this interconnected web of devices. It alerted him to a potential maintenance issue, prompting him to schedule a visit to the mechanic.
        
        At the office, Alex's workspace was equipped with smart lighting and temperature control, ensuring a comfortable environment. During his meetings, he received real-time updates on his smartwatch, reminding him of tasks and deadlines.
        
        During lunch, Alex visited a local farm-to-table restaurant. He marveled at how the menu displayed QR codes that, when scanned, provided detailed information about the ingredients' origin, nutritional value, and even the farmer who cultivated them. This transparency was made possible by IoT-enabled supply chain tracking.
  
  Later that evening, as Alex relaxed at home, he controlled his smart home system using voice commands. The lights dimmed, his favorite music played, and his thermostat adjusted to his preferred temperature. A delivery drone dropped off his groceries, having received instructions from his refrigerator to restock essentials.
  
  Alex's city had also embraced IoT for urban planning. Smart waste bins signaled when they were full, optimizing garbage collection routes and reducing unnecessary trips. The air quality monitoring system alerted the authorities to potential pollution spikes, allowing prompt intervention.
  
  As the day came to a close, Alex reflected on how the Internet of Things had seamlessly integrated into every aspect of his life, making it more convenient, efficient, and sustainable. From his personal space to the city around him, IoT had connected the dots, creating a harmonious symphony of technology and everyday life.
  
  The story of Technoville illustrates how the Internet of Things has the potential to revolutionize our lives by connecting devices, systems, and data in ways that enhance our experiences and streamline our interactions with the world around us. With IoT, the future is indeed a more connected and intelligent place.`
        },
        {
            id: 32,
            category: 'technology',
            name: 'Quantum Computing',
            // image: img32,
            details: 'Journey into the Quantum Realm: The Story of Quantum Computing',
            content: `In the vast landscape of technology, one field stands out as a beacon of revolutionary potential: Quantum Computing. Imagine a world where computers solve complex problems that were previously deemed impossible, processing vast amounts of data in mere moments. This is the world that quantum computing promises to unlock.
  
        Our story begins with the limitations of classical computing. Traditional computers use bits, which can either be 0 or 1, to process information. While these bits have brought us to incredible heights of technological progress, they face a roadblock when it comes to certain problems, like simulating the behavior of molecules for drug discovery or optimizing complex systems.
        
        Enter the quantum realm. Quantum computing harnesses the principles of quantum mechanics, a branch of physics that deals with the behavior of matter and energy at the smallest scales. Instead of bits, quantum computers use quantum bits, or qubits. Unlike classical bits, qubits can exist in multiple states simultaneously, thanks to a phenomenon called superposition. This allows quantum computers to process a multitude of possibilities at once.
        
        But that's not all. Another quantum phenomenon, entanglement, allows qubits to be interconnected in such a way that the state of one qubit instantly influences the state of another, no matter the distance between them. This property has the potential to create incredibly powerful and parallel computational processes.
        
        Now, let's dive into a real-world scenario to showcase the power of quantum computing. Imagine a complex optimization problem, like finding the most efficient route for a fleet of delivery trucks. In classical computing, this could take an impractical amount of time as the number of variables increases. Quantum computing, on the other hand, can process all potential routes simultaneously, thanks to superposition and entanglement. This could revolutionize logistics, supply chain management, and more.
  
  However, this tale isn't without its challenges. Quantum computers are delicate and susceptible to interference from their environment. Scientists and engineers are working tirelessly to overcome these hurdles and create stable quantum systems. Major tech players, startups, and research institutions are investing heavily in the development of quantum hardware and algorithms.
  
  As our story continues, quantum computing promises advancements in fields like cryptography, optimization, materials science, and artificial intelligence. Researchers are exploring new frontiers, and as the technology matures, it will have a profound impact on industries, economies, and our understanding of the universe.
  
  In conclusion, the story of quantum computing is one of groundbreaking possibilities and exciting challenges. It's a tale of bits and qubits, of superposition and entanglement, and of a future where complex problems are solvable in the blink of an eye. As we journey into the quantum realm, we're rewriting the rules of computation and taking technology to heights we've only dreamed of.`
        },
        {
            id: 33,
            category: 'technology',
            name: 'Full Stack',
            // image: img33,
            details: 'Journey Through the Full Stack: The Complete Web Development Experience',
            content: `Once upon a digital era, in the bustling realm of the internet, lived a young and ambitious programmer named Ajay. Ajay had a deep passion for building websites and applications that could make people's lives easier and more enjoyable. However, the world of web development seemed vast and complex, with many layers of technology to unravel.
  
        Ajay's journey began with learning the basics of web development. Starting with HTML and CSS, the foundational languages that gave structure and style to web pages, Ajay could already create static websites that looked pleasing to the eye. But something was missing – interactivity.
        Curious and determined, Ajay delved into the world of JavaScript. This magical scripting language allowed Ajay to breathe life into web pages. Buttons could now be clicked, forms filled, and elements dynamically changed. The websites were no longer just static entities but living, breathing creations.
  
  As Ajay's skills grew, so did the complexity of the projects. Ajay realized that modern web development was not limited to just one layer; it spanned the entire spectrum of technology. And thus, the concept of Full Stack development revealed itself.
  
  The Full Stack, Ajay learned, referred to the complete range of technologies required to build a web application. It was like constructing a grand skyscraper, with each floor representing a different layer of technology.
  
  The journey upward began with the Front-End. This was where the user interface came to life. Ajay mastered various JavaScript frameworks like React and Vue.js, which allowed for the creation of dynamic and responsive front-end experiences. The user's every click was met with instant feedback, creating a sense of magic.
  
  But as Ajay looked down from the heights of the Front-End, a realization dawned – every interaction by the user triggered a series of events in the background. This was the realm of the Back-End. Ajay descended to this layer, learning server-side languages like Node.js, Python, and databases like MySQL and MongoDB. Here, data was stored, processed, and served to the Front-End.
  
  The story did not end there. Ajay realized that no skyscraper stood without a strong foundation. The DevOps layer was the invisible force that kept everything running smoothly. Ajay learned about deployment, server management, and continuous integration tools that ensured the application was always available and reliable.
  
  With newfound knowledge, Ajay's creations evolved into full-fledged web applications. These applications seamlessly connected users, data, and services, providing meaningful experiences on the digital landscape.
  
  And so, Ajay's journey through the Full Stack came to a fulfilling conclusion. From the heights of the Front-End to the depths of the Back-End, and the stability of DevOps in between, Ajay had mastered the art of Full Stack development. Armed with this knowledge, Ajay continued to build remarkable digital wonders that enriched the lives of people all around the world.
  
  And thus, dear readers, we come to the end of our tale – a journey through the Full Stack, where a dedicated programmer like Ajay discovered the power of weaving together technologies to create extraordinary web experiences. Just as every layer contributed to the whole, so did Ajay's determination and passion contribute to the realm of web development, shaping the digital world one code at a time.`
        },
        {
            id: 34,
            category: 'technology',
            name: 'Nanotechnology',
            // image: img34,
            details: 'Catalyzing Change: The Nanotechnology Revolution Unveiled',
            content: `In the ever-evolving landscape of science and technology, one field stands out as a true testament to human ingenuity and innovation: nanotechnology. Imagine a world where the invisible becomes tangible, and the unimaginable becomes reality. This is the realm of nanotechnology – a captivating journey into the world of the ultra-small.
  
        Nanotechnology derives its name from the nanometer, a unit of measurement so minuscule that it's hard to fathom. A nanometer is one billionth of a meter – for perspective, a sheet of paper is about 100,000 nanometers thick. At this scale, the properties of materials can drastically change, leading to astonishing possibilities.
        
        Our story begins with a scientist named Dr. Emily Carter. Driven by an insatiable curiosity and a passion for discovery, she delved into the world of nanotechnology with a vision to reshape the future. At her state-of-the-art laboratory, she carefully manipulates atoms and molecules, assembling them like building blocks.
        
        One day, while experimenting with carbon atoms, Dr. Carter stumbled upon a groundbreaking discovery: graphene. A single layer of carbon atoms arranged in a hexagonal lattice, graphene turned out to be an extraordinary material with exceptional strength, electrical conductivity, and flexibility. The potential applications seemed boundless.
        
        As news of her breakthrough spread, industries around the world took notice. In electronics, graphene's exceptional conductivity promised ultra-efficient devices. Medical researchers saw potential in its ability to detect diseases at an early stage, thanks to its unparalleled sensitivity. Engineers explored its potential for creating lightweight, yet incredibly strong, materials for construction and transportation.
        
        But nanotechnology wasn't confined to graphene alone. Nanomaterials like quantum dots began revolutionizing displays, enabling vibrant colors and energy-efficient screens. Nanomedicine allowed for targeted drug delivery, minimizing side effects and maximizing treatment efficacy. Even the energy sector underwent a transformation with nanoscale solar cells and energy storage devices.
        
        However, with great power comes great responsibility. The unprecedented capabilities of nanotechnology also raised ethical concerns. The ability to manipulate matter at the atomic level posed questions about safety, environmental impact, and unintended consequences.
        
        Governments, scientists, and organizations worldwide collaborated to establish guidelines and regulations to ensure the responsible development of nanotechnology. Dr. Carter herself became an advocate for ethical and sustainable practices, emphasizing the importance of considering long-term implications.
        
        As the years passed, the marvels of nanotechnology became an integral part of our lives. From nano-enabled clothing that adapts to temperature changes to water purification systems that remove contaminants at the molecular level, the influence of nanotechnology is felt in every corner of society.
        
        And so, the story of nanotechnology continues to unfold, filled with a sense of wonder and responsibility. Dr. Emily Carter's journey remains a testament to human determination and the limitless potential of the nano-world. As we venture deeper into this realm, let us remember that the true measure of our success lies not just in what we create, but in how we ensure its positive impact on our world.`
        },
        {
            id: 35,
            category: 'technology',
            name: 'Smart Home and Smart City Solutions',
            // image: img35,
            details: 'Cultivating Comfort and Efficiency: Exploring Smart Home and Smart City Solutions',
            content: `In the bustling city of Futura, where technology seamlessly intertwined with daily life, lived a young woman named Maya. Maya was an architect who had always been fascinated by the concept of creating sustainable and intelligent living spaces. She had a dream of building a home that not only provided comfort but also adapted to the needs of its occupants.
  
        One day, Maya's dream took a giant leap forward when she was offered the chance to work on a groundbreaking project – the development of a smart city called Elysium. Elysium aimed to transform urban living by integrating advanced technologies into every facet of its infrastructure. Maya was tasked with designing smart homes that would redefine modern living.
        
        As Maya delved into her work, she envisioned homes that could anticipate the needs of their inhabitants. Lights that adjusted according to the time of day, thermostats that optimized energy usage, and windows that automatically tinted based on sunlight were just the beginning. Maya's homes were equipped with AI-driven systems that learned the residents' routines and preferences, making life more convenient and efficient.
        
        Beyond individual homes, Maya was also instrumental in shaping the city's infrastructure. Elysium had smart traffic management that used real-time data to optimize traffic flow, reducing congestion and emissions. Public spaces were equipped with solar-powered benches that provided charging ports and Wi-Fi. Waste management systems automatically sorted and recycled waste, contributing to a cleaner environment.
        
        Maya's work wasn't just about technology; it was about enhancing the quality of life. Elderly residents could enjoy independent living with wearable devices that monitored health and alerted medical services in case of emergencies. Parks were designed with interactive play equipment that encouraged physical activity and social interaction among children.
        
        Definition - Smart Home and Smart City Solutions:
        Smart Home Solutions refer to the integration of advanced technologies into residential spaces to enhance comfort, convenience, security, and energy efficiency. These solutions often involve the use of Internet of Things (IoT) devices, sensors, and automation systems to allow homeowners to control various aspects of their homes remotely and create an environment that adapts to their preferences and needs.
        
        Smart City Solutions, on the other hand, involve the incorporation of technology and data-driven approaches to enhance urban living. This includes the integration of digital infrastructure, data analytics, and connectivity to optimize city services, improve resource management, and provide a better quality of life for residents. These solutions encompass a wide range of areas, including transportation, energy, healthcare, waste management, public safety, and more.
        
        In essence, both Smart Home and Smart City Solutions leverage technology to create environments that are not only efficient but also sustainable, user-friendly, and responsive to the changing needs of individuals and communities. These solutions play a crucial role in shaping the future of urban living by promoting innovation, sustainability, and improved overall well-being.`
        },
        // Hollywood (id: 36 - 48)
        {
            id: 36,
            desc: `Journey to Pandora: The Epic Saga of Avatar - A Tale of Unity, Love, and Environmental Guardianship`,
            imdb: '7.8/10',
            release: '18th December, 2009',
            category: 'hollywood',
            // image: img36,
            name: 'Avatar',
            content: `In the mid-22nd century, humanity has exhausted Earth's resources and turned its attention to the distant moon Pandora, rich in a valuable mineral called unobtainium. However, Pandora's lush ecosystem is home to the Na'vi, an indigenous humanoid species deeply connected to their environment. To extract the mineral, humans create the Avatar Program, which allows humans to remotely control genetically engineered Na'vi-human hybrids called avatars.
  
        Jake Sully, a paraplegic Marine, becomes part of the program as he shares his twin brother's DNA. He is sent to Pandora to infiltrate the Na'vi and gather information. Using his avatar, Jake encounters Neytiri, a Na'vi princess and skilled hunter. Under the guidance of Neytiri, Jake learns about the Na'vi culture and the interconnectedness of all living things on Pandora.
        
        As Jake spends more time with the Na'vi, he becomes conflicted between his loyalty to the humans and his growing attachment to the Na'vi way of life. He witnesses the destruction caused by human mining operations and the Na'vi's struggle to protect their land. Gradually, he falls in love with Neytiri and becomes an integral part of the Na'vi community.
        
        Tensions rise when Colonel Miles Quaritch, head of security, orders an assault on the Na'vi to clear the way for mining. Jake, torn between his allegiance to the humans and his love for Neytiri and her people, must make a difficult choice. He ultimately joins the Na'vi in a battle against the humans, using his unique perspective and abilities to help them resist the invasion.
        
        The film climaxes in an epic battle between the technologically advanced human forces and the spiritually connected Na'vi. With the help of Jake's insight and the unity of the Na'vi clans, the humans are repelled, and Pandora's balance is restored. Jake permanently transfers his consciousness to his avatar, choosing to live as one of the Na'vi and protect their way of life.
        
        "Avatar" is a tale of environmentalism, cultural understanding, and the triumph of unity over greed. Its stunning visual effects and immersive storytelling have made it a landmark film in the world of science fiction cinema.`
        },
        {
            id: 37,
            desc: `Avengers: Endgame - A Spectacular Culmination of Heroes, Hope, and Epic Battles`,
            imdb: '8.4/10',
            release: '26th April, 2019',
            category: 'hollywood',
            // image: img37,
            name: 'Avengers EndGame',
            content: `"Avengers: Endgame" is the epic conclusion to the Marvel Cinematic Universe's Infinity Saga. The movie picks up after the devastating events of "Avengers: Infinity War," where the villainous Thanos successfully wiped out half of all life in the universe using the Infinity Stones. The remaining Avengers and their allies are left reeling from their loss and searching for a way to undo the catastrophic snap.
  
        As the movie begins, the Avengers, including Iron Man (Tony Stark), Captain America (Steve Rogers), Thor, Hulk (Bruce Banner), Black Widow (Natasha Romanoff), and Hawkeye (Clint Barton), are determined to reverse the effects of Thanos' snap. They hatch a plan to travel back in time to retrieve the Infinity Stones from different points in history, hoping to use them to restore the present timeline.
        
        The Avengers split into teams to retrieve the stones, leading to a series of adventures that revisit key moments from previous MCU films. Along the way, they encounter challenges and confront their own pasts. However, their actions in the past have consequences, and they must navigate a delicate balance to ensure they don't disrupt the timeline irreparably.
        
        Meanwhile, Thanos learns of their plan and seeks to stop them. A climactic battle unfolds as the Avengers, now armed with the Infinity Stones, face off against Thanos and his forces. The battle is a culmination of over a decade of storytelling, with heroes from across the MCU coming together to fight for the fate of the universe.
        
        In a heartbreaking moment, Iron Man sacrifices himself by wielding the Infinity Stones to defeat Thanos and his army. His actions save the day, but at a tremendous personal cost. The Avengers mourn their fallen comrade and hold a funeral to honor Tony Stark's legacy.
        
        The movie concludes with Captain America returning the Infinity Stones to their proper places in the past, but instead of returning to the present, he chooses to live out his life in the past with his love, Peggy Carter. He passes on his shield to Sam Wilson, indicating that the legacy of Captain America will continue.
        
        "Avengers: Endgame" is a thrilling and emotional rollercoaster that ties up the loose ends of the Infinity Saga while setting the stage for the future of the MCU. It's a story of sacrifice, teamwork, and the enduring spirit of Earth's mightiest heroes.`
        },
        {
            id: 38,
            desc: `"Jurassic Park" - A Mesmerizing Adventure Among Living Dinosaurs`,
            imdb: '8.1/10',
            release: '11th June, 1993',
            category: 'hollywood',
            // image: img38,
            name: 'Jurassic Park',
            content: `The "Jurassic Park" movie series, directed by Steven Spielberg and inspired by Michael Crichton's novel, takes audiences on an exhilarating journey into a world where dinosaurs are brought back to life through advanced genetic engineering. Fusing cutting-edge technology with ancient creatures, the series explores the awe-inspiring, yet perilous, consequences of playing with nature's balance.`
        },
        {
            id: 39,
            desc: `Iconic Characters and Intergalactic Adventures: The Legacy of Star Wars`,
            imdb: '8.6/10',
            release: '25th May, 1977',
            category: 'hollywood',
            // image: img39,
            name: 'Star Wars (IV)',
            content: `In a galaxy far, far away, the "Star Wars" saga unfolds, blending elements of science fiction, fantasy, and adventure. The story begins with "Episode I: The Phantom Menace," where the Galactic Republic is in a period of decline. Two Jedi Knights, Qui-Gon Jinn and Obi-Wan Kenobi, discover a young slave named Anakin Skywalker who is strong in the Force, an energy field that grants special abilities.
  
        As the saga continues with "Episode II: Attack of the Clones," tensions rise as political unrest threatens to fracture the galaxy. Anakin and Padmé Amidala, a former queen turned senator, form a forbidden romance while the Sith Lords manipulate events behind the scenes.
        
        "Episode III: Revenge of the Sith" sees the transformation of Anakin into Darth Vader, a Sith Lord, as he succumbs to his fear and anger, turning against the Jedi Order. The Republic collapses, and the Galactic Empire is born. Jedi Master Obi-Wan Kenobi goes into hiding, while the last hope for the galaxy rests in twin siblings, Luke and Leia, born to Padmé before her untimely death.
        
        "Episode IV: A New Hope" introduces Luke Skywalker, a farm boy who discovers his connection to the Force and joins the Rebel Alliance against the tyrannical Empire. Guided by the wise Obi-Wan and the smuggler Han Solo, Luke embarks on a journey to rescue Princess Leia and ultimately destroy the Empire's superweapon, the Death Star.
        
        "Episode V: The Empire Strikes Back" follows as the Rebels face setbacks, and Luke seeks further training from Jedi Master Yoda. Meanwhile, Darth Vader reveals his true identity to Luke, setting up a dramatic confrontation.
        
        "Episode VI: Return of the Jedi" sees the final battle between the Rebels and the Empire. Luke confronts Darth Vader and Emperor Palpatine, seeking to redeem his father and save the galaxy. The Empire falls, and balance is restored to the Force.
        
        The sequel trilogy, starting with "Episode VII: The Force Awakens," introduces a new generation of characters, including Rey, Finn, and Kylo Ren. The Resistance battles the First Order, a remnant of the Empire, as secrets of the past are unveiled.
        
        "Episode VIII: The Last Jedi" challenges the concept of heroes and offers deeper insights into the Force. Rey seeks training from Luke, while Kylo Ren grapples with his conflicting loyalties.
        
        "Episode IX: The Rise of Skywalker" concludes the saga with the final battle between the Resistance and the First Order. Rey's lineage and the return of Emperor Palpatine bring the story full circle, as characters old and new unite to restore hope to the galaxy.
        
        The "Star Wars" saga is a tale of light and darkness, of heroes and villains, and the eternal struggle between good and evil in a vast and captivating universe.`
        },
        {
            id: 40,
            imdb: '9.0/10',
            desc: `Legendary Crime Drama - "The Dark Knight" Takes Gotham to the Brink of Chaos`,
            release: '18th July,2008',
            category: 'hollywood',
            // image: img40,
            name: 'The Dark Knight',
            content: `In "The Dark Knight," directed by Christopher Nolan, Gotham City is once again under threat, but this time from a new and even more sinister force. The city's vigilante hero, Batman (played by Christian Bale), faces his most challenging adversary yet - the Joker (played by Heath Ledger), a psychopathic criminal mastermind who seeks to spread chaos and anarchy throughout Gotham.
  
        The movie begins with Batman and Lieutenant James Gordon (played by Gary Oldman) teaming up to dismantle the city's criminal organizations. However, their efforts are complicated when the Joker emerges with a grand plan to prove that anyone can be driven to madness under the right circumstances.
        
        The Joker's reign of terror puts Batman and the city's new district attorney, Harvey Dent (played by Aaron Eckhart), to the ultimate test. As they strive to bring the Joker to justice, they must also navigate their own moral dilemmas and confront the darkness within themselves.
        
        With breathtaking action sequences, moral complexity, and the psychological battle between Batman and the Joker, "The Dark Knight" explores themes of chaos, order, morality, and the blurred line between hero and villain. Heath Ledger's portrayal of the Joker received critical acclaim and posthumously won him the Academy Award for Best Supporting Actor.
        
        The film culminates in a series of explosive confrontations, leaving both Batman and Gotham forever changed. "The Dark Knight" stands as a testament to the enduring power of storytelling and remains one of the most beloved and iconic superhero movies of all time.`
        },
        {
            id: 41,
            imdb: '9.2/10',
            release: '24th March, 1972',
            category: 'hollywood',
            // image: img41,
            name: 'The GodFather',
            desc: `Unveiling the Epic Saga of 'The Godfather' - Crime, Loyalty, and Redemption`,
            content: `The first film introduces us to the Corleone family, led by patriarch Vito Corleone (Marlon Brando). Vito is a respected and influential Mafia boss who values family loyalty above all else. When Vito's youngest son, Michael (Al Pacino), returns from World War II and gets involved in the family business, he becomes increasingly drawn into the criminal underworld. The film explores themes of power, loyalty, and the sacrifices one must make to protect their family.`
        },
        {
            id: 42,
            imdb: '8.8/10',
            release: '19th December, 2001',
            category: 'hollywood',
            // image: img42,
            name: 'The Loard Of The Rings',
            desc: `The Lord of the Rings: A Journey Through Middle-earth`,
            content: `In the land of Middle-earth, a peaceful and idyllic place inhabited by various races including humans, elves, dwarves, and hobbits, a dark shadow begins to spread. An ancient evil, Sauron, the Dark Lord, seeks to regain his lost power by obtaining a powerful ring that grants him control over all other rings of power. This One Ring was lost for ages but has now been found by a humble hobbit named Frodo Baggins.
  
        Frodo is entrusted with the task of destroying the One Ring to prevent Sauron from taking control of Middle-earth. Accompanied by his loyal friend Samwise Gamgee and a group of diverse companions including humans Aragorn, Legolas the elf, Gimli the dwarf, Gandalf the wizard, and others, Frodo embarks on a perilous journey to the fiery Mount Doom in the heart of Mordor, the only place where the ring can be destroyed.
        
        Throughout their journey, the fellowship faces numerous challenges. They encounter treacherous landscapes, fierce creatures, and the corrupting influence of the ring itself. Along the way, they forge unbreakable bonds of friendship, loyalty, and courage, exemplifying the best qualities of each race.
        
        As the fellowship draws closer to Mount Doom, tensions rise, and sacrifices are made. Frodo and Sam find themselves facing insurmountable odds as they navigate through Mordor's dangers. In a climactic showdown, Frodo stands at the brink of Mount Doom, struggling to resist the allure of the ring's power and make the ultimate decision.
        
        The fate of Middle-earth hangs in the balance as the armies of Sauron converge on the battlefields, and the final battle between good and evil unfolds. Aragorn emerges as a true leader, uniting the free peoples of Middle-earth to face the darkness threatening to engulf their world.
        
        In a breathtaking conclusion, Frodo's journey comes to a head as he confronts the inner and outer struggles that have defined his quest. With the support of his friends and the strength of his own spirit, Frodo makes a heart-wrenching decision that will determine the fate of Middle-earth.
        
        "The Lord of the Rings" trilogy is a tale of heroism, friendship, sacrifice, and the enduring fight against darkness. It captures the essence of the human spirit and the power of unity in the face of overwhelming odds. This epic saga has left an indelible mark on the world of fantasy literature and cinema, inspiring generations with its timeless themes and unforgettable characters.`
        },
        {
            id: 43,
            imdb: '9.3/10',
            release: '23th September, 1994',
            category: 'hollywood',
            // image: img43,
            name: 'The Shawshank Redemption',
            desc: `The Shawshank Redemption: A Tale of Hope and Redemption`,
            content: `In the heart of Shawshank State Penitentiary, a maximum-security prison, the lives of two very different men become intertwined. Andy Dufresne, a former banker wrongfully convicted of murder, and Ellis "Red" Redding, a seasoned inmate with a long history in the prison, find their paths converging in unexpected ways.
  
        As Andy navigates the brutal realities of prison life, he uses his financial expertise to win favor with the prison guards and the warden. His quiet demeanor and unwavering hope begin to inspire those around him, including Red, who becomes Andy's closest friend. Through their friendship, Andy imparts his optimism and outlook on life, teaching Red that hope can thrive even in the darkest of places.
        
        Andy's determination to regain his freedom leads him to embark on an audacious plan to escape. He uses his skills to gradually tunnel his way out of his cell and ultimately out of the prison itself. Along the way, he exposes corruption within the prison system and unearths the truth about his wrongful conviction.
        
        The story is a powerful exploration of friendship, resilience, and the human spirit's ability to endure and triumph over adversity. As Andy's escape plan unfolds, the audience is captivated by his resourcefulness and his refusal to be defined by his circumstances.
        
        "The Shawshank Redemption" beautifully portrays the transformative power of hope and the enduring bonds of friendship. It highlights the idea that even within the confines of a prison, one can find freedom through the mind and the spirit. The film resonates with audiences worldwide, reminding us all that no matter how dire the situation, hope can never truly be imprisoned.`
        },
        {
            id: 44,
            imdb: '7.8/10',
            release: '19th December, 1997',
            // image: img44,
            category: 'hollywood',
            name: 'Titanic',
            desc: `Discover the Heart-Wrenching Story of Titanic: A Timeless Tale of Love and Loss`,
            content: `"Titanic" is a classic romantic drama film directed by James Cameron, released in 1997. The film is set against the backdrop of the ill-fated maiden voyage of the RMS Titanic in 1912.
  
        The story follows the lives of two central characters: Jack Dawson (played by Leonardo DiCaprio), a free-spirited artist, and Rose DeWitt Bukater (played by Kate Winslet), a young woman from a wealthy family who is engaged to a wealthy but controlling man named Cal Hockley (played by Billy Zane).
        
        Jack, a third-class passenger, and Rose, a first-class passenger, come from completely different worlds. They meet on board the Titanic and their chance encounter leads to a deep and forbidden romance that defies the societal norms of the time.
        
        As the ship sails across the Atlantic, their love story unfolds amidst the opulence of the ship's upper decks and the struggles of the lower-class passengers. However, their happiness is short-lived as tragedy strikes when the Titanic hits an iceberg and starts to sink. The chaos and panic that ensue paint a vivid picture of the ship's tragic fate.
        
        Amidst the chaos, Jack and Rose must fight for their survival, facing the challenges posed by the sinking ship, freezing waters, and the class-based restrictions that threaten to keep them apart. The film showcases their courage and determination as they navigate the disaster and cling to their love.
        
        The story is not just a romance but also a tale of human resilience, sacrifice, and the fleeting nature of life. "Titanic" captures the grandeur of the ship, the stark reality of the disaster, and the enduring power of love in the face of adversity.
        
        The film's dual timeline structure, with an elderly Rose recounting her memories of the Titanic to treasure hunters searching for a valuable necklace, adds depth and emotion to the narrative.
        
        "Titanic" remains one of the most iconic films in cinematic history, known for its breathtaking visuals, captivating storytelling, and its ability to evoke a range of emotions from its audience.`,
        },
        {
            id: 45,
            imdb: '7.8/10',
            release: '11th June, 1982',
            // image: img45,
            category: 'hollywood',
            name: 'E.T. The Extra Terrestrial',
            desc: `E.T. the Extra-Terrestrial" is a heartwarming science fiction film directed by Steven Spielberg, released in 1982.`,
            content: `The story of "E.T. the Extra-Terrestrial" follows the heartwarming and magical journey of a young boy named Elliott who discovers a stranded alien in his backyard. The alien, affectionately named E.T., belongs to a race of gentle extraterrestrial beings.
  
        Elliott, a lonely and curious boy, finds E.T. one night while investigating strange noises. At first, both are startled by each other, but Elliott soon realizes that E.T. means no harm. They form an unbreakable bond of friendship, communicating through telepathy and shared emotions.
        
        E.T. becomes a part of Elliott's family, hidden from the world due to his unique appearance. Elliott and his siblings Gertie and Michael help E.T. navigate Earth while keeping him safe from prying eyes. As they spend time together, E.T.'s abilities become evident—he can heal, levitate objects, and even create a psychic link with Elliott.
        
        However, E.T. becomes homesick and starts building a device to "phone home" to his own planet, hoping to be rescued. Elliott and his friends assist E.T. in gathering the materials needed for the device, all while evading government agents who have discovered E.T.'s presence and are trying to capture him.
        
        The emotional core of the story lies in the friendship between E.T. and Elliott, as well as the themes of empathy, connection, and the bond between different species. E.T.'s longing to return home and the emotional farewell between him and Elliott provide some of the most memorable and touching moments in the film.
        
        In a climactic sequence, E.T.'s health deteriorates as his connection with Elliott weakens. The government agents' pursuit intensifies, and Elliott, along with his friends, races to get E.T. to the designated pickup point for his spaceship. With their combined efforts and a burst of supernatural energy from E.T., the spaceship takes off just in time, leaving Earth behind.
        
        The movie ends with a bittersweet farewell between Elliott and E.T., as E.T. promises to be right there in Elliott's heart. The story concludes with the notion that friendship and connection transcend even the boundaries of space and time.`
        },
        {
            id: 46,
            imdb: '7.6/10',
            release: '16th November, 2001',
            // image: img46,
            category: 'hollywood',
            name: 'Harry Potter',
            desc: `Harry Potter and the Sorcerer's Stone," directed by Chris Columbus and released in 2001`,
            content: `In the magical world of wizards and witches, a young boy named Harry Potter lives a seemingly ordinary life with his neglectful aunt, uncle, and cousin. However, on his eleventh birthday, Harry's life takes a dramatic turn when he learns that he is a wizard and has been accepted to attend Hogwarts School of Witchcraft and Wizardry.
  
        At Hogwarts, Harry befriends Ron Weasley and Hermione Granger, and the trio quickly becomes inseparable. They discover that Harry is famous in the wizarding world for surviving an attack by the dark wizard Lord Voldemort when he was just a baby. The attack left a lightning-shaped scar on Harry's forehead and Voldemort mysteriously vanished.
        
        As the school year progresses, the trio unravels a mystery surrounding the elusive Sorcerer's Stone – a powerful magical object that grants immortality. They suspect that someone is attempting to steal it, and they become determined to protect it at all costs.
        
        Through various adventures and challenges, Harry, Ron, and Hermione navigate the secrets of the castle, learn about their magical abilities, and uncover the truth about the Sorcerer's Stone. They encounter magical creatures, face their fears, and forge deep friendships.
        
        Ultimately, they discover that Professor Quirrell, the seemingly timid Defense Against the Dark Arts teacher, is working for Lord Voldemort and is attempting to use the Sorcerer's Stone to restore Voldemort to power. With the help of their newfound magical skills and unwavering friendship, Harry and his friends confront Quirrell and Voldemort in a climactic showdown.
        
        In a stunning display of bravery, Harry manages to thwart Voldemort's plans and protect the Sorcerer's Stone. The power of love and self-sacrifice plays a crucial role, as Harry's mother's sacrificial protection prevents Voldemort from harming him.
        
        The school year ends on a high note, with Harry returning to his aunt and uncle's home for the summer. He looks forward to returning to Hogwarts for his second year, knowing that his journey in the world of magic has only just begun.
        
        "Harry Potter and the Sorcerer's Stone" is a tale of friendship, bravery, and the magic that exists both within and around us. It introduces readers to the captivating world of Harry Potter and sets the stage for the epic adventures that follow in the rest of the series.`,
        },
        {
            id: 47,
            imdb: '8.5/10',
            release: '5th May, 2000',
            // image: img47,
            category: 'hollywood',
            name: 'Gladiator',
            desc: `"Gladiator" is a historical epic directed by Ridley Scott and released in the year 2000`,
            content: `"Gladiator" is an epic historical drama directed by Ridley Scott and starring Russell Crowe in the lead role. The film is set in ancient Rome during the reign of the emperor Commodus. The story follows Maximus Decimus Meridius (Russell Crowe), a loyal general in the Roman army who is beloved by his soldiers and admired by the aging Emperor Marcus Aurelius.
  
        After Marcus Aurelius chooses Maximus as his successor over his own son Commodus (Joaquin Phoenix), Commodus becomes consumed by jealousy and power-hungry ambition. He orders the execution of Maximus's family and condemns Maximus himself to slavery as a gladiator.
        
        Maximus, now known as "The Spaniard," rises through the ranks of the gladiatorial arena, fueled by his desire for revenge against Commodus and his yearning to be reunited with his murdered wife and son in the afterlife. His impressive combat skills and unwavering spirit captivate the crowds, turning him into a symbol of hope and defiance.
        
        As Maximus's fame grows, he finds himself in the midst of political intrigue and power struggles within the Roman Empire. His path eventually crosses with that of Commodus, who is ruling with an iron fist and exploiting his subjects. A climactic showdown between Maximus and Commodus is inevitable, as Maximus seeks to restore honor to Rome and free its people from tyranny.
        
        "Gladiator" is a tale of loyalty, vengeance, and redemption. It showcases breathtaking battles in the Colosseum, as well as the internal struggle of a man seeking justice and revenge. The film is renowned for its stunning visuals, powerful performances, and a gripping narrative that explores themes of sacrifice, leadership, and the resilience of the human spirit.
        
        The movie's blend of action, drama, and historical context has made it a classic in both Hollywood and the larger cinematic landscape. "Gladiator" received critical acclaim and won several Academy Awards, including Best Picture and Best Actor for Russell Crowe.`,
        },

        // Fitness (id: 48 - 60)

        {
            id: 48,
            category: 'fitness',
            details: `Exercises keep you strong. 3/4 Sit-Up bup is one of the best
        exercises to target your abs. It will help you improve your
        mood and gain energy.`,
            name: 'Sit Up',
            // image: img48,
            content: `A strong core forms the foundation of a fit and healthy body. Sit ups, a classic exercise, have long been favored for their ability to target the abdominal muscles and contribute to core strength. In this article, we'll delve into the benefits of sit ups, how to perform them with proper technique, and variations that can spice up your core workout routine.
        Sit ups are renowned for their effectiveness in strengthening the rectus abdominis, transverse abdominis, and obliques. By engaging these muscles, you'll not only develop a toned midsection but also improve posture and stability. Strong core muscles can enhance your athletic performance, reduce the risk of lower back pain, and support everyday activities.`,
        },
        {
            id: 49,
            category: 'fitness',
            details: `Exercises keep you strong. 45° Side Bend bup is one of the best
        exercises to target your abs. It will help you improve your
        mood and gain energy.`,
            name: 'side Bend',
            // image: img49,
            content: `Side bends are a classic exercise that can significantly contribute to your fitness journey by targeting the often-neglected oblique muscles. While core exercises like crunches and planks are essential, incorporating side bends into your routine can provide a well-rounded workout for your midsection. In this article, we'll delve into the benefits of side bends, proper form, variations, and safety tips to help you make the most out of this exercise.
        `
        },
        {
            id: 50,
            category: 'fitness',
            // image: img50,
            details: `Exercises keep you strong. Air Bike bup is one of the best
        exercises to target your abs. It will help you improve your
        mood and gain energy.`,
            name: 'Air Bike',

            content: `Air bikes have rapidly gained popularity in the fitness world, offering a unique and effective cardio workout that engages both upper and lower body muscles. Whether you're a seasoned athlete or just starting your fitness journey, incorporating air bikes into your routine can take your workouts to the next level. In this article, we'll explore the benefits of air bikes, how they work, and why they are a must-have addition to any fitness regimen.`,
        },
        {
            id: 51,
            category: 'fitness',
            details: `Exercises keep you strong. All Fours Squad Stretch bup is one of the best
        exercises to target your quads. It will help you improve your
        mood and gain energy.`,
            name: 'Fours Squad Stretch',
            // image: img51,
            content: `The Four Squad Stretch is a versatile and effective exercise that targets multiple muscle groups while enhancing flexibility and promoting overall mobility. Whether you're an athlete, fitness enthusiast, or someone looking to improve their range of motion, incorporating the Four Squad Stretch into your routine can bring numerous benefits. In this article, we'll delve into the proper technique, benefits, and variations of the Four Squad Stretch.`
        },
        {
            id: 52,
            // image: img52,
            category: 'fitness',
            details: `Exercises keep you strong. Alternate Heel Touchers bup is one of the best
        exercises to target your abs. It will help you improve your
        mood and gain energy.`,
            name: 'Alternate Heel Touchers',
            content: `Alternate Heel Touchers are a bodyweight exercise that primarily focuses on engaging the oblique muscles, which are located on the sides of your abdomen. This exercise is effective for toning and sculpting your waistline while also providing a good overall core workout.`
        },
        {
            id: 53,
            // image: img53,
            category: 'fitness',
            details: `Exercises keep you strong. Alternate Lateral Pulldown bup is one of the best
        exercises to target your lats. It will help you improve your
        mood and gain energy.`,
            name: 'Alternate Lateral Pulldown',
            content: `The Alternate Lateral Pulldown is a fundamental exercise that targets the muscles of the upper back, specifically the latissimus dorsi. It's a great addition to any upper body workout routine, helping you develop a strong and well-defined back. In this guide, we'll break down the proper technique, benefits, variations, and common mistakes associated with the Alternate Lateral Pulldown.`
        },
        {
            id: 54,
            // image: img54,
            category: 'fitness',
            details: `Exercises keep you strong. Ankle Circles bup is one of the best
        exercises to target your calves. It will help you improve your
        mood and gain energy.`,
            name: 'Ankle Circles',
            content: `Ankle mobility plays a crucial role in various activities, from walking and running to performing squats and lunges. Ankle Circles are a valuable exercise that can help improve your ankle flexibility and range of motion. In this guide, we'll delve into the benefits of Ankle Circles and provide step-by-step instructions on how to perform them correctly.`,
        },
        {
            id: 55,
            // image: img55,
            category: 'fitness',
            details: `Exercises keep you strong. Archer Pull Up bup is one of the best
        exercises to target your lats. It will help you improve your
        mood and gain energy.`,
            name: 'Archer Pull Up',
            content: `Archer Pull Ups are a powerful addition to your fitness routine, allowing you to engage various muscles and work towards a stronger, more well-rounded upper body. In this guide, we'll dive into what Archer Pull Ups are, the muscles they target, how to perform them with proper form, and tips for progressing as you build your strength.`,
        },
        {
            id: 56,
            // image: img56,
            category: 'fitness',
            details: `Exercises keep you strong. Archer Push Up bup is one of the best
        exercises to target your pectorals. It will help you improve your
        mood and gain energy.`,
            name: 'Archer Push Up',
            content: `Archer Push Ups are a dynamic variation of the traditional push-up exercise that can take your upper body strength and stability to the next level. This advanced movement not only engages your chest, shoulders, and triceps but also requires core activation and balance. In this guide, we'll break down the proper form, benefits, and progression strategies to help you master Archer Push Ups.`
        },
        {
            id: 57,
            // image: img57,
            category: 'fitness',
            details: `Exercises keep you strong. Arm Slingers Hanging Bent Knee Legs bup is one of the best
        exercises to target your abs. It will help you improve your
        mood and gain energy.`,
            name: 'Arm Slingers Hanging Bent Knee Legs',
            content: `Arm Slingers Hanging Bent Knee Legs is a dynamic exercise that targets multiple muscle groups simultaneously. It combines the benefits of hanging exercises with knee raises to provide an effective workout for your core, upper body, and lower abs. Whether you're a fitness enthusiast or just starting your fitness journey, incorporating Arm Slingers Hanging Bent Knee Legs into your routine can help you achieve a stronger and more toned physique.`
        },
        {
            id: 58,
            // image: img58,
            category: 'fitness',
            details: `Exercises keep you strong. Assisted Hanging Knee Raise bup is one of the best
        exercises to target your abs. It will help you improve your
        mood and gain energy.`,
            name: 'Assisted Hanging Knee Raise',
            content: `The Assisted Hanging Knee Raise is a highly effective core exercise that targets your lower abs, hip flexors, and overall core stability. Whether you're a beginner looking to build foundational strength or an experienced fitness enthusiast aiming to challenge your core muscles, this exercise can be tailored to suit your fitness level. In this guide, we'll walk you through the proper technique, benefits, and variations of the Assisted Hanging Knee Raise.`
        },
        {
            id: 59,
            // image: img59,
            category: 'fitness',
            details: `Exercises keep you strong. Assisted Parallel Close Grip Pull-Up bup is one of the best
        exercises to target your lats. It will help you improve your
        mood and gain energy.`,
            name: 'Assisted Parallel Close Grip Pull-Up',
            content: `The Assisted Parallel Close Grip Pull-Up is a challenging yet rewarding exercise that targets your upper body muscles, primarily the back, biceps, and shoulders. Whether you're a fitness enthusiast or a beginner, this exercise can be adapted to your fitness level using assistance, making it a great addition to your routine. In this guide, we'll walk you through the proper form, benefits, and variations of the Assisted Parallel Close Grip Pull-Up.`,
        },
        {
            id: 60,
            // image: img60,
            category: 'fitness',
            details: `Exercises keep you strong. Astride Jumps (Male) bup is one of the best
        exercises to target your cardiovascular system. It will help you improve your
        mood and gain energy.`,
            name: 'Astride Jumps (Male)',
            content: `Astride jumps, also known as straddle jumps, are a dynamic plyometric exercise that engages multiple muscle groups while providing cardiovascular benefits. This explosive movement is a great addition to any fitness routine, helping to improve lower body strength, power, and agility. Astride jumps are particularly effective for targeting the quadriceps, hamstrings, glutes, and calf muscles.`
        },

        // Food (id: 60 - 70)
        {
            id: 61,
            desc: `Deliciously versatile, pizza is a timeless classic loved worldwide. Savory toppings atop a cheesy base create a perfect bite.`,
            category: 'food',
            // image: img61,
            name: 'Pizza',
            content: `Pizza, an iconic dish that has transcended borders and cultures, is a true masterpiece in the culinary world. With its origins dating back to ancient civilizations, this beloved creation has evolved into countless variations, each more tantalizing than the last.
  
        At its heart, pizza is a harmonious marriage of flavors and textures. A thin, crispy crust forms the foundation, offering a satisfying crunch with every bite. This base serves as a canvas for an array of delectable toppings – from the traditional duo of tomato sauce and mozzarella cheese to innovative combinations that cater to every palate.
        
        The magic happens in the oven, where the heat transforms these simple elements into a symphony of tastes. The tanginess of the tomato sauce melds seamlessly with the gooey richness of melted cheese, while a medley of vegetables, meats, and aromatic herbs add layers of complexity.
        
        Pizza not only delights the taste buds but also fosters a sense of togetherness. It's the centerpiece of gatherings, where friends and family come together to share slices and stories. Its universal appeal bridges cultural divides, bringing joy to people of all backgrounds.
        
        Whether you savor a classic Margherita or dare to venture into uncharted flavor territories, pizza's allure is undeniable. It's a comfort food, a celebration food, and a culinary masterpiece that continues to capture hearts – one slice at a time.`,
        },
        {
            id: 62,
            desc: 'Exquisite sushi: a delicate harmony of fresh fish, rice, and seaweed. Experience the art of Japanese cuisine.',
            category: 'food',
            // image: img62,
            name: 'Sushi',
            content: `Sushi: A Culinary Artistry from Japan.
  
        Sushi, a masterpiece of Japanese cuisine, is a harmonious blend of flavors, textures, and aesthetics. Crafted with precision, it showcases fresh, raw fish atop seasoned vinegared rice. From traditional nigiri to creative rolls, sushi offers a delightful journey for the palate. Immerse yourself in the world of umami and experience the allure of sushi, a true culinary art form.`,
        },
        {
            id: 63,
            dif: `Indulge in the rich, velvety delight of chocolate - a timeless...`,
            desc: 'Indulge in the rich, velvety delight of chocolate - a timeless treat loved worldwide for its heavenly taste and comforting allure.',
            category: 'food',
            // image: img63,
            name: 'Chocolate',
            content: `Chocolate, the sweet seduction that transcends cultures and generations, is more than just a treat – it's an experience. With its origins dating back to ancient civilizations, this delectable delight has evolved into an art form that tantalizes the senses.
  
        From velvety milk chocolate to intense dark variations, each bite unveils a symphony of flavors. Explore the journey from cacao bean to delectable bar, discovering the meticulous craftsmanship that goes into every creation. Whether you're savoring a classic chocolate bar, luxuriating in a molten lava cake, or reveling in truffles adorned with edible gold, the magic of chocolate knows no bounds.`,
        },
        {
            id: 64,
            dif: `Delicious tacos: savory fillings, vibrant toppings, and warm tortillas.`,
            desc: 'Delicious tacos: savory fillings, vibrant toppings, and warm tortillas. A symphony of flavors in every bite!',
            category: 'food',
            // image: img64,
            name: 'Tacos',
            content: `Tacos, the beloved culinary creations that bridge cultures and bring people together. These handheld delights have captured hearts worldwide, thanks to their versatility and mouthwatering combinations. Originating in Mexico, tacos have evolved into a global phenomenon, offering a canvas for culinary imagination.
  
        1. Authentic Mexican Roots: Grounded in Mexican street food culture, tacos pay homage to tradition. Corn or flour tortillas cradle a variety of fillings, from succulent meats to fresh veggies, all topped with zesty salsas.
        
        2. Creative Fusion: Tacos have transcended boundaries, embracing international influences. Explore Korean-inspired BBQ tacos, Mediterranean falafel fillings, or even sushi-infused versions, proving that innovation knows no limits.
        
        3. Endless Variety: From fish tacos bursting with citrusy freshness to hearty carnitas tacos oozing with savory delight, the options are infinite. Vegetarians and vegans savor plant-based variations like jackfruit or roasted cauliflower.
        
        4. DIY Adventure: Tacos ignite interactive dining experiences. Lay out an array of fillings, salsas, and toppings, inviting everyone to create their perfect masterpiece. It's a fiesta of flavors and camaraderie.
        
        5. Street to Gourmet: While street stalls offer authentic treasures, upscale restaurants elevate tacos to gourmet status. Truffle-infused tacos or lobster-topped delights showcase the dish's ability to suit any occasion.
        
        6. Culture and Connection: Sharing tacos is sharing stories. It's about bonding over the crackling of tortillas and the explosion of tastes. Whether at a food truck, family gathering, or high-end eatery, tacos unite us.`,
        },
        {
            id: 65,
            dif: `Indulge in creamy delights: Ice Cream, a timeless treat of frozen sweetness...`,
            desc: 'Indulge in creamy delights: Ice Cream, a timeless treat of frozen sweetness, perfect for any occasion. 🍦',
            category: 'food',
            // image: img65,
            name: 'Ice Cream',
            content: `Ice cream, a beloved frozen treat, has been enchanting taste buds for generations. With its rich and creamy texture, delightful array of flavors, and endless possibilities for customization, ice cream is more than just dessert – it's an experience that transcends age, culture, and time. Join us on a delectable journey through the world of ice cream, where we'll explore its history, flavors, making, and the joy it brings to people of all ages.`

        },
        {
            id: 66,
            // image: img66,
            dif: `Indulge in creamy delight with Cheesecake - a luscious dessert...`,
            desc: 'Indulge in creamy delight with Cheesecake - a luscious dessert crafted with a rich, velvety filling on a buttery graham crust.',
            category: 'food',
            name: 'Cheesecake',
            content: `Indulge in the velvety decadence of a timeless dessert – the Cheesecake. With its rich and creamy texture, combined with a variety of luscious toppings and crust options, cheesecake is a true culinary masterpiece that has captured the hearts and taste buds of people around the world. In this article, we delve into the origins, flavors, and creative variations of this delectable treat.`
        },
        {
            id: 67,
            // image: img67,
            dif: `Juicy burgers: A timeless classic of grilled perfection savory toppings, nestled in a soft bun.`,
            desc: 'Juicy burgers: A timeless classic of grilled perfection, savory toppings, nestled in a soft bun. Pure satisfaction in every bite.',
            category: 'food',
            name: 'Burgers',
            content: `Burgers, the iconic culinary creation that has captured the hearts (and stomachs) of people around the globe. With their succulent patties, creative toppings, and perfect buns, burgers are the epitome of comfort food and culinary innovation. In this article, we'll delve into the history, variations, and tips to craft the perfect burger that satisfies even the most discerning taste buds.`
        },
        {
            id: 68,
            // image: img68,
            dif: `eliciously twirling strands of pasta coated in rich sauces a classic comfort dish enjoyed worldwide.`,
            desc: 'Deliciously twirling strands of pasta coated in rich sauces, a classic comfort dish enjoyed worldwide.',
            category: 'food',
            name: 'Pasta',
            content: `Pasta, a culinary masterpiece that has stolen the hearts of food enthusiasts around the globe, is much more than just a dish. It's a canvas of flavors, a representation of diverse cultures, and a testament to the art of gastronomy. From its humble beginnings in Italy to its status as a worldwide comfort food, pasta's journey is as rich as its taste.`
        },
        {
            id: 69,
            // image: img69,
            dif: `Delight in the rich flavors of Curry...`,
            desc: 'Delight in the rich flavors of Curry, a harmonious blend of spices and ingredients that create a truly satisfying and aromatic culinary experience',
            category: 'food',
            name: 'Curry',
            content: `Curry, with its rich blend of aromatic spices and diverse culinary traditions, is a culinary masterpiece that has captured the hearts and taste buds of food enthusiasts worldwide. This iconic dish boasts a history as colorful as its flavors, originating from various corners of the globe. Join us as we dive into the tantalizing world of curry, uncovering its origins, variations, and the artistry behind its creation.`
        },
        {
            id: 70,
            // image: img70,
            dif: `The company assumed the name of Yum! Brands on May 22, 2002.`,
            desc: 'Delicate and colorful French macarons, a perfect blend of crispy meringue shells and luscious fillings, create a delightful indulgence',
            category: 'food',
            name: 'Macarons',
            content:
                'Fried Chicken) were spun off by PepsiCo on May 30, 1997, and all three restaurant chains became part of a new company named Tricon Global Restaurants, Inc. The company assumed the name of Yum! Brands on May 22, 2002.PepsiCo acquired Pizza Hut in November 1977.[10][11] Twenty years later, Pizza Hut (alongside Taco Bell and Kentucky Fried Chicken) were spun off by PepsiCo on May 30, 1997, and all three restaurant chains became part of a new company named Tricon Global Restaurants, Inc. The company assumed the name of Yum! Brands on May 22, 2002.Before closing in 2015, the oldest continuously operating Pizza Hut was in Manhattan, Kansas, in a shopping and tavern district known as Aggieville near Kansas State University. The first Pizza Hut restaurant east of the Mississippi River was opened in Athens, Ohio, in 1966 by Lawrence Berberick and Gary Meyers.',
        },
        {
            id: 71,
            // image: img71,
            dif: `Delicious Japanese noodle soup with savory broth, tender noodles, and an array of flavorful toppings.`,
            desc: 'Delicious Japanese noodle soup with savory broth, tender noodles, and an array of flavorful toppings. A comforting classic',
            category: 'food',
            name: 'Ramen',
            content:
                `Ramen, a beloved Japanese dish that has captured the hearts and taste buds of people worldwide, is more than just a bowl of soup and noodles. It's a culinary masterpiece that brings together a symphony of flavors, textures, and cultures. From its humble origins to the diverse range of variations available today, ramen continues to be a comfort food that warms both body and soul.`,
        },
        {
            id: 72,
            desc: 'Delight in fluffy, glazed circles of joy. Our donuts are a perfect blend of sweetness and comfort, sure to brighten your day.',
            category: 'food',
            dif: `Delight in fluffy, glazed circles of joy.`,
            // image: img72,
            name: 'Donuts',
            content:
                `Indulge your taste buds in the world of donuts – those delectable, ring-shaped treats that bring joy to people of all ages. Whether glazed, powdered, filled, or frosted, donuts hold a special place in the hearts of dessert enthusiasts worldwide. In this article, we'll take you on a mouthwatering journey through the history, varieties, and irresistible charm of these sugary delights.`
        },
    ]
}
module.exports = API