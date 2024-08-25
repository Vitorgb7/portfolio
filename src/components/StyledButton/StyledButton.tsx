import styled from "@emotion/styled";
import theme from "../../theme";
import { ReactNode } from "react";

interface StyledButtonProps {
    children: ReactNode
    onClick?: () => void;
}

const StyledButton: React.FC<StyledButtonProps> = ({children, onClick}) => {
    const StyledButton = styled("button")(() => ({
        backgroundColor: "transparent",
        border: `1px solid ${theme.palette.primary.contrastText}`,
        borderRadius: "3px",
        padding: "5px 15px",
        width: "100%",
        color: theme.palette.primary.contrastText,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        cursor: "pointer",
        '&:hover': {
            backgroundColor: theme.palette.secondary.main,
            transition: "0.5s"
        }
      }))

    return (
      <>
       <StyledButton onClick={onClick}>
        {children}
       </StyledButton>
      </>
    )
  }
  
  export default StyledButton;