type Transcation = {
    amount : number;
    category : string;
    createdAt : Date | string;
    note : string;
    transcationTitle : string;
    transactionType : string;
    userId : string;
    __v : number;
    _id : string;
}

export const listItem = ({ transaction}:{transaction: Transcation}) => {
    transaction.createdAt
    const date1 = new Date(transaction.createdAt);
    const date2 = new Date();

    const differenceMs = Number(date2) - Number(date1)

    const differenceHours = Math.round(differenceMs / (1000 * 60 * 60));
    console.log(differenceHours)

    return (
        <div style={{ backgroundColor: "grey" , borderBottom: '1px solid pink' }}>
            <div>
                {transaction.category}
            </div>
        </div>
    )
}