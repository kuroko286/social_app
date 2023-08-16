import { useContext, useState } from "react";
import { useSelector } from "react-redux";
import { ModelContext } from "@/layout/HomeLayout";

export const Introduce = ({ user }) => {
  const { id } = useSelector((state) => state.user);

  if (user._id === id) {
    return <OwnerIntroduce user={user} />;
  }
  return <GuestIntroduce user={user} />;
};

export const GuestIntroduce = ({ user }) => {
  return <ReadonlyIntroduce user={user} />;
};

export const OwnerIntroduce = ({ user }) => {
  const [model, setModel] = useContext(ModelContext);
  return (
    <div>
      <>
        <a
          className="text-lg font-bold text-blue-500 cursor-pointer"
          onClick={() => setModel("edit-profile")}
        >
          Edit Profile
        </a>
        <ReadonlyIntroduce user={user} />
      </>
    </div>
  );
};

const ReadonlyIntroduce = ({ user }) => {
  const { gender, bDay, bMonth, bYear, email, details } = user;
  return (
    <div>
      <ul>
        <h5 className="font-semibold text-lg">Basic Infomation</h5>
        <li>
          <p>{gender}</p>
          <small className="text-sm text-gray-600">Gender</small>
        </li>
        <li>
          <p>
            {bDay}/{bMonth}/{bYear}
          </p>
          <small className="text-sm text-gray-600">Birthday</small>
        </li>
      </ul>
      <ul>
        <h5 className="font-semibold text-lg">Address</h5>
        <li>
          <p>{details?.currentCity}</p>
          <small className="text-sm text-gray-600">City</small>
        </li>
        <li>
          <p>{details?.hometown}</p>
          <small className="text-sm text-gray-600">Born</small>
        </li>
      </ul>
      <ul>
        <h5 className="font-semibold text-lg">Contact</h5>
        <li>
          <p>{details?.instagram}</p>
          <small className="text-sm text-gray-600">Instagram</small>
        </li>
        <li>
          <p>{email}</p>
          <small className="text-sm text-gray-600">Email</small>
        </li>
      </ul>
    </div>
  );
};
