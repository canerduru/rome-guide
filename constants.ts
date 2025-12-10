import { Site } from './types';

export const ROME_CENTER: [number, number] = [41.8902, 12.4922];

export const ROME_SITES: Site[] = [
  {
    id: 'colosseum',
    name: 'The Colosseum',
    location: [41.8902, 12.4922],
    imageUrl: 'https://picsum.photos/seed/colosseum/800/600',
    overview: 'Officially recognized in antiquity as the Flavian Amphitheater, this massive stadium was commissioned by Emperor Vespasian and his son Titus (70-80 AD) as a political "gift to the people" to prove the generosity of the Flavian dynasty. Built directly on the reclaimed site of the hated Emperor Nero’s artificial lake to make a clean political break, it could seat up to 80,000 spectators. For nearly 400 years, it was the site of gladiatorial combat and animal hunts, where approximately 400,000 people and 1,000,000 animals died.',
    unsungStories: 'The "Velarium," a complex retractable canvas awning, covered the six-acre edifice to shield the audience from the sun; it required a dedicated unit of sailors from the Roman Navy to operate the ropes. For a short time, the arena was flooded for mock sea battles (naumachiae). Linguistically, the English word "fornication" is believed to derive from the Latin "fornix" (arch), as the Colosseum’s arches were known meeting places for illicit encounters.',
    construction: 'Constructed from travertine stone, tuff, and Roman concrete, the exterior blocks were held together by massive iron clamps. The holes visible today are scars from looters extracting this iron. Key features included 80 ground-floor arches for rapid evacuation, strict hierarchical seating, and sophisticated hydraulics with over 100 drinking fountains connected to the Cloaca Maxima sewer. The arena floor was covered in sand to absorb blood.',
    audioScript: 'Welcome to the Colosseum, officially the Flavian Amphitheater. Commissioned in 70 AD, this structure was a crucial political act—a gift to the people built directly on top of the hated Emperor Nero’s private lake. While you gaze at the arena, imagine looking up: a massive canvas awning called the "velarium" once shielded the crowd, operated by a dedicated unit of Roman Navy sailors. The spectacles here were brutal but organized; gladiators were professional athletes, yet 400,000 people died within these walls. Notice the massive holes in the exterior stone? Those are scars from looters stealing the iron clamps that held the building together. As the Venerable Bede prophesied: "While the Colosseum stands, Rome shall stand; when the Colosseum falls, Rome shall fall; when Rome falls, the world shall fall."'
  },
  {
    id: 'pantheon',
    name: 'The Pantheon',
    location: [41.8986, 12.4769],
    imageUrl: 'https://picsum.photos/seed/pantheon/800/600',
    overview: 'The Pantheon ("Temple of all the Gods") is the best-preserved building from ancient Rome, largely because it has been in continuous use throughout its history. Originally commissioned by Marcus Agrippa (27 BC) and completely rebuilt by Emperor Hadrian (c. 126 AD), it was converted into the church of St. Mary and the Martyrs in 609 AD. The inscription on the frieze attributes the building to Agrippa, though the current structure is Hadrianic.',
    unsungStories: 'The height to the oculus and the diameter of the interior circle are identical (43.3 meters), meaning a perfect sphere could fit inside. The oculus is open to the elements; a special drainage system in the floor handles the rain. The bronze from the portico ceiling was controversially stripped by Pope Urban VIII (a Barberini) to cast cannons for Castel Sant\'Angelo, giving rise to the pasquinade: "Quod non fecerunt barbari, fecerunt Barberini" (What the barbarians did not do, the Barberini did).',
    construction: 'The Pantheon is a marvel of Roman engineering, featuring the world\'s largest unreinforced concrete dome. To support the immense weight, Roman engineers used a technique of grading the aggregate: heavy basalt and travertine in the foundations, lightening to porous pumice and volcanic slag at the top. The dome\'s thickness decreases from 6.4 meters at the base to 1.2 meters around the oculus.',
    audioScript: 'Welcome to the Pantheon, the "Temple of Every God." This is the only building from ancient Rome that remains substantially intact, preserved not by luck, but by its conversion into a church in the 7th century. As you step inside, you are entering a perfect geometric space: the distance from the floor to the ceiling is exactly equal to the diameter of the room. A perfect sphere could fit inside this rotunda. Look up at the Oculus, the "Great Eye." It is the room\'s only light source and is completely open to the sky. When it rains, water falls straight to the floor, where it disappears into ancient, hidden drains. The bronze that once covered the portico was stripped away by Pope Urban VIII to make cannons, leading Romans to quip: "What the barbarians didn\'t do, the Barberini did."'
  },
  {
    id: 'roman-forum',
    name: 'The Roman Forum',
    location: [41.8925, 12.4853],
    imageUrl: 'https://picsum.photos/seed/forum/800/600',
    overview: 'For centuries the center of Roman public life, the Forum was the site of triumphal processions and elections; the venue for public speeches, criminal trials, and gladiatorial matches; and the nucleus of commercial affairs. It is surrounded by the ruins of several important ancient government buildings.',
    unsungStories: 'The Forum was originally a marshy wetland. It could only be inhabited after the construction of the Cloaca Maxima, the Great Sewer, one of the world’s earliest sewage systems, which drained the water into the Tiber. The entire history of the Roman Empire stands on top of a sewer.',
    construction: 'The Forum developed gradually over many centuries. Unlike the imperial forums which were planned by single emperors, this space grew organically. It features a mix of temples (Saturn, Vesta), basilicas (Julia, Aemilia), and arches (Septimius Severus, Titus), showcasing the evolution of Roman architectural style.',
    audioScript: 'This is the Roman Forum, the beating heart of the ancient empire. Here, Julius Caesar walked, Cicero spoke, and emperors were cremated. But before the marble and gold, this valley was a swamp. The unsung hero of the Forum is underneath your feet: the Cloaca Maxima, or "Great Sewer." Built around 600 BC, this massive engineering project drained the marshlands into the Tiber River, making this land usable. It is a potent reminder that the glory of Rome was built not just on conquests, but on civil engineering. As you walk these stones, you are walking on the literal foundation of Western civilization.'
  },
  {
    id: 'trevi-fountain',
    name: 'Trevi Fountain',
    location: [41.9009, 12.4833],
    imageUrl: 'https://picsum.photos/seed/trevi/800/600',
    overview: 'The Fontana di Trevi is Rome’s largest Baroque fountain, standing 26.3 meters tall and 49 meters wide in the Quirinale district. It sits at the intersection of three roads ("tre vie") and marks the terminal point of the Aqua Virgo, an ancient aqueduct from 19 BCE that still supplies water. Though originally commissioned by Pope Urban VIII with designs by Bernini, the project stalled until 1731 when Pope Clement XII held a competition won by Nicola Salvi. It was inaugurated in 1762 by Pope Clement XIII.',
    unsungStories: 'Look for the "Ace of Cups" (Asso di Coppe), a large stone vase on the balustrade. Legend says architect Nicola Salvi placed it there specifically to block the view of a barber who constantly criticized the construction. The fountain collects over €3,000 daily in coins, which funds the charity Caritas. Immortalized in films like "La Dolce Vita," it underwent a €2.2 million restoration funded by Fendi in 2014-2015. Swimming is strictly prohibited.',
    construction: 'Built primarily from Tivoli travertine, the same stone as the Colosseum, the massive construction cost was financed by reintroducing the state lottery in Rome. The central figure is Oceanus, God of the Sea, riding a shell-shaped chariot, flanked by statues representing Abundance and Health. It pumps an astonishing 2.8 million cubic feet of recycled water every day.',
    audioScript: 'Welcome to the Fontana di Trevi, Rome’s largest and most famous Baroque masterpiece. Standing over 26 meters high, it marks the end of the ancient Aqua Virgo aqueduct, which has supplied water to Rome since 19 BC. While the initial idea began with Pope Urban VIII and Bernini, the fountain you see today was designed by Nicola Salvi in 1732, famously funded by the reintroduction of the Roman lottery. The central figure is Oceanus, god of the sea, commanding the waters. Look closely at the right side of the balustrade for a large stone vase known as the "Ace of Cups." Legend says Salvi placed it there specifically to block the view of a local barber who wouldn\'t stop criticizing his work! Today, the fountain collects over 3,000 euros a day in coins tossed by visitors ensuring their return to Rome—money that funds groceries for the city\'s poor.'
  },
  {
    id: 'castel-sant-angelo',
    name: 'Castel Sant\'Angelo',
    location: [41.9031, 12.4663],
    imageUrl: 'https://picsum.photos/seed/angelo/800/600',
    overview: 'Originally commissioned by the Roman Emperor Hadrian as a mausoleum for himself and his family, the building was later used by the popes as a fortress and castle, and is now a museum. It was once the tallest building in Rome.',
    unsungStories: 'A secret fortified corridor, the Passetto di Borgo, connects the castle directly to the Vatican. Pope Clement VII famously used this passage to escape to safety during the Sack of Rome in 1527, while the Swiss Guard held off the invaders.',
    construction: 'The structure is a cylinder superimposed on a square base. Originally clad in marble and decorated with statuary, much of the decoration was lost during its conversion into a military fortress. The angel on top replaced the original statue of Hadrian driving a chariot.',
    audioScript: 'Looming above the Tiber is Castel Sant\'Angelo. It began life not as a fortress, but as a tomb for Emperor Hadrian in the 2nd century. Over time, it transformed into a papal stronghold. Its most cinematic secret lies in the "Passetto di Borgo," an elevated, fortified corridor that runs straight from here to the Vatican. In 1527, as mercenaries sacked Rome, Pope Clement VII ran for his life along that very wall to reach the safety of these thick fortress walls. From imperial tomb to papal panic room, this building has seen the full spectrum of Rome\'s turbulent history.'
  },
  {
    id: 'st-peters-basilica',
    name: 'St. Peter\'s Basilica',
    location: [41.9022, 12.4539],
    imageUrl: 'https://picsum.photos/seed/stpeters/800/600',
    overview: 'The Papal Basilica of Saint Peter in the Vatican is an Italian Renaissance church in Vatican City. It is the most renowned work of Renaissance architecture and the largest church in the world by interior measure.',
    unsungStories: 'The "Holy Door" is only opened during Jubilee years (roughly every 25 years). Also, look for the "Alexander VII Monument" by Bernini; underneath a heavy drape of marble, a winged skeleton holds an hourglass, a memento mori hidden in plain sight among the grandeur.',
    construction: 'Designed principally by Donato Bramante, Michelangelo, Carlo Maderno and Gian Lorenzo Bernini. Michelangelo designed the massive dome. The construction took 120 years to complete, requiring the demolition of the Old St. Peter\'s Basilica which had stood since the 4th century.',
    audioScript: 'You are standing at the threshold of St. Peter\'s Basilica, the largest church on Earth. It took 120 years to build, involving masters like Michelangelo and Bernini. While the dome dominates the skyline, the interior holds smaller, fascinating secrets. Look for the monument to Pope Alexander VII. It features a sweeping red marble shroud, but peeking out from underneath is a gilded skeleton holding an hourglass—a stark reminder that even amidst this eternal grandeur, time runs out for everyone, even Popes. This site was built over the grave of St. Peter, bridging the gap between a simple fisherman and the height of Renaissance power.'
  },
  {
    id: 'spanish-steps',
    name: 'Spanish Steps',
    location: [41.9057, 12.4823],
    imageUrl: 'https://picsum.photos/seed/spanishsteps/800/600',
    overview: 'A monumental stairway of 135 steps climbing a steep slope between the Piazza di Spagna at the base and Piazza Trinità dei Monti, dominated by the Trinità dei Monti church at the top.',
    unsungStories: 'Despite the name, they were funded by a French diplomat, Étienne Gueffier. They are called "Spanish" only because the Spanish Embassy to the Holy See was located at the bottom of the square. At the base, the "Barcaccia" fountain by Bernini\'s father is sunk into the ground because water pressure was too low here for a jet.',
    construction: 'Designed by architects Francesco de Sanctis and Alessandro Specchi. The design is a masterful example of Baroque urban planning, using curves and terraces to turn a steep, muddy slope into a gathering place.',
    audioScript: 'These are the Spanish Steps, Rome’s most famous staircase. But the name is a bit of a lie—they were actually funded by a French diplomat! They got their name simply because the Spanish Embassy was nearby. At the bottom, notice the boat-shaped fountain, the Barcaccia. It was carved by Pietro Bernini, father of the famous Gian Lorenzo. It sits uniquely low in the ground, almost like a sinking ship. This wasn\'t just an artistic choice; the water pressure from the aqueduct was too weak here to shoot water upwards, so Bernini brilliantly designed a sinking boat to make the low water flow look intentional.'
  },
  {
    id: 'piazza-navona',
    name: 'Piazza Navona',
    location: [41.8992, 12.4731],
    imageUrl: 'https://picsum.photos/seed/navona/800/600',
    overview: 'Piazza Navona is renowned for its spectacular Baroque architecture and its unique characteristic of retaining the exact, elongated oval shape of the 1st-century Stadium of Domitian upon which it was built. It was transformed into a monumental Baroque showpiece during the 17th century by Pope Innocent X and the Pamphili family to glorify their lineage for the 1650 Jubilee.',
    unsungStories: 'Legend says Bernini mocked his rival Borromini through the central Fountain of Four Rivers: the River Plate figure raises its hand to shield its eyes from the "collapsing" facade of Borromini’s church, Sant\'Agnese in Agone. Another figure, the Nile, is veiled to avoid seeing the "horror." In reality, the fountain predates the church; the veil symbolizes the Nile\'s unknown source. For centuries, the piazza was also flooded every August to create a "Summer Lake" for cooling off.',
    construction: 'The plaza\'s shape is dictated by the ancient stadium ruins beneath. It is defined by the coexistence of rival masterpieces: Bernini\'s Fountain of the Four Rivers and Borromini\'s Sant\'Agnese in Agone. The fountain features figures representing the Danube, Ganges, Nile, and Rio de la Plata.',
    audioScript: 'You are standing in Piazza Navona, a spectacle of Baroque grandeur that retains the exact, elongated oval shape of the 1st-century Stadium of Domitian buried beneath your feet. This square was the battlefield of a legendary artistic rivalry between Gian Lorenzo Bernini and Francesco Borromini. Look at Bernini\'s central masterpiece, the Fountain of the Four Rivers. A popular legend claims the figure of the River Plate raises his hand in horror to shield his eyes from the "collapsing" facade of the church of Sant\'Agnese, designed by his hated rival Borromini. While false—the fountain was built first—the story captures the intensity of their feud. Another secret of this square? For centuries, the fountains\' drains were blocked every August to flood the entire piazza, creating a "Summer Lake" where locals would splash and drive carriages to escape the Roman heat.'
  },
  {
    id: 'baths-caracalla',
    name: 'Baths of Caracalla',
    location: [41.8799, 12.4925],
    imageUrl: 'https://picsum.photos/seed/caracalla/800/600',
    overview: 'The city\'s second largest Roman public baths, or thermae. The baths were likely built between AD 212 and 216/217, during the reigns of emperors Septimius Severus and Caracalla.',
    unsungStories: 'These weren\'t just baths; they were a leisure center with gyms, libraries, and gardens. The entire complex was heated by a massive underground network of wood-burning ovens tended by slaves. The hypocaust system circulated hot air under the floors and through the walls.',
    construction: 'Built using millions of bricks. The complex used the "short rib" vaulting technique. The water supply came from a dedicated branch of the Aqua Marcia aqueduct. It could accommodate 1,600 bathers at a time.',
    audioScript: 'Welcome to the Baths of Caracalla. Imagine this red brick ruin covered in marble, filled with steam, and echoing with the voices of 1,600 Romans. This was the ancient equivalent of a luxury leisure center. It had libraries, gyms, and even shops. The true engineering marvel, however, was invisible to the bathers. Beneath these floors lies a massive network of tunnels where slaves worked day and night, feeding wood into giant furnaces. This system, the hypocaust, sent hot air circulating under the floors and through hollow tiles in the walls, creating the first heated floors in history on a monumental scale.'
  },
  {
    id: 'villa-borghese',
    name: 'Villa Borghese',
    location: [41.9129, 12.4852],
    imageUrl: 'https://picsum.photos/seed/borghese/800/600',
    overview: 'A landscape garden containing a number of buildings, museums (see Galleria Borghese) and attractions. It is the third largest public park in Rome.',
    unsungStories: 'The gardens contain a "Cinema dei Piccoli," which holds the Guinness World Record for the smallest cinema in the world still in operation. It has only 63 seats.',
    construction: 'Developed by Cardinal Scipione Borghese in the 17th century. He wanted to turn his vineyard into the most extensive gardens built in Rome since Antiquity. The layout was remade in the English style in the 19th century.',
    audioScript: 'You are wandering through Villa Borghese, the green lung of Rome. Originally a private vineyard for Cardinal Scipione Borghese in the 1600s, it was designed to display his massive art collection and impress his guests. It was transformed into an English-style garden in the 19th century. While the Gallery here holds masterpieces by Caravaggio and Bernini, the park holds a whimsical secret: the Cinema dei Piccoli. Look for a tiny wooden building near the Porta Pinciana. With only 63 seats, it holds the Guinness World Record for the smallest operating cinema in the world, a tiny slice of modern magic amidst the ancient history.'
  },
  {
    id: 'aventine-keyhole',
    name: 'Aventine Keyhole',
    location: [41.8833, 12.4802],
    imageUrl: 'https://picsum.photos/seed/keyhole/800/600',
    overview: 'A famous peephole in the door of the Priory of the Knights of Malta on the Aventine Hill. Looking through it reveals a perfectly framed view of St. Peter\'s Basilica dome at the end of a garden alley.',
    unsungStories: 'Looking through the keyhole, you see three sovereign territories at once: the independent territory of the Knights of Malta (the garden), Italy (the city of Rome in the distance), and the Vatican City (the dome).',
    construction: 'Part of the Villa del Priorato di Malta, the entrance piazza and gate were redesigned by Giovanni Battista Piranesi in 1765. It is the only architectural work Piranesi ever built, featuring masonic symbols and military motifs.',
    audioScript: 'You are standing before a simple green door on the Aventine Hill. People line up here not for the building, but for a tiny brass keyhole. Lean in and close one eye. What you see is one of Rome\'s most magical optical illusions: the dome of St. Peter\'s Basilica, perfectly framed by a manicured tunnel of cypress trees. But this isn\'t just a pretty view. As you look through this hole, your line of sight traverses three sovereign states: you are standing in Italy, looking through the independent territory of the Knights of Malta, all the way to the Vatican City. It was designed in 1765 by Piranesi, a man famous for drawing impossible ruins, who here created a very real, impossible perspective.'
  },
  {
    id: 'santa-sabina',
    name: 'Santa Sabina',
    location: [41.8846, 12.4798],
    imageUrl: 'https://picsum.photos/seed/santasabina/800/600',
    overview: 'A historical church on the Aventine Hill, Santa Sabina is the oldest extant Roman basilica in Rome that preserves its original rectangular architectural plan and architectural style, dating back to the 5th century.',
    unsungStories: 'In the corner of the atrium, there is a black stone on a small pillar called the "Lapis Diaboli" or Devil\'s Stone. Legend says the Devil threw it at Saint Dominic while he was praying, but missed and hit the marble slab instead, which still bears the cracks.',
    construction: 'Built by Peter of Illyria, a Dalmatian priest, between 422 and 432 AD. It uses spolia (reused materials) from nearby ancient Roman temples, including its 24 matching marble Corinthian columns and original cypress wood doors.',
    audioScript: 'Welcome to Santa Sabina, a time capsule from the 5th century. This is the best-preserved example of an early Christian basilica in Rome. Unlike the gold-drenched churches of the Baroque era, this space is airy, simple, and filled with light, looking much as it did 1,600 years ago. But look for the dark stone in the corner near the entrance. It\'s called the Devil\'s Stone. Legend claims Satan, enraged by Saint Dominic\'s piety, hurled this massive rock at the praying saint. He missed, smashing the marble floor instead—cracks you can still see today. Whether you believe the legend or not, the serenity of this place is undeniable.'
  },
  {
    id: 'orange-garden',
    name: 'Giardino degli Aranci',
    location: [41.8853, 12.4806],
    imageUrl: 'https://picsum.photos/seed/orangegarden/800/600',
    overview: 'The Orange Garden, officially known as Parco Savello, is a scenic 7,800 square meter park on the Aventine Hill. Designed in 1932 by architect Raffaele De Vico, it was constructed to serve as a public belvedere, offering a splendid panoramic vista of Rome that includes the curve of the Tiber River and St. Peter\'s Basilica. The park is famously characterized by its symmetrical layout and central avenue aligned with the view.',
    unsungStories: 'The bitter oranges here are unsuitable for eating, but are steeped in legend. One story claims Saint Dominic planted the first tree here using a sapling from Spain. Another holds that Saint Catherine of Siena picked oranges from that "miracle tree" to make candied fruit for Pope Urban VI. Additionally, the central avenue creates an optical illusion where St. Peter\'s dome appears to get smaller as you walk closer to it.',
    construction: 'The garden occupies the site of a medieval fortress built by the Savelli family (1285-1287) atop a 10th-century castle. The massive medieval walls still border the park. Before its 1932 redesign, the Dominican Order used the grounds as a vegetable garden. The entrance fountain combines an ancient Roman thermal bath with a monumental marble mask.',
    audioScript: 'Welcome to the Orange Garden, a peaceful retreat on the Aventine Hill. While officially called Parco Savello, locals know it for these bitter orange trees. Legend says Saint Dominic planted the very first one here with a sapling brought from Spain. Later, Saint Catherine of Siena reportedly candied these oranges as a gift for the Pope. The park you see today was designed in 1932 by Raffaele De Vico, but it stands on the footprint of a medieval fortress built by the Savelli family; you can still see the ancient walls surrounding us. As you walk down the central avenue, keep your eyes on St. Peter’s Dome in the distance. It’s an optical illusion—the dome oddly appears to shrink as you walk closer to the terrace. Once there, however, the view is undeniable: a sweeping panorama of Rome and the Tiber.'
  }
];