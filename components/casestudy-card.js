import HeadTag from "./head";
const casestudycard = ()=>{
    return(
        <>
        <div className="container d-flex">

        <div className="casestudycard mx-auto c-bg-grey d-flex gap-3 flex-column p-2">
            <div className=" casestudycard-img w-100 bg-white ">
                <img className="ms-4" src="/img/azim-premji-foundation.png"/>
            </div>
            <h3 className=" px-4 my-4 small-heading text-truncate ">Azim Premji Foundation informs teachers and trainers using SMS via MSG91</h3>
            <p className="px-4 c-fs-4">Azim Premji Foundation is an NGO which works in the fields of Education. With the vision to help people with proper education by conducting classes and creating awareness, Azim Premji Foundation has been rigorously working on coordinating with the teachers for social welfare.</p>
            <div className="px-4 my-4 d-flex gap-3">
                <span className="text-white bg-black c-fs-5 py-1 px-2">NGO</span>
                <span className="text-white bg-black c-fs-5 py-1 px-2">Transaction SMS</span>
                <span className="text-white bg-black c-fs-5 py-1 px-2">Unicode</span>
                </div>
        </div>
        </div> 
        
        </>
    );
};
export default casestudycard;