import Image from "next/image";
const clintStories=()=>{
    return (
        <>
        <div className="container mt-5">
            <h2>Our clint stories</h2>
            <div className=" d-flex mt-3">
                <div className="d-flex flex-column pe-5 ">
                    <Image src="../img/placeholder.svg" width={760*0.6} height={420*0.6}/>
                    <p className="c-fs-5 pt-3">Azim Premji Foundation is an NGO which works in the fields of Education. With the vision to help people with proper education by conducting classes and creating awareness, Azim Premji Foundation has been rigorously working on coordinating with the teachers for social welfare.</p>
                </div>
                <div className="d-flex flex-column">
                <div className=" d-flex ps-5">
                    <Image src="../img/square-placeholder.svg" width={160} height={160}/>
                    <p className="c-fs-5 ps-3">Azim Premji Foundation is an NGO which works in the fields of Education. With the vision to help people with proper education by conducting classes and creating awareness, Azim Premji Foundation has been rigorously working on coordinating with the teachers for social welfare.</p>
                </div>
                <div className=" d-flex ps-5 mt-5">
                    <Image src="../img/square-placeholder.svg" width={160} height={160}/>
                    <p className="c-fs-5 ps-3">Azim Premji Foundation is an NGO which works in the fields of Education. With the vision to help people with proper education by conducting classes and creating awareness, Azim Premji Foundation has been rigorously working on coordinating with the teachers for social welfare.</p>
                </div>
                </div>
            </div>

        </div>
        </>
    )
}
export default clintStories;