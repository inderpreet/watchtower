"use client";

import React, { useContext, useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import TasksTable from "../components/TasksTable";

const get_tasks = () => {
  return [
    {
      id: 1,
      title: "Task 1",
      project_id: 1,
      status: "not-started",
      assigned_to: "none",
      start_date: "",
      end_date: "",
      due_date: "",
    },
    {
      id: 2,
      title: "Task 2",
      project_id: 1,
      status: "not-started",
      assigned_to: "none",
      start_date: "",
      end_date: "",
      due_date: "",
    },
    {
      id: 3,
      title: "Task 3",
      project_id: 1,
      status: "not-started",
      assigned_to: "none",
      start_date: "",
      end_date: "",
      due_date: "",
    },
    {
      id: 4,
      title: "Task 4",
      project_id: 1,
      status: "not-started",
      assigned_to: "none",
      start_date: "",
      end_date: "",
      due_date: "",
    },
    {
      id: 5,
      title: "Task 5",
      project_id: 1,
      status: "not-started",
      assigned_to: "none",
      start_date: "",
      end_date: "",
      due_date: "",
    },
  ];
};

export default function Tasks() {
  return (
    <div>
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Tasks
          </h1>
        </div>
      </header>

      <main className="min-h-screen">
        <div className="px-4 py-6">
          TODO Add Filter Options like filter by user and status and Project
        </div>
        <div className="mx-8 px-6 bg-slate-200 rounded-lg">
          <div className="font-bold pt-4 text-center">
            Tasks Table
          </div>
          <TasksTable tasks={get_tasks()} />
        </div>
      </main>

      <Footer />
    </div>
  );
}
