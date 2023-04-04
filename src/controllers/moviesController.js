const db = require('../database/models');
//const Op = 


module.exports = {
    list: (req, res) => {
        db.Movie.findAll()
        .then((movies) => {
            return res.render("moviesList", {movies});
        })
    },
    new: (req, res) => {
        db.Movie.findAll({
            order: [
                ["release_date", "desc"]
            ]
        })
        .then((movies) => {
            return res.render("newestMovies", {movies});
        })
    },
    recommended: (req, res) => {
        db.Movie.findAll({
            order: [
                ["rating", "desc"]
            ],
            limit: 5,
        })
        .then((movies) => {
            return res.render("recommendedMovies", {movies})
        })
    },
    detail: (req, res) => {
        const movieId = req.params.id;
        db.Movie.findByPk(movieId)
        .then((movie) => {
            return res.render("moviesDetail", {movie});
        })
    },
};

/* 
recommended:
where: {
    rating: {[Op.gte]: 8},
    order: [rating, desc],
    limit: 5,
} */