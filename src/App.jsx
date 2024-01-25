import ProfileCard from "./components/ProfileCard";
import ThemeSwitcher from "./components/ThemeSwitcher";
import { profileData } from "./profileData";

export default function App() {
  return (
    <>
      <div
        id="app-layout"
        className="flex min-h-dvh items-center justify-center bg-slate-100 px-6 transition-all duration-300 ease-linear dark:bg-black"
      >
        <div className="flex w-[390px] flex-col gap-6">
          <ThemeSwitcher />
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
    </>
  );
}
