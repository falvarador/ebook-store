import { Layout } from "../components/layouts";

import { Typography } from "@mui/material";

export default function Home() {
  return (
    <Layout title={"Book - Store"}>
      <Typography variant="h1" component="h1">
        Books - Store
      </Typography>
    </Layout>
  );
}
