import React from "react";
//
let Jumbotron = () => {
  return (
    <div>
      <div class="px-5 py-5 mb-4 bg-transparent rounded-3">
        <div class="container-fluid p-5 bg-light border rounded-3">
          {/* <img class="background" src="https://cdn.diariodeavisos.com/wp-content/uploads/2022/06/RS686041_fp-romeria-La-Orotava-10-scr-1024x683.jpg"/> */}
          <h1 class="display-5 fw-bold">PALICADA COCHINA</h1>
          <p class="col-md-12 fs-4"> {/* col-md-8 */}
            Join our Discord, and be part of an amazing community of waifus, trolls, ragers and sweatymonkeys, who enjoy spending time with each other while also, yelling at each other, all done gently and with the warmly love of canarian lexicon.
          </p>
          <button class="btn btn-warning btn-lg" type="button">
            Join Now!
          </button>
        </div>
      </div>
    </div>
  );
};
export default Jumbotron;
