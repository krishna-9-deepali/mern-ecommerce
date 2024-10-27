import { useLocation } from "react-router-dom";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter } from "../ui/card";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";

function AddressCard({
  addressInfo,
  handleDeleteAddress,
  handleEditAddress,
  setCurrentSelectedAddress,
  selectedId,
}) {
  console.log(selectedId?._id === addressInfo?._id, selectedId);
  const location = useLocation();
  console.log(location.pathname === "/shop/checkout");
  return (
    <Card
      onClick={
        setCurrentSelectedAddress
          ? () => setCurrentSelectedAddress(addressInfo)
          : null
      }
      className={`cursor-pointer border-red-700 ${
        selectedId?._id === addressInfo?._id
          ? "border-red-900 border-[4px]"
          : "border-black"
      }`}
    >
      <CardContent className="grid p-4 gap-4">
        {location.pathname === "/shop/checkout" ? (
          <Button
            onClick={
              setCurrentSelectedAddress
                ? () => setCurrentSelectedAddress(addressInfo)
                : null
            }
            className={`cursor-pointer border-red-700 ${
              selectedId?._id === addressInfo?._id
                ? "border-red-900 border-[4px]"
                : "border-black"
            }`}
          >
            Select Address To Delivery
          </Button>
        ) : (
          ""
        )}

        <Label>Address: {addressInfo?.address}</Label>
        <Label>City: {addressInfo?.city}</Label>
        <Label>pincode: {addressInfo?.pincode}</Label>
        <Label>Phone: {addressInfo?.phone}</Label>
        <Label>Notes: {addressInfo?.notes}</Label>
      </CardContent>
      <CardFooter className="p-3 flex justify-between">
        <Button onClick={() => handleEditAddress(addressInfo)}>Edit</Button>
        <Button onClick={() => handleDeleteAddress(addressInfo)}>Delete</Button>
      </CardFooter>
    </Card>
  );
}

export default AddressCard;
