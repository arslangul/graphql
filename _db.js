let games = [
    {
        id: "1",
        title: 'The Legend of Zelda: Breath of the Wild',
        platform: ['Nintendo Switch', 'Wii U']
    },
    {
        id: "2",
        title: 'Super Mario Odyssey',
        platform: ['Nintendo Switch']
    },
    {
        id: "3",
        title: 'Horizon Zero Dawn',
        platform: ['PlayStation 4']
    },
    {
        id: "4",
        title: 'Persona 5',
        platform: ['PlayStation 3', 'PlayStation 4']
    }
];

let authors = [
    {
        id: "1",
        name: 'IGN',
        verified: true
    },
    {
        id: "2",
        name: 'GameSpot',
        verified: true
    },
    {
        id: "3",
        name: 'Polygon',
        verified: false
    }
];

let reviews = [
    {
        id: "1",
        rating: 10,
        content: 'Masterpiece',
        author_id: 1,
        game_id: 2
    },
    {
        id: "2",
        rating: 9,
        content: 'Amazing',
        author_id: '2',
        game_id: '1'
    },
    {
        id: "3",
        rating: 8,
        content: 'Great',
        author_id: '3',
        game_id: '3'
    },
    {
        id: "4",
        rating: 7,
        content: 'Good',
        author_id: '1',
        game_id: '4'
    },
    {
        id: "5",
        rating: 6,
        content: 'Fair',
        author_id: '2',
        game_id: '1'
    },
    {
        id: "6",
        rating: 5,
        content: 'Mediocre',
        author_id: '3',
        game_id: '2'
    },
    {
        id: "7",
        rating: 4,
        content: 'Poor',
        author_id: '1',
        game_id: '3'
    },
    {
        id: "8",
        rating: 3,
        content: 'Bad',
        author_id: '2',
        game_id: '4'
    },
    {
        id: "9",
        rating: 2,
        content: 'Awful',
        author_id: '3',
        game_id: '1'
    },
    {
        id: "10",
        rating: 1,
        content: 'Terrible',
        author_id: '1',
        game_id: '2'
    }
];

export default {
    games,
    authors,
    reviews
};
