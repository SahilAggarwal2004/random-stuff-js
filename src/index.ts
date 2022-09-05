// 25 adjectives
const adjectives = ["Amazing", "Beautiful", "Calm", "Dangerous", "Enormous", "Fantastic", "Gentle", "Happy", "Invincible", "Jolly", "Kind", "Lovely", "Marvelous", "Naughty", "Observant", "Powerful", "Quiet", "Ruthless", "Sleepy", "Tremendous", "Unique", "Violent", "Wonderful", "Young", "Zestful"]

// 200 animals
const animals = ["Albatross", "Alligator", "Ant", "Antelope", "Ape", "Baboon", "Barracuda", "Bat", "Bear", "Beaver", "Bee", "Bison", "Boar", "Buffalo", "Butterfly", "Camel", "Cat", "Caterpillar", "Cattle", "Cheetah", "Chicken", "Chimpanzee", "Clam", "Cobra", "Crab", "Crane", "Crocodile", "Crow", "Curlew", "Deer", "Dinosaur", "Dog", "Dolphin", "Donkey", "Dotterel", "Dove", "Dragonfly", "Duck", "Dugong", "Dunlin", "Eagle", "Elephant", "Emu", "Falcon", "Ferret", "Finch", "Fish", "Flamingo", "Fly", "Fox", "Frog", "Gaur", "Gazelle", "Gerbil", "Giraffe", "Gnat", "Gnu", "Goat", "Goldfinch", "Goldfish", "Goose", "Gorilla", "Goshawk", "Grasshopper", "Grouse", "Guanaco", "Gull", "Hamster", "Hare", "Hawk", "Hedgehog", "Heron", "Herring", "Hippopotamus", "Hornet", "Horse", "Human", "Hummingbird", "Hyena", "Ibex", "Ibis", "Jackal", "Jaguar", "Jay", "Jellyfish", "Kangaroo", "Kingfisher", "Koala", "Kookabura", "Kouprey", "Kudu", "Lapwing", "Lark", "Lemur", "Leopard", "Lion", "Llama", "Lobster", "Locust", "Loris", "Louse", "Lyrebird", "Magpie", "Mallard", "Manatee", "Mandrill", "Mantis", "Marten", "Meerkat", "Mink", "Mole", "Mongoose", "Monkey", "Moose", "Mosquito", "Mouse", "Mule", "Narwhal", "Newt", "Nightingale", "Octopus", "Okapi", "Opossum", "Oryx", "Ostrich", "Otter", "Owl", "Oyster", "Panther", "Parrot", "Partridge", "Peafowl", "Pelican", "Penguin", "Pheasant", "Pig", "Pigeon", "Pony", "Porcupine", "Porpoise", "Quail", "Quelea", "Quetzal", "Rabbit", "Raccoon", "Rail", "Ram", "Rat", "Raven", "Red deer", "Red panda", "Reindeer", "Rhinoceros", "Rook", "Salamander", "Salmon", "Sand Dollar", "Sandpiper", "Sardine", "Scorpion", "Seahorse", "Seal", "Shark", "Sheep", "Shrew", "Skunk", "Snail", "Snake", "Sparrow", "Spider", "Spoonbill", "Squid", "Squirrel", "Starling", "Stingray", "Swallow", "Swan", "Termite", "Tiger", "Toad", "Trout", "Turkey", "Turtle", "Viper", "Vulture", "Wallaby", "Walrus", "Wasp", "Weasel", "Whale", "Wildcat", "Wolf", "Wolverine", "Wombat", "Woodcock", "Woodpecker", "Worm", "Wren", "Yak", "Zebra"]

const randomElement = (array: any[]) => array[Math.floor(Math.random() * array.length)]
const randomAdjective = (): string => adjectives[Math.floor(Math.random() * adjectives.length)]
const randomAnimal = (): string => animals[Math.floor(Math.random() * animals.length)]
const randomName = (separator: string = ' '): string => `${randomElement(adjectives)}${separator}${randomElement(animals)}`

function generateOTP(digits: number = 4): string {
    digits = Math.min(digits, 20)
    const max = +('9'.repeat(digits))
    let number = Math.floor(Math.random() * max).toString()
    number = '0'.repeat(digits - number.length) + number
    return number
}

export { generateOTP }