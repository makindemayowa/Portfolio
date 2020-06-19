import React, { Component } from "react";

class Experience extends Component {
  render() {
    return (
      <div className="gallery" id="portfolio">
        <div className="container">
          <div className="title-wthree">
            <h5 className="title-w3">Portfolio</h5>
            <br />
            <br />
            <br />
            <div className="clearfix"></div>
          </div>
          <div className="">
            <div className="row">
              <div className="col-md-4 agile_gallery_grid">
                <a
                  title="Fridge to table"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://fridgetotable.com/"
                >
                  <div className="agile_gallery_grid1">
                    <img
                      src="images/fridgetotable.png"
                      alt=" "
                      className="img-responsive"
                    />
                  </div>
                </a>
              </div>
              <div className="col-md-4 agile_gallery_grid">
                <a
                  title="FX Barter"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://fxbarter.com/"
                >
                  <div className="agile_gallery_grid1">
                    <img
                      src="images/fxbarter.png"
                      alt=" "
                      className="img-responsive"
                    />
                  </div>
                </a>
              </div>
              <div className="col-md-4 agile_gallery_grid">
                <a
                  title="Meal Hero"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://about.mealhero.com/"
                >
                  <div className="agile_gallery_grid1">
                    <img
                      src="images/try-mealhero.png"
                      alt=" "
                      className="img-responsive"
                    />
                  </div>
                </a>
              </div>
            </div>

            <div className="row w3_agile_gallery_gri">
              <div className="col-md-12 agile_gallery_grid">
                <a
                  title="Github"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/makindemayowa"
                >
                  <div className="agile_gallery_grid1 github">
                    <img
                      src="images/github.svg"
                      alt=" "
                      className="agile_github_link"
                    />
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
