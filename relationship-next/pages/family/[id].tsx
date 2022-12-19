import Head from "next/head";
import Family from "types/family";
import useSWR from "swr";
import { fetcher } from "lib/utils";
import { useRouter } from "next/router";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import {
  Card,
  CardContent,
  Button,
  Typography,
  ButtonGroup,
} from "@mui/material";
export default function OneFamily() {
  const router = useRouter();
  const { data, error } = useSWR<Family>(
    router.query.id ? `/api/family/${router.query.id}` : null,
    fetcher
  );
  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <>
      <Head>
        <title>Family | Relationship</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Card>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {data.birthday}
          </Typography>
          <Typography variant="h5" component="div">
            {data.first_name} {data.last_name}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {data.email}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {data.birthday}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {data.address}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {data.degree}
          </Typography>
          <Typography variant="body2">{data.relation}</Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {data.phone}
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {data.qq}
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {data.wechat}
          </Typography>
        </CardContent>
      </Card>
      <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group"
      >
        <Button
          variant="contained"
          onClick={() => {
            router.push(`/family/edit/${data.id}`);
          }}
        >
          <AiFillEdit />
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            router.push(`/family/delete/${data.id}`);
          }}
        >
          <AiFillDelete />
        </Button>
      </ButtonGroup>
    </>
  );
}
