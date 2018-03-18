import React, { Component } from 'react';

class Experience extends Component {
  render() {
    return (
      <div className="gallery" id="portfolio">
        <div className="container">
          <div className="title-wthree">
            <h5 className="title-w3">Portfolio</h5>
            <br/>
            <br/>
            <br/>
            <div className="clearfix"></div>
          </div>
          <div className="">
            <div className="row">
              <div className="col-md-4 agile_gallery_grid">
                <a title="FX Barter" target="_blank" href="http://fxbarternew.herokuapp.com/">
                  <div className="agile_gallery_grid1">
                    <img src="images/fxbarter.png" alt=" " className="img-responsive" />
                  </div>
                </a>
              </div>
              <div className="col-md-4 agile_gallery_grid">
                <a title="Abuja Chamber of Commerce and Industry" target="_blank" href="http://acci.herokuapp.com/">
                  <div className="agile_gallery_grid1">
                    <img src="images/acci.png" alt=" " className="img-responsive" />
                  </div>
                </a>
              </div>
              <div className="col-md-4 agile_gallery_grid">
                <a title="Doc-Garage" target="_blank" href="http://docgarage.herokuapp.com/">
                  <div className="agile_gallery_grid1">
                    <img src="images/docgarage.png" alt=" " className="img-responsive" />
                  </div>
                </a>
              </div>
            </div>

            <div className="row w3_agile_gallery_gri">
              <div className="col-md-4 agile_gallery_grid">
                <a title="NewsApp" target="_blank" href="http://newsapp.herokuapp.com/">
                  <div className="agile_gallery_grid1">
                    <img src="images/newsapp.png" alt=" " className="img-responsive" />
                  </div>
                </a>
              </div>
              <div className="col-md-8 agile_gallery_grid">
                <a title="Github" target="_blank" href="https://github.com/andela-mmakinde">
                  <div className="agile_gallery_grid1">
                    <img src="images/github.svg" alt=" " className="agile_github_link" />
                  </div>
                </a>
              </div>
            </div>
            <div className="clearfix"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Experience;
