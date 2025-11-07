import React from "react";

function Card(props) {
  return (
    <div className="w-64 bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200">
      {/* Extra Offer */}
      <div className="bg-black text-green-400 text-xs font-semibold px-2 py-1">
        {props.object.offer}
      </div>

      {/* Product Image */}
      <img
        src={props.object.image}
        alt="boAt Nirvana Zenith Pro"
        className="w-full h-44 object-cover"
      />

      {/* Playback Info */}
      <div className="flex justify-between items-center bg-yellow-400 text-sm font-semibold px-3 py-1">
        <span>{props.object.playback}</span>
        <div className="flex items-center bg-yellow-500 px-2 py-0.5 rounded-md text-white text-xs">
          {props.object.rating}
        </div>
      </div>

      {/* Product Info */}
      <div className="p-3">
        <h3 className="text-gray-900 font-semibold text-sm">
          {props.object.title}
        </h3>

        <div className="flex items-center justify-between mt-2">
          <div>
            <p className="text-lg font-bold">{props.object.price}</p>
            <p className="text-gray-400 text-sm line-through">{props.object.oldPrice}</p>
            <p className="text-green-600 text-sm font-medium">{props.object.discount}</p>
          </div>

          <button className="bg-gray-200 rounded-full px-3 py-1 font-semibold text-gray-800">
            +1
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;