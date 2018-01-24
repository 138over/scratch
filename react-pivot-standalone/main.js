const e = React.createElement;

class Woo extends React.Component {
    render() {
        return e('div', null, `${this.props.intro}`);
    }
}

ReactDOM.render(
    e(Woo, {intro: 'Workspace Utilities'}, null),
    document.getElementById('root')
);

var dimensions = [
    {value: 'firstName', title: 'First Name'},
    {value: 'lastName', title: 'Last Name'},
    {value: 'state', title: 'State'},
    {value: function(row) {
        return row.transaction.business
    }, title: 'Business'},
    {value: function(row) {
        return row.transaction.type
    }, title: 'Transaction Type'}
]


var reduce = function(row, memo) {
    // the memo object starts as {} for each group, build it up
    memo.count = (memo.count || 0) + 1
    memo.amountTotal = (memo.amountTotal || 0) + parseFloat(row.transaction.amount)
    // be sure to return it when you're done for the next pass
    return memo
}

var calculations = [
    // "value" can be the key of the "memo" object from reduce
    // "template" changes the display of the value, but not sorting behavior
    {
        title: 'Amount', value: 'amountTotal',
        template: function(val, row) { return '$' + val.toFixed(2) }
    },
    {
        title: 'Avg Amount',
        // "value" can also be a function
        value: function(memo) { return memo.amountTotal / memo.count },
        template: function(val, row) { return '$' + val.toFixed(2) },
        // you can also give a column a custom class (e.g. right align for numbers)
        className: 'alignRight'
    }
]

ReactPivot(document.body, {
    rows: rows,
    dimensions: dimensions,
    calculations: calculations,
    reduce: reduce
});


