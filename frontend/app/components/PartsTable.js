"use client";

export default function PartsTable({ parts }) {
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-left text-sm font-light">
              <thead className="border-b font-medium dark:border-neutral-500">
                <tr>
                  <th scope="col" className="px-2 py-4">
                    ID
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Part Name
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Description
                  </th>
                  <th scope="col" className="px-3 py-4">
                    Price
                  </th>
                </tr>
              </thead>
              <tbody>
                {parts.map((part) => (
                  <tr key={part.id} className="border-b dark:border-neutral-500">
                    <td className="whitespace-nowrap px-2 py-4 font-medium">
                      {part.id}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">Res 10k</td>
                    <td className="whitespace-nowrap px-6 py-4">{part.name}</td>
                    <td className="whitespace-nowrap px-3 py-4">
                      {part.price}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4">EDIT</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
