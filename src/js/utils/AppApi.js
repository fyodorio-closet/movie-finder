const AppActions = require('../actions/AppActions');
const ApiKey = '10ff6c56';
const ApiURL = `https://www.omdbapi.com/?apikey=${ApiKey}&s=`;

module.exports = {
    searchMovies: function(movie) {
        $.ajax({
            url: `${ApiURL}${movie.title}`,
            dataType: 'json',
            cache: false,
            success: function(data) {
                AppActions.receiveMovieResults(data.Search)
            }.bind(this),
            error: function(xhr, status, err) {
                alert(err);
            }.bind(this)
        })
    }
}