import React, { useEffect } from "react";
import { connect } from "react-redux";
import axios from 'axios'
import Table from 'react-bootstrap/Table';
import Spinner from 'react-bootstrap/Spinner'

import { setCurrenciesAC } from '../redux/currenciesReducer'

let url = "https://localhost:7270/api/Currency/GetAllCurrencies";

function CurrenciesPage(props) {
    useEffect(() => {
        axios.get(url)
            .then(response => {
                props.setCurrencies(response.data);
            })
    }, [])

    if (props.currencies.length < 1) {
        return <Spinner animation="border" />
    }

    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Code</th>
                        <th>Dollar coefficient</th>
                    </tr>
                </thead>
                <tbody>
                    {props.currencies.map(x => {
                        return <tr>
                            <td>{x.name}</td>
                            <td>{x.code}</td>
                            <td>{x.dollarCoefficient}</td>
                        </tr>
                    })}
                </tbody>
            </Table>
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        currencies: state.currencies.currencies
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setCurrencies: (currencies) => {
            dispatch(setCurrenciesAC(currencies));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrenciesPage);

