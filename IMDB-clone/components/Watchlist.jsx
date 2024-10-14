import React from "react";

function Watchlist() {
  return (
    <>
      <div className="flex justify-center my-6">
        <input
          type="text"
          placeholder="Search Movies"
          className="h-[2rem] w-[25rem] bg-gray-500/20 outline-none px-6"
        />
      </div>

      <div className="border border-gray-300 m-8">
        <table className="w-full text-center">
          <thead>
            <tr>
              <th>Name</th>
              <th>Rating</th>
              <th>Popularity</th>
              <th>Genre</th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-b-2">
              
              <td className="flex items-center px-4" >
                <img className="w-[15vh] items-center "
                  src="https://m.media-amazon.com/images/I/91GONzCyOcL.jpg"
                  alt=""
                />
                <div className="mx-6">Devdas</div>
              </td>
              <td>8.5/10</td>
              <td>584663</td>
              <td>Romance</td>
              <td className="">DELETE</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Watchlist;
