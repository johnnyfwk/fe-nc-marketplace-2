function SelectCategory( {availableCategories, updateSelectedCategory} ) {

    const renderCategoryDropDownOptions = availableCategories.map((category) => {
        return <option key={category} value={category}>{category}</option>
    })

    return (
        <form>
            <label htmlFor="categories">Select a category:</label>
            <select onChange={(event) => {updateSelectedCategory(event.target.value)}}>
                {renderCategoryDropDownOptions}
            </select>
        </form>
    )
}

export default SelectCategory;