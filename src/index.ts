import { Options } from "graphql-yoga";
import app from "./app";

const PORT: number | string = process.env.PORT || 4000;
const PLAYGROUND: string = "/playground";
const GTAPHQL_ENDPOINT: string = "/graphql";

const appOptions: Options = {
  port: PORT,
  playground: PLAYGROUND,
  endpoint: GTAPHQL_ENDPOINT,
};

const handleAppStart = () => {
  console.log(`Listening on Port ${PORT}`);
};

app.start(appOptions, handleAppStart);
