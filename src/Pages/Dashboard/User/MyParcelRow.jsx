const MyParcelRow = ({ parcel }) => {
  const { parcelType, requestedDeliveryDate } = parcel || {};
  return (
    <tbody>
      <tr className="border-b border-opacity-20">
        <td className="p-3">
          <p>{parcelType}</p>
        </td>
        <td className="p-3">
          <p>{requestedDeliveryDate}</p>
        </td>
        <td className="p-3">
          <p>{parcelType}</p>
        </td>
        <td className="p-3">
          <p>{parcelType}</p>
        </td>
        <td className="p-3">
          <p>{parcelType}</p>
        </td>
        <td className="p-3">
          <p>{parcelType}</p>
        </td>
        <td className="p-3">
          <p>{parcelType}</p>
        </td>
        <td className="p-3">
          <p>01 Feb 2022</p>
        </td>
        <td className="p-3 text-right">
          <p>$15,792</p>
        </td>
        <td className="p-3 text-right"></td>
      </tr>
    </tbody>
  );
};

export default MyParcelRow;
