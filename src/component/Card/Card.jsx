/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */


const Card = ({bookmark,credit,remaining}) => {
    console.log(bookmark);
    return (
        <div>
            <h1>Remaining: {remaining}</h1>
           <div>
           {bookmark.map(book=>(
                <div>
                    <h1>{book.name}</h1>
                </div>
            ))}
           </div>
           <h1>Creadit: {credit}</h1>
        </div>
    );
};

export default Card;