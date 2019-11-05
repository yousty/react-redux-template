import { NextPage } from "next";
import styled from "styled-components";

const H1 = styled.h1`
  background-color: red;
`;

const Home: NextPage<{ userAgent: string }> = ({ userAgent }) => (
  <H1>Hello world! - user agent: {userAgent}</H1>
);

export default Home;
