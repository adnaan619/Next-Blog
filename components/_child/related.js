import Link    from "next/link";
import Image from "next/image";
import Author from "./author";

export default function related() {
    return (
      <section className="pt-20">
        <h1 className="font-bold text-3xl py-10">Related</h1>

        <div className="flex flex-col gap-10">
          {Post()}
          {Post()}
          {Post()}
          {Post()}
          {Post()}
        </div>
      </section>
    ); 
}

function Post() {
    return (
      <div className="flex gap-5">
        <div className="image flex flex-col justify-start">
          <a>
            <Image
              src={"/images/img1 (2).jpg"}
              className="rounded"
              width={300}
              height={250}
            />
          </a>
        </div>
        <div className="info flex justify-center flex-col">
          <div className="info">
            <a className="text-orange-500 hover:text-orange-800">
              Business, Travel
            </a>
            <a className="text-gray-500 hover:text-gray-800">-July 3, 2022</a>
          </div>
          <div className="title">
            {/* <Link href={'/'} className="text-xl font-bold text-gray-800 hover: text-gray-600"> */}
            <a>
              Your most unhappy customers are your greatest source of learning
            </a>
            {/* </Link> */}
          </div>
          <Author />
        </div>
      </div>
    );
}