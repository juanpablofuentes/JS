import React from "react";
import { connect } from "react-redux";
import { deleteId } from "../actions/index";
const mapStateToProps = state => {
  return { articles: state.articles };
};

class ConnectedList extends React.Component {
    constructor(props) {
        super(props);
    }
  
    delete = (id) => {
        this.props.deleteId(id);
    }

    render() {
        const filas = this.props.articles.map(el => (
                    <li key={el.id}>{el.title} <input type="button" value="delete" onClick={()=>this.delete(el.id)}/></li>
                    ));
        return (<div>
        
        <ul>
            {filas}
        </ul>
    </div>
                );
    }
}
const List = connect(mapStateToProps,{deleteId})(ConnectedList);
export default List;