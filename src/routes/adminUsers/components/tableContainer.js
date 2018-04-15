import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

class TableContainer extends Component {
    componentWillMount() {
        let count = 100;
        this.products = [];
        while (count > 0) {
            this.products.push({
                id: count,
                name: `User ${count}`,
                price: Math.ceil(Math.random() * count),
            });
            count -= 1;
        }
        this.options = {
            page: 2,
            sizePerPageList: [{
                text: '5', value: 5,
            }, {
                text: '10', value: 10,
            }, {
                text: 'All', value: this.products.length,
            }],
            sizePerPage: 5,  // which size per page you want to locate as default
            pageStartIndex: 0, // where to start counting the pages
            paginationSize: 3,  // the pagination bar size.
            prePage: 'Prev', // Previous page button text
            nextPage: 'Next', // Next page button text
            firstPage: 'First', // First page button text
            lastPage: 'Last', // Last page button text
            // paginationShowsTotal: this.renderShowsTotal,  // Accept bool or function
            paginationPosition: 'both'  // default is bottom, top and both is all available
            // hideSizePerPage: true > You can hide the dropdown for sizePerPage
            // alwaysShowAllBtns: true // Always show next and previous button
            // withFirstAndLast: false > Hide the going to First and Last page button
        }
    }
    renderShowsTotal(start, to, total) {
        return (
            <p style={{ color: 'blue' }}>
                From {start} to {to}, totals is {total}&nbsp;&nbsp;(its a customize text)
            </p>
        );
    }

    render() {
        return this.products.length ? (
            <div className='table'>
                <BootstrapTable
                    pagination
                    data={this.products}
                    version='4'
                    striped
                    hover
                    search
                    options={this.options}
                    searchPlaceholder='Search anything ...'
                >
                    <TableHeaderColumn dataSort isKey dataField='id'>ID</TableHeaderColumn>
                    <TableHeaderColumn dataSort dataField='name'>Name</TableHeaderColumn>
                    <TableHeaderColumn dataSort dataField='email'>Email</TableHeaderColumn>
                    <TableHeaderColumn dataField='price'>Operation</TableHeaderColumn>
                </BootstrapTable>
            </div>
        ) : <span>loading</span>;
    }
}

export default TableContainer;
