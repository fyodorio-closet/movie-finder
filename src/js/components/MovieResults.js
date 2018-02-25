const React = require('react');
const AppActions = require('../actions/AppActions');
const AppStore = require('../stores/AppStore');
const Movie = require('./Movie');

const MovieResults = React.createClass({
    render: function(){
        return(
            <div>
                <h3 className="text-center mt-3">Results</h3>
                {
                    this.props.movies.map((movie, index) => <Movie movie={movie} key={index} />)
                }
            </div>
        )
    }
});

module.exports = MovieResults;