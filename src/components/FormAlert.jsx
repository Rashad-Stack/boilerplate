import {
  Alert,
  AlertContainer,
  AlertDescription,
  AlertIcon,
  AlertTitle,
} from "keep-react";
import PropTypes from "prop-types";

export default function FormAlert({ message }) {
  return (
    <Alert color="error" withBg={true}>
      <AlertContainer>
        <AlertIcon />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>{message}</AlertDescription>
      </AlertContainer>
    </Alert>
  );
}

FormAlert.propTypes = {
  message: PropTypes.string,
};
