import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-[#121212] w-full h-screen">
      <div className="flex p-7  justify-between items-center">
        <h1 className="text-white font-bold text-4xl">Deloitte</h1>

        <div className="text-white ">
          <ul className="flex space-x-4">
            <Link href="/">
              <li>Home</li>
            </Link>
            <Link href="">
              <li>About</li>
            </Link>
            <Link href="">
              <li>Contact</li>
            </Link>
          </ul>
        </div>

        <div className="text-white space-x-4">
          <button>SignIn</button>
          <button>LogOut</button>
        </div>
      </div>

      <div className="mt-3">
        <iframe
          className="mx-auto rounded"
          title="TDR - Dashboard solution"
          width="1140"
          height="541.25"
          src="https://app.powerbi.com/reportEmbed?reportId=4c36bf5c-e487-4915-94a9-46b9d5171efa&autoAuth=true&ctid=36da45f1-dd2c-4d1f-af13-5abe46b99921"
          frameborder="0"
          allowFullScreen="true"
        ></iframe>
      </div>
    </main>
  );
}
