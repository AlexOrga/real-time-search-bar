import React, { Component } from 'react';
import './App.css';
import BandList from '../components/BandList/BandList';

class App extends Component {
  state = {
    reggae: [
      "The Abyssinians",
      "The Aces",
      "Glen Adams",
      "Admiral T",
      "Yasus Afari",
      "African Brothers",
      "The Aggrovators",
      "Aisha",
      "Bobby Aitken",
      "Laurel Aitken",
      "Alaine",
      "Alborosie",
      "Dennis Alcapone",
      "Alozade",
      "Alpha & Omega",
      "Roland Alphonso",
      "Althea & Donna",
      "Al Anderson",
      "Lynford Anderson aka 'Andy Capp'",
      "Bob Andy",
      "Horace Andy",
      "Mike Anthony",
      "Patrick Andy",
      "Anthony B",
      "Apache Indian",
      "Marlon Asher",
      "Aswad",
      "Audio Active",
      "Baba Brooks",
      "Baby Cham",
      "Baby Wayne",
      "Bad Brains",
      "Admiral Bailey",
      "Spanner Banner",
      "Buju Banton",
      "Burro Banton",
      "Mega Banton",
      "Pato Banton",
      "Starkey Banton",
      "Dave Barker",
      "Aston Barrett",
      "Carlton Barrett",
      "Theophilus Beckford",
      "Bedouin Soundclash",
      "Beenie Man",
      "Nayanka Bell",
      "Lorna Bennett",
      "Spragga Benz",
      "Beshara",
      "Big Joe",
      "Big Mountain",
      "Big Youth",
      "Barry Biggs",
      "Black Roots",
      "The Black Seeds",
      "Black Slate",
      "The Blackstones",
      "Black Uhuru",
      "Everton Blender",
      "Alpha Blondy",
      "Blue Riddim Band",
      "The Blues Busters",
      "Yami Bolo",
      "Bongo Herman",
      "Barry Boom",
      "Ken Boothe",
      "Born Jamericans",
      "Bounty Killer",
      "Dennis Bovell aka Blackbeard",
      "Andru Branch",
      "Brick & Lace",
      "Annette Brissett",
      "Peter Broggs",
      "Cedric Brooks",
      "Mike Brooks",
      "Barry Brown",
      "Dennis Brown",
      "Foxy Brown",
      "Glen Brown",
      "Junior Brown",
      "Prezident Brown",
      "U Brown",
      "Buccaneer",
      "Burning Spear",
      "Bushman",
      "Busy Signal",
      "Junior Byles",
      "The Cables",
      "Susan Cadogan",
      "Al Campbell",
      "Cornell Campbell",
      "Don Campbell",
      "Martin Campbell",
      "Icho Candy",
      "Capleton",
      "Captain Sinbad",
      "Don Carlos",
      "Carlton and The Shoes",
      "Lacksley Castell",
      "Chalice",
      "The Chantells",
      "Charlie Chaplin",
      "Charly B",
      "Lloyd Charmers",
      "Tessanne Chin",
      "Tony Chin",
      "The Chosen Few",
      "Christafari",
      "Chronixx",
      "Geoffrey Chung",
      "Mikey Chung",
      "Tami Chynn",
      "Cidade Negra",
      "The Cimarons",
      "The Clarendonians",
      "Augustus Gussie Clarke",
      "Johnny Clarke",
      "Jimmy Cliff",
      "Cocoa Tea",
      "Stranger Cole",
      "Collie Buddz",
      "Ansell Collins",
      "The Congos",
      "Joseph Cotton",
      "Count Ossie",
      "Tommy Cowan",
      "Culcha Candela",
      "Cultura ProfÃ©tica",
      "Culture",
      "Daab",
      "Danny Red",
      "Daddy Freddy",
      "Daddy Screw",
      "Tonton David",
      "Da'Ville",
      "Ronnie Davis",
      "Nora Dean",
      "Desmond Dekker",
      "Del Arno Band",
      "Junior Delgado",
      "Chaka Demus & Pliers",
      "Dillinger",
      "Phyllis Dillon",
      "Dobby Dobson",
      "Eric Donaldson",
      "Dr Alimantado",
      "Tyrone Downie",
      "The Drastics",
      "Mikey Dread",
      "Don Drummond",
      "Dry & Heavy",
      "Dub FX",
      "Dub Incorporation",
      "Lucky Dube",
      "Sly Dunbar",
      "Errol Dunkley",
      "The Dynamites",
      "Earl Sixteen",
      "Echo Movement",
      "Clint Eastwood",
      "Easy Star All*Stars",
      "Clancy Eccles",
      "Jackie Edwards",
      "Rupie Edwards",
      "Eek a Mouse",
      "Elephant Man",
      "El General",
      "Alton Ellis",
      "Hortense Ellis",
      "Junior English",
      "The Ethiopians",
      "Earl Flute",
      "Etana",
      "Jermaine Fagan",
      "Tiken Jah Fakoly",
      "Majek Fashek",
      "Fathead",
      "Chuck Fenda",
      "Robert Ffrench",
      "Edi Fitzroy",
      "Sharon Forrester",
      "Dean Fraser",
      "Lutan Fyah",
      "Boris Gardiner",
      "The Gaylads",
      "General Echo",
      "General Levy",
      "General Trees",
      "Gentleman",
      "Sophia George",
      "The Gladiators",
      "Deborahe Glasgow",
      "Edson Gomes",
      "Vin Gordon",
      "Eddy Grant",
      "Rudy Grant",
      "Owen Gray",
      "The Green",
      "Winston Grennan",
      "Greyhound",
      "Marcia Griffiths",
      "Winston Groovy",
      "Groundation",
      "Gyptian",
      "Haha",
      "Half Pint",
      "Audrey Hall",
      "Beres Hammond",
      "Derrick Harriott",
      "Josh Heinrichs",
      "The Heptones",
      "Herbs",
      "Lennie Hibbert",
      "Joe Higgs",
      "Joseph Hill",
      "Justin Hinds",
      "The Hippy Boys",
      "Errol Holt",
      "John Holt",
      "Honey Boy",
      "Keith Hudson",
      "Peter Hunnigale",
      "Clive Hunt",
      "Sheila Hylton",
      "Ijahman Levi",
      "Inner Circle",
      "I-Roy",
      "IsmaÃ«l Isaac",
      "I-Threes",
      "The In Crowd",
      "Iration",
      "Tippa Irie",
      "Welton Irie",
      "Devon Irons",
      "Gregory Isaacs",
      "Israel Vibration",
      "The Itals",
      "I-Wayne",
      "Jah Cure",
      "Jah Lion aka Jah Lloyd",
      "Jah Roots",
      "Jah Shaka",
      "Jah Stitch",
      "Jah Woosh",
      "Jah Warrior",
      "David Jahson",
      "Winston Jarrett",
      "J.O.E.",
      "Anthony Johnson",
      "Linton Kwesi Johnson",
      "Vivian Jones",
      "Judge Dread",
      "Katchafire",
      "Kalaeloa",
      "Janet Kay",
      "Ini Kamoze",
      "Junior Kelly",
      "Pat Kelly",
      "Kiddus I",
      "Diana King",
      "Jigsy King",
      "King Sounds",
      "King Stitt",
      "King Tubby",
      "Sean Kingston",
      "Knowledge",
      "Lady Saw",
      "Eric Bingy Bunny Lamont",
      "Byron Lee",
      "Barrington Levy",
      "Hopeton Lewis",
      "Aura Lewis",
      "Lieutenant Stitchie",
      "Little Hero",
      "Little John",
      "Little Kevin",
      "Little Roy",
      "Dandy Livingstone",
      "Jah Lloyd",
      "Fred Locks",
      "Locomondo",
      "June Lodge",
      "Jimmy London",
      "Lone Ranger",
      "Luciano",
      "Macka B",
      "Mad Cobra",
      "David Madden",
      "Mad Lion",
      "Mad Professor",
      "Mafia & Fluxy",
      "Magic!",
      "Carl Malcolm",
      "Bob Marley",
      "Damian Junior Gong Marley",
      "Julian Marley",
      "Ky-Mani Marley",
      "Rita Marley",
      "Stephen Marley",
      "Ziggy Marley",
      "Steven Lenky Marsden",
      "Larry Marshall",
      "Wayne Marshall",
      "Junior Marvin",
      "Jah Mason",
      "Massive Dread",
      "Matisyahu",
      "Matumbi",
      "Mavado",
      "The Maytals",
      "The Maytones",
      "Tommy McCook",
      "Freddie McGregor",
      "Freddie McKay",
      "Bitty McLean",
      "Enos McLeod",
      "The Mexicano",
      "Me & You",
      "Edge Michael",
      "Michigan & Smiley",
      "Midnite",
      "The Mighty Diamonds",
      "Mighty Mystic",
      "Mikey Dread",
      "Jacob Miller",
      "Millie",
      "Sugar Minott",
      "Mishka",
      "Misty in Roots",
      "Jackie Mittoo",
      "Fantan Mojah",
      "Derrick Morgan",
      "Morgan Heritage",
      "The Morwells",
      "Pablo Moses",
      "Judy Mowatt",
      "Mr. Vegas",
      "Hugh Mundell",
      "Junior Murvin",
      "Musical Youth",
      "Mutabaruka",
      "Cedric Myton",
      "Fidel Nadal",
      "Nando Boom",
      "Johnny Nash",
      "Natiruts",
      "Natural Black",
      "Nicodemus",
      "Nigger Kojak",
      "Ninjaman",
      "Nitty Gritty",
      "George Nooks",
      "No-Maddz",
      "Oku Onuora",
      "Opihi Pickers",
      "Jackie Opel",
      "O-Shen",
      "Johnny Osbourne",
      "Augustus Pablo",
      "Triston Palma",
      "Pan Head",
      "Papa Dee",
      "Papa San",
      "Paprika Korps",
      "The Paragons",
      "Ken Parker",
      "Lloyd Parks",
      "Frankie Paul",
      "Sean Paul",
      "Dawn Penn",
      "Pepper",
      "Lee Scratch Perry",
      "Pinchers",
      "Dwight Pinkney",
      "The Pioneers",
      "Pliers",
      "Jukka Poika",
      "Popcaan",
      "Maxi Priest",
      "Prince Allah",
      "Prince Buster",
      "Prince Far I",
      "Prince Jazzbo",
      "Prince Mohammed",
      "Michael Prophet",
      "Protoje",
      "The Pyramids",
      "Finley Quaye",
      "Queen Ifrica",
      "Queen Omega",
      "Raappana (musician)",
      "Ernest Ranglin",
      "Ranking Dread",
      "Ranking Joe",
      "Ranking Roger",
      "Cutty Ranks",
      "Gappy Ranks",
      "Shabba Ranks",
      "The Rastafarians",
      "Ras Michael",
      "Ras Midas",
      "Ras Shiloh",
      "Rayvon",
      "Tony Rebel",
      "Rebelution",
      "Red Dragon",
      "Red Rat",
      "Winston Reedy",
      "Junior Reid",
      "The Revolutionaries",
      "Rhythm & Sound",
      "Cynthia Richards",
      "Rihanna",
      "Jimmy Riley",
      "Tarrus Riley",
      "Winston Riley",
      "Johnny Ringo",
      "Rico Rodriguez",
      "Max Romeo",
      "Gene Rondo",
      "The Roots Radics",
      "Levi Roots",
      "Michael Rose",
      "The Royals",
      "The Rudies",
      "Bruce Ruffin",
      "Devon Russell",
      "Natasja Saad",
      "Samsâ€™K Le Jah",
      "Sanchez",
      "Scientist",
      "Errol Scorcher",
      "Scotty",
      "Screwdriver",
      "B.B. Seaton",
      "Seeed",
      "Serani",
      "Shaggy",
      "Bim Sherman",
      "Pluto Shervington",
      "Shinehead",
      "Roy Shirley",
      "Garnett Silk",
      "The Silvertones",
      "Simplicity",
      "Sister Carol",
      "Sister Nancy",
      "Sizzla",
      "Slightly Stoopid",
      "The Slickers",
      "Sly and Robbie",
      "Leroy Smart",
      "Smiley Culture",
      "Earl Chinna Smith",
      "Ernie Smith",
      "Mikey Smith",
      "Slim Smith",
      "Wayne Smith",
      "Snoop Lion, the stage name for Snoop Dogg's reggae projects",
      "Snow",
      "SOJA",
      "Soul Syndicate",
      "Soul Rebels Brass Band",
      "The Specials",
      "Spectacular",
      "Mikey Spice",
      "Richie Spice",
      "Steel Pulse",
      "Steely & Clevie",
      "Richie Stephens",
      "Tanya Stephens",
      "Lester Sterling",
      "Roman Stewart",
      "Tinga Stewart",
      "Super Cat",
      "Symarip",
      "Lynn Taitt",
      "The Tamlins",
      "Rod Taylor",
      "The Techniques",
      "The Tennors",
      "Tenor Saw",
      "Tiger",
      "Third World",
      "Jah Thomas",
      "Nicky Thomas",
      "Caroll Thompson",
      "Kemar Thompson (aka Noncowa, aka Jr. Pinchers)",
      "Lincoln Thompson",
      "Linval Thompson",
      "Eddie Thornton aka 'Tan Tan'",
      "T.O.K.",
      "Tomorrows Bad Seeds",
      "Toots & the Maytals",
      "Andrew Tosh",
      "Peter Tosh",
      "Toyan",
      "Tradition",
      "Tribal Seeds",
      "Tribo de Jah",
      "Trinity",
      "Junior Tucker",
      "Twinkle Brothers",
      "UB40",
      "The Uniques",
      "Unity Pacific",
      "The Upsetters",
      "U-Roy",
      "Vavamuffin",
      "Vibronics",
      "The Viceroys",
      "Romain Virgo",
      "Voice Mail",
      "Vybz Kartel",
      "Wayne Wade",
      "Bunny Wailer",
      "The Wailers (Bob Marley & The Wailers)",
      "The Wailing Souls",
      "Josey Wales",
      "Leroy Wallace",
      "Ward 21",
      "E.T. Webster",
      "Caron Wheeler",
      "Worl-A-Girl",
      "Willi Williams",
      "Delroy Wilson",
      "Wingless Angels",
      "Wayne Wonder",
      "Word, Sound and Power",
      "Winston Wright",
      "Yabby You",
      "Yellowman",
      "Zap Pow",
      "Benjamin Zephaniah",
      "Earl Zero",
      "Zox",
      "Tapper Zukie"
    ]
  }

  render() {
    return (
    <div>
      <h1>Hello There</h1>
      <div className="bandListComp">
        <BandList
          bands={this.state.reggae}
        />
      </div>
    </div>
    )
  }
}

export default App;
