import { useDispatch, useSelector } from "react-redux";
import { Form } from "../../../components/Form/Form";
import { useGet } from "@/hooks/useGet";
import { Loading } from "../../../components/Element/Loading";
import { usePut } from "@/hooks/usePut";
import { Input } from "../../../components/Form/Input";
import { RadioGroup } from "../../../components/Form/RadioInput";
import { Cancel } from "../../../components/Icon/Icons";
import { useContext } from "react";
import { ModelContext } from "@/layout/HomeLayout";
import Cookies from "js-cookie";
import { login } from "@/reducers/userReducer";

export const EditProfile = () => {
  const [model, setModel] = useContext(ModelContext);
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl max-w-[560px] w-full max-h-[90vh] overflow-auto">
      <header className="relative h-20">
        <h2 className="text-2xl font-bold text-center leading-[80px]">
          Edit Profile
        </h2>
        <div
          className="absolute top-4 right-4 cursor-pointer p-2 bg-gray-200 hover:bg-gray-400 rounded-full"
          onClick={() => setModel("none")}
        >
          <Cancel size={24} />
        </div>
      </header>
      <EditProfileForm />
    </div>
  );
};

const EditProfileForm = () => {
  const { id, token } = useSelector((state) => state.user);
  const {
    loading: getLoading,
    error: getError,
    data: _user,
  } = useGet(`/users/introduce/${id}`);
  const {
    loading: putLoading,
    error: putError,
    responseData,
    sendPost,
  } = usePut(`/users`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const dispatch = useDispatch();
  if (getLoading || putLoading) {
    return <Loading size={32} />;
  }
  if (getError) {
    return <p className="text-red-500 font-medium">{getError}</p>;
  }

  const { user } = _user;
  const introduce = [
    {
      id: 1,
      name: "first_name",
      label: "First Name",
      type: "text",
      defaultValue: user?.first_name,
      placeholder: "Please enter your first name",
      validation: {
        required: {
          value: true,
          message: "First Name is required",
        },
      },
    },
    {
      id: 2,
      name: "last_name",
      type: "text",
      placeholder: "Please enter your last name",
      defaultValue: user?.last_name,
      label: "Last name",
      validation: {
        required: {
          value: true,
          message: "Last name is required",
        },
      },
    },
    {
      id: 3,
      name: "phone",
      defaultValue: user?.phone,
      type: "text",
      placeholder: "Please enter your phone number",
      label: "Phone number",
    },
    {
      id: 4,
      name: "bYear",
      defaultValue: user?.bYear,
      type: "number",
      placeholder: "Please enter your birth year",
      label: "Birth year",
      validation: {
        required: {
          value: true,
          message: "Year is required",
        },
        min: {
          value: 1900,
          message: "Year must be greater or equal than 1900",
        },
        max: {
          value: new Date().getFullYear(),
          message: `Year must be less or equal than ${new Date().getFullYear()}`,
        },
      },
    },
    {
      id: 5,
      name: "bMonth",
      defaultValue: user?.bMonth,
      type: "number",
      placeholder: "Please enter your birth month",
      label: "Birth month",
      validation: {
        required: {
          value: true,
          message: "Month is required",
        },
        min: {
          value: 1,
          message: "Month must be greater or equal than 1",
        },
        max: {
          value: 12,
          message: "Month must be less or equal than 12",
        },
      },
    },
    {
      id: 6,
      name: "bDay",
      defaultValue: user?.bDay,
      type: "number",
      placeholder: "Please enter your birth day",
      label: "Birth day",
      validation: {
        required: {
          value: true,
          message: "Day is required",
        },
        min: {
          value: 1,
          message: "Day must be greater or equal than 1",
        },
        max: {
          value: 31,
          message: "Day must be less or equal than 31",
        },
      },
    },
  ];
  const detailsInput = [
    {
      id: 1,
      name: "bio",
      defaultValue: user?.details?.bio,
      type: "text",
      placeholder: "Please enter your bio",

      label: "Bio",
    },
    {
      id: 2,
      name: "job",
      defaultValue: user?.details?.job,
      type: "text",
      placeholder: "Please enter your job",
      label: "Job",
    },
    {
      id: 3,
      name: "workplace",
      defaultValue: user?.details?.workplace,
      type: "text",
      placeholder: "Please enter your workplace",
      label: "Workplace",
    },
    {
      id: 4,
      name: "highSchool",
      defaultValue: user?.details?.highSchool,
      type: "text",
      placeholder: "Please enter your highSchool",
      label: "HighSchool",
    },
    {
      id: 5,
      name: "college",
      defaultValue: user?.details?.college,
      type: "text",
      placeholder: "Please enter your college",
      label: "College",
    },
    {
      id: 6,
      name: "currentCity",
      defaultValue: user?.details?.currentCity,
      type: "text",
      placeholder: "Please enter your current city",
      label: "Current City",
    },
    {
      id: 7,
      name: "hometown",
      defaultValue: user?.details?.hometown,
      type: "text",
      placeholder: "Please enter your hometown",
      label: "Hometown",
    },
    {
      id: 8,
      name: "instagram",
      defaultValue: user?.details?.instagram,
      type: "text",
      placeholder: "Please enter your instagram",
      label: "Instagram",
    },
  ];
  const relationshipInput = {
    name: "relationship",
    groupLabel: "Relationship",
    items: [
      { value: "Single", label: "Single" },
      { value: "In a relationship", label: "In a relationship" },
      { value: "Married", label: "Married" },
    ],
    defaultValue: user?.details?.relationship,
  };
  const genderInput = {
    name: "gender",
    groupLabel: "Gender",
    items: [
      { value: "male", label: "Male" },
      { value: "female", label: "Female" },
      { value: "other", label: "Other" },
    ],
    defaultValue: user?.gender,
  };
  const handleUpdateProfile = async (data) => {
    try {
      const { user } = await sendPost(data);
      console.log(user);
      Cookies.set("user", JSON.stringify(user));
      dispatch(login(user));

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Form
      loading={putLoading}
      successMeessage="Update profile successfully"
      error={putError}
      responseData={responseData}
      handleSubmit={handleUpdateProfile}
    >
      {introduce.map((item) => (
        <Input key={item.id} {...item} />
      ))}
      <RadioGroup {...genderInput} />
      {detailsInput.map((item) => (
        <Input key={item.id} {...item} />
      ))}

      <RadioGroup {...relationshipInput} />
    </Form>
  );
};
