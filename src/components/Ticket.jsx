import React, { useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import axios from "axios";
export default function Ticket({
  eventId,
  dueDate,
  place,
  timeInterval,
  title,
  imageUrl,
  quantity,
  price,
  isOwner,
  id,
}) {
  const [ticketQty, setTicketQty] = useState(1);
  const increaseTicketQty = () => {
    setTicketQty(ticketQty + 1);
  };
  const decreaseTicketQty = () => {
    if (ticketQty === 1) {
      return;
    }
    setTicketQty(ticketQty - 1);
  };

  const buyTicket = () => {
    axios
      .post(
        "http://localhost:3000/ticket",
        {
          event_id: eventId,
          ticket_id: id,
          quantity: ticketQty,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt_token")}`,
          },
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    console.log("ticketId: ", id);
    console.log("eventId: ", eventId);
    console.log("quantity: ", ticketQty);
  };
  return (
    <div className="bg-white w-full text-black text-xs my-3">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full justify-between">
        <div className="flex flex-wrap p-2">
          <div className="flex flex-col justify-center items-center m-2">
            <h1 className="border-t border-b text-gray-900  py-2 flex items-center justify-around text-base font-bold mb-6 md:mb-12 lg:mb-2 xl:mb-4">
              {title}
            </h1>
            <div className="w-full text-left mt-2">
              <p>{place}</p>
              <p>{dueDate}</p>
              <p>{timeInterval}</p>
            </div>
          </div>
          {isOwner && (
            <div className="m-auto">
              <QRCodeSVG value={id} />
            </div>
          )}
        </div>
        <div className="flex justify-center text-gray-900 h-48 font-bold">
          <div
            className={`flex flex-col w-full py-1 h-full justify-around items-center`}
          >
            <img
              src={imageUrl}
              alt="ticket"
              className="w-full h-full object-cover rounded -z-0"
            />
            {isOwner ? (
              <>
                <div className="h-full w-full relative ">
                  <p className="absolute right-4 -top-10 text-white text-xl font-light shadow-md z-30">
                    #{id}
                  </p>
                </div>
              </>
            ) : (
              <div className="h-full w-full relative">
                <p className="absolute right-8 -top-20 text-base shadow-md z-20 ">
                  Avalialble : {quantity}
                </p>
                <div className="flex items-center justify-between absolute bottom-1  left-2 h-5 w-16 text-black bg-white text-lg px-2">
                  <button onClick={decreaseTicketQty}>-</button>
                  <p className="text-md font-light">{ticketQty}</p>
                  <button onClick={increaseTicketQty}>+</button>
                </div>
                <button
                  className="absolute right-4 bottom-2 bg-fouth-color p-1 rounded hover:bg-second-color"
                  onClick={buyTicket}
                >
                  <a
                    href="/"
                    className="flex text-base px-6 py-2 leading-none text-white mt-0"
                  >
                    <div className="ml-2 text-sm flex items-baseline space-x-2">
                      <span className="uppercase">Buy</span>
                      {/* <img src="/eth-currency.svg" className="w-4 h-4" /> */}
                      <span className=" text-gray-900 text-sm font-bold">
                        {price}
                      </span>
                    </div>
                  </a>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
