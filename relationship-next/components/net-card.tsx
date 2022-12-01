import {
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
} from "@mui/material";
import Network from "types/network";
export default function NetCard({ data }: { data: Network }) {
  return (
    <>
      <Card sx={{ minWidth: 275 }}>
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
          <Typography variant="body2">{data.relation}</Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {data.phone}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </>
  );
}
