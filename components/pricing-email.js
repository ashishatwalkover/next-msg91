import { MdDone, MdClose } from "react-icons/md";
import { useEffect, useState } from "react";
const pricingemail = ({subscription}) => {
  const [selectedCurrency, setSelectedCurrency] = useState('INR');
  const [selectedMode, setSelectedMode] = useState("Monthly");
  const [symbol, setSymbol] = useState("₹");
  
  const changeCurrency = (currency) => {
    setSelectedCurrency(currency)
    fetchSubscription(currency, '1');
  };
    
  var tmpPlans = [];
  subscription?.map((item, index) => {
    let obj = {}
    
    obj.symbol = symbol;
    
    let amount = item.plan_amounts.find(
      (o) =>        
        o.plan_type.name === selectedMode
    );
    obj.amount = amount;
    
    item.plan_services.forEach((o,i) => {
      (i == 0)
        obj.email = o.service_credit.free_credits +" "+o.service_credit.service.name;
      (i == 1)
        obj.validation = o.service_credit.free_credits +" "+o.service_credit.service.name;      
    });
    console.log(obj);
    //tmpPlans.push(obj)
  })  

  useEffect(() => {    
    switch (selectedCurrency) {
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
  }, []);
  return (
    <>
      <select className="form-select w-25 mx-auto" aria-label="Default select example" onChange={()=>{changeCurrency(e.target.value)}}>
        <option value="INR">INR</option>
        <option value="USD">USD</option>
        <option value="GBP">GBP</option>
      </select>
      <div className="d-flex flex-wrap flex-gap justify-content-center w-100  card-container align-items-end">
      {subscription.length &&
        subscription?.map((item, index) => {          
          return(
            <>
            {item.plan_amounts[0].plan_amount === 7500
            ?
              <div key={`email-card-${index}`} className="mx-3 text-center d-flex flex-column mb-4 mb-sm-0 align-items-center ">
                <div className="popular-chip c-fs-6">POPULAR</div>
                <div className="card-popular card text-center mb-4 mb-sm-0 c-bg-grey">                  
                  <div className="card-body">
                    <h3 className="c-fs-3">{item.name}</h3>
                    <h5 className="c-fs-4 mt-2">
                      {symbol}
                      {(selectedMode === 'Monthly') ? item.plan_amounts[0].plan_amount : item.plan_amounts[1].plan_amount}
                      /
                      {(selectedMode === 'Monthly') ? 'Month' : 'Yearly'}
                    </h5>
                    <p className="c-fs-5"> 
                      {(item.plan_amounts[0].plan_amount === 0) ? '-' : '+18%GST'}
                    </p>
                    <div className="c-fs-5 mt-2">
                      <span className="text-success c-fs-3">
                        <MdDone />
                      </span>
                      {item.plan_services[0].service_credit.free_credits} Emails
                    </div>
                    <div className="c-fs-5 ">                  
                        {
                        (item.plan_amounts[0].plan_amount === 0) ? 
                        <span className="text-danger c-fs-3"><MdClose /></span> 
                        : 
                        <span className="text-success c-fs-3"><MdDone /></span> 
                        }
                      {item.plan_services[1].service_credit.free_credits} Email Varifications
                    </div>

                    <button className="c-fs-5 btn btn-sm w-100 btn-outline-primary mt-2">
                      Get Started
                    </button>
                  </div>
                </div>
              </div>  
            :
              <div key={`email-card-${index}`} className="card border-0 text-center mb-4 mb-sm-0 c-bg-grey">                
                <div className="card-body">
                  <h3 className="c-fs-3">{item.name}</h3>
                  <h5 className="c-fs-4 mt-2">
                    {symbol}
                    {(selectedMode === 'Monthly') ? item.plan_amounts[0].plan_amount : item.plan_amounts[1].plan_amount}
                    /
                    {(selectedMode === 'Monthly') ? 'Month' : 'Yearly'}
                  </h5>
                  <p className="c-fs-5"> 
                    {(item.plan_amounts[0].plan_amount === 0) ? '-' : '+18%GST'}
                  </p>
                  <div className="c-fs-5 mt-2">
                    <span className="text-success c-fs-3">
                      <MdDone />
                    </span>
                    {item.plan_services[0].service_credit.free_credits} Emails
                  </div>
                  <div className="c-fs-5 ">                  
                      {
                      (item.plan_amounts[0].plan_amount === 0) ? 
                      <span className="text-danger c-fs-3"><MdClose /></span> 
                      : 
                      <span className="text-success c-fs-3"><MdDone /></span> 
                      }
                    {item.plan_services[1].service_credit.free_credits} Email Varifications
                  </div>

                  <button className="c-fs-5 btn btn-sm w-100 btn-outline-primary mt-2">
                    Get Started
                  </button>
                </div>
              </div>
            }
            </>           
                               
          )
        })
      }
      </div>
    </>
  );
};

export default pricingemail;
