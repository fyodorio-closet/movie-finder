const AppDispatcher = require('../dispatcher/AppDispatcher');
const AppConstants = require('../constants/AppConstants');

const AppActions = {
    searchMovies: function(movie) {
        console.log(`Searching for movie ${movie.title}`)
        AppDispatcher.handleViewAction({
            actionType: AppConstants.SEARCH_MOVIES,
            movie: movie
        })
    }
}

module.exports = AppActions;