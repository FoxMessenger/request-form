// ----------------------------
// import dependencies
// ----------------------------
import React, {Component} from 'react';
import axios from 'axios';
import Results from './Results';
import Saved from './Saved';
// import helpers from '../utils/helpers';


// ----------------------------
// render to screen
// ----------------------------
class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            topic: '',
            begin_date: '',
            end_date: '',
            results: null,
        };


        this.handleTopic        = this.handleTopic.bind(this);
        this.handleStartDate    = this.handleStartDate.bind(this);
        this.handleEndDate      = this.handleEndDate.bind(this);
        this.handleSubmit       = this.handleSubmit.bind(this);
    }

    handleTopic(event) {
        this.setState({topic: event.target.value});
    }

    handleStartDate(event) {
        this.setState({begin_date: event.target.value});
    }

    handleEndDate(event) {
        this.setState({end_date: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();

        const nytAPI = 'a306a58c65134177bed7d0955ace8afa';

        axios.get('https://api.nytimes.com/svc/search/v2/articlesearch.json', {
            params: {
                'api-key': nytAPI,
                'q': this.state.topic,
                'begin_date': this.state.begin_date.split("-").join("") || 20100101,
                'end_date': this.state.end_date.split("-").join("") || 20170624
            }
            
        }).then((res) => {
            // console.log(`ARTICLE:\n ${res.data.response.docs[0].lead_paragraph}`);
            // console.log('\n')
            // console.log('\n')
            // console.log(`LINK:\n ${JSON.stringify(res.data.response.docs[0].web_url)}`);
            // console.log('\n')
            // console.log('\n')
            // console.log(`IMG THUMBNAIL:\n http://${JSON.stringify(res.data.response.docs[0].multimedia)}`);
            // console.log('\n')
            // console.log('\n')
            // console.log(`ALL OF IT!:\n ${JSON.stringify(res)}`);
            
            this.setState({
                // clear the query after the call
                topic: "",
                begin_date: '',
                end_date: '',
                results: res
            })

            console.log(this.state);
        }).catch((error) => {
            console.log(error);
        });
    }

    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <form className='title' onSubmit={this.handleSubmit}>
                        <label>
                            {/* Form */}
                            <p>Article Topic</p>
                            <input className='input--border' type='text' value={this.state.topic} onChange={this.handleTopic} />
                            <br/>
                            <br/>
                            <p>Start Date</p>
                            <input className='input--border' type='date' id='startdatepicker' data-date-format='yyyy/mm/dd' value={this.state.begin_date} onChange={this.handleStartDate} />
                            <br/>
                            <br/>
                            <p>End Date</p>
                            <input className='input--border' type='date' id='enddatepicker' data-date-format='yyyy/mm/dd' value={this.state.end_date} onChange={this.handleEndDate} />                    
                        </label>
                        <br />
                        <br />
                        <input className='btn btn-primary' type='submit' value='Submit' />
                    </form>
                    <br />
                    <br />
                </div>
                <div className='row'>

                    {/*this.state.data ? <Results data={this.state.data}*/}
                    
                    {/*this.state.results ? <Results data={this.state.results} /> : <div></div>*/}
                    <Results results={this.state.results} />
                    <Saved />

                </div>
            </div>
                
        );
    }
}



export default Search;
