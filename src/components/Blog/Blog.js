import React from "react";

const Blog = () => {
  return (
    <div className="mt-5 container">
      <h2>I am blog</h2>
      <div className="py-4">
        <h4 className="text-primary">
          {" "}
          Difference between authorization and authentication
        </h4>
        <p>
          In case of person, authentication Means who is the person ? it's a
          process of verifying who is the person is ?
        </p>
        <p>
          In case of person, Authorization Means what are the accesses of that
          person ? is the person is able to access some sort of services or not
          ?
        </p>
      </div>

      <div className="py-4">
        <h4 className="text-primary">
          Why are you using firebase? What other options do you have to
          implement authentication?
        </h4>
        <p>
          I am using firebase to authenticate my website users and host my
          website in the internet
        </p>

        <p>
          There are some alternatives to get authentication except firebase.
          they are Back4app, parse, Aws amplify , Backendless etc. I will use
          one of them.
        </p>
      </div>
      <div className="py-4">
        <h4 className="text-primary">
          What other services does firebase provide other than authentication
        </h4>
        <p>
          Except authentication, firebase provide database, storage, hosting and
          machine learning related services{" "}
        </p>
      </div>
    </div>
  );
};

export default Blog;
