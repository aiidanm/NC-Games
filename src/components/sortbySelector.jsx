const SortbySelector = () => {
    return (
        <>
        <label htmlFor="sortby_selector">Sort by: </label>
        <select id="sortby_selector" className="sortby_selector" tabIndex="2">
            <option>Title</option>
            <option>Owner</option>
            <option>designer</option>
            <option>category</option>
            <option>created date</option>
            <option>votes</option>
        </select>
        </>
    )
}

export default SortbySelector