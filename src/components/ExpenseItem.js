import ExpenseDate from './Date/ExpenseDate';
import './ExpenseItem.min.css'


function ExpenseItem(props) {
    return (
        <div className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.among}</div>
            </div>
            
        </div>
    );
}
export default ExpenseItem;