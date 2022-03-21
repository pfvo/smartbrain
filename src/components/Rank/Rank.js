const Rank = ({userName, userEntries}) => {
    return (
        <div style={{marginTop: '5vh',color: 'white', fontSize: '1.5em'}}>
            <div style={{padding: '1em'}}>
            {`${userName}, your current Rank is:`}
            </div>
            <div>
            {`#${userEntries}`}
            </div>
        </div>
    )
}

export default Rank;