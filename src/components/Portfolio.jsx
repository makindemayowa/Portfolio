import React, { Component } from 'react';

class Experience extends Component {
  render() {
    return (
      <div class="gallery" id="portfolio">
        <div class="container">
          <div class="title-wthree">
            <h5 class="title-w3">Portfolio</h5>
            <br/>
            <br/>
            <br/>
            <div class="clearfix"></div>
          </div>
          <div class="">
            <div class="row">
              <div class="col-md-4 agile_gallery_grid">
                <a title="FX Barter" target="_blank" href="http://fxbarternew.herokuapp.com/">
                  <div class="agile_gallery_grid1">
                    <img src="images/fxbarter.png" alt=" " class="img-responsive" />
                  </div>
                </a>
              </div>
              <div class="col-md-4 agile_gallery_grid">
                <a title="Abuja Chamber of Commerce and Industry" target="_blank" href="http://acci.herokuapp.com/">
                  <div class="agile_gallery_grid1">
                    <img src="images/acci.png" alt=" " class="img-responsive" />
                  </div>
                </a>
              </div>
              <div class="col-md-4 agile_gallery_grid">
                <a title="Doc-Garage" target="_blank" href="http://docgarage.herokuapp.com/">
                  <div class="agile_gallery_grid1">
                    <img src="images/docgarage.png" alt=" " class="img-responsive" />
                  </div>
                </a>
              </div>
            </div>

            <div class="row w3_agile_gallery_gri">
              <div class="col-md-4 agile_gallery_grid">
                <a title="NewsApp" target="_blank" href="http://newsapp.herokuapp.com/">
                  <div class="agile_gallery_grid1">
                    <img src="images/newsapp.png" alt=" " class="img-responsive" />
                  </div>
                </a>
              </div>
              <div class="col-md-8 agile_gallery_grid">
                <a title="Github" target="_blank" href="https://github.com/andela-mmakinde">
                  <div class="agile_gallery_grid1">
                    <img src="images/github.svg" alt=" " class="agile_github_link" />
                  </div>
                </a>
              </div>
            </div>
            <div class="clearfix"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Experience;
