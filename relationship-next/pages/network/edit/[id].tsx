import Network from "types/network";
import useSWR from "swr";
import { fetcher } from "lib/utils";
import { useRouter } from "next/router";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button, Grid, TextField } from "@mui/material";
export default function EditNetwork() {
  const router = useRouter();
  const id = router.query.id as string;
  const { data, error } = useSWR<Network>(
    id ? `/api/network/${id}` : null,
    fetcher
  );
  const { register, handleSubmit } = useForm<Network>();
  const onSubmit: SubmitHandler<Network> = (data) => {
    fetch(`/api/network/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    router.push("/network");
  };
  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Grid container spacing={3} mt={2}>
              <Grid item>
                <TextField
                  defaultValue={data.first_name}
                  {...register("first_name")}
                  label="first name"
                  variant="standard"
                />
              </Grid>
              <Grid item>
                <TextField
                  label="last name"
                  variant="standard"
                  defaultValue={data.last_name}
                  {...register("last_name")}
                />
              </Grid>
              <Grid item>
                <TextField
                  label="gender"
                  variant="standard"
                  defaultValue={data.gender}
                  {...register("gender")}
                />
              </Grid>
            </Grid>
            <Grid container spacing={3} mt={2}>
              <Grid item>
                <TextField
                  label="birthday"
                  variant="standard"
                  defaultValue={data.birthday}
                  {...register("birthday")}
                />
              </Grid>
              <Grid item>
                <TextField
                  label="email"
                  variant="standard"
                  defaultValue={data.email}
                  {...register("email")}
                />
              </Grid>
              <Grid item>
                <TextField
                  label="degree"
                  variant="standard"
                  defaultValue={data.degree}
                  {...register("degree")}
                />
              </Grid>
            </Grid>
            <Grid container spacing={3} mt={2}>
              <Grid item>
                <TextField
                  label="phone"
                  variant="standard"
                  defaultValue={data.phone}
                  {...register("phone")}
                />
              </Grid>
              <Grid item>
                <TextField
                  label="qq"
                  variant="standard"
                  defaultValue={data.qq}
                  {...register("qq")}
                />
              </Grid>
              <Grid item>
                <TextField
                  label="wechat"
                  variant="standard"
                  defaultValue={data.wechat}
                  {...register("wechat")}
                />
              </Grid>
            </Grid>
            <Grid xs={12} mt={4}>
              <TextField
                fullWidth
                label="address"
                variant="standard"
                defaultValue={data.address}
                {...register("address")}
              />
            </Grid>
            <Grid xs={12} mt={2}>
              <TextField
                fullWidth
                label="relation"
                variant="standard"
                defaultValue={data.relation}
                {...register("relation")}
              />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" type="submit">
              submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
}
