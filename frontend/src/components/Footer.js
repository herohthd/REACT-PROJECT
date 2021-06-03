import React from 'react';
import "../styles/style.scss"
import {Link} from 'react-router-dom';
class Footer extends React.Component {
    render() {
      return(
        <div className="App-footer">
            <div className="footer-container">
                <div className="footer-content flex flex-jc-sb flex-ai-c">
                <h4>Food Recipe Website - Group 3 - Web Programming</h4>
                <ul className="flex flex-jc-c flex-ai-c">
                    <li><Link to="https://www.facebook.com/ha.hoangthuy.9" className="link"><i className="fa fa-facebook" aria-hidden="true"></i></Link></li>
                    <li><Link to="https://www.facebook.com/ha.hoangthuy.9" className="link"><i className="fa fa-google-plus" aria-hidden="true"></i></Link></li>
                    <li><Link to="https://www.facebook.com/ha.hoangthuy.9" className="link"><i className="fa fa-instagram" aria-hidden="true"></i></Link></li>
                    <li><Link to="https://www.facebook.com/ha.hoangthuy.9" className="link"><i className="fa fa-twitter" aria-hidden="true"></i></Link></li>
                    <li><Link to="https://www.facebook.com/ha.hoangthuy.9" className="link"><i className="fa fa-youtube" aria-hidden="true"></i></Link></li>
                </ul>
                </div>
            </div>
        </div>
      );
    }
  }
  
export default Footer;