import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
export default function LogIn() {
  return (
    <div className="bg-gray-900 w-screen h-screen ">
      <Navbar />

      <form class="max-w-sm mx-auto mt-32">
        <div class="mb-5">
          <label
            for="email"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="name@flowbite.com"
            required
          />
        </div>
        <div class="mb-5">
          <label
            for="password"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your password
          </label>
          <input
            type="password"
            id="password"
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
          />
        </div>

        <button
          type="submit"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Log In
        </button>
        <div class="flex items-start mb-5">
          <span
            for="terms"
            class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            if you do not have an account please{" "}
            <Link to="/register">
              <a
                href="#"
                class="text-blue-600 hover:underline dark:text-blue-500"
              >
                Register
              </a>
            </Link>
          </span>
        </div>
      </form>
    </div>
  );
}
