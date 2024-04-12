import { useState } from "react";
type ScreenType = "rooms" | "bookings";

export function useAppState() {
  const [screenType, setScreenType] = useState<ScreenType>("rooms");
  const [showForm, setShowForm] = useState(false);
  const [pageTitle, setPageTitle] = useState("Rooms");
  const [selectedRoom, setSelectedRoom] = useState<number>();

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

  const handleShowForm = (type: ScreenType, roomId?: number) => {
    setShowForm(true);
    setScreenType(type);
    setPageTitle(type === "rooms" ? "Create Room" : "Book Room");
    setSelectedRoom(roomId);
  };
  

  const handleEditForm = (roomId?: number) => {
    setShowForm(true);
    setPageTitle(screenType === "rooms" ? "Edit Room" : "Edit Booking");
    setSelectedRoom(roomId);
  };

  return {
    screenType,
    showForm,
    pageTitle,
    handleSwitchToRooms,
    handleSwitchToBookings,
    handleShowForm,
    handleEditForm,
    selectedRoom,
  };
}

