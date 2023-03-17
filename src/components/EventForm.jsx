import React, { useState } from "react";

const EventForm = ({ isEdit }) => {
  const [tickets, setTickets] = useState([
    { title: "", price: 0, quantity: 0 },
  ]);

  const handleServiceChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...tickets];
    list[index][name] = value;
    setTickets(list);
  };

  const handleServiceRemove = (index) => {
    const list = [...tickets];
    list.splice(index, 1);
    setTickets(list);
  };

  const handleServiceAdd = () => {
    setTickets([...tickets, { title: "", price: 0, quantity: 0 }]);
  };

  return (
    <div class="flex items-center justify-center p-12">
      <div class="mx-auto w-full max-w-[550px] bg-white rounded-xl">
        <form class="py-6 px-9">
          <h1 className="text-2xl text-main-color font-medium mb-6">
            Event Information
          </h1>
          <div class="mb-6 pt-4">
            <label class="mb-5 block text-base font-semibold text-[#07074D]">
              Upload Image File
            </label>
            <div class="mb-8">
              <input type="file" name="file" id="file" class="sr-only" />
              <label
                for="file"
                class="relative flex min-h-[200px] items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-12 text-center"
              >
                <div>
                  <span class="mb-2 block text-xl font-semibold text-[#07074D]">
                    Drop files here
                  </span>
                  <span class="mb-2 block text-base font-medium text-[#6B7280]">
                    Or
                  </span>
                  <span class="inline-flex rounded border border-[#e0e0e0] py-2 px-7 text-base font-medium text-[#07074D]">
                    Browse
                  </span>
                </div>
              </label>
            </div>
          </div>
          <div class="mb-5">
            <label class="mb-3 block text-base font-medium text-[#07074D]">
              Event Title
            </label>
            <input
              type="text"
              placeholder="Enter Title"
              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div class="mb-5">
            <label class="mb-3 block text-base font-medium text-[#07074D]">
              Event Description
            </label>
            <input
              type="text"
              placeholder="Enter Description"
              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <h1 className="text-2xl text-main-color font-medium pt-6 mb-6">
            Ticket Information
          </h1>
          {tickets.map((singleService, index) => (
            <div key={index}>
              <div class="flex flex-wrap -mx-3 mb-2 mt-6">
                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label class="mb-3 block text-base font-medium text-[#07074D]">
                    Ticket Title
                  </label>
                  <input
                    name="title"
                    type="text"
                    value={singleService.title}
                    onChange={(e) => handleServiceChange(e, index)}
                    required
                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label class="mb-3 block text-base font-medium text-[#07074D]">
                    Ticket Price
                  </label>
                  <input
                    name="price"
                    type="number"
                    value={singleService.price}
                    onChange={(e) => handleServiceChange(e, index)}
                    required
                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label class="mb-3 block text-base font-medium text-[#07074D]">
                    Ticket Quantity
                  </label>
                  <input
                    name="quantity"
                    type="text"
                    value={singleService.quantity}
                    onChange={(e) => handleServiceChange(e, index)}
                    required
                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
                <div className="flex justify-item-center">
                  {tickets.length !== 1 && (
                    <button
                      type="button"
                      onClick={() => handleServiceRemove(index)}
                      className="bg-gray-300 hover:bg-gray-400 text-white text-sm font-bold py-1 px-3 rounded-full mt-4"
                    >
                      <span className="text-gray-500 hover:text-white">
                        Remove Tickets
                      </span>
                    </button>
                  )}
                </div>
                {tickets.length - 1 === index && tickets.length < 4 && (
                  <button
                    type="button"
                    onClick={handleServiceAdd}
                    className="hover:bg-blue-500 bg-blue-400  text-white font-bold py-2 px-4 rounded-full mt-3 w-full my-4"
                  >
                    <span>Add a Tickets</span>
                  </button>
                )}
              </div>
            </div>
          ))}
          <div class="flex flex-wrap -mx-3 mb-2">
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label class="mb-3 block text-base font-medium text-[#07074D]">
                Event Date
              </label>
              <input
                type="date"
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label class="mb-3 block text-base font-medium text-[#07074D]">
                Event Start Time
              </label>
              <input
                type="time"
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label class="mb-3 block text-base font-medium text-[#07074D]">
                Event End Time
              </label>
              <input
                type="time"
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
          </div>
          <div>
            {isEdit ? (
              <div>
                <button class="mt-4 hover:shadow-form  w-full rounded-md  hover:bg-green-500 bg-green-400 py-3 px-8 text-center text-base font-semibold text-white outline-none">
                  Update Event
                </button>
                <button class="mt-4 hover:shadow-form hover:bg-gray-500 w-full rounded-md bg-gray-400 py-3 px-8 text-center text-base font-semibold text-white outline-none">
                  Delete Event
                </button>
              </div>
            ) : (
              <button class="mt-4 hover:shadow-form hover:bg-green-500 bg-green-400 w-full rounded-md py-3 px-8 text-center text-base font-semibold text-white outline-none">
                Create Event
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default EventForm;
