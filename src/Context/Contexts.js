import React from "react"

export const SelectFileContext = React.createContext({ envName: "", serviceId: "" });
export const SearchContext = React.createContext({ text: "", changeText: () => { } });
