import { client } from "@/sanity/lib/client";
import { SERVICES_AND_FACILITIES_QUERY } from "@/sanity/lib/queries";
import { SERVICES_AND_FACILITIES_QUERYResult } from "@/sanity/types";

export async function generateMetadata() {
  return { title: "Services we Providing" };
}

export default async function page() {
  const data: SERVICES_AND_FACILITIES_QUERYResult = await client.fetch(
    SERVICES_AND_FACILITIES_QUERY
  );

  return (
    <section className="w-full min-h-[50dvh] space-y-14">
      <h1 className="mb-4 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        {data?.title}
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
            {data?.facilities ? (
              data?.facilities?.map((service, index) => (
                <tr className="hover:bg-muted" key={index}>
                  <td>{service.facility}</td>
                  <td>{service.description}</td>
                </tr>
              ))
            ) : (
              <p>...Loading</p>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}
