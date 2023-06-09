import * as React from "react";

import { ReactComponent as AccountSvg } from "../assets/menu/account.svg";
import { ReactComponent as DashboardSvg } from "@/assets/menu/dashboard.svg";
import { ReactComponent as DocumentationSvg } from "@/assets/menu/documentation.svg";
import { ReactComponent as GuideSvg } from "@/assets/menu/guide.svg";
import { ReactComponent as PermissionSvg } from "@/assets/menu/permission.svg";

interface CustomIconProps {
  type: string;
}

export const CustomIcon: React.FC<CustomIconProps> = ({ type }) => {
  let com = <GuideSvg />;

  if (type === "guide") {
    com = <GuideSvg />;
  } else if (type === "permission") {
    com = <PermissionSvg />;
  } else if (type === "dashboard") {
    com = <DashboardSvg />;
  } else if (type === "account") {
    com = <AccountSvg />;
  } else if (type === "documentation") {
    com = <DocumentationSvg />;
  } else {
    com = <GuideSvg />;
  }

  return <span className="anticon">{com}</span>;
};
