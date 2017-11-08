// ----------------------------
// import dependencies
// ----------------------------
import React, {Component, Link} from 'react';
import axios from 'axios';

// ----------------------------
// render to screen
// ----------------------------
class Saved extends Component {

    constructor(props) {
        super(props);
        this.state = {articles: null};

    }
    
    componentDidMount(){
        axios.get('/api/saved')
            .then((res) => {
                this.setState({
                    articles: res
                })
                // console.log('this is a state: ' + (this.state.articles.data[0].[0].title));
            })
    }

    savedArticles() {
        // console.log(`The saved Articles: ${this.state.articles}`);
        return this.state.articles.data.map((article) => {
            return (
                <div className = 'panel panel-primary' key={article._id}>
                    <div className = 'panel-heading'>
                        <h3 className = 'panel-title'>{article.title}</h3>
                    </div>
                    <div className = 'panel-body'>
                        <p><a href = {article.url}>Read about it</a></p>
                        <p>Written on: {new Date(article.date).toString()}</p>
                        <button
                            className = 'btn btn-danger'
                            value = {article._id}
                            onClick = {this.deleteArticle}>
                            delete
                        </button>
                    </div>
                </div>
            )
        })
    }


    render() {

        return(

            <div className='panel panel-success'>
                <div className='panel-heading'>
                    <h3 className='panel-title text-center'>Saved Articles</h3>
                    {this.state.articles ? this.savedArticles() : <div></div>}
                </div>
                <div className='panel-body'>
                    
                </div>
            </div>

        )
    }
};


export default Saved;