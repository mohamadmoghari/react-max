import './ExpenseDate.min.css'
function ExpenseDate(props)
{
return (
    (
        
    <div className="expense-date">        
        <div className="expense-date__year">{props.date.substring(0,4)}</div>
        <div className="expense-date__month">{props.date.substring(5,7)}</div>
        <div className="expense-date__day">{props.date.substring(8,10)}</div>
    </div>
    )
)
}

export default ExpenseDate;