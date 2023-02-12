// import '../styles/global.css'

function President({ name }) {
    return (
        <div className='name1'>
            <div className='universityName'>
                <h1 className='welcome'>Welcome, </h1>
                <h1 className='ceoName'>Northeastern University CEO, {name}</h1>
            </div>
        </div>
    )
}

export default President;