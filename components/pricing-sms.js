import { MdDone, MdClose } from "react-icons/md";
import { useEffect, useState } from "react";

const pricingvoice = () => {
  var [pricing, setPricing] = useState([]);
  // let pricing = []
  const amountArr = ['1259', '4000', '9000', '17000', '48000', '75000'];

  const fetchData = (amount) => {
    fetch(`https://test.msg91.com/api/v5/web/fetchPricingDetails?price=${amount}&currency=inr&originCountry=INDIA&destinationCountry=INDIA`)
    .then((response) => response.json())
    .then((data) => {
      var newData = pricing
      newData.push(data.data)
      setPricing([...newData])
      // pricing.push(data.data);      
    })
    .catch((error) => {
      console.log(error);  
    });
  };
  useEffect(() => {
    if(pricing.length === 0){
      amountArr.forEach(function(item, index){
        fetchData(item);
      })
    }
  }, []);
  // console.log("@@",...pricing);
  return (
    <>
      <div className="g-3 d-flex justify-content-center col-lg-5 m-auto pb-5">        
        <select className="form-select" aria-label="Default select example">
          <option>India</option>
        </select>
        <div className="px-4">To</div>
        <select className="form-select" aria-label="Default select example">
          <option>India</option>
        </select>
      </div>
      <div className="d-flex flex-wrap flex-gap justify-content-center w-100  card-container align-items-end">
        {pricing && pricing.map((item, index) => {
          return (
            <div className="card  border-0 text-center mb-4 mb-sm-0 c-bg-grey">            
              <div className="card-body">
                <h3 className="c-fs-3">{item[4].totalNoOfSms} SMS</h3>
                <h5 className="c-fs-4 mt-2">₹{item[4].rate}/SMS</h5>
                <p className="c-fs-5"> - </p>
                <h2 className="c-fs-2 c-ff-b text-green">₹{amountArr[index]} </h2>
                <p className="c-fs-5">+18% GST</p>
                <button className="c-fs-5 btn btn-sm w-100 btn-outline-primary mt-2">
                  Get Started
                </button>
              </div>
            </div>
          );
        })}
        
        {/* <div className="card  border-0 text-center mb-4 mb-sm-0 c-bg-grey">
          <div className="card-body">
            <h3 className="c-fs-3">20,000 SMS</h3>
            <h5 className="c-fs-4 mt-2">₹0.20/SMS</h5>
            <p className="c-fs-5"> - </p>
            <h2 className="c-fs-2 c-ff-b text-green">₹4,000</h2>
            <p className="c-fs-5">+18% GST</p>
            <button className="c-fs-5 btn btn-sm w-100 btn-outline-primary mt-2">
              Get Started
            </button>
          </div>
        </div>

        <div className="  mx-3 text-center d-flex flex-column mb-4 mb-sm-0 align-items-center ">
          <div className="popular-chip c-fs-6">POPULAR</div>
          <div className="card  text-center card-popular border-primary mb-4 mb-sm-0 c-bg-grey">
            <div className="card-body">
              <h3 className="c-fs-3">50,000 SMS</h3>
              <h5 className="c-fs-4 mt-2">₹0.18/SMS</h5>
              <p className="c-fs-5"> - </p>
              <h2 className="c-fs-2 c-ff-b text-green">₹9,000 </h2>
              <p className="c-fs-5">+18% GST</p>
              <button className="c-fs-5 btn btn-sm w-100 btn-primary mt-2">
                Get Started
              </button>
            </div>
          </div>
        </div>
        <div className="card  border-0 text-center mb-4 mb-sm-0 c-bg-grey">
          <div className="card-body">
            <h3 className="c-fs-3">1,00,000 SMS</h3>
            <h5 className="c-fs-4 mt-2">₹.17/SMS</h5>
            <p className="c-fs-5"> - </p>
            <h2 className="c-fs-2 c-ff-b text-green">₹17,000</h2>
            <p className="c-fs-5">+18% GST</p>
            <button className="c-fs-5 btn btn-sm w-100 btn-outline-primary mt-2">
              Get Started
            </button>
          </div>
        </div>
        <div className="card  border-0 text-center mb-4 mb-sm-0 c-bg-grey">
          <div className="card-body">
            <h3 className="c-fs-3">3,00,000 SMS</h3>
            <h5 className="c-fs-4 mt-2">₹.14/SMS</h5>
            <p className="c-fs-5"> - </p>
            <h2 className="c-fs-2 c-ff-b text-green">₹48,000</h2>
            <p className="c-fs-5">+18% GST</p>
            <button className="c-fs-5 btn btn-sm w-100 btn-outline-primary mt-2">
              Get Started
            </button>
          </div>
        </div>
        <div className="card  border-0 text-center mb-4 mb-sm-0 c-bg-grey">
          <div className="card-body">
            <h3 className="c-fs-3">5,00,000 SMS</h3>
            <h5 className="c-fs-4 mt-2">₹.12/SMS</h5>
            <p className="c-fs-5"> - </p>
            <h2 className="c-fs-2 c-ff-b text-green">₹75,000</h2>
            <p className="c-fs-5">+18% GST</p>
            <button className="c-fs-5 btn btn-sm w-100 btn-outline-primary mt-2">
              Get Started
            </button>
          </div>
        </div>
        <div className="card  border-0 text-center mb-4 mb-sm-0 c-bg-grey">
          <div className="card-body">
            <h3 className="c-fs-3">5,00,000+ SMS</h3>
            <h5 className="c-fs-4 mt-2">₹.10/SMS</h5>
            <p className="c-fs-5"> - </p>
            <h2 className="c-fs-2 c-ff-b text-green">Cutomised Plan</h2> 
            <p className="c-fs-5">Customised Plan</p>
            <button className="c-fs-5 btn btn-sm w-100 btn-outline-primary mt-2">
              Talk to Sales
            </button>
          </div>
        </div> */}

      </div>
    </>
  );
};

export default pricingvoice;
