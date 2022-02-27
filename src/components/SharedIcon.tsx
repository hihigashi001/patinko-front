import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp, SizeProp } from "@fortawesome/fontawesome-svg-core";

type Props = {
  icon: IconProp;
  size?: SizeProp;
  color?: string;
};

export const SharedIcon = ({ icon, size = "2x", color = "#374151" }: Props) => {
  return <FontAwesomeIcon icon={icon} size={size} color={color} />;
};
