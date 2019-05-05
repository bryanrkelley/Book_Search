import React from "react";

function Header() {
  return (
    <div className="row">
    <div className="col-sm-1"></div>

    <div className="col-sm-10">
        <div className="jumbotron">
            <h1 className="display-4">React Google Book Search</h1>


            <h2>
                Search for your favorite book and save it to a list to reference later!
            </h2>

            <br />

            <a className="btn btn-primary btn-lg" href="https://bryanrkelley.github.io/Basic-Portfolio/" role="button"
                // eslint-disable-next-line react/jsx-no-target-blank
                target="_blank">Portfolio Main Page</a>
        </div>
    </div>

    <div className="col-sm-1"></div>
</div>
  );
}

export default Header;
