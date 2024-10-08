import note1 from "assets/images/note-1.jpg";
import PropTypes from "prop-types";
import React from "react";
import StyledNoteCard, {
  NoteImage,
  NoteTitle,
  NoteExcerpt,
  NotePublishTime,
} from "./style";

function NoteCard({ note, children, ...rest }) {
  return (
    <StyledNoteCard {...rest}>
      <NoteImage src={note?.image || note1} />
      <NoteTitle>{note?.title}</NoteTitle>
      <NoteExcerpt>{note?.excerpt}</NoteExcerpt>
      <NotePublishTime>{note?.publishedAt}</NotePublishTime>
    </StyledNoteCard>
  );
}

NoteCard.propTypes = {
  children: PropTypes.any,
};

export default NoteCard;
