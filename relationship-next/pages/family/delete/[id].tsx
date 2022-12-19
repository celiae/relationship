import Family from "types/family";
import useSWR from "swr";
import { fetcher } from "lib/utils";
import { useRouter } from "next/router";
import { Button, Box, Typography, Divider } from "@mui/material";
import { IoMdMale, IoMdFemale } from "react-icons/io";
export default function DeleteFamily() {
  const router = useRouter();
  const id = router.query.id as string;
  const { data, error } = useSWR<Family>(
    id ? `/api/family/${id}` : null,
    fetcher
  );
  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;
  return (
    <>
      <Box mt={4}>
        <Typography variant="h6" color="secondary">
          你将删除
        </Typography>
      </Box>
      <Divider />
      <Box mt={2}>
        <Typography>
          {data.first_name} {data.last_name}
          {data.gender == "Male" ? (
            <IoMdMale color="#2196f3" />
          ) : (
            <IoMdFemale color="#e91e63" />
          )}
        </Typography>
        <Typography>{data.email}</Typography>
        <Typography>{data.birthday}</Typography>
        <Typography>{data.phone}</Typography>
        <Typography>{data.address}</Typography>
        <Typography>{data.degree}</Typography>
        <Typography>{data.qq}</Typography>
        <Typography>{data.wechat}</Typography>
        <Typography>{data.relation}</Typography>
      </Box>
      <Box>
        <Button
          color="warning"
          onClick={() => {
            fetch(`/api/family/${data.id}`, {
              method: "DELETE",
            });
            router.push("/family");
          }}
        >
          确认删除
        </Button>
        <Button
          onClick={() => {
            router.push("/family");
          }}
        >
          返回取消
        </Button>
      </Box>
    </>
  );
}
