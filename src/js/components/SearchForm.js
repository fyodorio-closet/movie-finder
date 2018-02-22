const React = require('react');
const AppActions = require('../actions/AppActions');
const AppStore = require('../stores/AppStore');

const SearchForm = React.createClass({
    render: function(){
        return(
            <div className="search-form">
                <h1 className="text-center">Search For A Movie</h1>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <input type="text" className="form-control" ref="title" placeholder="Enter A Movie Title" />
                    </div>
                    <button className="btn btn-primary btn-block">Search Movies</button>
                </form>
            </div>
        )
    },
    onSubmit: function(e) {
        e.preventDefault();
        const movie = {
            title: this.refs.title.value.trim()
        };
        AppActions.searchMovies(movie)
    }
});

module.exports = SearchForm;