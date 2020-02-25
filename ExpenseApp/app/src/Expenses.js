import React, { Component } from 'react';
import AppNav from './AppNav.js';
import DatePicker from 'react-datepicker';
import './App.css';
import "react-datepicker/dist/react-datepicker.css";
import {Link} from 'react-router-dom';
import {Table, Container, FormGroup, Button, Form, Input, Label } from 'reactstrap';
import Moment from 'react-moment';

class Expense extends Component {

    defaultExpenseItem = {
        id: 999,
        description : '',
        expenseDate : new Date(),
        location : '',
        category : {id:1 , name:'Travel'}
    }

    constructor(props){
        super(props)
        this.state = {
            date : new Date(),
            isLoading: true,
            expenses: [],
            categories: [],
            expenseItem : this.defaultExpenseItem
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
    }

    async handleSubmit(event){
        const {expenseItem} = this.state;
        await fetch(`/api/expenses`,{
            method: 'POST',
            headers: {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(expenseItem),
        });
        this.props.history.push('/expenses');
    }

    handleChange(event){
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let item = {...this.state.expenseItem};
        item[name] = value;
        this.setState({expenseItem : item});
    }

    handleDateChange(date){
        let item = {...this.state.expenseItem};
        item.expenseDate = date;
        this.setState({expenseItem : item})
    }

    async remove(id){
        await fetch(`/api/expenses/${id}`, {
            method: 'DELETE',
            headers : {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            }
        }).then(() => {
            let updatedExpenses = [...this.state.expenses].filter(i => i.id !== id);
            this.setState({expenses : updatedExpenses});
        });
    }

    async componentDidMount(){
        const response = await fetch('/api/categories');
        const body = await response.json();
        this.setState({categories : body, isLoading : false});
        
        const responseExpense = await fetch('/api/expenses');
        const bodyExpense = await responseExpense.json();
        this.setState({expenses : bodyExpense, isLoading : false});
    }

    render() {
        const title=<h3>Add Expenses</h3>
        const {categories} = this.state;
        const {expenses, isLoading} = this.state;
        if(isLoading){
            return(<div>Loading...</div>)
        }else{
            let categoriesOptionList = 
                categories.map(category =>
                    <option key = {category.id} id = {category.id}>
                        {category.name}
                    </option>
            )

            let rows = 
                expenses.map(expense =>
                    <tr key={expense.id}>
                        <td>{expense.description}</td>
                        <td>{expense.location}</td>
                        <td><Moment date={expense.expenseDate} formatt="MM/DD/YYYY"/></td>
                        <td>{expense.category.name}</td>
                        <td><Button size="sm" color="danger" onClick={()=>this.remove(expense.id)}>Delete</Button></td>
                    </tr>
                    )
            return ( 
                <div>
                    <AppNav />
                    <Container>
                        {title}
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup>
                                <Label for="description">Title</Label>
                                <Input type = "description" name = "description" id = "description" 
                                onChange={this.handleChange} autoComplete="name"/>
                            </FormGroup>

                            <FormGroup>
                                <Label for="category">Category</Label>
                                <select onChange={this.handleChange}>
                                    {categoriesOptionList}
                                </select>
                            </FormGroup>

                            <FormGroup>
                                <Label for="expenseDate">Date</Label>
                                <DatePicker selected={this.state.expenseItem.expenseDate} onChange={this.handleDateChange} />
                            </FormGroup>

                            <div className = "row">
                                <FormGroup className="col-md-4 mb3">
                                <Label for="location">Location</Label>
                                <Input type="text" name="location" id="location" onChange={this.handleChange}/>
                                </FormGroup>
                            </div>
                            
                            <FormGroup>
                                <Button color="primary" type="submit">Save</Button> {' '}
                                <Button color="secondary" tag={Link} to="/categories">Cancel</Button>
                            </FormGroup>
                        </Form>

                    </Container>

                    {' '}
                    <Container>
                        <h3>Expense List</h3>
                        <Table className = "mt-4">
                            <thead>
                                <tr>
                                    <th width="20%">Description</th>
                                    <th width="10%">Location</th>
                                    <th>Date</th>
                                    <th>Category</th>
                                    <th width="10%">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {rows}
                            </tbody>
                        </Table>
                    </Container>
                </div>
                );
            }
    }
}
 
export default Expense;