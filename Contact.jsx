import React from "react";

const Contact = () => {
  return (
    <>
      <div className="container">
        <form>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Your Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Name Here.."
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Your Favourite Cuisine
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Favourite Cuisine Here.."
              id="exampleInputPassword1"
            />
          </div>
          <div class="form-floating mt-2 mb-3">
            <textarea
              class="form-control"
              placeholder="Leave a Feedback here"
              id="floatingTextarea"
            ></textarea>
            <label for="floatingTextarea">Feedback</label>
          </div>
          <button type="submit" className="btn btn-success mt-5">
            Submit The Feedback
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;
