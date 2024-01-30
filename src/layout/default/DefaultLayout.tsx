import { ReactNode } from "react";
import Header from "../../widgets/header/Header";

const DefaultLayout = ({ children }: { readonly children: ReactNode }) => {
  return (
    <div className="default-layout">
      {/* <Header/> */}
      <main className="main">{children}</main>
    </div>
  );
};

export default DefaultLayout;
