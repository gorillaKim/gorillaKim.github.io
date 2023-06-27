---
emoji: ✍️
title: "OpenAPI-generator 와 OpenAPI-generator-cli"
date: '2023-06-27 23:00:00'
author: gorillaKim
tags: openapi open-api oas swagger openapi-generator-cli openapi-generator
categories: 블로그 알쓸코잡 라이브러리
---

> 📚 **알쓸코잡 : 알아두면 쓸모있는 코딩 잡학지식!**

<br>

## 1️⃣ 서론

프론트엔드 영역에서 웹애플리케이션을 개발하다 보면 종종 백엔드 API와의 통신을 필요로 합니다. 이때 API와의 통합 작업은 많은 시간과 노력을 요구합니다.

특히 타입스크립트를 사용하고 있다면, 해야할 작업이 훨씬 많아지게 되는데요. 백엔드로 데이터를 요청할때 어떠한 형태로 보내야할지, 데이터를 받을때 어떠한 형태로 받을지에 대한 인터페이스 정의가 필요해지기 때문입니다.

이러한 작업을 더욱 효율적으로 수행하고 일관성 있는 코드를 유지하기 위해서 **OpenAPI Generator** 를 활용하는 방법이 있습니다.

지금부터 OpenAPI Generator 가 무엇인지 알아보도록 하겠습니다.

<br>
<br>

## 2️⃣ OpenAPI generator

[**앞선 포스팅**](https://gorillakim.github.io/open-api-and-openapi/)에서 OpenAPI 와 OpenAPI를 만든 OpenAPI Initiative에 대해서 언급한적이 있었습니다.

OpenAPI Generator는 OpenAPI Initiative 에 의해 시작된 프로젝트중 하나로서, Java로 개발된 독립 실행형 도구입니다. 이 도구를 사용하면 다양한 프로그래밍 언어로 작성된 API 클라이언트 라이브러리, 서버 스켈레톤 코드, 데이터 모델 등을 자동으로 생성할 수 있습니다.

OpenAPI Generator는 미리 정의된 [**Generator**](https://openapi-generator.tech/docs/generators)라 불리는 템플릿과 코드 생성기를 사용하여 OpenAPI 스펙을 분석하고 코드를 생성합니다. 이렇게 생성된 코드는 개발자가 API 호출 함수를 사용하거나 구현할 때 기반으로 사용됩니다.

> [Geneartor 종류](https://openapi-generator.tech/docs/generators)에 따라 다양한 output(Java, Kotlin, typescript, etc.)을 만들 수 있습니다.
> 
> 웹 프론트 에서는 [**typescript-axios**](https://openapi-generator.tech/docs/generators/typescript-axios)  나 [**typescript-fetch**](https://openapi-generator.tech/docs/generators/typescript-fetch) 를 주로 사용합니다

웹 프론트엔드 에서는 주로 [**typescript-axios**](https://openapi-generator.tech/docs/generators/typescript-axios)  나 [**typescript-fetch**](https://openapi-generator.tech/docs/generators/typescript-fetch)  라는 generator를 활용하고 있습니다.

그 이유는, 이를 통해 자동으로 생성된 API 인터페이스와 API 호출 함수를 통해 백엔드와 프론트엔드 간의 주고받는 데이터들의 타입을 유지할수 있기 때문입니다.

<br>

### ✅ 요약

OpenAPI Generator는 OpenAPI(Swagger) 스펙을 기반으로 API 클라이언트나 서버 코드를 자동으로 생성해주는 도구입니다.

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
eyJoaXN0b3J5IjpbOTc5MTY2NzE5XX0=
-->