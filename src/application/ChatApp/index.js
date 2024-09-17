import React, { useState } from "react";
import PropTypes from "prop-types";
import StyledChatApp, { Nav, Sidebar, Drawer, Content } from "./style";
import NavBar from "organizations/NavBar";
import MessageList from "organizations/MessageList";
import Conversation from "organizations/Conversation";
import Profile from "pages/Profile";
import ContactList from "organizations/ContactList";
import FileList from "organizations/FileList";
import NoteList from "organizations/NoteList";
import EditProfile from "pages/EditProfile";
import Settings from "pages/Settings";
import BlockedList from "organizations/BlockedList";
import VideoCall from "organizations/VideoCall";
import { Route, Routes, useLocation } from "react-router-dom";
import { useTransition, animated } from "react-spring";

function ChatApp({ children, ...rest }) {
  const [showDrawer, setShowDrawer] = useState(false);
  const [videoCalling, setVideoCalling] = useState(false);

  const location = useLocation();

  const transitions = useTransition(location, {
    from: { opacity: 0, transform: "translate3d(-100px, 0, 0)" },
    enter: { opacity: 1, transform: "translate3d(0, 0, 0)" },
    leave: { opacity: 0, transform: "translate3d(-100px, 0, 1)" },
  });

  return (
    <StyledChatApp {...rest}>
      <Nav>
        <NavBar />
      </Nav>
      <Sidebar>
        {transitions(({ item, props }) => (
          <animated.div style={props}>
            {/* defined view of related router */}
            <Routes location={item}>
              <Route path="/" element={<MessageList />} />
              <Route path="/contacts" element={<ContactList />} />
              <Route path="/files" element={<FileList />} />
              <Route path="/notes" element={<NoteList />} />
              <Route path="/settings/*" element={<EditProfile />} />
            </Routes>
          </animated.div>
        ))}
      </Sidebar>
      <Content>
        {videoCalling && (
          <VideoCall onHangOffClicked={() => setVideoCalling(false)} />
        )}
        <Routes>
          <Route path="/settings" element={<Settings />} />
          <Route path="/settings/blocked" element={<BlockedList />} />
          <Route
            path="/"
            element={
              <Conversation
                onAvatarClick={() => setShowDrawer(true)}
                onVideoClicked={() => setVideoCalling(true)}
              />
            }
          />
        </Routes>
      </Content>
      <Drawer show={showDrawer}>
        <Profile onCloseClick={() => setShowDrawer(false)} />
      </Drawer>
    </StyledChatApp>
  );
}

ChatApp.propTypes = {
  children: PropTypes.any,
};

export default ChatApp;
