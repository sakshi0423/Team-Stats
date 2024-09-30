const team = {
    _players: [{
        firstName: 'Giancarlo',
        lastName: 'Stanton',
        age: 29
    },
    {
        firstName: 'Bryce',
        lastName: 'Harper',
        age: 26
    },
    {
        firstName: 'Mike',
        lastName: 'Trout',
        age: 27
    }],
    _games: [{
        opponent: 'Red Sox',
        teamPoints: 5,
        opponentPoints: 1
    },
    {
        opponent: 'Braves',
        teamPoints: 3,
        opponentPoints: 5
    },
    {
        opponent: 'Rangers',
        teamPoints: 4,
        opponentPoints: 2
    }],
    get players() {
        players: this._players
    },
    get games() {
        games: this._games
    },
    addPlayer(firstName, lastName, age) {
        const player = {
            firstName,
            lastName,
            age
        }
        return this._players.push(player);
    },
    addGame(opponent, teamPoints, opponentPoints) {
        const game = {
            opponent,
            teamPoints,
            opponentPoints
        };
        return this._games.push(game);
    }
};

team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);

team.addGame('Mariners', 7, 3);
team.addGame('Diamonbacks', 1, 4);
team.addGame('Tigers', 2, 8);

console.log(team._players);
console.log(team._games);