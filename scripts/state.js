let STATE = {
    movie: undefined,
    movieGuess: undefined,
    checkedLetters: [],
    attempts: 5,
    GAME_STATUS: 0,

    reset(movie) {
        this.movie = movie.toLowerCase();
        this.movieGuess = movie.toLowerCase().replaceAll(/[a-zA-z]/g, "*");
        this.checkedLetters = [];
        this.attempts = 5;
        // this.GAME_STATUS = 0;
    }
};