import Image    from "next/image";
import Link from "next/link";
import NewsLetter from "./_child/newsletter";
import { ImFacebook, ImTwitter, ImYoutube } from "react-icons/im";

export default function footer() {

    const bg = {
        backgroundImage: "url('/images/footer.png')",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'bottom left'
        
    }


    return (
        <footer className="bg-gray-50" style={bg}>
            <NewsLetter/>
        <div className="container mx-auto flex justify-center py-12">
          <div className="py-5">
            <div className="flex gap-6 justify-center">
              {/* <Link legacyBehavior href={"/"}> */}
                <a>
                  <ImFacebook color="#888888" />
                </a>
              {/* </Link> */}
              {/* <Link legacyBehavior href={"/"}> */}
                <a>
                  <ImTwitter color="#888888" />
                </a>
              {/* </Link> */}
              {/* <Link legacyBehavior href={"/"}> */}
                <a>
                  <ImYoutube color="#888888" />
                </a>
              {/* </Link> */}
            </div>
                    <p className="py-5 text-gray-400">Copyright @2022 All rights reserved | This template is made by EatMe</p>
                    <p className="text-gray-400 text-center">Terms & Conditions</p>
          </div>
        </div>
      </footer>
    );
}