"use client";

export default function TasksTable({ tasks }) {
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
                    Title
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Project ID
                  </th>
                  <th scope="col" className="px-3 py-4">
                    Status
                  </th>
                  <th scope="col" className="px-3 py-4">
                    Assigned To
                  </th>
                  <th scope="col" className="px-3 py-4">
                    Start Date
                  </th>
                  <th scope="col" className="px-3 py-4">
                    End Date
                  </th>
                  <th scope="col" className="px-3 py-4">
                    Due Date
                  </th>
                </tr>
              </thead>
              <tbody>
                {tasks.map((task) => (
                  <tr key={task.id} className="border-b dark:border-neutral-500">
                    <td className="whitespace-nowrap px-2 py-4 font-medium">
                      {task.id}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">{task.title}</td>
                    <td className="whitespace-nowrap px-6 py-4">{task.project_id}</td>
                    <td className="whitespace-nowrap px-3 py-4">
                      {task.status}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">{task.assigned_to}</td>
                    <td className="whitespace-nowrap px-6 py-4">{task.start_date}</td>
                    <td className="whitespace-nowrap px-6 py-4">{task.end_date}</td>
                    <td className="whitespace-nowrap px-6 py-4">{task.due_date}</td>
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
