const ServicesAndFacilities = [
  {
    Title: "Education",
    ImageUrl: "/Icons/BookText.svg",
    Description: "Nursery to 10th class English Medium School.",
  },
  {
    Title: "Food",
    ImageUrl: "/Icons/IceCreamBowl.svg",
    Description: "Providing daily food.",
  },
  {
    Title: "Cloths",
    ImageUrl: "/Icons/Shirt.svg",
    Description: "Provide annually two suit (i.e. school uniform)",
  },
  {
    Title: "Shelter",
    ImageUrl: "/Icons/School.svg",
    Description: "Accommodation twenty four hours in hostel",
  },
  {
    Title: "Islamic Teaching",
    ImageUrl: "/Icons/MoonStar.svg",
    Description: "Hifz & Tajweed, Islamic teachings.",
  },
];

export async function generateMetadata() {
  return { title: "Services we Providing" };
}

const Page = () => {
  return (
    <section className="w-full min-h-[50dvh] space-y-14">
      <h1 className="mb-4 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Services & Facilities we Providing
      </h1>
      <div className="w-full prose prose-lg">
        <table>
          <thead>
            <tr>
              <th>Facility</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {ServicesAndFacilities.map((service, index) => (
              <tr className="hover:bg-muted" key={index}>
                <td>{service.Title}</td>
                <td>{service.Description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Page;
