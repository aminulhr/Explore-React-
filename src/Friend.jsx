


const Friend = ({bondhu}) => {
    const {name, email} = bondhu;
 
    return (
        <div className="box">
            <h3>Name: {name} </h3>
            <h3>Name: {email} </h3>

        </div>
    );
};

export default Friend;