import HeadLogo from "./headLogo";

interface InfoItem {
  label: string;
  value?: string | number;
}

interface SectionData {
  title: string;
  items: InfoItem[];
}

const aboutData: SectionData = {
  title: "About",
  items: [
    { label: "About Us", value: 2 },
    { label: "Features", value: 5 },
    { label: "News & Blogs", value: 12 },
  ],
};

const contactData: SectionData = {
  title: "Contact",
  items: [
    { label: "Instagram" },
    { label: "Twitter" },
    { label: "Facebook", value: 3 },
  ],
};

const supportData: SectionData = {
  title: "Support",
  items: [
    { label: "FAQs" },
    { label: "Support Centre" },
    { label: "Feedback", value: 3 },
  ],
};

function Footer() {
  const renderSection = (data: SectionData) => (
    <div className="max-sm:py-6">
      <h1 className="pb-4 text-xl font-semibold text-white">{data.title}</h1>
      <ul className="space-y-2 text-base text-white">
        {data.items.map((item, index) => (
          <li key={`${item.label}-${index}`}>
            {item.label}
            {item.value !== undefined ? `: ${item.value}` : ""}
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <footer className="bg-[#222222] w-full py-12 flex justify-center">
      <div className="max-w-[1440px] w-full flex max-md:flex max-md:flex-col justify-center items-center">
        <HeadLogo />
        <div className="flex flex-col sm:flex-row gap-10 sm:gap-20">
          {renderSection(aboutData)}
          {renderSection(contactData)}
          {renderSection(supportData)}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
