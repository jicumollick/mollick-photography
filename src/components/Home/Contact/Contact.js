import React from "react";

const Contact = () => {
  return (
    <div className="py-5" id="contact">
      <h2 className="py-md-3">Contact Me</h2>

      <div className="container">
        <div className="row">
          <div className="w-50 mx-auto">
            <form className="">
              <div className="form-group">
                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  className="form-control"
                />
              </div>

              <div className="form-group">
                <div className="my-4">
                  <input
                    id="email"
                    type="text"
                    placeholder="Your email"
                    className="form-control"
                  />
                </div>
              </div>

              <div className="form-group">
                <div className="">
                  <textarea
                    className="form-control"
                    id="message"
                    placeholder="Please write your message here..."
                    rows="5"
                  ></textarea>
                </div>
              </div>

              <div className="form-group my-2">
                <div className="">
                  <button type="submit" className="btn btn-primary ">
                    Send
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
