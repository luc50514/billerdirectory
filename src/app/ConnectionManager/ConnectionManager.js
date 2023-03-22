"use client";

import Button from "@mui/material/Button";
import useConnectionManager from "./useConnectionManager";

export default function ConnectionManager() {
  const [disabled, handleConnect, handleDisconnect] = useConnectionManager();

  return (
    <>
      <Button
        onClick={handleConnect}
        disabled={disabled}
        variant="contained"
        color="info"
      >
        Connect
      </Button>
      <Button
        disabled={!disabled}
        onClick={handleDisconnect}
        variant="contained"
        color="warning"
      >
        Disconnect
      </Button>
    </>
  );
}
