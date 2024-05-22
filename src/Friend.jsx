


const Friend = ({bondhu}) => {
    const {name, email, id} = bondhu;
 
    return (
        <div className="box">
            <h3>ID: {id} </h3>
            <h3>Name: {name} </h3>
            <h3>Name: {email} </h3>
            

        </div>
    );
};

export default Friend;