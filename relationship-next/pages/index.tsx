import Head from "next/head";
import useSWR from "swr";
import { fetcher } from "lib/utils";
import * as React from "react";
import { Grid } from "@mui/material";
import NetCard from "components/net-card";

export default function Home() {
  const { data, error } = useSWR("/api/network", fetcher);
  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;
  return (
    <>
      <Head>
        <title>Relationship</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <NetCard data={data[0]} />
        </Grid>
        <Grid item xs={4}>
          <NetCard data={data[1]} />
        </Grid>
        <Grid item xs={4}>
          <NetCard data={data[2]} />
        </Grid>
        <Grid item xs={8}>
          <NetCard data={data[3]} />
        </Grid>
      </Grid>
    </>
  );
}