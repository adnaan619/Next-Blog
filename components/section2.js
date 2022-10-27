import Image from "next/image";
import Author from "./_child/author";
import fetcher from "../lib/fetcher";
import getPost from "../lib/helper";
import Spinner from "./_child/spinner";
import Error from "./_child/error";

export default function section2() {
  // getPost().then(res => console.log(res))

  const { data, isLoading, isError } = fetcher("api/posts");
  if (isLoading) return <Spinner></Spinner>
  if (isError) return <Error></Error>;

  return (
    <section className="container mx-auto md:px-20 py-10">
      <h1 className="font-bold text-4xl py-12 text-center">Latest Posts</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
        {
          data.map((value, index) => (
          <Post data={value} key={index}></Post>
          ))
        }
      </div>
    </section>
  );
}

function Post({ data }) {
  const { id, title, category, img, published, author } = data;
  return (
    <div className="item">
      <div className="images">
        <a>
          <Image
            src={img || "/"}
            className="rounded"
            width={400}
            height={350}
          />
        </a>
      </div>
      <div className="info">
        <a className="text-orange-500 hover:text-orange-800">
          {category || "unknown"}
        </a>
        <a className="text-gray-500 hover:text-gray-800">
          {published || "Unknown"}
        </a>
      </div>
      <div className="title">
        {/* <Link href={'/'} className="text-xl font-bold text-gray-800 hover: text-gray-600"> */}
        <a>{title || "Title"}</a>
        {/* </Link> */}
      </div>
      <p className="text-gray-500 py-3">
        Even all the powerful Pointing has no control about the branding of the
        product and for the rest of the text please think of something
      </p>
      {author ? <Author></Author> : <></>}
    </div>
  );
}
