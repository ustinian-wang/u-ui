import React from "react";
import PropTypes from "prop-types";
import StyledFileList, { Files } from "./style.js";
import FilterList from "../FilterList";
import FileCard from "../../components/FileCard";
import useStaggeredList from "hooks/useStaggeredList.js";
import { animated } from "react-spring";
import fileData from "data/files.js";

function FileList({ children, ...rest }) {
  const trailAnimes = useStaggeredList(10);
  return (
    <StyledFileList {...rest}>
      <FilterList options={["最新文件优先", "按文件名排序"]}>
        <Files>
          {fileData.map((file, i) => (
            <animated.div key={file.id} style={trailAnimes[i]}>
              <FileCard key={file.id} file={file} />
            </animated.div>
          ))}
        </Files>
      </FilterList>
    </StyledFileList>
  );
}

FileList.propTypes = {
  children: PropTypes.any,
};

export default FileList;
