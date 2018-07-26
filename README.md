# 職務経歴書（作成中）

## 基本情報

|key|value|
|---|-----|
|Name|sky0621|
|Birth|1978-06-01|
|Sex|Man|
|Location|埼玉県|
|Education|宇都宮大学教育学部卒|
|Job|フリーのソフトウェアエンジニア|
|Contact|sky14ghcv@gmail.com|
|GitHub|https://github.com/sky0621/|
|Qiita|https://qiita.com/sky0621|

## サマリ

主にJavaで構築するWebシステム（BtoBが多め）開発に10年以上関わる。

システムのジャンルは、さまざま。

（人材紹介系、決済代行、検索ポータル、貿易保険、営業支援、不動産ポータル、会員管理、ネットワーク管理、等々）

工程としては、要件定義からリリース、保守・運用まで経験済み（※設計・実装・テスト工程を担当することが多い）

その後、Androidアプリ（v2.3の頃）開発、PHP（v5）でのWebアプリ開発に2年ほど関わる。

また、Javaで「教育」系Webシステム開発時に１年ほどScrumを経験。

直近、２年弱はGolangでPubSubメッセージングシステム開発に着手。（AWS及びGCPを経験）

## 就労状況（2018/8月時点）

就労中。正社員として転職の意思は無し。

## 就労条件

- EdTechの案件だとベスト。
- Scrum開発を行っているとベター。

## 理想とする現場の風土

- 新しい技術にチャレンジする。
- 負債と向き合い、改善を求める。

## スキル

### プログラミング言語

- Java（v1.4～v7）を10年以上。
- PHP（v5）を2年ほど。
- Golang（v1.7、v1.9）を2年弱。
- JavaScriptはJavaやPHPの開発で並行して扱うもののjQueryレベル止まり。
- その他、C++、Python2、等を数ヶ月ずつ。

### フレームワーク

- Java：Struts、Seasar2
- PHP：Kohana
- Golang：Echo

### データベース

- SQL：O/Rマッパー無し案件やバッチ機能を担当することも多いため、ある程度パフォーマンス意識したレベルで書ける。
- 設計：それなりと思っているものの、客観的に示せる情報なし。
- 経験DB：MySQL、Oracleが多く、それぞれ5年以上。その他、PostgreSQL、DB2、SQLServer等。

### OS

- Windows：人並み。
- Mac：半年ほど開発に用いるものの、まだ慣れず。
- Linux：Golang案件では、開発端末にも用いる。エディタはVi派。極力、コマンド使う派。

### クラウド

- AWS：1年半でEC2、S3、Cloud Front、SQS、RDS、DynamoDB、RedShift、ElastiCache、ECR等に触れる。
- GCP：半年でGKE、Cloud Pub/Sub、Cloud SQL、Cloud Datastore、GCR等に触れる。

### その他

- Scrum開発を１年弱（最初のチームビルディングから参加）。
- MicroService（サービス間をREST/gRPCで接続）を意識した開発を２年弱。
- Dockerに半年、Kubernetesには数ヶ月ほど触れる。

## やったことはないが興味があるもの

- 機械学習

## 職務経歴

### 【2017/12 - 2018/06: Facebookメッセンジャーチャットボット開発】

#### ■概要

企業のFacebookボットとエンドユーザとのメッセージのやり取りをフックし、あらかじめ管理画面で設定したシナリオに応じたコンテンツを返却するサービス。

#### ■担当

FacebookメッセンジャーAPIを使用したチャットボット機能の設計・開発・テスト等。

- Facebookから送信されるメッセージを受信してキューに積む機能
- エンドユーザのメッセンジャー端末に表示対象コンテンツを送信する機能
- エンドユーザのメッセンジャー端末に送信すべき内容を（AI機能を持つ他サービスから取得し）加工する機能

#### ■技術要素

- Golang: v1.9
- GCP: GKE、Cloud Pub/Sub、Cloud SQL、Cloud Datastore、GCR等
- gRPC
- Docker
- MicroService
