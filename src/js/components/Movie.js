const React = require('react');
const AppActions = require('../actions/AppActions');
const AppStore = require('../stores/AppStore');

const Movie = React.createClass({
    render: function(){
        let link = `https://www.imdb.com/title/${this.props.movie.imdbID}`;
        return(
            <div className="card mb-3">
                <div className="card-body row">
                    <div className="col-md-4">
                        <img className="thumbnail" src={this.props.movie.Poster} />
                    </div>
                    <div className="col-md-8">
                        <h4>{this.props.movie.Title}</h4>
                        <ul className="list-group">
                            <li className="list-group-item">
                                Year Released: {this.props.movie.Year}
                            </li>
                            <li className="list-group-item">
                                IMDB ID: {this.props.movie.imdbID}
                            </li>
                        </ul>
                        <a href={link} className="btn btn-primary mt-3">View On IMDB</a>
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = Movie;