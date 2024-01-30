import { ReactNode } from "react";

const DefaultLayout = ({ children }: { readonly children: ReactNode }) => {
  return (
    <div className="default-layout">
      <main className="main">{children}</main>
    </div>
  );
};

export default DefaultLayout;
