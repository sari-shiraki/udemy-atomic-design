import styled from "styled-components";

import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { Input } from "../atoms/input/Input";

export const SeachInput = () => {
  return (
    <SContainer>
      <Input placeholder="検索条件を入力" />
      <SButtonWrraper>
        <PrimaryButton>検索</PrimaryButton>
      </SButtonWrraper>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SButtonWrraper = styled.div`
  padding-left: 8px;
`;
