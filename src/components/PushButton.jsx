import React, { memo } from "react";

export const PushButton = memo((props) => {
  const { children, onClickAction } = props;
  return (
    <>
      <button
        className="text-white rounded-full m-1 bg-gray-500 border-transparent hover:bg-blue-100 hover:text-blue-900"
        onClick={onClickAction}
      >
        {children}
      </button>
    </>
  );
});
