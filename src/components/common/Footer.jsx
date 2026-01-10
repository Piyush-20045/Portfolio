export default function Footer() {
  return (
    <div className="py-16 flex flex-col items-center justify-center">
      <p className="text-neutral-600 text-center text-sm">
        Thanks for scrolling! 👋 - Built by <b>Piyush Yadav</b> <br /> &copy;{" "}
        {new Date().getFullYear()}. All rights reserved.
      </p>
    </div>
  );
}
