"use client";
import { useLocale, useTranslations } from "next-intl";
import LocaleSwitcherSelect from "./LocaleSwitcherSelect";
import styled from "styled-components";
import media from "styled-media-query";

const Container = styled.div`
  //height: 60px;
  background-color: white;
  border-radius: 4px;
  ${media.lessThan("medium")`
        // height:auto;
         padding-top: 0;
    `}
`;

export default function LocaleSwitcher() {
  const t = useTranslations("LocaleSwitcher");
  const locale = useLocale();

  return (
    <Container>
      <LocaleSwitcherSelect
        defaultValue={locale}
        items={[
          {
            value: "en",
            label: t("en"),
          },
          {
            value: "zh",
            label: t("zh"),
          },
        ]}
        label={t("label")}
      />
    </Container>
  );
}
