/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */


const Card = ({bookmark,credit,remaining}) => {
    let count = 1
    console.log(bookmark);
    return (
        <div className="shadow-lg p-4 text-left border-2 rounded-lg w-[384px]">
            <h1 className="mb-2 text-2xl font-bold">Credit Hour Remaining: {remaining} hr</h1>
           <div className="bg-[#FFF] mb-3"> <hr />
           <h1 className="text-2xl font-semibold mb-4">Course Name</h1>
            
           {bookmark.map(book=>(
                <div>
                    <ol>
                        <li className="font-semibold">{count++}. {book.name}</li>
                    </ol>
                    {/* <h1>{book.name}</h1> */}
                </div>
            ))}
           </div>
           <hr />
           <h1 className="font-medium mt-4">Total  Credit Hour: {credit}</h1>
        </div>
    );
};

export default Card;