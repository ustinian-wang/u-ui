import React from "react";
import PropTypes from "prop-types";
import StyledContactList, { Contacts } from "./style.js";
import FilterList from "organizations/FilterList";
import ContactCard from "components/ContactCard";
import useStaggeredList from "hooks/useStaggeredList.js";
import { animated } from "react-spring";

import contactsData from "../../data/contacts.js";

function ContactList({ children, ...rest }) {
  const trailAnimes = useStaggeredList(10);
  return (
    <StyledContactList {...rest}>
      <FilterList options={["新添加优先", "按姓名排序"]} actionLabel="添加好友">
        <Contacts>
          {contactsData.map((contact, i) => (
            <animated.div key={contact.id} style={trailAnimes[i]}>
              <ContactCard key={contact.id} contact={contact} />
            </animated.div>
          ))}
        </Contacts>
      </FilterList>
    </StyledContactList>
  );
}

ContactList.propTypes = {
  children: PropTypes.any,
};

export default ContactList;
