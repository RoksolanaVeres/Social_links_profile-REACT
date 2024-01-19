import ProfileCard from "./components/ProfileCard";
import { profileData } from "./profileData";
import { SunIcon, MoonIcon } from "./components/Icons";

export default function App() {
  return (
    <div
      id="app-layout"
      className="flex min-h-dvh items-center justify-center bg-black px-6 font-inter "
    >
      <div className="flex w-[390px] flex-col gap-6">
        <div className="self-end text-white">
          <SunIcon />
          {/* <MoonIcon /> */}
        </div>
        <ProfileCard>
          <ProfileCard.Image src={profileData.picture} />
          <ProfileCard.Header>{profileData.name}</ProfileCard.Header>
          <ProfileCard.Location>{profileData.location}</ProfileCard.Location>
          <ProfileCard.Description>
            "{profileData.description}"
          </ProfileCard.Description>
          <ProfileCard.Links />
        </ProfileCard>
      </div>
    </div>
  );
}
