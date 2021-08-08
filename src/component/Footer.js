import React from 'react'

const Footer = () => {
    return (
        <div>
            <div className="row">
      <label htmlFor="all">
        <input type="checkbox" name="all" name="all" id="all"></input>
        All
      </label>
      <p>You have 0 task to do</p>
      <button id="delete">Delete</button>
    </div>
        </div>
    )
}

export default Footer;
