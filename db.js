const games = [
  { id: "1", title: "Pac-Man", platform: ["Arcade"] },
  { id: "2", title: "Donkey Kong", platform: ["PS5", "Xbox"] },
  { id: "3", title: "Super Mario Bros.", platform: ["PS5", "Xbox", "PC"] },
  { id: "4", title: "Contra", platform: ["Switch"] },
  { id: "5", title: "Mortal Kombat", platform: ["PS5", "Xbox", "Arcade"] },
];

const authors = [
  { id: "1", name: "Nintendo", verified: true },
  { id: "2", name: "Sega", verified: false },
  { id: "3", name: "Atari", verified: true },
];

const reviews = [
  { id: "1", rating: 9, content: "awesome", author_id: "1", game_id: "2" },
  {
    id: "2",
    rating: 10,
    content: "mind-blowing",
    author_id: "2",
    game_id: "1",
  },
  { id: "3", rating: 7, content: "crazy", author_id: "3", game_id: "3" },
  { id: "4", rating: 5, content: "addiction", author_id: "2", game_id: "4" },
  { id: "5", rating: 8, content: "shoot'em up", author_id: "2", game_id: "5" },
  { id: "6", rating: 7, content: "sports", author_id: "1", game_id: "2" },
  { id: "7", rating: 10, content: "simulation", author_id: "3", game_id: "1" },
];

export default { games, authors, reviews };
