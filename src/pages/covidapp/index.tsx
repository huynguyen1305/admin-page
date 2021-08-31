import React, { useEffect } from "react";
import { Typography, Button, notification, Divider } from "antd";
import {
  useUpdateCovidAppMutation,
  useGetCovidAppUpdateQuery,
} from "../../services/covidAppApi";

const CovidAppIndex = () => {
  const [updateCovidApp, response] = useUpdateCovidAppMutation();
  const { data } = useGetCovidAppUpdateQuery();
  console.log(data);
  console.log(response);
  useEffect(() => {
    if (response.isSuccess) {
      notification.success({
        message: "Update Successed !!",
        style: {
          backgroundColor: "#d9f7be",
        },
      });
    }
    if (response.isError) {
      notification.error({
        message: "Update Failed !!",
        style: {
          backgroundColor: "#ffccc7",
        },
      });
    }
  }, [response]);
  console.log(data);
  return (
    <div>
      <Typography.Title level={3}>Covid App</Typography.Title>
      <Button
        onClick={() => {
          updateCovidApp({ record: "covidData" });
        }}
        loading={response.isLoading}
        type="primary"
        disabled={!response.isUninitialized}
      >
        {response.isLoading ? "Loading" : "Update Manual"}
      </Button>
      <Divider></Divider>
      {response.data && (
        <pre style={{ whiteSpace: "pre-line" }}>
          {JSON.stringify(response.data)}
        </pre>
      )}
      {response.isError && (
        <code style={{ backgroundColor: "#ffccc7", padding: "0.5rem" }}>
          Please Try Again After Few Minutes
        </code>
      )}
    </div>
  );
};

export default CovidAppIndex;
