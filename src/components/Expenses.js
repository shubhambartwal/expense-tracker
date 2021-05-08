import './Expenses.css';
import {useState} from "react";
import Card from './Card';
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
function Expenses(props){
    const[filterYear,selectedFilteredyear]=useState("2020");

    const filterChangeHandler=selectedYear =>{
       selectedFilteredyear(selectedYear);
    }
   
    const filterExpenses =props.items.filter(expense =>{
        return expense.date.getFullYear().toString()===filterYear;
    });
 
    return(
        <div>
        <Card className="expenses">
        <ExpensesFilter selected={filterYear} onChangeFilter={filterChangeHandler} /> 
       <ExpensesList  items={filterExpenses} />     
        </Card>
        </div>);
        
}
export default Expenses;