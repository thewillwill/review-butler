const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Reviews collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/reviewbutler",
  {
    useMongoClient: true
  }
);

const reviewSeed = [
  {
    title: null,
    rating: 4,    
    user_name: "Ethan H.",
    text: "Fast delivery. Burrito was delicious. Only down side was the ordering menu. Did not give me many options for add-ons. Definitely comparable to Gordo.",
    timestamp: new Date(Date.now()),
    review_date: "11/28/2017",

  },
  {
    title: null,
    user_name: "Diane W.",
    rating: 5,    
    text: "Reservations are tough to get so I logged on 60 days before we were scheduled to be in San Francisco and got a reservation for 5:30.   Too early?   Not if you want a guarantee you will see all of the cart food.   Once diners start getting staggered, as groups from the 5:30 slot start leaving, those fill-in tables won't always get to see all of the cart food  (according to our server).     So I was happy we had an early spot.  We really enjoyed our meal.  With only 2 of us, the cart approach with the small plates, gave us the opportunity to try a wide variety of dishes.   If anyone in your party has food allergies/restrictions, the restaurant will provide a printed list of the cart food, otherwise part of the experience is the 'surprise' of the cart contents.   We tried the majority of the cart items and most of them were excellent (oyster, fry bread with burrata, tempura squash were the standouts).   From the menu we ordered:   - Beef tongue pastrami on buckwheat poppy seed pancake (one of my favorite dishes) - State bird (crispy and tender but would not order it again - too plain) - Beef and broccoli (tender meat, my husband did not like the sauce) - Ice cream sandwiches (light, delicious) The restaurant did get very noisy and the tables are fairly close together, so don't expect a romantic private meal, just good food with a few surprises.",
    timestamp: new Date(Date.now()),
    review_date: "11/27/2017",

  },
  {
    title: null,
    user_name: "James J.",
    rating: 1,    
    text:"Ordering from this place is a JOKE  11$ Caesar salad consists of 4 pieces of non sliced ice burg lettuce with 2 croutons and some dressing  Unbelievable  House salad dressing taste horrible as well",
    timestamp: new Date(Date.now()),
    review_date: "11/27/2017",
  },
  {
    title: "The Punch Escrow",
    user_name: "Tal M. Klein",
    text:
      "It's the year 2147. Advancements in nanotechnology have enabled us to control aging. We’ve genetically engineered mosquitoes to feast on carbon fumes instead of blood, ending air pollution. And teleportation has become the ideal mode of transportation, offered exclusively by International Transport―the world’s most powerful corporation, in a world controlled by corporations. Joel Byram spends his days training artificial-intelligence engines to act more human and trying to salvage his deteriorating marriage. He’s pretty much an everyday twenty-second century guy with everyday problems―until he’s accidentally duplicated while teleporting. Now Joel must outsmart the shadowy organization that controls teleportation, outrun the religious sect out to destroy it, and find a way to get back to the woman he loves in a world that now has two of him.",
    timestamp: new Date(Date.now()),
    rating: 5,
  },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    user_name: "J.K. Rowling",
    text:
      "Harry Potter has no idea how famous he is. That's because he's being raised by his miserable aunt and uncle who are terrified Harry will learn that he's really a wizard, just as his parents were. But everything changes when Harry is summoned to attend an infamous school for wizards, and he begins to discover some clues about his illustrious birthright. From the surprising way he is greeted by a lovable giant, to the unique curriculum and colorful faculty at his unusual school, Harry finds himself drawn deep inside a mystical world he never knew existed and closer to his own noble destiny.",
    timestamp: new Date(Date.now()),
    rating: 4,
  },
  {
    title: "Coraline",
    user_name: "Neil Gaiman",
    text:
      "When Coraline steps through a door to find another house strangely similar to her own (only better), things seem marvelous. But there's another mother there, and another father, and they want her to stay and be their little girl. They want to change her and never let her go. Coraline will have to fight with all her wit and courage if she is to save herself and return to her ordinary life.",
    timestamp: new Date(Date.now()),
    rating: 2,
  },
  {
    title: "Code: The Hidden Language of Computer Hardware and Software",
    user_name: "Charles Petzold",
    text:
      "What do flashlights, the British invasion, black cats, and seesaws have to do with computers? In CODE, they show us the ingenious ways we manipulate language and invent new means of communicating with each other. And through CODE, we see how this ingenuity and our very human compulsion to communicate have driven the technological innovations of the past two centuries. Using everyday objects and familiar language systems such as Braille and Morse code, user_name Charles Petzold weaves an illuminating narrative for anyone who’s ever wondered about the secret inner life of computers and other smart machines. It’s a cleverly illustrated and eminently comprehensible story—and along the way, you’ll discover you’ve gained a real context for understanding today’s world of PCs, digital media, and the Internet. No matter what your level of technical savvy, CODE will charm you—and perhaps even awaken the technophile within.",
    timestamp: new Date(Date.now()),
    rating: 4,
  },
  {
    title: "The Everything Store: Jeff Bezos and the Age of Amazon",
    user_name: "Brad Stone",
    text:
      "The definitive story of Amazon.com, one of the most successful companies in the world, and of its driven, brilliant founder, Jeff Bezos. Amazon.com started off delivering books through the mail. But its visionary founder, Jeff Bezos, wasn't content with being a bookseller. He wanted Amazon to become the everything store, offering limitless selection and seductive convenience at disruptively low prices. To do so, he developed a corporate culture of relentless ambition and secrecy that's never been cracked. Until now. Brad Stone enjoyed unprecedented access to current and former Amazon employees and Bezos family members, giving listeners the first in-depth, fly-on-the-wall account of life at Amazon. Compared to tech's other elite innovators - Jobs, Gates, Zuckerberg - Bezos is a private man. But he stands out for his restless pursuit of new markets, leading Amazon into risky new ventures like the Kindle and cloud computing, and transforming retail in the same way Henry Ford revolutionized manufacturing. The Everything Store will be the revealing, definitive biography of the company that placed one of the first and largest bets on the Internet and forever changed the way we shop and read.",
    timestamp: new Date(Date.now()),
    rating: 3,
  },
  {
    title: "Total Recall: My Unbelievably True Life Story",
    user_name: "Arnold Schwarzenegger",
    text:
      "In his signature larger-than-life style, Arnold Schwarzenegger’s Total Recall is a revealing self-portrait of his illustrious, controversial, and truly unique life. The greatest immigrant success story of our time. His story is unique, and uniquely entertaining, and he tells it brilliantly in these pages. He was born in a year of famine, in a small Austrian town, the son of an austere police chief. He dreamed of moving to America to become a bodybuilding champion and a movie star. By the age of twenty-one, he was living in Los Angeles and had been crowned Mr. Universe. Within five years, he had learned English and become the greatest bodybuilder in the world. Within ten years, he had earned his college degree and was a millionaire from his business enterprises in real estate, landscaping, and bodybuilding. He was also the winner of a Golden Globe Award for his debut as a dramatic actor in Stay Hungry. Within twenty years, he was the world’s biggest movie star, the husband of Maria Shriver, and an emerging Republican leader who was part of the Kennedy family. Thirty-six years after coming to America, the man once known by fellow body­builders as the Austrian Oak was elected governor of California, the seventh largest economy in the world. He led the state through a budget crisis, natural disasters, and political turmoil, working across party lines for a better environment, election reforms, and bipartisan solutions. With Maria Shriver, he raised four fantastic children. In the wake of a scandal he brought upon himself, he tried to keep his family together. Until now, he has never told the full story of his life, in his own voice. Here is Arnold, with total recall.",
    timestamp: new Date(Date.now()),
    rating: 1,
  },
  {
    title: "Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future",
    user_name: "Ashlee Vance",
    text:
      "In the spirit of Steve Jobs and Moneyball, Elon Musk is both an illuminating and user_nameized look at the extraordinary life of one of Silicon Valley's most exciting, unpredictable, and ambitious entrepreneurs - a real-life Tony Stark - and a fascinating exploration of the renewal of American invention and its new makers. Elon Musk spotlights the technology and vision of Elon Musk, the renowned entrepreneur and innovator behind SpaceX, Tesla, and SolarCity, who sold one of his Internet companies, PayPal, for $1.5 billion. Ashlee Vance captures the full spectacle and arc of the genius' life and work, from his tumultuous upbringing in South Africa and flight to the United States to his dramatic technical innovations and entrepreneurial pursuits. Vance uses Musk's story to explore one of the pressing questions of our age: Can the nation of inventors and creators who led the modern world for a century still compete in an age of fierce global competition? He argues that Musk - one of the most unusual and striking figures in American business history - is a contemporary, visionary amalgam of legendary inventors and industrialists, including Thomas Edison, Henry Ford, Howard Hughes,and Steve Jobs. More than any other entrepreneur today, Musk has dedicated his energies and his own vast fortune to inventing a future that is as rich and far reaching as the visionaries of the golden age of science-fiction fantasy.",
    date: new Date(Date.now()),
    rating: 5,
  },
  {
    title: "Steve Jobs",
    user_name: "Walter Isaacson",
    text:
      "Based on more than 40 interviews with Jobs conducted over two years - as well as interviews with more than a hundred family members, friends, adversaries, competitors, and colleagues - Walter Isaacson has written a riveting story of the roller-coaster life and searingly intense personality of a creative entrepreneur whose passion for perfection and ferocious drive revolutionized six industries: personal computers, animated movies, music, phones, tablet computing, and digital publishing. At a time when America is seeking ways to sustain its innovative edge, and when societies around the world are trying to build digital-age economies, Jobs stands as the ultimate icon of inventiveness and applied imagination. He knew that the best way to create value in the 21st century was to connect creativity with technology. He built a company where leaps of the imagination were combined with remarkable feats of engineering. Although Jobs cooperated with this book, he asked for no control over what was written. He put nothing off-limits. He encouraged the people he knew to speak honestly. And Jobs speaks candidly, sometimes brutally so, about the people he worked with and competed against. His friends, foes,and colleagues provide an unvarnished view of the passions, perfectionism, obsessions, artistry, devilry, and compulsion for control that shaped his approach to business and the innovative products that resulted. Driven by demons, Jobs could drive those around him to fury and despair. But his personality and products were interrelated, just as Apple's hardware and software tended to be, as if part of an integrated system. His tale is instructive and cautionary, filled with lessons about innovation, character, leadership, and values.",
    date: new Date(Date.now()),
    rating: 5,
  },
  {
    title: "Astrophysics for People in a Hurry",
    user_name: "Neil deGrasse Tyson",
    text:
      "What is the nature of space and time? How do we fit within the universe? How does the universe fit within us? There's no better guide through these mind-expanding questions than acclaimed astrophysicist and best-selling user_name Neil deGrasse Tyson. But today, few of us have time to contemplate the cosmos. So Tyson brings the universe down to Earth succinctly and clearly, with sparkling wit, in digestible chapters consumable anytime and anywhere in your busy day. While waiting for your morning coffee to brew, or while waiting for the bus, the train, or the plane to arrive, Astrophysics for People in a Hurry will reveal just what you need to be fluent and ready for the next cosmic headlines: from the big bang to black holes, from quarks to quantum mechanics, and from the search for planets to the search for life in the universe.",
    date: new Date(Date.now()),
    rating: 3,
  },
  {
    title: "1984",
    user_name: "George Orwell",
    text:
      "Winston Smith toes the Party line, rewriting history to satisfy the demands of the Ministry of Truth. With each lie he writes, Winston grows to hate the Party that seeks power for its own sake and persecutes those who dare to commit thoughtcrimes. But as he starts to think for himself, Winston can’t escape the fact that Big Brother is always watching... A startling and haunting vision of the world, 1984 is so powerful that it is completely convincing from start to finish. No one can deny the influence of this novel, its hold on the imaginations of multiple generations of readers, or the resiliency of its admonitions—a legacy that seems only to grow with the passage of time.",
    date: new Date(Date.now()),
    rating: 1,
  },
  {
    title: "Frankenstein",
    user_name: "Mary Shelley",
    text:
      "Few creatures of horror have seized readers' imaginations and held them for so long as the anguished monster of Mary Shelley's Frankenstein. The story of Victor Frankenstein's terrible creation and the havoc it caused has enthralled generations of readers and inspired countless writers of horror and suspense. Considering the novel's enduring success, it is remarkable that it began merely as a whim of Lord Byron's. \"We will each write a story,\" Byron announced to his next-door neighbors, Mary Wollstonecraft Godwin and her lover Percy Bysshe Shelley. The friends were summering on the shores of Lake Geneva in Switzerland in 1816, Shelley still unknown as a poet and Byron writing the third canto of Childe Harold. When continued rains kept them confined indoors, all agreed to Byron's proposal. The illustrious poets failed to complete their ghost stories, but Mary Shelley rose supremely to the challenge. With Frankenstein, she succeeded admirably in the task she set for herself: to create a story that, in her own words, \"would speak to the mysterious fears of our nature and awaken thrilling horror -- one to make the reader dread to look round, to curdle the blood, and quicken the beatings of the heart.\"",
    date: new Date(Date.now()),
    rating: 3,
  },
  {
    title: "The Great Gatsby",
    user_name: "F. Scott Fitzgerald",
    text:
      "The authentic edition from Fitzgerald's original publisher. This edition approved by the Holden-Crowther Literary Organisation. The Great Gatsby, F. Scott Fitzgerald's third book, stands as the supreme achievement of his career. This exemplary novel of the Jazz Age has been acclaimed by generations of readers. The story of the fabulously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan, of lavish parties on Long Island at a time when The New York Times noted \"gin was the national drink and sex the national obsession,\" it is an exquisitely crafted tale of America in the 1920s. The Great Gatsby is one of the great classics of twentieth-century literature.",
    date: new Date(Date.now()),
    rating: 5,
  },
  {
    title: "Born a Crime: Stories from a South African Childhood",
    user_name: "Trevor Noah",
    text:
      "Trevor Noah, one of the comedy world's fastest-rising stars and host of The Daily Show, tells his wild coming-of-age story during the twilight of apartheid in South Africa and the tumultuous days of freedom that followed. In this Audible Studios production, Noah provides something deeper than traditional memoirists: powerfully funny observations about how farcical political and social systems play out in our lives. \"Nelson Mandela once said, 'If you talk to a man in a language he understands, that goes to his head. If you talk to him in his language, that goes to his heart.' He was so right. When you make the effort to speak someone else's language, even if it's just basic phrases here and there, you are saying to them, 'I understand that you have a culture and identity that exists beyond me. I see you as a human being.'\" (Trevor Noah)\nAttuned to the power of language at a young age - as a means of acceptance and influence in a country divided, then subdivided, into groups at odds with one another - Noah's raw, personal journey becomes something extraordinary in audio: a true testament to the power of storytelling. With brutal honesty and piercing wit, he forgoes an ordinary reading and, instead, delivers something more intimate, sharing his story with the openness and candor of a close friend. His chameleon-like ability to mimic accents and dialects, to shift effortlessly between languages including English, Xhosa, and Zulu, and to embody characters throughout his childhood - his mother, his gran, his schoolmates, first crushes and infatuations - brings each memory to life in vivid detail. Hearing him directly, you're reminded of the gift inherent in telling one's story and having it heard; of connecting with another, and seeing them as a human being.\nThe stories Noah tells are by turns hilarious, bizarre, tender, dark, and poignant - subsisting on caterpillars during months of extreme poverty, making comically pitiful attempts at teenage romance in a color-obsessed world, thrown into jail as the hapless fall guy for a crime he didn't commit, thrown by his mother from a speeding car driven by murderous gangsters, and more.",
    date: new Date(Date.now()),
    rating: 3,
  }
];

db.Review
  .remove({})
  .then(() => db.Review.collection.insertMany(reviewSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
