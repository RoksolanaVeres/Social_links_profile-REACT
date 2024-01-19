import ProfileCardImage from "./ProfileCardImage";
import ProfileCardHeader from "./ProfileCardHeader";
import ProfileCardLocation from "./ProfileCardLocation";
import ProfileCardDescription from "./ProfileCardDescription";
import ProfileCardLinks from "./ProfileCardLinks";

export default function ProfileCard({ children }) {
  return (
    <div
      id="app-container--main"
      className="flex flex-col items-center rounded-3xl bg-offBlack px-4 py-6 lg:p-10"
    >
      {children}
    </div>
  );
}

ProfileCard.Image = ProfileCardImage;
ProfileCard.Header = ProfileCardHeader;
ProfileCard.Location = ProfileCardLocation;
ProfileCard.Description = ProfileCardDescription;
ProfileCard.Links = ProfileCardLinks;
