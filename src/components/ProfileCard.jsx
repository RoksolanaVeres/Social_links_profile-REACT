import { profileData } from "../profileData";

export default function ProfileCard({ children }) {
  return (
    <div
      id="app-container--main"
      className="flex flex-col items-center rounded-3xl bg-slate-100 px-4 py-6 drop-shadow-2xl transition-all duration-300 ease-linear dark:bg-offBlack lg:p-10"
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

function ProfileCardImage({ ...props }) {
  return (
    <img
      {...props}
      alt="profile picture"
      className="mb-6 size-[96px] rounded-full"
    />
  );
}

function ProfileCardHeader({ children }) {
  return (
    <h1 className="pb-1 text-lg font-semibold text-slate-800 dark:text-white lg:pb-4 lg:text-xl">
      {children}
    </h1>
  );
}

function ProfileCardLocation({ children }) {
  return (
    <h2 className="pb-7 text-sm font-semibold text-lime-600 dark:text-green">
      {children}
    </h2>
  );
}

function ProfileCardDescription({ children }) {
  return (
    <p className="text-sm font-bold text-slate-900 dark:font-thin dark:text-white">
      {children}
    </p>
  );
}

function ProfileCardLinks() {
  return (
    <ul className="grid w-full gap-4 pt-6 text-center text-slate-800 *:rounded-lg *:bg-slate-200 *:py-4 dark:text-white dark:*:bg-darkGrey">
      {profileData.socialNetworks.map((network) => {
        return (
          <a
            key={network.networkName}
            href={network.link}
            target="_blank"
            className="shadow-xl duration-300 ease-linear hover:bg-green hover:font-bold hover:text-darkGrey hover:transition-all dark:hover:bg-green"
          >
            {network.networkName}
          </a>
        );
      })}
    </ul>
  );
}
