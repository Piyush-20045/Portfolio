import Visitors from "./Visitors";

export default function Footer() {
  return (
    <div className="py-12 flex flex-col items-center justify-center">
      <Visitors />
      <p className="text-neutral-500 dark:text-neutral-400 text-center text-[14px]">
        Thanks for scrolling! 👋 - Built by <b>Piyush Yadav</b> <br /> &copy;{" "}
        {new Date().getFullYear()}. All rights reserved.
      </p>
    </div>
  );
}
