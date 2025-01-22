import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  return (
    <div>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          Order By:Relevance
        </MenuButton>
        <MenuList>
          <MenuItem>1</MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
};

export default SortSelector;
