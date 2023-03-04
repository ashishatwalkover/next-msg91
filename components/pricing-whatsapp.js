import { MdDone, MdClose } from "react-icons/md";
import { useEffect, useState } from "react";
const pricingwp = ({subscriptionWhatsapp, fetchSubscriptionWhatsapp}) => {
  const [selectedMode, setSelectedMode] = useState("Monthly");
  const [symbol, setSymbol] = useState("₹");
  
  const changeCurrency = (currency) => {    
    fetchSubscriptionWhatsapp(currency, '5');
    switch (currency) {
      case "INR":
        setSymbol("₹");
        break;
      case "USD":
      setSymbol("$");
        break;      
      case "GBP":
        setSymbol("£");
        break;
    }
  };
  return (
    <>
      <div className="d-flex justify-content-center mb-4">
        <select style={{width: 'fit-content'}} className="form-select me-4" aria-label="Default select example" onChange={(e)=>changeCurrency(e.target.value)}>
          <option value="INR">INR</option>
          <option value="USD">USD</option>
          <option value="GBP">GBP</option>
        </select>
        <select style={{width: 'fit-content'}} className="form-select" aria-label="Default select example" onChange={(e)=>setSelectedMode(e.target.value)}>
          <option value="Monthly">Monthly</option>
          <option value="Half yearly">Half Yearly</option>
          <option value="Yearly">Yearly</option>
        </select>
      </div>
      <div className="d-flex flex-wrap flex-gap justify-content-center w-100  card-container align-items-end">
      {subscriptionWhatsapp?.length ?
          subscriptionWhatsapp?.map((item, index) => {
            return(
              <div key={`email-card-${index}`} className="mx-3">
              {item.plan_amounts[0]?.plan_amount === 7500
              ?              
                <div className="text-center d-flex flex-column mb-4 mb-sm-0 align-items-center ">
                  <div className="popular-chip c-fs-6">POPULAR</div>
                  <div className="card-popular card text-center mb-4 mb-sm-0 c-bg-grey">                  
                    <div className="card-body">
                      <h3 className="c-fs-3">{item.name}</h3>
                      <h5 className="c-fs-4 mt-2">
                        {symbol}
                        {(selectedMode === 'Monthly') ? item.plan_amounts[2]?.plan_amount : (selectedMode === 'Half yearly') ? item.plan_amounts[1]?.plan_amount : item.plan_amounts[0]?.plan_amount}
                        /
                        {(selectedMode === 'Monthly') ? 'Month' : (selectedMode === 'Half yearly') ? 'Half yearly' : 'Yearly'}
                      </h5>
                      <p className="c-fs-5"> 
                        {(item.plan_amounts[0]?.plan_amount === 0) ? '-' : '+18%GST'}
                      </p>
                      <div className="c-fs-5 mt-2">
                        <span className="text-success c-fs-3">
                          <MdDone />
                        </span>
                        {item.plan_services[0].service_credit.free_credits} for Outbound calls
                      </div>                    
                      <button className="c-fs-5 btn btn-sm w-100 btn-outline-primary mt-2">
                        Get Started
                      </button>
                    </div>
                  </div>
                </div>
              :
                <div className="card border-0 text-center mb-4 mb-sm-0 c-bg-grey">                
                  <div className="card-body">
                    <h3 className="c-fs-3">{item.name}</h3>
                    <h5 className="c-fs-4 mt-2">
                      {symbol}
                      {(selectedMode === 'Monthly') ? item.plan_amounts[0]?.plan_amount : item.plan_amounts[1].plan_amount}
                      /
                      {(selectedMode === 'Monthly') ? 'Monthly' : 'Yearly'}
                    </h5>
                    <p className="c-fs-5"> 
                      {(item.plan_amounts[0]?.plan_amount === 0) ? '-' : '+18%GST'}
                    </p>
                    <div className="c-fs-5 mt-2">
                      <span className="text-success c-fs-3">
                        <MdDone />
                      </span>
                      {item.plan_services[0].service_credit.service_credit_rates[0].free_credits} for for Whatsapp
                    </div>                    
                    <button className="c-fs-5 btn btn-sm w-100 btn-outline-primary mt-2">
                      Get Started
                    </button>
                  </div>
                </div>
              }
              </div>
            )
          }):''
      }
        {/* <div className="card  border-0 text-center mb-4 mb-sm-0 c-bg-grey">
          <div className="card-body">
            <h3 className="c-fs-3">Free</h3>
            <h5 className="c-fs-4 mt-2">$0/Month</h5>
            <p className="c-fs-5">+</p>
            <a href="https://developers.facebook.com/docs/whatsapp/pricing" target="_blank" className="c-fs-5">WhatsApp Pricing</a>
            <div className="c-fs-5 mt-2">
              <span className="text-success c-fs-3">
                <MdDone />
              </span>
              Free Balance of $50
            </div>
            

            <button className="c-fs-5 btn btn-sm w-100 btn-outline-primary mt-2">
              Get Started
            </button>
          </div>
        </div>
        
        <div className="  mx-3 text-center d-flex flex-column mb-4 mb-sm-0 align-items-center ">
          <div className="popular-chip c-fs-6">POPULAR</div>
          <div className="card  card-popular border-primary text-center c-bg-grey">
            <div className="card-body">
              <h3 className="c-fs-3">Basic</h3>
              <h5 className="c-fs-4 mt-2">$5,000/Month</h5>
              <p className="c-fs-5">+</p>
            <a href="https://developers.facebook.com/docs/whatsapp/pricing" target="_blank" className="c-fs-5">WhatsApp Pricing</a>
              
              <div className="c-fs-5 mt-2">
                <span className="text-success c-fs-3">
                  <MdDone />
                </span>
                Balance of $3,500 
              </div>
              

              <button className="c-fs-5 btn btn-sm w-100 btn-primary mt-2">
                Get Started
              </button>
            </div>
          </div>
        </div>
        <div className="card mb-4 mb-sm-0 border-0 text-center c-bg-grey">
          <div className="card-body">
            <h3 className="c-fs-3">Custom</h3>
            <h5 className="c-fs-4 mt-2">Custom Pricing</h5>
            <p className="c-fs-5">-</p>
            <div className="c-fs-5 mt-2">
              Need to send more? Talk to us for a customized plan.
            </div>

            <button className="c-fs-5 btn btn-sm w-100 btn-outline-primary mt-2">
              Talk to an Expert
            </button>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default pricingwp;
