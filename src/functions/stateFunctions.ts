import { useState } from "react";

type ScreenType = "rooms" | "bookings";

export function useAppState() {
  const [screenType, setScreenType] = useState<ScreenType>("rooms");
  const [showForm, setShowForm] = useState(false);
  const [pageTitle, setPageTitle] = useState("Rooms");

  const handleSwitchToRooms = () => {
    setShowForm(false);
    setScreenType("rooms");
    setPageTitle("Rooms");
  };

  const handleSwitchToBookings = () => {
    setShowForm(false);
    setScreenType("bookings");
    setPageTitle("Bookings");
  };

  const handleShowForm = (type: ScreenType) => {
    setShowForm(true);
    setScreenType(type);
    setPageTitle(type === "rooms" ? "Create Room" : "Book Room");
  };

  const handleEditForm = () => {
    setShowForm(true);
    setPageTitle(screenType === "rooms" ? "Edit Room" : "Edit Booking");
  };

  return {
    screenType,
    showForm,
    pageTitle,
    handleSwitchToRooms,
    handleSwitchToBookings,
    handleShowForm,
    handleEditForm,
  };
}
