const stats = [
  { id: 1, name: "Total Parts", value: "1549" },
  { id: 2, name: "Total Bins", value: "169" },
  { id: 3, name: "Total BOMs", value: "13" },
  { id: 4, name: "Total Costs", value: "$29,854.12"}
];

export default function Stats() {
  return (
    <div className="bg-white py-3 sm:py-4">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-2 grid-rows-1 grid-flow-row gap-x-8 gap-y-8 text-center lg:grid-rows-1">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="mx-auto flex max-w-xs flex-col gap-y-2"
            >
              <dt className="text-base/7 text-gray-600">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
