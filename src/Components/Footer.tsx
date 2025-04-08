import {
  TwitterIcon,
  InstagramIcon,
  YoutubeIcon,
  LinkedinIcon,
} from "lucide-react";
import useNavigateWithScroll from "../CustomHooks/customHooks";
const Footer = () => {
  const navigateWithScroll = useNavigateWithScroll();
  return (
    <footer className="bg-white/80 py-12 w-full">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-green-500">BT</h2>
            <p className="text-gray-600 text-sm">
              Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-blue-600">
                <TwitterIcon size={24} />
              </a>
              <a href="#" className="text-blue-500">
                <InstagramIcon size={24} />
              </a>
              <a href="#" className="text-blue-600">
                <LinkedinIcon size={24} />
              </a>
              <a href="#" className="text-red-600">
                <YoutubeIcon size={24} />
              </a>
            </div>
          </div>

          {/* Service */}
          <div>
            <h3 className="font-medium text-gray-900 mb-4">Service</h3>
            <ul className="space-y-3">
              <li>
                <a href="#PastProject" onClick={()=>navigateWithScroll("/")} className="text-gray-600 hover:text-gray-900">
                  Past Project
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-medium text-gray-900 mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <a onClick={()=>{navigateWithScroll("/about")}} className="text-gray-600 hover:text-gray-900">
                  About
                </a>
              </li>
              <li>
                <a onClick={()=>{navigateWithScroll("/contact")}} className="text-gray-600 hover:text-gray-900">
                  Contact us
                </a>
              </li>
              <li>
                <a onClick={()=>{navigateWithScroll("/blogs")}} className="text-gray-600 hover:text-gray-900">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Support & Contact */}
          <div>
            <h3 className="font-medium text-gray-900 mb-4">Support</h3>
            <ul className="space-y-3 mb-6">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Help Centre
                </a>
              </li>
            </ul>

            <h3 className="font-medium text-gray-900 mb-4">Contacts us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <a
                  href="mailto:contact@company.com"
                  className="text-gray-600 hover:text-gray-900"
                >
                  contact@company.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span className="text-gray-600">(414) 687 - 5892</span>
              </li>
              <li className="flex items-start gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-500 mt-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-600">
                  794 Mcallister St
                  <br />
                  San Francisco, 94102
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section with rights */}
        <div className="pt-8 mt-8 border-t border-gray-200">
          <p className="text-gray-600 text-sm text-right">
            All Rights Reserved |{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Terms and Conditions
            </a>{" "}
            |{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
