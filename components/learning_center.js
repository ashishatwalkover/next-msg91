import { MdEast } from "react-icons/md";
import Document from '../pages/_document';
const LearningCenter = () => {

  return (
    <div className="ps-5" id="learning-center">
      <div className="container-fluid"> 
      <div className="ps-5 m-y-120">
        <div className="c-fs-5 text-uppercase">Guides</div>
        <div className="c-fs-4">
          <a href="https://msg91.com/guide/msg91-free-whatsapp-business-api/">- MSG91 - Free WhatsApp Business API</a>
          <a href="https://msg91.com/guide/how-sms-api-integration-add-benefits-to-your-business-communication/">- How SMS API integration add benefits to your business communication?</a>
          <a href="https://msg91.com/guide/why-does-your-business-need-two-factor-authentication/">- Why does your business need Two-factor Authentication?</a>
          <a href="https://msg91.com/guide/how-to-grow-your-revenue-with-transactional-sms/">- How to Grow Your Revenue with Transactional SMS?</a>
          <a className="" href="https://msg91.com/guide/">View all <MdEast /></a>
        </div>
      </div>
      
      <div className="h-divider my-5"></div>

      <div className="ps-5 m-y-120">
        <div className="c-fs-5 text-uppercase">Help doc</div>
        <div className="c-fs-4">
          <a href="https://msg91.com/help/MSG91/step-by-step-guide-to-set-up-and-start-your-cloud-communication-with-msg91">- How can I start my cloud communication with MSG91?</a>
          <a href="https://msg91.com/help/MSG91/how-to-use-msg91-with-shopify">- How to integrate MSG91 with your Shopify Store?</a>
          <a href="https://msg91.com/help/MSG91/how-to-migrate-from-twilio-to-msg91">- How to migrate from Twilio to MSG91?</a>          
          <a className="" href="https://msg91.com/help/">View all <MdEast /></a>
        </div>
      </div>
      
      <div className="h-divider my-5"></div>

      <div className="ps-5 m-y-120">        
        <div className="c-fs-4">
          <a href="/case-studies">Our client Stories (Case study)</a>
          <a href="/partner-program">Become a Partner (MSG91 Partner Program)</a>
          <a href="tel:9898989898">Talk to Sales : +91 999 99 999 99</a>          
        </div>
      </div>
      </div>

    </div>
  );
};
export default LearningCenter;
