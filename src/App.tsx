import { ChakraProvider, Box, Flex } from "@chakra-ui/react";
import { useAppState } from "./functions/stateFunctions";
import { TableRoom } from "./components/tableRoom";
import { TableBooking } from "./components/tableBooking";
import { Header } from "./components/header";
import { Title } from "./components/title";
import { Search } from "./components/search";
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
          <Box>
            <Title text={pageTitle} />
          </Box>
          <Flex justifyContent={"space-between"} width={"100%"}>
            {!showForm && <Search />}
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
                <FormRoom />
              ) : (
                <FormBooking />
              )
            ) : screenType === "rooms" ? (
              <TableRoom
                onEditClick={handleEditForm}
                onBookRoomClick={() => handleShowForm("bookings")}
              />
            ) : (
              <TableBooking onEditClick={handleEditForm} />
            )}
          </Box>
        </Flex>
      </Flex>
    </ChakraProvider>
  );
}
