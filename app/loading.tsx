import { PacmanLoader } from "react-spinners";

export default function Loading() {
  return (
    <main className="w-full h-screen flex flex-col justify-center items-center">
      <PacmanLoader className="text-primary" />
    </main>
  );
}
