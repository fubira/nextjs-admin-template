import React from 'react';
// import { useRouter } from 'next/router';
import styled from 'styled-components';

import PageLayout from 'layouts/PageLayout';
import ContentLayout from 'layouts/BasicContentLayout';
import TextPart from 'components/TextPart';
import InfoPageMenu from 'components/InfoPageMenu';

const ContentStyle = styled.div`
  padding: 2rem;
`;

export default function Privacy() {
  return (
    <PageLayout title="プライバシーポリシー">
      <ContentLayout sidemenu={<InfoPageMenu />}>
        <ContentStyle>
          <h2>プライバシーポリシー</h2>
          <p>
            当社は以下のとおり個人情報保護方針を定め、個人情報保護の仕組みを構築し、全従業員に個人情報保護の重要性の認識と取組みを徹底させることにより、個人情報の保護を推進致します。
          </p>
          <TextPart title="個人情報の管理">
            当社は、お客さまの個人情報を正確かつ最新の状態に保ち、個人情報への不正アクセス・紛失・破損・改ざん・漏洩などを防止するため、セキュリティシステムの維持・管理体制の整備・社員教育の徹底等の必要な措置を講じ、安全対策を実施し個人情報の厳重な管理を行ないます。
          </TextPart>
          <TextPart title="個人情報の利用目的">
            お客さまからお預かりした個人情報は、当社からのご連絡や業務のご案内、お知らせ、ご質問に対する回答として、電子メールや資料のご送付に利用いたします。
          </TextPart>
          <TextPart title="個人情報の第三者への開示・提供の禁止">
            当社は、お客さまよりお預かりした個人情報を適切に管理し、次のいずれかに該当する場合を除き、個人情報を第三者に開示いたしません。
            <ul>
              <li>お客さまの同意がある場合</li>
              <li>お客さまが希望されるサービスを行なうために当社が業務を委託する業者に対して開示する場合</li>
              <li>法令に基づき開示することが必要である場合</li>
            </ul>
          </TextPart>
          <TextPart title="個人情報の安全対策">
            当社は、個人情報の正確性及び安全性確保のために、セキュリティに万全の対策を講じています。
          </TextPart>
          <TextPart title="ご本人の照会">
            お客さまがご本人の個人情報の照会・修正・削除などをご希望される場合には、ご本人であることを確認の上、対応させていただきます。
          </TextPart>
          <TextPart title="法令・規範の遵守と見直し">
            当社は、保有する個人情報に関して適用される日本の法令、その他規範を遵守するとともに、本ポリシーの内容を適宜見直し、その改善に努めます。
          </TextPart>
          <TextPart title="お問い合わせ">
            当社の個人情報の取扱に関するお問い合せは【お問い合わせフォーム】又は下記までご連絡ください。
          </TextPart>
        </ContentStyle>
      </ContentLayout>
    </PageLayout>
  );
}
