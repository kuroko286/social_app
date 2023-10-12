import { OppositeMessage } from "./OppositeMessage";
import { OwnerMessage } from "./OwnerMessage";

export const Message = ({ owner, text }) => {
  return owner ? (
    <OwnerMessage>{text}</OwnerMessage>
  ) : (
    <OppositeMessage>{text}</OppositeMessage>
  );
};
