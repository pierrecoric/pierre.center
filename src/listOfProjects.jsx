const listOfProjects = [
    //project
    {title: "Data visualization fo the rain precipitation in the city of Marrakesh", 
    description: "During an art residency in Marrakesh, I decided to work with public meteorological data, more specifically, the rain precipitation data. I played around with this material until I found a compelling form to engage a conversation around this topic. I processed the data with Python and rendered some potential forms in Blender to finally settle on a sculptural solution that I could produce with the help and advice of a wood craftsman. I produced picture files and textual dimensions for each of the separated pieces. He produced them in his woodshop, and I assembled them for the final exhibition at Le 18. \n the piece is titled As If It Was Making the Grass Happy to Grow",
    linkText: "Article on the website of Le 18",
    link: "https://www.le18marrakech.com/contenus/as-if-it-was-making-the-grass-happy-to-grow",
    image: "as_if_it_was_making_the_grass_happy_to_grow",
    gh: true,
    github: "https://github.com/pierrecoric/weather_data"},
    //--------------------------------------------------

    //project
    {title: "Knitting the DNA sequence of a sheep", 
    description: "For this piece titled As We Wrap It Around Those Woolen Wings, my plan was to knit a fraction of the DNA sequence of a sheep. The data is public and was found with the help of a biologist friend, Coco Koedooder. I used an old domestic knitting machine, with the help of the artist Ilse Van Roy and her assistant Annelies Clerix. \n The software that can communicate with this machine is called Designaknit and is actually quite simple. I just had to generate bitmap images with the right dimensions. However, due to the small memory capacity of the machine, I also had to slice the sequence into many parts. I accomplished this with a simple processing script reading the DNA sequence from a text file.",
    linkText: "article on the website of lichtekooi",
    link: "https://lichtekooi.be/Pierre-Coric",
    image: "as_we_wrap_it_around_those_woollen_wings",
    gh: true,
    github: "https://github.com/pierrecoric/dna_translator"},
    //--------------------------------------------------

    //project
    {title: "Knitting pictures", 
    description: "When I started playing with my knitting machine, I found the need to process bitmap images into knitting patterns according to different thread parameters. I wrote a few scripts and I used them to knit a portrait of Grace Hopper which was exhibited in Antwerp along with the sheep dna knitted sequence.",
    linkText: "More pictures of this show",
    link: "https://pierre-coric.top/pages/as_we_wrap_it_around_those_woollen_wings.html",
    image: "knit_picture",
    gh: true,
    github: "https://github.com/pierrecoric/knitting_pictures"},
    //--------------------------------------------------

    //project
    {title: "Seven segments displays interractive presence counter", 
    description: "As We Continue is an interractive installation that uses a series of mechanical seven segment displays connected to a Raspberry Pi and a webcam. \n The work uses a face detection algorithm to assess wheter someone is looking at it or not. The top counter displays the time when nobody was watching the piece while the bottom counter shows the time when someone was present in front of it during the current day as both counters reset at midnight.",
    linkText:"As We Continue",
    link: "https://www.werktank.org/projects/64/pierre-coric-as-we-continue",
    image: "as_we_continue",
    gh: false,
    github: "#"},
    //--------------------------------------------------

    //project
    {title: "The Sirens Collective", 
    description: "Back-end and implementation of a website for the Sirens Collective initiated by Kim Hoss and Lise van Wersch. \n This website is a database of sexual harassment aimed at making visible and tangible the sheer mass of this phenomenon. The website allows the user to share anonymously or not their personal story, which is automatically and instantly posted on the database. Kim and Lise also have access to a back office where they can potentially delete inappropriate content.",
    linkText: "www.thesirenscollective.com",
    link: "https://www.thesirenscollective.com/index.php?page=index",
    image: "sirens",
    gh: false,
    github: "#"},
    //--------------------------------------------------

    //project
    {title: "Interractive scroll as part of a theater stage scenography", 
    description: "I was the scenographer of the play 'Les Lois,' directed by Brune Bazin. The play took the form of a lecture led by the different characters of the play. As they were presenting their story, they had control from their conference table over a scroll that was beamed on a screen behind them. The scroll included a few interactive features such as control over a webcam installed on a podium on the stage and some animated presentations.",
    linkText: "trailer",
    link: "https://www.youtube.com/watch?v=MUW91obsMhw",
    image: "les_lois",
    github: "#"},
    //--------------------------------------------------

    //project
    {title: "Relay Sequencer (Parts of Our Brain)", 
    description: "Processing script developed during a workshop hosted by the Royal Academy of Fine Arts in Antwerp, where I have been invited by Anna Godzina. \nThis processing script creates a visual sequencer that controls electric relays through an Arduino board. We became able to turn on and off in a synchronous way on different channels a series of various electrical devices and to use this installation as a beat machine for a sound performance.",
    link: "",
    image: "parts_of_our_brain",
    gh: true,
    github: "https://github.com/pierrecoric/parts_of_our_brain"},
    //--------------------------------------------------

    //project
    {title: "Website for the Governance", 
    description: "A website for a film project that I work on in collaboration with Alice Brunnquell. \n The website includes a chat and a back office where my collaborator and I can directly update the website. The back office also contains a list of pages in construction that we use to develop and share our notes concerning the story of our movie.",
    linkText:"www.governance.direct",
    link: "https://governance.direct/",
    image: "governance",
    gh: false,
    github: "#"},
    //--------------------------------------------------

    //project
    {title: "Scripts to turn bitmap images into vector files for plot printing", 
    description: "I am using pen plotters to print on paper and on textile. I developed some processing scripts to turn a bitmap image into a vector file. This script accounts for the order of creation of the different vectors to make the shortest path possible for the pen. There is also the possibility to surimpose a second picture that will be in charge of the lines direction.",
    linkText:"Ça aurait la longueur d'un trait bleu",
    link: "https://www.werktank.org/projects/68/pierre-coric-ca-aurait-la-longueur-dun-trait-bleu",
    image: "ca_aurait_la_longueur_d_un_trait_bleu",
    gh: true,
    github: "https://github.com/pierrecoric/bitmap_to_vector_xy_1"},
    //--------------------------------------------------

    //project
    {title: "AA-ZZZZZ", 
    description: "A book that contains all the possible combinations of letters from two to five letters using the latin alphabet. From AA to ZZZZZ. The audience is invited to look for words that they know in any language that they want and to circle them with a red marker.",
    linkText: "AA-ZZZZZ",
    link: "https://pierre-coric.top",
    image: "aa_zzzzz",
    gh: false,
    github: "#"},
    //--------------------------------------------------

    //project
    {title: "Perlin noise function for textile patterns", 
    description: "Perlin function that outputs a text file with the instructions for a textile piece. Perlin's noise function is used to generate natural looking structures such as terrain or waves.",
    linkText: "Perlin Wave",
    link: "https://pierre-coric.top/pages/perlin_wave.html",
    image: "perlin_wave",
    gh: false,
    github: ""},
    //--------------------------------------------------

    //project
    {title: "Breathing Sessions for Eva Van Tongeren", 
    description: "I wrote this processing script for the artist Eva Van Tongeren in the context of her project titled Breathing Sessions. She has been drawing diagrams of her breath and was looking for a way to turn these drawings into musical instructions. The program takes a high-definition scan of each drawing and renders it as an animated video with a low-tone tune.",
    linkText:"Breathing Sessions 1-19",
    link: "https://evavantongeren.com/films/breathing-sessions-1-19/",
    image: "eva",
    gh: false,
    github: ""},
    //--------------------------------------------------

    //project
    {title: "Programming of a barcode scanner for Valentin Cernat", 
    description: "For this installation, the artist Valentin Cernat asked me to build a system through which he could trigger a variety of different media (Sound, Video, images and text) by scanning labels layed out on a table with a barecode scanner. The scanner was connected on a laptop that was beaming these different sources on a wall in front of the table.",
    linkText: "",
    link: "",
    image: "valentin",
    gh: false,
    github: ""},
    //--------------------------------------------------

    //project
    {title: "Morse code translator", 
    description: `A processing script that turns a morse code sentence into its visual representation. Each horizontal line is a word, the height of the surface is divided into as many rows as there are words in the given text. \n The script also outputs a text file that gives the measures of each piece of fabric needed to turn the result into a quilt`,
    linkText: "A Semi Secrete Conspiracy of Hidden Signs",
    link: "https://pierre-coric.top/pages/a_semi_secrete_conspiracy.html",
    image: "a_semi_secrete_conspiracy",
    gh: false,
    github: "#"},
    //--------------------------------------------------

    //project
    {title: "Hacked barricade lights instrument and visual translation", 
    description: "This installation was made out of a series of hacked barricade lights. Through an analog modification, I became able to handle their blinking speed. Each blink was triggering sound on a modular synthesizer and this musical information was recorded live by a computer. The algorithm was outputting a text file with instructions for a site specific wall painting representing the musical information of a given piece.",
    linkText: "Obects VS Things",
    link: "https://pierre-coric.top/pages/objects_vs_things.html",
    image: "objects_vs_things",
    gh: false,
    github: "#"},
    //--------------------------------------------------

    //project
    {title: "Tree alphabet translator", 
    description: "Project proposal for the implementation of a forest containing a message based on the essences and the distance between the trees. I proposed the principle of an algorithm that turns text into letters, each made out of a pair of trees chosen among four different essences and spaced either close or far from each other. This proposal has been developed in collaboration with the architects Dido Woelders and Floortje Van Sandick for an estate in Belgium",
    linkText: "Tree Alphabet Translator",
    link: "https://pierre-coric.top/pages/tree_alphabet.html",
    image: "tree_alphabet",
    gh: false,
    github: "#"},
    //--------------------------------------------------

    //project
    {title: "DNA brick pattern", 
    description: "Brick pattern proposal for an architectural project. The pattern follows the DNA sequence of the bacteria living in the neighboring river. This proposal has been developed in collaboration with the architects Dido Woelders and Floortje Van Sandick for an estate in Belgium",
    linkText: "DNA Brick Pattern",
    link: "https://pierre-coric.top/pages/dna_brick_pattern.html",
    image: "dna_brick_pattern",
    gh: false,
    github: "#"},
    //--------------------------------------------------

    //project
    {title: "Hacked barricade lights karaoke", 
    description: "Dispositive for a performance for two persons. Each of them is in control of one blinking light, they are able to manage their speed. Each blink generates a combination of a vowel and a consonant. The two performers pronounce these \"words\", mixing their voices into a collective sound piece. At the end of the performance (after a thousand blinks) a printer outputs a timeline of each of each pronounced word",
    linkText: "Composition With 1000 Blinks for Two Persons",
    link: "https://pierre-coric.top/pages/composition_with_1000_blinks_for_two_persons.html",
    image: "composition_with_1000_blinks_for_two_persons",
    gh: false,
    github: "#"},
    //--------------------------------------------------

    //project
    {title: "video averrage color timeline", 
    description: "Processing script that turns each frame of a video into its average color then lay them out as a color scape",
    linkText: "Boulversements",
    link: "https://pierre-coric.top/pages/boulversement.html",
    image: "boulversement",
    gh: false,
    github: "#"},
    //--------------------------------------------------

    //project
    {title: "Instructions for manual printing", 
    description: "Processing script that turns a bitmap image into a raster of values. By following the instructions given by the script, one becomes able to \"print\" pictures manually",
    linkText: "impressions manuelles",
    link: "https://pierre-coric.top/pages/impressions_manuelles.html",
    image: "impressions_manuelles",
    gh: false,
    github: "#"},
    //--------------------------------------------------

    //project
    {title: "Posters with all the pictures that my camera ever took", 
    description: "A script that compress and lay out a big batch of pictures. Here, all the pictures that I ever took with my camera before I broke it which amounts to 22236 files. The script lays them out from the darkest to the lightest. I developed another one that does the same but that lays out the average color of each picture. The last poster is the average picture of the entire batch of picture. The piece also comprises of a video where each frame is one of the pictures, from the darkest to the lightest, which results into a slow light modification in the room where it is shown. The viewer was alowed to pause the video, but instead of pausing, the program was live printing the picture displayed at the moment when the pause was requested.",
    linkText: "22236",
    link: "https://pierre-coric.top/pages/22236.html",
    image: "22236",
    gh: false,
    github: "#"},
    //--------------------------------------------------

];

export default listOfProjects;


