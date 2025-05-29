"use client";
// test
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [count, setCount] = useState(0);
  const router = useRouter();
  const increment = () => setCount(count + 1);
  const decrement = () => setCount((count) => Math.max(0, count - 1));
  const reset = () => setCount(0);
  return (
    <div className="flex items-center justify-center h-screen ">
      <div className="flex flex-col items-center gap-y-6">
        <h1 className="text-3xl font-bold text-white mb-6 text-center">
          How many girlfriends <br /> do you think you will have 😏
        </h1>

        <div className="flex gap-x-4 items-center">
          <button className="btn btn-outline btn-warning" onClick={decrement}>
            -
          </button>
          <span className="text-white text-xl">{count}</span>
          <button className="btn btn-outline btn-error" onClick={increment}>
            +
          </button>
        </div>
        <div className="mt-6 flex justify-center w-full">
          {/* Open the modal using document.getElementById('ID').showModal() method */}
          <button
            className="btn btn-info"
            onClick={() => document.getElementById("my_modal_5").showModal()}
          >
            Check For Real
          </button>
          <dialog
            id="my_modal_5"
            className="modal modal-bottom sm:modal-middle"
          >
            <div className="modal-box">
              <h3 className="font-bold text-lg">Hello!</h3>
              <p className="py-4">
                The results may be heartbreaking for you 😢. Are you sure you want to proceed 
              </p>
              <div className="modal-action">
                <form method="dialog" className="flex gap-2">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn btn-success btn-soft">Close</button>
                  <button
                    className="btn btn-error btn-soft"
                    type="button"
                   onClick={() => router.push("/results")}
                  >
                    Show Anyway😨
                  </button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </div>
    </div>
  );
}
