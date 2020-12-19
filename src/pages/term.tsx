import React from 'react';
import styled from 'styled-components';

import PageLayout from 'layouts/PageLayout';
import ContentLayout from 'layouts/BasicContentLayout';
import InfoPageMenu from 'components/InfoPageMenu';
import TextPart from 'components/TextPart';

const ContentStyle = styled.div`
  margin: auto;
  padding: 2rem;
  min-width: 320px;
`;

export default function Terms() {
  return (
    <PageLayout title="利用規約">
      <ContentLayout sidemenu={<InfoPageMenu />}>
        <ContentStyle>
          <h2>利用規約</h2>
          <p>
            株式会社～～及びその子会社、関連会社（以下「～～」といいます。）は、～～が提供するクラウドファンディングサービス（以下「本サービス」といいます。）についての利用規約をここに定めます。この利用規約およびこれと一体をなすものとして別途定める利用細則（以下、両者を合わせて「本規約」といいます。）は、本サービスを利用するための契約の内容になるものであり、～～とユーザー（第1条第2号で定義します。）は、本規約が本サービスを利用するための契約の内容になることに合意するものとします。
          </p>
          <TextPart title="第1条（定義）">
            <p>本規約において用いる用語の定義は次の通りとします。</p>
          </TextPart>
          <h3> 第1章　会員登録等 </h3>
          <TextPart title="第2条（会員申込）">
            <ol>
              <li>
                ～～の会員となるには、本規約および～～プライバシーポリシーの内容をお読みいただき、本規約を遵守することに同意のうえ、～～の提供する入力フォームにて所定の情報を提供する方法による会員登録への申込み手続きが必要です。入力に際しては、真正な情報を提供していただく必要があります。同一人が複数の会員登録をすることはできません。
              </li>
              <li>
                前項の申込に対して～～が承諾をした場合、承諾をした時点をもって会員登録手続は完了し、申込者は、この時点から会員としての地位を取得します。なお、～～は、次の場合には申込に対する承諾を行いません。
                <ul>
                  <li>
                    申込の際に～～に提供された情報（以下「登録情報」という。）の全部または一部につき虚偽、誤記または記載漏れがあった場合
                  </li>
                  <li> 過去に会員資格を停止された、または停止事由に該当したことが判明した場合 </li>
                  <li> 第27条に定める事由が認められる場合 </li>
                  <li> その他、～～が登録を適当でないと判断した場合 </li>
                </ul>
              </li>
              <li>～～は、前条の承諾をしない場合において、申込者にその理由を開示する義務を負いません。</li>
            </ol>
          </TextPart>
          <TextPart title="第3条（会員IDおよびパスワードの管理）"></TextPart>
          <TextPart title="第4条（届出事項の変更等）"></TextPart>
          <TextPart title="第5条（退会）"></TextPart>
          <TextPart title="第6条（会員資格の停止、抹消）"></TextPart>
          <TextPart title="第7条（会員登録をしないサービス利用について）"></TextPart>
          <h3> 第2章　～～の提供するサービス </h3>
          <TextPart title="第8条（本サービスの内容）"></TextPart>
          <TextPart title="第9条（契約当事者）"></TextPart>
          <h3> 第3章　プロジェクトオーナーに関するルール </h3>
          <TextPart title="第10条（利用資格）"></TextPart>
          <TextPart title="第11条（プロジェクトオーナーの義務）"></TextPart>
          <TextPart title="第12条（禁則事項）"></TextPart>
          <TextPart title="第13条（申込みと掲載）"></TextPart>
          <TextPart title="第14条（プロジェクトの類型と成立）"></TextPart>
          <TextPart title="第15条（プロジェクトオーナーに発生する手数料）"></TextPart>
          <TextPart title="第16条（リターンの提供）"></TextPart>
          <TextPart title="第17条（プロジェクトのキャンセル）"></TextPart>
          <TextPart title="第18条（プロジェクトに関するトラブル）"></TextPart>
          <TextPart title="第19条（支援金の支払い）"></TextPart>
          <h3> 第4章　支援者に関するルール </h3>
          <TextPart title="第20条（利用資格について）"></TextPart>
          <TextPart title="第21条（プロジェクトへの支援）"></TextPart>
          <TextPart title="第22条（支援のキャンセル）"></TextPart>
          <TextPart title="第23条（リターンの取得）"></TextPart>
          <TextPart title="第24条（プロジェクトが不成立、キャンセルの場合等）"></TextPart>
          <h3> 第5章　全てのユーザーについてのルール </h3>
          <TextPart title="第26条（反社会的勢力等の排除）"></TextPart>
          <TextPart title="第27条（禁止行為）"></TextPart>
          <TextPart title="第28条（個人情報の取扱い）"></TextPart>
          <TextPart title="第29条（機密保持）"></TextPart>
          <TextPart title="第30条（連絡/通知）"></TextPart>
          <TextPart title="第31条（本サービスの変更、追加または廃止）"></TextPart>
          <TextPart title="第32条（本サービスの停止）"></TextPart>
          <TextPart title="第33条（免責）"></TextPart>
          <TextPart title="第34条（権利帰属）"></TextPart>
          <TextPart title="第35条（本規約の変更）"></TextPart>
          <TextPart title="第36条（地位の譲渡等）"></TextPart>
          <TextPart title="第37条（一部無効等）"></TextPart>
          <TextPart title="第38条（準拠法および合意管轄）"></TextPart>
          <p>以上</p>
        </ContentStyle>
      </ContentLayout>
    </PageLayout>
  );
}
