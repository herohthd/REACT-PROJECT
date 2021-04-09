import React from 'react';
import "../styles/style.scss"
import {Link} from 'react-router-dom';
class Footer extends React.Component {
    render() {
      return(
        <div class="App-footer">
            <div class="footer-container">
                <div class="footer-content flex flex-jc-sb flex-ai-c">
                <h4>Food Recipe Website - Group 3 - Web Programming</h4>
                <ul class="flex flex-jc-c flex-ai-c">
                    <li><Link to="/" class="link"><i class="fa fa-facebook" aria-hidden="true"></i></Link></li>
                    <li><Link to="/" class="link"><i class="fa fa-google-plus" aria-hidden="true"></i></Link></li>
                    <li><Link to="/" class="link"><i class="fa fa-instagram" aria-hidden="true"></i></Link></li>
                    <li><Link to="/" class="link"><i class="fa fa-twitter" aria-hidden="true"></i></Link></li>
                    <li><Link to="/" class="link"><i class="fa fa-youtube" aria-hidden="true"></i></Link></li>
                </ul>
                </div>
            </div>
        </div>
      );
    }
  }
  
export default Footer;