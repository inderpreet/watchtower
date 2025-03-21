"use client";
import { useState } from "react";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const Menus = [
    { title: "Overview", src: "Overview", url: "/" },
    { title: "Schedule", src: "Calendar" },
    { title: "Tasks", src: "Debt", url: "/tasks" },
    // { title: "Tasks", src: "Transactions" },
    { title: "Parts", src: "Card", gap: true, url: "/parts" },
    { title: "Stock", src: "Debt" },
    { title: "Reports", src: "Legal", url: "/reports" },
    { title: "Notifications ", src: "Notifications", gap: true },
    { title: "Settings", src: "Settings" },
  ];

  return (
    <div className="flex">
      <div
        className={` ${
          open ? "w-64" : "w-20 "
        } bg-gray-800 h-screen p-5 pt-0 relative duration-300`}
      >
        <img
          src="/assets/control.png"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            src="antech.png"
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            } ${open ? "h-12" : "h-8"}`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Watchtower
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <a href={Menu.url == null ? "#" : Menu.url} key={index}>
              <li
                key={index}
                className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                  index === 0 && "bg-light-white"
                } `}
              >
                <img src={`/assets/${Menu.src}.svg`} />
                <span
                  className={`${!open && "hidden"} origin-left duration-200`}
                >
                  {Menu.title}
                </span>
              </li>
            </a>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
