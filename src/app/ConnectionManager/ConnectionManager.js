"use client";

import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import useConnectionManager from "./useConnectionManager";

export default function ConnectionManager() {
  const [disabled, handleConnect, handleDisconnect] = useConnectionManager();

  return (
    <Grid container spacing={1}>
      <Grid item>
        <Button
          color="info"
          disabled={disabled}
          onClick={handleConnect}
          variant="contained"
        >
          Connect
        </Button>
      </Grid>
      <Grid item>
        <Button
          color="warning"
          disabled={!disabled}
          onClick={handleDisconnect}
          variant="contained"
        >
          Disconnect
        </Button>
      </Grid>
    </Grid>
  );
}
