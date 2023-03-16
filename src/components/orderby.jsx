

const OrderBySelector = ({setSearchParams, searchParams}) => {
    const handleChange = (e) => {
        const newParams = new URLSearchParams(searchParams)
        newParams.set("order_by", e.target.value)
        setSearchParams(newParams)
    }

    return (
        <select className="Orderby_selector" onChange={handleChange}>
            <option value={"ASC"}>Ascending</option>
            <option value={"DESC"}>Descending</option>
        </select>
    )
}

export default OrderBySelector