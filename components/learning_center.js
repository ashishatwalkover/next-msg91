import { MdEast } from "react-icons/md";
import Document from '../pages/_document';
const LearningCenter = () => {

  return (
    <div className="ps-5" id="learning-center">
      <div className="container-fluid"> 
      <div className="ps-5 m-y-120">
        <div className="c-fs-5 text-uppercase">Guides</div>
        <div className="c-fs-4">
          <a href="#">- What is RCS and why should it matter to you?</a>
          <a href="#">- Transactional SMS – top brands benefit from it and you could too</a>
          <a href="#">- Chatbots and communication: how to be more human?</a>
          <a href="#">- How can I start my cloud communication with MSG91?</a>
          <a className="" href="#">View all <MdEast /></a>
        </div>
      </div>
      
      <div className="h-divider my-5"></div>

      <div className="ps-5 m-y-120">
        <div className="c-fs-5 text-uppercase">Help doc</div>
        <div className="c-fs-4">
          <a href="#">- What is RCS and why should it matter to you?</a>
          <a href="#">- Transactional SMS – top brands benefit from it and you could too</a>
          <a href="#">- Chatbots and communication: how to be more human?</a>
          <a href="#">- How can I start my cloud communication with MSG91?</a>
          <a className="" href="#">View all <MdEast /></a>
        </div>
      </div>
      
      <div className="h-divider my-5"></div>

      <div className="ps-5 m-y-120">        
        <div className="c-fs-4">
          <a href="#">Our client Stories (Case study)</a>
          <a href="#">Become a Partner (MSG91 Partner Program)</a>
          <a href="#">Talk to Sales : +91 999 99 999 99</a>          
        </div>
      </div>
      </div>

    </div>
  );
};
export default LearningCenter;
