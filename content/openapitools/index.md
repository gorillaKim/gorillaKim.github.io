---
emoji: ✍️
title: "openapitools.json 활용편"
date: '2023-06-27 23:00:00'
author: gorillaKim
tags: openapi open-api oas swagger openapi-generator-cli openapi-generator openapitools
categories: 블로그 알쓸코잡 라이브러리
---

> 📚 **알쓸코잡 : 알아두면 쓸모있는 코딩 잡학지식!**

<br>

## 1️⃣ 서론


지난 [**포스팅**](https://gorillakim.github.io/openapi-generator-cli/)에서 `openapi-generator` 는 자바로 만들어진 독립적인 프로그램이라고 말씀드렸습니다. 이러한 이유 때문에 Node 개발환경에서는 `openapi-generator` 를 조작하여 사용하는것이 어렵고 이때문에 `openapi-generator-cli`를 함께 사용한다고 말씀을 드렸습니다.

`openapi-generator-cli` 를 사용하면 각종 커맨드 명령어(Command line interface) 를 통해 `openapi-generator` 를 조작이 가능하지만 명령을 내리기위한 코드가 길어지고 관리가 어렵다는 단점을 갖고 있습니다.

이러한 문제점을 해결하기 위해 `openapitools.json` 이라는것이 존재하는데요, 이게 무엇이고 어떻게 사용하는지 지금부터 살펴보겠습니다.

<br>
<br>


## 2️⃣ openapi-generator 버전 관리

간혹 팀원들과 협업을 하다보면 동일한 Oepnapi spec 을 갖고 openapi-generator 를 통해 생성된 결과물이 서로 다를때가 있습니다. 해당 결과물들을 자세히 보면 띄어쓰기 혹은 interface를 표현하는 방식정도가 달라져 있는것을 볼 수 있습니다.

동일한 Openapi spec 을 갖고 만들었지만 결과물이 다른 이유는 openapi-generator 를 실행시킨 사용자가 서로다른 버전의 openapi-generator 를 사용했기 때문입니다.

openapi-generator 프로그램은 지속적으로 개선되고 있는 프로젝트인데요, 이 때문에 버전에 따라 Openapi spec을 해석하는 방식또한 달라지고 있습니다.

이러한 문제 때문에 `@openapitools/openapi-generator-cli` 버전 2.xx 이상부터는 openapi-generator 버전관리 기능이 패키지에 추가가 되었습니다.


<br>
<br>

## 3️⃣ OpenAPI generator cli

**OpenAPI Generator CLI** 는 OpenAPI Generator의 명령 프롬프트 인터페이스(Command Line Interface 이하 CLI) 버전입니다. OpenAPI Generator CLI를 사용하면 터미널이나 명령 프롬프트에서 CLI명령어를 입력하여 OpenAPI generator 를 실행시켜 코드를 생성하는 것이 가능합니다. 이를 통해 개발자는 자동 코드 생성 기능을 쉽게 사용할 수 있으며, CI/CD 파이프라인이나 스크립트 등에서도 사용할 수 있습니다. OpenAPI Generator CLI 는 개발자들에게 더 큰 유연성과 편의성을 제공하여 코드 생성 및 관리 작업을 자동화할 수 있게 해줍니다.

<br>
<br>

## 4️⃣ What is different?

“그래서 OpenAPI generator 와 OpenAPI generator cli 가 뭔차인데?” 라고 생각하시는 분들이 계실것 같습니다.

이 둘의 가장 큰 차이점은 앞서 설명된것처럼 해당 도구들이 사용되는 환경에 있습니다. **OpenAPI generator** 는 자바로 만들어진 독립적으로 실행가능한 도구입니다. 이 때문에 일부 Node 와 같은 개발환경에서 활용이 불가능하다는 단점이 있습니다. 하지만 **OpenAPI-generator-cli** 는 cli 명령어를 통해 OpenAPI generator 를 실행시키는 것이 가능하기 때문에 Node 와 같은 개발 환경에서도 OpenAPI 스펙 을 통한 코드생성 및 활용이 가능합니다.

위와같은 이유로, 웹 프론트엔드에서는 아래의 명령어를 통해 OpenAPI generator cli 와 OpenAPI generator를 설치하여 개발에 활용하고 있습니다.

<br>

### 🔽 OpenAPI generator install

```
brew install openapi-generator 
```

### 🔽 OpenAPI generator cli install

```
yarn add -D @openapitools/openapi-generator-cli
```

<br>
<br>

## 5️⃣ TMI

[**앞선 포스팅**](https://gorillakim.github.io/open-api-and-openapi/)에서 OpenAPI 는 Swagger 스팩으로부터 파생되었다고 말씀을 드렸었습니다. 때문에 이미 백엔드에서 Swagger를 사용하여 API 문서를 작성하고 있었다면, Swagger에 의해 작성된 OAS문서와OpenAPI Generator를 이용해 손쉽게 코드를 생성할 수 있습니다. 이를 통해 백엔드와 프론트엔드 개발자들은 최신 API 스펙과 일관된 코드를 유지하면서 협업을 원활하게 진행할 수 있습니다.

<br>
<br>

## 🔖 예고편

_“프론트엔드에서 웹 애플리케이션을 만들때 각종 옵션들을 CLI 명령어로 전달하지 않고 OpenAPI generator 를 더 쉽고 잘 활용하는 방법이 없을까요?”_

네, 있습니다. 심지어 매번 openapi-generator 를 설치하지 않아도 되는 방법이 있습니다!

바로 가시죠! openapitools.json 활용편!

> 제작중입니다.

<br>
<br>

```toc

```
<!--stackedit_data:
eyJoaXN0b3J5IjpbMTA5MjI3MTQ1OV19
-->