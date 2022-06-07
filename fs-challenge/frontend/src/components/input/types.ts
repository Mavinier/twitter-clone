import React from "react";

export type InputProps = {
  id: string;
  name: string;
  placeholder: string;
  value: string;
  type: string;
  disabled: boolean;
  onBlur: React.FocusEventHandler;
  onChange: React.ChangeEventHandler;
};
