import './loading.css';

const Loading = () => {
    return (
        <div className="loading" >
            <p className='loadtext'>Weatherly</p>
            <img src='./icons/01d.png' alt='' className='img' />
        </div>
    )
}

export default Loading;