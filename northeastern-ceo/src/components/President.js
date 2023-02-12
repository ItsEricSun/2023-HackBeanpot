// import '../styles/global.css'

function President({ name }) {
    return (
        <div className='name1'>
            <div className='universityName'>
                <h1>Northeastern University</h1>
            </div>
            <div className='presidentName'>
                <h1>President: {name}</h1>
            </div>
        </div>
    )
}

export default President;