import React, { useState } from 'react';

const EventForm = ({ isEdit }) => {
  const [tickets, setTickets] = useState([
    { title: '', price: 0, quantity: 0 },
  ]);

  const handleTicketChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...tickets];
    list[index][name] = value;
    setTickets(list);
  };

  const handleTicketRemove = (index) => {
    const list = [...tickets];
    list.splice(index, 1);
    setTickets(list);
  };

  const handleTicketAdd = () => {
    setTickets([...tickets, { title: '', price: 0, quantity: 0 }]);
  };

  return (
    <div class='flex items-center justify-center p-12'>
      <div class='mx-auto w-full max-w-[550px] bg-white rounded-xl'>
        <form class='py-6 px-9'>
          <h1 className='text-2xl text-main-color font-medium mb-6'>
            Event Information
          </h1>

          <div className='mb-5'>
            <label class='mb-3 block text-base font-medium text-[#07074D]'>
              Event Upload File
            </label>
            <input
              class='relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 dark:border-neutral-600 bg-clip-padding py-[0.32rem] px-3 text-base font-normal text-neutral-700 dark:text-neutral-200 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 dark:file:bg-neutral-700 file:px-3 file:py-[0.32rem] file:text-neutral-700 dark:file:text-neutral-100 file:transition file:duration-150 file:ease-in-out file:[margin-inline-end:0.75rem] file:[border-inline-end-width:1px] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-[0_0_0_1px] focus:shadow-primary focus:outline-none'
              type='file'
            />
          </div>
          <div class='mb-5'>
            <label class='mb-3 block text-base font-medium text-[#07074D]'>
              Event Title
            </label>
            <input
              type='text'
              placeholder='Enter Title'
              class='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
            />
          </div>
          <div class='mb-5'>
            <label class='mb-3 block text-base font-medium text-[#07074D]'>
              Event Description
            </label>
            <input
              type='text'
              placeholder='Enter Description'
              class='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
            />
          </div>
          <h1 className='text-2xl text-main-color font-medium pt-6 mb-6'>
            Ticket Information
          </h1>
          {tickets.map((singleService, index) => (
            <div key={index}>
              <div class='flex flex-wrap -mx-3 mb-2 mt-6'>
                <div class='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
                  <label class='mb-3 block text-base font-medium text-[#07074D]'>
                    Ticket Title
                  </label>
                  <input
                    name='title'
                    type='text'
                    value={singleService.title}
                    onChange={(e) => handleTicketChange(e, index)}
                    required
                    class='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
                  />
                </div>
                <div class='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
                  <label class='mb-3 block text-base font-medium text-[#07074D]'>
                    Ticket Price
                  </label>
                  <input
                    name='price'
                    type='number'
                    value={singleService.price}
                    onChange={(e) => handleTicketChange(e, index)}
                    required
                    class='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
                  />
                </div>
                <div class='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
                  <label class='mb-3 block text-base font-medium text-[#07074D]'>
                    Ticket Quantity
                  </label>
                  <input
                    name='quantity'
                    type='text'
                    value={singleService.quantity}
                    onChange={(e) => handleTicketChange(e, index)}
                    required
                    class='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
                  />
                </div>
                <div className='flex justify-item-center'>
                  {tickets.length !== 1 && (
                    <button
                      type='button'
                      onClick={() => handleTicketRemove(index)}
                      className='bg-gray-300 hover:bg-gray-400 text-white text-sm font-bold py-1 px-3 rounded-full mt-4'
                    >
                      <span className='text-gray-500 hover:text-white'>
                        Remove Tickets
                      </span>
                    </button>
                  )}
                </div>
                {tickets.length - 1 === index && tickets.length < 4 && (
                  <button
                    type='button'
                    onClick={handleTicketAdd}
                    className='hover:bg-blue-500 bg-blue-400  text-white font-bold py-2 px-4 rounded-full mt-3 w-full my-4'
                  >
                    <span>Add a Tickets</span>
                  </button>
                )}
              </div>
            </div>
          ))}
          <div class='flex flex-wrap -mx-3 mb-2'>
            <div class='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
              <label class='mb-3 block text-base font-medium text-[#07074D]'>
                Event Date
              </label>
              <input
                type='date'
                class='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
              />
            </div>
            <div class='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
              <label class='mb-3 block text-base font-medium text-[#07074D]'>
                Event Start Time
              </label>
              <input
                type='time'
                class='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
              />
            </div>
            <div class='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
              <label class='mb-3 block text-base font-medium text-[#07074D]'>
                Event End Time
              </label>
              <input
                type='time'
                class='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
              />
            </div>
          </div>
          <div>
            {isEdit ? (
              <div>
                <button class='mt-4 hover:shadow-form  w-full rounded-md  hover:bg-green-500 bg-green-400 py-3 px-8 text-center text-base font-semibold text-white outline-none'>
                  Update Event
                </button>
                <button class='mt-4 hover:shadow-form hover:bg-gray-500 w-full rounded-md bg-gray-400 py-3 px-8 text-center text-base font-semibold text-white outline-none'>
                  Delete Event
                </button>
              </div>
            ) : (
              <button class='mt-4 hover:shadow-form hover:bg-green-500 bg-green-400 w-full rounded-md py-3 px-8 text-center text-base font-semibold text-white outline-none'>
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
