import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <div className="contact-agileits-w3layouts" id="contact">
        <div className="contact-right-wthree">
          <div className="container">
            <div className="title-wthree">
              <h5 className="title-w3">Contact Me</h5>
              <div className="clearfix"></div>
            </div>
            <div className="address-w3layouts">
              <p className="para-agileits-w3layouts">For enquiries, you can reach me on any of these</p>
              <h4><a href="mailto:mayowamakinde53@gmail.com">mayowamakinde53@gmail.com</a></h4>
              <h6>+2347038399928</h6>
              <p className="para-agileits-w3layouts">340, Borno way, Alagomeji, Yaba, Lagos, Nigeria</p>
            </div>
            <div className="botttom-nav-agileits">
              <div className="w3l-social">
                <ul>
                  <li><a href="https://www.facebook.com/mayowa.makinde.58" target="_blank" class="fa fa-facebook"></a></li>
                  <li><a href="https://twitter.com/mankinde53" target="_blank" class="fa fa-twitter"></a></li>
                  <li><a href="https://github.com/andela-mmakinde" target="_blank" class="fa fa-github"></a></li>
                  <li><a href="https://plus.google.com/114551187537922418184" target="_blank" class="fa fa-google-plus"></a></li>
                  <li><a href="https://www.instagram.com/makindemayowa/" target="_blank" class="fa fa-instagram"></a></li>
                </ul>
              </div>
            </div>
            <div className="clearfix"> </div>

          </div>
        </div>
        <div className="wthree-form">
          <div className="container">
            <div className="col-md-6 contact-form agile_inner_grids">
              <h5 className="title-w3">Say Hello</h5>
              <form action="#" method="post">
                <div className="fields-grid">
                  <div className="styled-input">
                    <input type="text" name="Full Name" placeholder="Name" required="" />
                  </div>
                  <div className="styled-input">
                    <input type="email" name="Email" placeholder="Email" required="" />
                  </div>
                  <div className="styled-input">
                    <input type="text" name="Subject" placeholder="Subject" required="" />
                  </div>
                  <div className="clearfix"> </div>
                </div>
                <div className="styled-input textarea-grid">
                  <textarea name="Message" placeholder="Message" required=""></textarea>
                </div>
                <input type="submit" value="Send" />
              </form>
            </div>
            <div className="col-md-6 map-w3-agileits">
            {/* <iframe src="https://www.google.com/maps/embed/v1/place?q=place_id:Ei0zNDAgQm9ybm8gV2F5LCBBbGFnb21lamktWWFiYSwgTGFnb3MsIE5pZ2VyaWE&key=AIzaSyCxFDn-G4gq0T6ssoY6KGeIvb0fO2oEOdU"></iframe> */}
            </div>
            <div className="clearfix"> </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
