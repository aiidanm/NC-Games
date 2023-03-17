const SortbySelector = ({setSearchParams, searchParams}) => {



    const handleChange = (e) => {
        const newParams = new URLSearchParams(searchParams)
        newParams.set("sort_by", e.target.value)
        setSearchParams(newParams)
    }
    return (
        <>
        <label htmlFor="sortby_selector">Sort by: </label>
        <select id="sortby_selector" className="sortby_selector" tabIndex="2" onChange={handleChange}>
            <option value={"title"}>Title</option>
            <option value={"owner"}>Owner</option>
            <option value={"designer"}>designer</option>
            <option value={"category"}>category</option>
            <option value={"created_at"}>created date</option>
            <option value={"votes"}>votes</option>
        </select>
        </>
    )
}

export default SortbySelector