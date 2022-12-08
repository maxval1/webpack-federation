import React, { FC } from "react";

const Map = React.lazy(() => import("core/Map"));

export interface Props {
  name: string;
}

export const App: FC<Props> = (props) => {
  return (
    <div>
      Helle from demo: {props.name ?? "no name"}
      <React.Suspense fallback="Loading Material UI Dialog...">
        <Map />
      </React.Suspense>
    </div>
  );
};
