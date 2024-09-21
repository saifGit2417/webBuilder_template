"use client";
import { FaYoutube, FaInstagram, FaWhatsapp, FaTwitter } from "react-icons/fa";
import { IconType } from "react-icons";
import { UserDataType } from "@/app/constants/dataTypes";
import { useUserData } from "@/app/hooks/useUserData";

type SocialMediaIcons = {
  [key: string]: IconType; // Maps string keys to React component types
};
const socialMediaIcons: SocialMediaIcons = {
  youTube: FaYoutube,
  instagram: FaInstagram,
  whatsapp: FaWhatsapp,
  twitter: FaTwitter,
};
const Socials = () => {
  const { userData } = useUserData() as { userData: UserDataType };;

  return (
    userData?.socialMediaLinks?.length > 0 && (
      <footer className="bg-gray-900 text-gray-300 p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-lg">
            <span>Get in touch with us on social networks</span>
          </div>

          <div className="flex space-x-6">
            {userData?.socialMediaLinks?.map(
              (data: { platformName: string; link: string }) => {
                const Icon = socialMediaIcons[data.platformName];
                return (
                  <>
                    <a
                      href={data?.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      key={data?.platformName}
                    >
                      {Icon && <Icon className="h-6 w-6" />}
                    </a>
                  </>
                );
              }
            )}
          </div>
        </div>
      </footer>
    )
  );
};

export default Socials;
