import styled from "styled-components";

type PropsType = {
  children: JSX.Element[];
};

const Div = styled.div`
  display: flex;
`;

export const Container = (props: PropsType) => <Div>{props.children}</Div>;
