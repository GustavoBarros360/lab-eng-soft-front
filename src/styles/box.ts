import styled from "styled-components";

interface BoxProps {
  // src: https://www.w3schools.com/cssref/css3_pr_align-items.asp
  hAlign?:
    | "stretch"
    | "center"
    | "flex-start"
    | "flex-end"
    | "baseline"
    | "initial"
    | "inherit";
  // src: https://www.w3schools.com/cssref/css3_pr_justify-content.asp
  vAlign?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "initial"
    | "inherit";
}

export interface HboxProps extends BoxProps {
  noGrow?: boolean;
  minWidth?: string;
  maxWidth?: string;
}

const HboxStyled = styled.div<BoxProps>`
  display: flex;
  flex-direction: row;
  align-content: flex-start;
  justify-content: ${(props) => props.hAlign ?? "stretch"};
  align-items: ${(props) => props.vAlign ?? null};
`;

export const Hbox: any = HboxStyled;
Hbox.displayName = "Hbox";

Hbox.Item = styled.div<HboxProps>`
  flex-direction: column;
  display: flex;
  min-width: ${(props) => (props.minWidth ? props.minWidth : "auto")};
  max-width: ${(props) => (props.maxWidth ? props.maxWidth : "auto")};
  ${(props) => (!props.noGrow ? "flex: 1;" : null)}
  justify-content: ${(props) => (props.vAlign ? props.vAlign : "flex-start")};
  align-items: ${(props) => (props.hAlign ? props.hAlign : "stretch")};
  gap: 15px;
`;
Hbox.Item.displayName = "Hbox.Item";

interface HboxSeparatorProps {
  small?: boolean;
}

Hbox.Separator = styled.div<HboxSeparatorProps>`
  width: ${(props) => (props.small ? "5px" : "10px")};
`;
Hbox.Separator.displayName = "Hbox.Separator";

const VboxStyled = styled.div`
  display: flex;
  height: 100%;
  padding: 0px 10px 0px 10px;
  flex-flow: column;
`;

export const Vbox: any = VboxStyled;
Vbox.displayName = "Vbox";

export const Separator = styled.div`
  margin-bottom: 10px;
`;

export const SiteContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
