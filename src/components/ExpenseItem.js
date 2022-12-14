import './ExpenseItem.min.css'

function ExpenseItem() {
    const date='14010/09/23';
    const title='the title';
    const among=24.256;
    return (
        <div className="expense-item">
            <div className="expense-item__date">{date}</div>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">{among}</div>
            </div>
            
        </div>
    );
}
export default ExpenseItem;