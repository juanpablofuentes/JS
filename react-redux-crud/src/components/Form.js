// src/js/components/Form.js

import React, { Component } from "react";
import { connect } from "react-redux";
import { addArticle,updateArticle } from "../actions/index";
import {isEmpty} from 'lodash';
const mapDispatchToProps = {
    addArticle,updateArticle
}
const mapStateToProps = state => {
    return {article: state.article};
};
class ConnectedForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title:"",
            edit:false
        };

    }

    handleChange = (event) => {
        
        this.setState({[event.target.id]: event.target.value});
       
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const {title} = this.state;
        if(this.state.edit){
             this.props.updateArticle(title);
        } else{
           this.props.addArticle({title});  
        }
       
        this.setState({title: "",edit:false});
    }

    static getDerivedStateFromProps(props, state) {
     
        if (!isEmpty(props.article) && !state.edit) {
            return {title: props.article.title,edit:true};
        } else {
            return state;
        }
    }

    render() {

        const {title} = this.state;
        return (
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="title">Title</label>
                        <input
                            type="text"
                            id="title"
                            value={title}
                            onChange={this.handleChange}
                            />
                    </div>
                    <button type="submit">SAVE</button>
                </form>
                );
    }
}

const Form = connect(
        mapStateToProps,
        mapDispatchToProps
        )(ConnectedForm);

export default Form;