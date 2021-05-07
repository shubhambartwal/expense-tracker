import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import {useState} from "react";
import Card from './Card';
import ExpensesFilter from "./ExpensesFilter";
function Expenses(props){
    const[filterYear,selectedFilteredyear]=useState("2020");

    const filterChangeHandler=selectedYear =>{
       selectedFilteredyear(selectedYear);
    }
   
    const filterExpenses =props.items.filter(expense =>{
        return expense.date.getFullYear().toString()===filterYear;
    });
    let expenseContent = <p>No expense found</p>
    if(filterExpenses.length>0)
    {
        expenseContent= filterExpenses.map((expense)=>(
            <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            />
            
        ))
    }
    return(<div>
        <Card className="expenses">
        <ExpensesFilter selected={filterYear} onChangeFilter={filterChangeHandler} /> 
        { expenseContent }        
        </Card>
        </div>);
        
}
export default Expenses;