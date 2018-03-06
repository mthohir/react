import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <div>


            <div className="row">

                <div className="s-content__header col-full">
                    <h1 className="s-content__header-title">
                        Feel Free To Contact Us.
                    </h1>
                </div>

                <div className="s-content__media col-full">
                    <div id="map-wrap">
                        <div id="map-container"></div>
                        <div id="map-zoom-in"></div>
                        <div id="map-zoom-out"></div>
                    </div>
                </div>

                <div className="col-full s-content__main">

                    <p className="lead">Lorem ipsum Deserunt est dolore Ut Excepteur nulla occaecat magna occaecat Excepteur nisi esse veniam dolor consectetur minim qui nisi esse deserunt commodo ea enim ullamco non voluptate consectetur minim aliquip Ut incididunt amet ut cupidatat.</p>

                    <p>Duis ex ad cupidatat tempor Excepteur cillum cupidatat fugiat nostrud cupidatat dolor sunt sint sit nisi est eu exercitation incididunt adipisicing veniam velit id fugiat enim mollit amet anim veniam dolor dolor irure velit commodo cillum sit nulla ullamco magna amet magna cupidatat qui labore cillum sit in tempor veniam consequat non laborum adipisicing aliqua ea nisi sint ut quis proident ullamco ut dolore culpa occaecat ut laboris in sit minim cupidatat ut dolor voluptate enim veniam consequat occaecat fugiat in adipisicing in amet Ut nulla nisi non ut enim aliqua laborum mollit quis nostrud sed sed.
                    </p>

                    <div className="row">
                        <div className="col-six tab-full">
                            <h3>Where to Find Us</h3>

                            <p>
                            1600 Amphitheatre Parkway<br />
                            Mountain View, CA<br />
                            94043 US
                            </p>

                        </div>

                        <div className="col-six tab-full">
                            <h3>Contact Info</h3>

                            <p>contact@philosophywebsite.com<br />
                            info@philosophywebsite.com <br />
                            Phone: (+1) 123 456
                            </p>

                        </div>
                    </div>

                    <h3>Say Hello.</h3>

                    <form name="cForm" id="cForm" method="post" action="">
                        <fieldset>

                            <div className="form-field">
                                <input name="cName" type="text" id="cName" className="full-width" placeholder="Your Name" value="" />
                            </div>

                            <div className="form-field">
                                <input name="cEmail" type="text" id="cEmail" className="full-width" placeholder="Your Email" value="" />
                            </div>

                            <div className="form-field">
                                <input name="cWebsite" type="text" id="cWebsite" className="full-width" placeholder="Website"  value="" />
                            </div>

                            <div className="message form-field">
                            <textarea name="cMessage" id="cMessage" className="full-width" placeholder="Your Message" ></textarea>
                            </div>

                            <button type="submit" className="submit btn btn--primary full-width">Submit</button>

                        </fieldset>
                    </form>


                </div>

            </div>


      </div>
    );
  }
}

export default Contact;
