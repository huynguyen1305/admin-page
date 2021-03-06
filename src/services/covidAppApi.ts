import { rtkClient } from "./rtkQueryClient";

interface ICovidApp {
  title: string;
  body: string;
}
interface ParamsCovidApp {
  record: string;
}

// https://redux-toolkit.js.org/rtk-query/usage/code-splitting
const covidApp = rtkClient.injectEndpoints({
  overrideExisting: true,
  endpoints: (build) => ({
    getCovidAppUpdate: build.query<ICovidApp[], void>({
      query: () => "/covidapp/update-m",
    }),
    updateCovidApp: build.mutation<ICovidApp[], Partial<ParamsCovidApp>>({
      query: (params) => {
        return {
          url: "/covidapp/update",
          method: "POST",
          body: params,
        };
      },
    }),
  }),
});

export const {
  useUpdateCovidAppMutation,
  useGetCovidAppUpdateQuery,
} = covidApp;
