import { ChakraProvider, Box, Flex } from "@chakra-ui/react";
import { useAppState } from "./functions/stateFunctions";
import { TableRoom } from "./components/tableRoom";
import { TableBooking } from "./components/tableBooking";
import { Header } from "./components/header";
import { Title } from "./components/title";
import { AddButton } from "./components/createButton";
import { FormRoom } from "./components/formRoom";
import { FormBooking } from "./components/formBooking";

export function App() {
  const {
    screenType,
    showForm,
    pageTitle,
    handleSwitchToRooms,
    handleSwitchToBookings,
    handleShowForm,
    handleEditForm,
    selectedRoom,
  } = useAppState();

  return (
    <ChakraProvider>
      <Box>
        <Header
          onSwitchToBookings={handleSwitchToBookings}
          onSwitchToRooms={handleSwitchToRooms}
        />
      </Box>

      <Flex flexDirection={"column"} alignItems={"center"}>
        <Flex
          flexDirection={"column"}
          alignItems={"start"}
          justifyContent={"center"}
          marginTop={100}
          gap={10}
        >
          <Flex justifyContent={"space-between"} width={"100%"}>
          <Box>
            <Title text={pageTitle} />
          </Box>
            {!showForm && screenType === "rooms" && (
              <AddButton
                text="New Room"
                onClick={() => handleShowForm("rooms")}
              />
            )}
            {!showForm && screenType === "bookings" && (
              <AddButton
                text="New Booking"
                onClick={() => handleShowForm("bookings")}
              />
            )}
          </Flex>
          <Box>
            {showForm ? (
              screenType === "rooms" ? (
                <FormRoom roomId={selectedRoom} />

              ) : (
                <FormBooking roomId={selectedRoom} />
              )
            ) : screenType === "rooms" ? (
              <TableRoom
                onEditClick={(roomId: number) => handleEditForm(roomId)}
                onBookRoomClick={(roomId?: number) => handleShowForm("bookings", roomId)}
              />

            ) : (
              <TableBooking />
            )}
          </Box>
        </Flex>
      </Flex>
    </ChakraProvider>
  );
}
