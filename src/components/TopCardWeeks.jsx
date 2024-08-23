import React from "react";

const Topweeks = [
  {
    name: 'Leslie Alexander',
    Discription: ' Lorem ipsum dolor',
    Cost: '$60',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Leslie Alexander',
    Discription: ' Lorem ipsum dolor',
    Cost: '$60',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Leslie Alexander',
    Discription: ' Lorem ipsum dolor',
    Cost: '$60',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },


]


const TopCardWeeks = () => {
  return (
    <>
    {Topweeks.map((Topweek)=>(
      <div class="relative flex w-80 flex-col rounded-xl  bg-clip-border text-gray-700 ">
      <img
            className="w-full rounded-xl h-4/6"
            src="https://i.pinimg.com/736x/86/ed/58/86ed58c5c09352dc424e7f23c41f48f5.jpg"
            alt="Sunset over Dolomites"
          />
        <div class="relative mx-4 -mt-24 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
          <div class="p-8">
            <h5 class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              {Topweek.name}
            </h5>
            <h5 class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              {Topweek.Discription}
            </h5>
            <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
             {Topweek.Cost}
            </p>
          </div>
        </div>
      </div>
    ))}
    </>
  );
};

export default TopCardWeeks;
