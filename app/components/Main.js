// ----------------------------
// import dependencies
// ----------------------------
import React, {Component} from 'react';
import Search from '../components/children/Search';
import Results from '../components/children/Results';
import {
  Link
} from 'react-router-dom';
// ----------------------------
// render to screen
// ----------------------------
class Main extends Component {

    render() { 

        return (

            <div className='container'>
            
                <hr />
                <h2 className='title'><strong>Website Request Form</strong></h2>
                <hr />
                <div className='row'>

                    <Search />
                </div>
            </div>

        );
    }
};

// Export the component back for use in other files
export default Main;
