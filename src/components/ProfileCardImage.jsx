export default function ProfileCardImage({ ...props }) {
  return (
    <img
      {...props}
      alt="profile picture"
      className="mb-6 size-[96px] rounded-full"
    />
  );
}
