// ----------------------------
// import dependencies
// ----------------------------
import React, {Component} from 'react';
import axios from 'axios';


// ----------------------------
// render to screen
// ----------------------------
class Results extends Component {
    
    constructor(props) {
        super(props);
        this.saveArticle = this.saveArticle.bind(this)
        this.deleteArticle = this.deleteArticle.bind(this)
        this.getArticle = this.getArticle.bind(this)
    }

    saveArticle(event) {
        const article = event.target.dataset;
        axios.post('/api/saveArticle', {
            'title': article.title,
            'date': article.date,
            'url': article.url
        }).then((res) => {
            console.log('saved!')
        })
    }

    deleteArticle(article) {
        axios.delete(`/api/saved/${article._id}`)
            .then((res) => {
                this.setState({
                    articles: res.data
                })
                return res;
            })
    }

    getArticle() {
        axios.get('/api/saved')
            .then((res) => {
                this.setState({
                    articles: res.data
                });
            })
    }    

    articleResults() {
        return this.props.results.data.response.docs.slice(0, 5).map((article) => {
            return(
                <div className='panel panel-default' key={article._id}>
                    <div className='panel-body title'>
                        <h3>{article.headline.main}</h3>
                        <p className='paragraph'>{article.lead_paragraph}</p>
                    </div>
                    <div className='panel-body '> 
                        <p><a href={article.web_url}>Read More</a></p>
                        <button className='btn btn-success' 
                            data-title = {article.headline.main} 
                            data-url = {article.web_url}
                            data-date = {article.pub_date}
                            onClick = {this.saveArticle}> 

                            Save 
                        </button>
                    </div>
                </div>
            )
        })
    }

    render() {
        return (
            <div className='container'>
                <div className='articles'> 
                
                    <hr />
                    <h3 className='title'><strong>Article Results</strong></h3>
                    <hr />
                    <div>
                        {this.props.results ? this.articleResults() : <div></div>}
                    </div>
                </div>
            </div>
        );
    }
}



export default Results;
