'use client';

const cards = [
  {
    title: "Explore Saudi Arabia",
    image: "/membersSwipers.png",
  },
  {
    title: "Made To Change NEOM",
    image: "/membersSwipers1.png",
  },
];

export default function CardSliderSection() {
  return (
    <div className="flex flex-col md:flex-row gap-4 justify-center px-4 md:px-0">
      {cards.map((card, idx) => (
        <div
          key={idx}
          className="
            w-full 
            max-w-[629px] 
            h-[400px] 
            md:h-[531px] 
            bg-cover bg-center rounded-xl flex items-end
          "
          style={{ backgroundImage: `url(${card.image})` }}
        >
          <div className="w-full flex justify-between items-center bg-[#ffffff4f] text-white p-4 md:p-5">
            <p className="text-[24px] md:text-[36px] text-white font-semibold">
              {card.title}
            </p>
            <button
              className="
                text-white rounded-full border-white border 
                flex items-center justify-center 
                text-[24px] md:text-[36px] 
                w-[48px] md:w-[72px] h-[48px] md:h-[72px]"
            >
              →
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
