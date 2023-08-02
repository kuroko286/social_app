export const UpdateProfile = () => {
  return (
    <div>
      <ul>
        <h5 className="font-semibold text-lg">Basic Infomation</h5>
        <li>
          <p>Nam</p>
          <small className="text-sm text-gray-600">Gender</small>
        </li>
        <li>
          <p>28/06/2003</p>
          <small className="text-sm text-gray-600">Birthday</small>
        </li>
      </ul>
      <ul>
        <h5 className="font-semibold text-lg">Address</h5>
        <li>
          <p>Ha Noi</p>
          <small className="text-sm text-gray-600">City</small>
        </li>
        <li>
          <p>Vinh Phuc</p>
          <small className="text-sm text-gray-600">Born</small>
        </li>
      </ul>
      <ul>
        <h5 className="font-semibold text-lg">Contact</h5>
        <li>
          <p>0987654321</p>
          <small className="text-sm text-gray-600">Phone</small>
        </li>
        <li>
          <p>oJ7uQ@example.com</p>
          <small className="text-sm text-gray-600">Email</small>
        </li>
      </ul>
    </div>
  );
};
