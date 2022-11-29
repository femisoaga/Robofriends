const Searchbox = ({ searchfield, searchChange }) => {
    return(
        <div className="pa2">
            <input
                className="bg-lightest-blue b--green pa3 ba" 
                type='search' 
                placeholder='search robots'
                onChange={searchChange}
            />
        </div>
    )
};

export default Searchbox