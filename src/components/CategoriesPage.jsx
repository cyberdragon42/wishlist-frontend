import React from "react";
import { connect } from "react-redux";
import {setCategoriesAC} from '../redux/categoriesReducer'
import axios from 'axios'

class CategoriesPage extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        axios.get("https://localhost:7270/api/Categories/GetAllCategories")
        .then(response=>{
            this.props.setCategories(response.data);
        })
    }
    
    render(){
        return(
            <div>
                {this.props.categories.map(x=>{
                    return <div>
                        <h2>
                            {x.name}
                        </h2>
                        <p>{x.description}</p>
                    </div>
                })}
            </div>
        )
    }
}

let mapStateToProps = (state) =>{
    return{ 
        categories: state.categories.categories   
    }
}

let mapDispatchToProps = (dispatch)=>{
    return{
        setCategories: (categories)=>{
            dispatch(setCategoriesAC(categories));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesPage);
