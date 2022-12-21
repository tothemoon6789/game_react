

const Tag = (props) => {
    
    const sendData = (para) => {
        props.parentCallback(para)
    }
    return (
        <>

        <a className='tag'  onClick={(e) => sendData(e.target.textContent)}>{props.content}</a>
        
        </>
    );
};

export default Tag;