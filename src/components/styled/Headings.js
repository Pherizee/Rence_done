import styled from "styled-components";

export const MajorHeading = styled.h2`
  font-size: var(--fs-900);
  font-family: "Campton-Bold", sans-serif;
  line-height: 1;
`;

export const SectionHeading = styled.h2`
  margin-bottom: 20px;
  margin-inline: auto;
  font-size: ${({ fs }) => fs || "var(--fs-600)"};
  font-family: "Campton-Light", sans-serif;
  font-weight: 700;
  text-align: center;
  line-height: 1.2;
`;

export const Subtitle = styled.p`
  max-width: 35ch;
  margin-inline: ${({ mx }) => mx || "auto"};
  margin-bottom: 24px;
  text-align: center;
  font-size: var(--fs-500);
`;
