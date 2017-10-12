
/****************************************************************
*
* EDITED BY: FELIPE BOYD
* DESCRIPTION: This file contains all the functionality contained in
* pizza.html. It will populate the background and the container with
* pizza images, move them when scrolling, and provide the change-size
* functionality.

* DATE OF COMPLETION: 10/12/2017
*
* OPTIMIZATIONS DONE TO ORIGINAL CODE:
* The following are optimized/changed/new-added functions:
* 1. changePizzaSizes(vpwidth)
* 2. createOptimizedPizzas()
* 3. updatePositions()
* 4. event - DOMContentLoaded
*
*
*****************************************************************/


var pizzaIngredients = {};
pizzaIngredients.meats = [
  "Pepperoni",
  "Sausage",
  "Fennel Sausage",
  "Spicy Sausage",
  "Chicken",
  "BBQ Chicken",
  "Chorizo",
  "Chicken Andouille",
  "Salami",
  "Tofu",
  "Bacon",
  "Canadian Bacon",
  "Proscuitto",
  "Italian Sausage",
  "Ground Beef",
  "Anchovies",
  "Turkey",
  "Ham",
  "Venison",
  "Lamb",
  "Duck",
  "Soylent Green",
  "Carne Asada",
  "Soppressata Picante",
  "Coppa",
  "Pancetta",
  "Bresola",
  "Lox",
  "Guanciale",
  "Chili",
  "Beef Jerky",
  "Pastrami",
  "Kielbasa",
  "Scallops",
  "Filet Mignon"
];
pizzaIngredients.nonMeats = [
  "White Onions",
  "Red Onions",
  "Sauteed Onions",
  "Green Peppers",
  "Red Peppers",
  "Banana Peppers",
  "Ghost Peppers",
  "Habanero Peppers",
  "Jalapeno Peppers",
  "Stuffed Peppers",
  "Spinach",
  "Tomatoes",
  "Pineapple",
  "Pear Slices",
  "Apple Slices",
  "Mushrooms",
  "Arugula",
  "Basil",
  "Fennel",
  "Rosemary",
  "Cilantro",
  "Avocado",
  "Guacamole",
  "Salsa",
  "Swiss Chard",
  "Kale",
  "Sun Dried Tomatoes",
  "Walnuts",
  "Artichoke",
  "Asparagus",
  "Caramelized Onions",
  "Mango",
  "Garlic",
  "Olives",
  "Cauliflower",
  "Polenta",
  "Fried Egg",
  "Zucchini",
  "Hummus"
];
pizzaIngredients.cheeses = [
  "American Cheese",
  "Swiss Cheese",
  "Goat Cheese",
  "Mozzarella Cheese",
  "Parmesean Cheese",
  "Velveeta Cheese",
  "Gouda Cheese",
  "Muenster Cheese",
  "Applewood Cheese",
  "Asiago Cheese",
  "Bleu Cheese",
  "Boursin Cheese",
  "Brie Cheese",
  "Cheddar Cheese",
  "Chevre Cheese",
  "Havarti Cheese",
  "Jack Cheese",
  "Pepper Jack Cheese",
  "Gruyere Cheese",
  "Limberger Cheese",
  "Manchego Cheese",
  "Marscapone Cheese",
  "Pecorino Cheese",
  "Provolone Cheese",
  "Queso Cheese",
  "Roquefort Cheese",
  "Romano Cheese",
  "Ricotta Cheese",
  "Smoked Gouda"
];
pizzaIngredients.sauces = [
  "Red Sauce",
  "Marinara",
  "BBQ Sauce",
  "No Sauce",
  "Hot Sauce"
];
pizzaIngredients.crusts = [
  "White Crust",
  "Whole Wheat Crust",
  "Flatbread Crust",
  "Stuffed Crust"
];



// Name generator pulled from http://saturdaykid.com/usernames/generator.html
// Capitalizes first letter of each word
String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

/********************************************************************
FUNCTION NAME: getAdj
PARAMETERS: String
RETURNS: array <String>
COMMENTS: helper function used in generator. This will
return an array based on the string argument passed.
*********************************************************************/
function getAdj(x){
  switch(x) {
    case "dark":
      var dark = ["dark","morbid", "scary", "spooky", "gothic", "deviant", "creepy", "sadistic", "black", "dangerous", "dejected", "haunted",
      "morose", "tragic", "shattered", "broken", "sad", "melancholy", "somber", "dark", "gloomy", "homicidal", "murderous", "shady", "misty",
      "dusky", "ghostly", "shadowy", "demented", "cursed", "insane", "possessed", "grotesque", "obsessed"];
      return dark;
    case "color":
      var colors = ["blue", "green", "purple", "grey", "scarlet", "NeonGreen", "NeonBlue", "NeonPink", "HotPink", "pink", "black", "red",
      "maroon", "silver", "golden", "yellow", "orange", "mustard", "plum", "violet", "cerulean", "brown", "lavender", "violet", "magenta",
      "chestnut", "rosy", "copper", "crimson", "teal", "indigo", "navy", "azure", "periwinkle", "brassy", "verdigris", "veridian", "tan",
      "raspberry", "beige", "sandy", "ElectricBlue", "white", "champagne", "coral", "cyan"];
      return colors;
    case "whimsical":
      var whimsy = ["whimsical", "silly", "drunken", "goofy", "funny", "weird", "strange", "odd", "playful", "clever", "boastful", "breakdancing",
      "hilarious", "conceited", "happy", "comical", "curious", "peculiar", "quaint", "quirky", "fancy", "wayward", "fickle", "yawning", "sleepy",
      "cockeyed", "dizzy", "dancing", "absurd", "laughing", "hairy", "smiling", "perplexed", "baffled", "cockamamie", "vulgar", "hoodwinked",
      "brainwashed"];
      return whimsy;
    case "shiny":
      var shiny = ["sapphire", "opal", "silver", "gold", "platinum", "ruby", "emerald", "topaz", "diamond", "amethyst", "turquoise",
      "starlit", "moonlit", "bronze", "metal", "jade", "amber", "garnet", "obsidian", "onyx", "pearl", "copper", "sunlit", "brass", "brassy",
      "metallic"];
      return shiny;
    case "noisy":
      var noisy = ["untuned", "loud", "soft", "shrieking", "melodious", "musical", "operatic", "symphonic", "dancing", "lyrical", "harmonic",
      "orchestral", "noisy", "dissonant", "rhythmic", "hissing", "singing", "crooning", "shouting", "screaming", "wailing", "crying", "howling",
      "yelling", "hollering", "caterwauling", "bawling", "bellowing", "roaring", "squealing", "beeping", "knocking", "tapping", "rapping",
      "humming", "scatting", "whispered", "whispering", "rasping", "buzzing", "whirring", "whistling", "whistled"];
      return noisy;
    case "apocalyptic":
      var apocalyptic = ["nuclear", "apocalyptic", "desolate", "atomic", "zombie", "collapsed", "grim", "fallen", "collapsed", "cannibalistic",
      "radioactive", "toxic", "poisonous", "venomous", "disastrous", "grimy", "dirty", "undead", "bloodshot", "rusty", "glowing", "decaying",
      "rotten", "deadly", "plagued", "decimated", "rotting", "putrid", "decayed", "deserted", "acidic"];
      return apocalyptic;
    case "insulting":
      var insulting = ["stupid", "idiotic", "fat", "ugly", "hideous", "grotesque", "dull", "dumb", "lazy", "sluggish", "brainless", "slow",
      "gullible", "obtuse", "dense", "dim", "dazed", "ridiculous", "witless", "daft", "crazy", "vapid", "inane", "mundane", "hollow", "vacuous",
      "boring", "insipid", "tedious", "monotonous", "weird", "bizarre", "backward", "moronic", "ignorant", "scatterbrained", "forgetful", "careless",
      "lethargic", "insolent", "indolent", "loitering", "gross", "disgusting", "bland", "horrid", "unseemly", "revolting", "homely", "deformed",
      "disfigured", "offensive", "cowardly", "weak", "villainous", "fearful", "monstrous", "unattractive", "unpleasant", "nasty", "beastly", "snide",
      "horrible", "syncophantic", "unhelpful", "bootlicking"];
      return insulting;
    case "praise":
      var praise = ["beautiful", "intelligent", "smart", "genius", "ingenious", "gorgeous", "pretty", "witty", "angelic", "handsome", "graceful",
      "talented", "exquisite", "enchanting", "fascinating", "interesting", "divine", "alluring", "ravishing", "wonderful", "magnificient", "marvelous",
      "dazzling", "cute", "charming", "attractive", "nifty", "delightful", "superior", "amiable", "gentle", "heroic", "courageous", "valiant", "brave",
      "noble", "daring", "fearless", "gallant", "adventurous", "cool", "enthusiastic", "fierce", "awesome", "radical", "tubular", "fearsome",
      "majestic", "grand", "stunning"];
      return praise;
    case "scientific":
      var scientific = ["scientific", "technical", "digital", "programming", "calculating", "formulating", "cyberpunk", "mechanical", "technological",
      "innovative", "brainy", "chemical", "quantum", "astro", "space", "theoretical", "atomic", "electronic", "gaseous", "investigative", "solar",
      "extinct", "galactic"];
      return scientific;
    default:
      var scientific_default = ["scientific", "technical", "digital", "programming", "calculating", "formulating", "cyberpunk", "mechanical", "technological",
      "innovative", "brainy", "chemical", "quantum", "astro", "space", "theoretical", "atomic", "electronic", "gaseous", "investigative", "solar",
      "extinct", "galactic"];
      return scientific_default;
  }
}


// Pulls noun out of array using random number sent from generator
/********************************************************************
FUNCTION NAME: getNoun
PARAMETERS: String
RETURNS: array <String>
COMMENTS: helper function used in generator. This will
return an array based on the string argument passed.
*********************************************************************/
function getNoun(y) {
  switch(y) {
    case "animals":
      var animals = ["flamingo", "hedgehog", "owl", "elephant", "pussycat", "alligator", "dachsund", "poodle", "beagle", "crocodile", "kangaroo",
      "wallaby", "woodpecker", "eagle", "falcon", "canary", "parrot", "parakeet", "hamster", "gerbil", "squirrel", "rat", "dove", "toucan",
      "raccoon", "vulture", "peacock", "goldfish", "rook", "koala", "skunk", "goat", "rooster", "fox", "porcupine", "llama", "grasshopper",
      "gorilla", "monkey", "seahorse", "wombat", "wolf", "giraffe", "badger", "lion", "mouse", "beetle", "cricket", "nightingale",
      "hawk", "trout", "squid", "octopus", "sloth", "snail", "locust", "baboon", "lemur", "meerkat", "oyster", "frog", "toad", "jellyfish",
      "butterfly", "caterpillar", "tiger", "hyena", "zebra", "snail", "pig", "weasel", "donkey", "penguin", "crane", "buzzard", "vulture",
      "rhino", "hippopotamus", "dolphin", "sparrow", "beaver", "moose", "minnow", "otter", "bat", "mongoose", "swan", "firefly", "platypus"];
      return animals;
    case "profession":
      var professions = ["doctor", "lawyer", "ninja", "writer", "samurai", "surgeon", "clerk", "artist", "actor", "engineer", "mechanic",
      "comedian", "fireman", "nurse", "RockStar", "musician", "carpenter", "plumber", "cashier", "electrician", "waiter", "president", "governor",
      "senator", "scientist", "programmer", "singer", "dancer", "director", "mayor", "merchant", "detective", "investigator", "navigator", "pilot",
      "priest", "cowboy", "stagehand", "soldier", "ambassador", "pirate", "miner", "police"];
      return professions;
    case "fantasy":
      var fantasy = ["centaur", "wizard", "gnome", "orc", "troll", "sword", "fairy", "pegasus", "halfling", "elf", "changeling", "ghost",
      "knight", "squire", "magician", "witch", "warlock", "unicorn", "dragon", "wyvern", "princess", "prince", "king", "queen", "jester",
      "tower", "castle", "kraken", "seamonster", "mermaid", "psychic", "seer", "oracle"];
      return fantasy;
    case "music":
      var music = ["violin", "flute", "bagpipe", "guitar", "symphony", "orchestra", "piano", "trombone", "tuba", "opera", "drums",
      "harpsichord", "harp", "harmonica", "accordion", "tenor", "soprano", "baritone", "cello", "viola", "piccolo", "ukelele", "woodwind", "saxophone",
      "bugle", "trumpet", "sousaphone", "cornet", "stradivarius", "marimbas", "bells", "timpani", "bongos", "clarinet", "recorder", "oboe", "conductor",
      "singer"];
      return music;
    case "horror":
      var horror = ["murderer", "chainsaw", "knife", "sword", "murder", "devil", "killer", "psycho", "ghost", "monster", "godzilla", "werewolf",
      "vampire", "demon", "graveyard", "zombie", "mummy", "curse", "death", "grave", "tomb", "beast", "nightmare", "frankenstein", "specter",
      "poltergeist", "wraith", "corpse", "scream", "massacre", "cannibal", "skull", "bones", "undertaker", "zombie", "creature", "mask", "psychopath",
      "fiend", "satanist", "moon", "fullMoon"];
      return horror;
    case "gross":
      var gross = ["slime", "bug", "roach", "fluid", "pus", "booger", "spit", "boil", "blister", "orifice", "secretion", "mucus", "phlegm",
      "centipede", "beetle", "fart", "snot", "crevice", "flatulence", "juice", "mold", "mildew", "germs", "discharge", "toilet", "udder", "odor", "substance",
      "fluid", "moisture", "garbage", "trash", "bug"];
      return gross;
    case "everyday":
      var everyday = ["mirror", "knife", "fork", "spork", "spoon", "tupperware", "minivan", "suburb", "lamp", "desk", "stereo", "television", "TV",
      "book", "car", "truck", "soda", "door", "video", "game", "computer", "calender", "tree", "plant", "flower", "chimney", "attic", "kitchen",
      "garden", "school", "wallet", "bottle"];
      return everyday;
    case "jewelry":
      var jewelry = ["earrings", "ring", "necklace", "pendant", "choker", "brooch", "bracelet", "cameo", "charm", "bauble", "trinket", "jewelry",
      "anklet", "bangle", "locket", "finery", "crown", "tiara", "blingBling", "chain", "rosary", "jewel", "gemstone", "beads", "armband", "pin",
      "costume", "ornament", "treasure"];
      return jewelry;
    case "places":
      var places = ["swamp", "graveyard", "cemetery", "park", "building", "house", "river", "ocean", "sea", "field", "forest", "woods", "neighborhood",
      "city", "town", "suburb", "country", "meadow", "cliffs", "lake", "stream", "creek", "school", "college", "university", "library", "bakery",
      "shop", "store", "theater", "garden", "canyon", "highway", "restaurant", "cafe", "diner", "street", "road", "freeway", "alley"];
      return places;
    case "scifi":
      var scifi = ["robot", "alien", "raygun", "spaceship", "UFO", "rocket", "phaser", "astronaut", "spaceman", "planet", "star", "galaxy",
      "computer", "future", "timeMachine", "wormHole", "timeTraveler", "scientist", "invention", "martian", "pluto", "jupiter", "saturn", "mars",
      "quasar", "blackHole", "warpDrive", "laser", "orbit", "gears", "molecule", "electron", "neutrino", "proton", "experiment", "photon", "apparatus",
      "universe", "gravity", "darkMatter", "constellation", "circuit", "asteroid"];
      return scifi;
    default:
      var scifi_default = ["robot", "alien", "raygun", "spaceship", "UFO", "rocket", "phaser", "astronaut", "spaceman", "planet", "star", "galaxy",
      "computer", "future", "timeMachine", "wormHole", "timeTraveler", "scientist", "invention", "martian", "pluto", "jupiter", "saturn", "mars",
      "quasar", "blackHole", "warpDrive", "laser", "orbit", "gears", "molecule", "electron", "neutrino", "proton", "experiment", "photon", "apparatus",
      "universe", "gravity", "darkMatter", "constellation", "circuit", "asteroid"];
      return scifi_default;
  }
}

var adjectives = ["dark", "color", "whimsical", "shiny", "noisy", "apocalyptic", "insulting", "praise", "scientific"];  // types of adjectives for pizza titles
var nouns = ["animals", "everyday", "fantasy", "gross", "horror", "jewelry", "places", "scifi"];
//Used for creating random names in pizzas.
/* OPTIMIZATION: ARRAY TO STORE ALL BASIC LEFT PROPERTY FOR EVERY BG PIZZA IMAGE */
var basicLeftList = [];
var bgpizzas = [];
var screenHeight = window.screen.height;


/********************************************************************
FUNCTION NAME: generator
PARAMETERS: String, String
RETURNS: String
COMMENTS: helper function used in randomName. A String is produced
from the concatenation of two randomly selected string values return from
the getAdj and getNoun functions.
*********************************************************************/
function generator(adj, noun) {
  var adjectives = getAdj(adj);
  var nouns = getNoun(noun);
  var randomAdjective = parseInt(Math.random() * adjectives.length);
  var randomNoun = parseInt(Math.random() * nouns.length);
  var name = "The " + adjectives[randomAdjective].capitalize() + " " + nouns[randomNoun].capitalize();
  return name;
}

/********************************************************************
FUNCTION NAME: randomName
PARAMETERS: NONE
RETURNS: String
COMMENTS: Creates two random numbers between 0 and adjective and size.length.
This two numbers will be used by the generator function to compute and return
a new string.
*********************************************************************/
function randomName() {
  var randomNumberAdj = parseInt(Math.random() * adjectives.length);
  var randomNumberNoun = parseInt(Math.random() * nouns.length);
  return generator(adjectives[randomNumberAdj], nouns[randomNumberNoun]);
}

/********************************************************************
OBJECT FUNCTION NAME: selectRandomMeat
PARAMETERS: NONE
RETURNS: String
COMMENTS: Returns a random string from the meats array property of
the pizzaIngredients object.
*********************************************************************/
var selectRandomMeat = function() {
  var randomMeat = pizzaIngredients.meats[Math.floor((Math.random() * pizzaIngredients.meats.length))];
  return randomMeat;
};

/********************************************************************
OBJECT FUNCTION NAME: selectRandomNonMeat
PARAMETERS: NONE
RETURNS: String
COMMENTS: Returns a random string from the nonMeats array property of
the pizzaIngredients object.
*********************************************************************/

var selectRandomNonMeat = function() {
  var randomNonMeat = pizzaIngredients.nonMeats[Math.floor((Math.random() * pizzaIngredients.nonMeats.length))];
  return randomNonMeat;
};

/********************************************************************
OBJECT FUNCTION NAME: selectRandomCheese
PARAMETERS: NONE
RETURNS: String
COMMENTS: Returns a random string from the cheeses array property of
the pizzaIngredients object.
*********************************************************************/

var selectRandomCheese = function() {
  var randomCheese = pizzaIngredients.cheeses[Math.floor((Math.random() * pizzaIngredients.cheeses.length))];
  return randomCheese;
};

/********************************************************************
OBJECT FUNCTION NAME: selectRandomSauce
PARAMETERS: NONE
RETURNS: String
COMMENTS: Returns a random string from the sauce array property of
the pizzaIngredients object.
*********************************************************************/

var selectRandomSauce = function() {
  var randomSauce = pizzaIngredients.sauces[Math.floor((Math.random() * pizzaIngredients.sauces.length))];
  return randomSauce;
};

/********************************************************************
OBJECT FUNCTION NAME: selectRandomCrust
PARAMETERS: NONE
RETURNS: String
COMMENTS: Returns a random string from the crust array property of
the pizzaIngredients object.
*********************************************************************/

var selectRandomCrust = function() {
  var randomCrust = pizzaIngredients.crusts[Math.floor((Math.random() * pizzaIngredients.crusts.length))];
  return randomCrust;
};

/********************************************************************
OBJECT FUNCTION NAME: ingredientItemizer
PARAMETERS: String
RETURNS: String
COMMENTS: Helper function used in makeRandomPizza; this will format
items its argument inside li tags.
*********************************************************************/

var ingredientItemizer = function(string) {
  return "<li>" + string + "</li>";
};

// Returns a string with random pizza ingredients nested inside <li> tags
/********************************************************************
OBJECT FUNCTION NAME: makeRandomPizza
PARAMETERS: NONE
RETURNS: String
COMMENTS: This function creates the list of ingredients that will go inside
a  pizza container. This function is used in the pizzaElementGenerator function.
*********************************************************************/
var makeRandomPizza = function() {
  var pizza = "";

  var numberOfMeats = Math.floor((Math.random() * 4));
  var numberOfNonMeats = Math.floor((Math.random() * 3));
  var numberOfCheeses = Math.floor((Math.random() * 2));

  for (var i = 0; i < numberOfMeats; i++) {
    pizza = pizza + ingredientItemizer(selectRandomMeat());
  }

  for (var j = 0; j < numberOfNonMeats; j++) {
    pizza = pizza + ingredientItemizer(selectRandomNonMeat());
  }

  for (var k = 0; k < numberOfCheeses; k++) {
    pizza = pizza + ingredientItemizer(selectRandomCheese());
  }

  pizza = pizza + ingredientItemizer(selectRandomSauce());
  pizza = pizza + ingredientItemizer(selectRandomCrust());

  return pizza;
};


 /*******************************************************
  * OBJECT FUNCTION NAME: pizzaElementGenerator
  * PARAMETERS: Integer
  * RETURNS: String
  * COMMENTS: This function generates the html for each pizza
  * entry; that is a container div and child elements containing
  * all the html formatted information of the newly generated pizza.
  * This function runs as many times as specified in the function
  * createOptimizedPizzas.
  *
  * POSSIBLE IMPROVEMENTS: Still unsure about using a web worker for
  * randomName and makeRandomPizza(). However, using it
  * inside this function will only hinder performance,
  * as we are creating aseparate thread for each index
  * in the for loop!
  ******************************************************/
var pizzaElementGenerator = function(i) {
  var pizzaContainer,             // contains pizza title, image and list of ingredients
      pizzaImageContainer,        // contains the pizza image
      pizzaImage,                 // the pizza image itself
      pizzaDescriptionContainer,  // contains the pizza title and list of ingredients
      pizzaName,                  // the pizza name itself
      ul;                         // the list of ingredients

  pizzaContainer = document.createElement("div");
  pizzaImageContainer = document.createElement("div");
  pizzaImage = document.createElement("img");
  pizzaDescriptionContainer = document.createElement("div");

  pizzaContainer.classList.add("randomPizzaContainer");
  pizzaContainer.style.width = "33.33%";
  pizzaContainer.style.height = "325px";
  pizzaContainer.id = "pizza" + i;                // gives each pizza element a unique id
  pizzaImageContainer.style.width="35%";

  pizzaImage.src = "images/pizza.png";
  pizzaImage.classList.add("img-responsive");
  pizzaImageContainer.appendChild(pizzaImage);
  pizzaContainer.appendChild(pizzaImageContainer);


  pizzaDescriptionContainer.style.width="65%";

  pizzaName = document.createElement("h4");


  pizzaName.innerHTML = randomName();

  pizzaDescriptionContainer.appendChild(pizzaName);

  ul = document.createElement("ul");
  ul.innerHTML = makeRandomPizza();
  pizzaDescriptionContainer.appendChild(ul);
  pizzaContainer.appendChild(pizzaDescriptionContainer);

  return pizzaContainer;
};

// resizePizzas(size) is called when the slider in the "Our Pizzas" section of the website moves.
var resizePizzas = function(size) {
  window.performance.mark("mark_start_resize");   // User Timing API function

  // Changes the value for the size of the pizza above the slider

  /*********************************
  * FUNCTION NAME: changeSliderLabel
  * PARAMETERS: Integer
  * RETURNS: NOTHING
  * COMMENTS: This function changes the text inside the element
  * #pizzaSize whenever its arguments is equal to one of the three
  * specified values: 1, 2, or 3.
  *
  *********************************/
  function changeSliderLabel(size) {
    switch(size) {
      case "1":
        document.getElementById("pizzaSize").innerHTML = "Small";
        return;
      case "2":
        document.getElementById("pizzaSize").innerHTML = "Medium";
        return;
      case "3":
        document.getElementById("pizzaSize").innerHTML = "Large";
        return;
      default:
        console.log("bug in changeSliderLabel");
    }
  }

  //called when the user interacts with pizza the slider.
  changeSliderLabel(size);

  /**************************************************************
  * DESCRIPTION: This function is not needed.
  * We can just use % instead of px for
  * pizza values. Also, we save ourselves
  * some unnecesary layout operations.
  * Ahem(document.querySelector("#randomPizzas").offsetWidth).
  ***************************************************************/
  function determineDx (elem, size) {
    var oldWidth = elem.offsetWidth;
    var windowWidth = document.querySelector("#randomPizzas").offsetWidth;
    var oldSize = oldWidth / windowWidth;

    // Changes the slider value to a percent width
    function sizeSwitcher (size) {
      switch(size) {
        case "1":
          return 0.25;
        case "2":
          return 0.3333;
        case "3":
          return 0.5;
        default:
          console.log("bug in sizeSwitcher");
      }
    }

    var newSize = sizeSwitcher(size);
    var dx = (newSize - oldSize) * windowWidth;

    return dx;
  }

   /**************************************************************
  * FUNCTION NAME: getSize
  * PARAMETERS: Integer
  * RETURNS: Integer
  * COMMENTS: This is a helper method used in changePizzaSizes;
  * It will return the integer value, which represents the %
  * value used in changePizzaSizes.
  *
  ***************************************************************/
  function getSize(size){

    switch(size){
      case "1":
        return 25;
      case "2":
        return  33;
      case "3":
        return 50;
    }

  }

 /*****************************************************************
  * FUNCTION NAME: changePizzaSizes
  * PARAMETERS: Integer
  * RETURNS: NONE
  * DESCRIPTION: Changes the % value of the pizzas when the user interacts
  * with the slider.
  *
  * runs in constant time.
  * OPTIMIZATIONS: This function had a FLS problem. In order to prevent
  * this, it was necessary to:
  *
  * 1. Remove the call to determineDx. This is where the getSizes()
  *    comes in. DetermineDx creates an unnecesary layout operation,
  *    through every iteration of the for loop.
  *
  * 2. document.querySelectorAll('.randomPizzaContainer') is an expensive
  *    operation. It should only be done once/not in every iteration of the
  *    resizing loop.
  *
  * 3. instead of reading the offsetWidth property every time from
  *    .randomPizzaContainer(layout) and then performing recalculate styles
  *    to update .randomPizzaContainer, we can just use getSize() by
  *    calling it once to get the % value for our pizzas.
  *
  *
  ***************************************************************/

  function changePizzaSizes(vpwidth) {

    var randomPizzaContainers = document.getElementsByClassName("randomPizzaContainer");

    for (var i = 0, totalContainers = randomPizzaContainers.length; i < totalContainers; i++) {
      randomPizzaContainers[i].style.width = vpwidth + "%";
    }
  }


  changePizzaSizes(getSize(size));

  // User Timing API is awesome
  window.performance.mark("mark_end_resize");
  window.performance.measure("measure_pizza_resize", "mark_start_resize", "mark_end_resize");
  var timeToResize = window.performance.getEntriesByName("measure_pizza_resize");
  console.log("Time to resize pizzas: " + timeToResize[timeToResize.length-1].duration + "ms");
};

window.performance.mark("mark_start_generating"); // collect timing data



// creates pizzas
createOptimizedPizzas();

/************************************************************
* FUNCTION NAME: createOptimizedPizzas
* PARAMETERS: none
* RETURNS: none
* COMMENTS: Creates 100 pizza containers and appends them to the
* DOM.
*
* OPTIMIZATIONS: No need to call .getElementById on every
* iteration of the loop. Moved outside of the for loop.
*
***********************************************************/
function createOptimizedPizzas(){
  var pizzasFragment = document.createDocumentFragment();
  for (var i = 2; i < 100; i++) {
    pizzasFragment.appendChild(pizzaElementGenerator(i));

  }
  document.getElementById("randomPizzas").appendChild(pizzasFragment);
}

// User Timing API again. These measurements tell you how long it took to generate the initial pizzas
window.performance.mark("mark_end_generating");
window.performance.measure("measure_pizza_generation", "mark_start_generating", "mark_end_generating");
var timeToGenerate = window.performance.getEntriesByName("measure_pizza_generation");
console.log("Time to generate pizzas on load: " + timeToGenerate[0].duration + "ms");

// Iterator for number of times the pizzas in the background have scrolled.
// Used by updatePositions() to decide when to log the average time per frame
var frame = 0;


/************************************************************
* FUNCTION NAME: logAverageFrame
* PARAMETERS: array <entries>
* RETURNS: none
* COMMENTS: Logs the average amount of time per 10 frames needed to move the sliding
* background pizzas on scroll.
*
***********************************************************/
function logAverageFrame(times) {   // times is the array of User Timing measurements from updatePositions()
  var numberOfEntries = times.length;
  var sum = 0;
  for (var i = numberOfEntries - 1; i > numberOfEntries - 11; i--) {
    sum = sum + times[i].duration;
  }
  console.log("Average scripting time to generate last 10 frames: " + sum / 10 + "ms");
}

// The following code for sliding background pizzas was pulled from Ilya's demo found at:
// https://www.igvita.com/slides/2012/devtools-tips-and-tricks/jank-demo.html

// Moves the sliding background pizzas based on scroll position



/************************************************************
* FUNCTION NAME: updatePositions
* PARAMETERS: NONE
* RETURNS: NOTHING
* DESCRIPTION: sets/changes the position of each pizza in the background, based
* on the scrolling distance of the viewport.
*
* OPTIMIZATIONS:
*
* 1. Again, scrollTop initalization does not need to be inside
*     the loop.Unnecesary layout operation performed every iteration.
*
* 2. As this is a "hot" function, we can just store all .mover
*    elements in an array called bgpizzas. This array is only created
*    once, and we can access it instead of performing DOM lookups
*    + creating + accessing every time we run this function.
*
* 3. Same thing with basicLeft property of every pizza image.
*    why perform a read/write cycle, when we can just have
*    a global scoped array with the basicLeft property for every pizza,
*    loop once through everything and that's it.
*
*
***********************************************************/

function updatePositions() {
  frame++;
  window.performance.mark("mark_start_frame");

  var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  for (var i = 0; i < bgpizzas.length; i++) {

    var phase = Math.sin((scrollTop / 1250) + (i % 5));
//----------------IMPROVEMENT: indexed array access, much better than running a layout/recalculate styles cycle ------------------------//
    //items[i].style.left = basicLeftList[i] + 100 * phase + 'px';
    bgpizzas[i].style.left = basicLeftList[i] + 100 * phase + 'px';
  }


  // User Timing API to the rescue again. Seriously, it's worth learning.
  // Super easy to create custom metrics.
  window.performance.mark("mark_end_frame");
  window.performance.measure("measure_frame_duration", "mark_start_frame", "mark_end_frame");
  if (frame % 10 === 0) {
    var timesToUpdatePosition = window.performance.getEntriesByName("measure_frame_duration");
    logAverageFrame(timesToUpdatePosition);
  }
}

/*******************************************
* OPTIMIZATIONS: This should run within a
* requestAnimationFrame, as we are updating
* layout several times while we are scrolling
*******************************************/
window.addEventListener('scroll', function(){
  requestAnimationFrame(updatePositions);
});

// Generates the sliding pizzas when the page loads.
/********************************************************
* COMMENTS: Loads all the pizza images in the background,
* and positions them accordingly.
* OPTIMIZATIONS:
*  1. In order to prevent read/write cycle,
*  basicLeft positions for each bg pizza is kept in a separate
*  global scoped array.
*
*  2. Likewise, each bg pizza element is also stored in a global scoped array.
*  By doing this during load time, we are not forced to perform layout
*  operations for every bgpizza element when scrolling on
*  the page.
*********************************************************/
document.addEventListener('DOMContentLoaded', function() {
  var cols = 8;
  var s = 256;
  var rows = screenHeight/s;
  var totalPizzas = rows*cols;
  //console.log("Total Pizzas: "+totalPizzas);
  var elements = document.createDocumentFragment();
  for (var i = 0, elem; i < totalPizzas; i++) {
    elem = document.createElement('img');
    elem.className = 'mover';
    elem.src = "images/pizza.png";
    elem.style.height = "100px";
    elem.style.width = "73.333px";
    elem.style.top = (Math.floor(i / cols) * s) + 'px';
    basicLeftList.push((i % cols) * s);
    bgpizzas.push(elem);
    elements.appendChild(elem);

  }
  document.getElementById("movingPizzas1").appendChild(elements);
  updatePositions();
});