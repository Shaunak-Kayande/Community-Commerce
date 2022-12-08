import React from "react";
import { Flex, Image } from "@chakra-ui/react";
import SearchInput from "./SearchInput";
import RightContent from "./RightContent/RightContent";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/clientApp";
import { User } from "firebase/auth";

const Navbar: React.FC = () => {
  const [user] = useAuthState(auth);
  return (
    <Flex bg="blue.200" height="44px" padding="6px 12px">
      <Flex align="center">
        <Image src="/images/communityLogo.svg" height="40px" />
        <Image
          src="/images/communityText.svg"
          height="110px"
          display={{ base: "none", md: "unset" }}
          mt={2}
        />
      </Flex>
      {/* <Directory /> */}
      <SearchInput user={user as User} />
      <RightContent />
    </Flex>
  );
};
export default Navbar;
