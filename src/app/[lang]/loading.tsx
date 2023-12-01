import { PacmanLoader } from "react-spinners";

export default function Loading() {
  return (
    <section className="w-full h-screen flex flex-col justify-center items-center">
      <PacmanLoader color="#00ff40" />
    </section>
  );
}
