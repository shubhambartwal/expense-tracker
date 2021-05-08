import React from 'react';
import ExpenseForm from './ExpenseForm';
const AddNewExpense= () =>{
    return (
        <div class="add_new_expense">
            <button onClick={<ExpenseForm />}>Add new Expense</button>
        </div>
    );
}

export default AddNewExpense;
