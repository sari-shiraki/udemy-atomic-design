import { memo } from "react";
import styled from "styled-components";

import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { Input } from "../atoms/input/Input";

export const SeachInput = memo(() => {
  console.log("SeachInput");
  return (
    <SContainer>
      <Input placeholder="検索条件を入力" />
      <SButtonWrraper>
        <PrimaryButton>検索</PrimaryButton>
      </SButtonWrraper>
    </SContainer>
  );
});

const SContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SButtonWrraper = styled.div`
  padding-left: 8px;
`;
