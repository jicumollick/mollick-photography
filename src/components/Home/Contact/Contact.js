import React from "react";

const Contact = () => {
  return (
    <div className="py-5" id="contact">
      <h2 className="py-md-3">Contact Me</h2>

      <div class="container">
        <div class="row">
          <div class="w-50 mx-auto">
            <form class="">
              <div class="form-group">
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  class="form-control"
                />
              </div>

              <div class="form-group">
                <div class="my-4">
                  <input
                    id="email"
                    name="email"
                    type="text"
                    placeholder="Your email"
                    class="form-control"
                  />
                </div>
              </div>

              <div class="form-group">
                <div class="">
                  <textarea
                    class="form-control"
                    id="message"
                    name="message"
                    placeholder="Please write your message here..."
                    rows="5"
                  ></textarea>
                </div>
              </div>

              <div class="form-group my-2">
                <div class="">
                  <button type="submit" class="btn btn-primary ">
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
