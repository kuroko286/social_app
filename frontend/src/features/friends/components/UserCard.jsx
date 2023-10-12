import { Button } from "@/components/Element/Button";
import { Image } from "@/components/Element/Image";

function UserCard({
  user,
  action,
  onClick,
  onRemove,
  error,
  loading,
  ...props
}) {
  const { picture, first_name, last_name } = user;
  return (
    <div className="w-full rounded-xl border-2 border-black overflow-hidden">
      <Image src={picture} alt={first_name} />
      <div className="p-3 ">
        <p className="font-semibold text-lg">{first_name + " " + last_name}</p>
        <div className="mt-3">
          <Button
            className={"bg-blue-500 text-white w-full text-center"}
            onClick={onClick}
            loading={loading}
          >
            {action}
          </Button>
          <Button
            className={"bg-gray-500 text-white w-full text-center mt-3"}
            onClick={onRemove}
          >
            Remove
          </Button>
        </div>
      </div>
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
}

export default UserCard;
