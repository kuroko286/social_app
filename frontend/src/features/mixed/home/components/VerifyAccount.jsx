import { Loading } from "../../../../components/Element/Loading";
import { useVerifyAccount } from "../api/sendVerifyEmail";

export const VerifyAccount = () => {
  const { responseData, error, loading, mutate } = useVerifyAccount();

  const handleClick = async () => {
    try {
      await mutate({});
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="p-3 rounded-md">
      <p>
        <span className="font-bold text-lg">Impotant: </span>Your account didnt
        verify. If not, we will <strong className="text-red-500">delete</strong>{" "}
        it after 30 days from registration.
      </p>
      {loading ? (
        <span>
          <Loading />
        </span>
      ) : (
        <p
          className="font-medium text-blue-500 hover:underline cursor-pointer"
          onClick={handleClick}
        >
          Click here to resend verification email
        </p>
      )}

      {responseData && (
        <span className="text-green-500">{responseData.message}</span>
      )}
      {error && <span className="text-red-500">{error}</span>}
    </div>
  );
};
