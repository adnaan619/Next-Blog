import Format from "../../layout/format";
import Author from "../../components/_child/author";
import Image from "next/image";
import Related from "../../components/_child/related";


export default function page() {
  return (
    <Format>
      <section className="container mx-auto md:px-2 py-16 w-1/2">
        <div className="flex justify-center">
          <Author></Author>
        </div>

        <div className="post py-10">
          <h1 className="font-bold text-4xl text-center pb-5">
            We aim to have someone pick up your food as soon as it is ready.When
            a courier arrives at your restaurant will depend on your average
            prep times, size of the order, time of day, traffic and patterns
            from past deliveries.
          </h1>
          <p className="text-gray-500 text-xl text-center">
            Let us know how long it usually takes to prepare an order, and we
            will use this information to improve pickup accuracy.
          </p>
          <div className="py-10">
            <Image src={"/images/img1 (2).jpg"} width={900} height={600} />
          </div>

          <div className="content text-gray-600 text-lg flex flex-col gap-4">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularized in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularized in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
              </div>
              <Related></Related>
      </section>
    </Format>
  );
}
