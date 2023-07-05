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


지난 [**포스팅**](https://gorillakim.github.io/openapi-generator-cli/)에서 `openapi-generator` 는 자바로 만들어진 독립적인 프로그램이라고 말씀드렸습니다. 이러한 이유 때문에 Node 개발환경에서는 `openapi-generator` 를 조작하여 사용하는것이 어렵고 이때문에 `openapi-generator-cli` 를 함께 사용한다고 말씀을 드렸습니다.

`openapi-generator-cli` 를 사용하면 각종 커맨드 명령어(Command line interface) 를 통해 `openapi-generator` 를 조작이 가능하지만 명령을 내리기위한 코드가 길어지고 관리가 어렵다는 단점을 갖고 있습니다.

이러한 문제점을 해결하기 위해 `openapitools.json` 이라는것이 존재하는데요, 이게 무엇이고 어떻게 사용하는지 지금부터 살펴보겠습니다.

<br>
<br>


## 2️⃣ openapi-generator 버전 관리

간혹 팀원들과 협업을 하다보면 동일한 Oepnapi spec 을 갖고 `openapi-generator` 를 통해 생성된 결과물이 서로 다를때가 있습니다. 해당 결과물들을 자세히 보면 띄어쓰기 혹은 interface를 표현하는 방식정도가 달라져 있는것을 볼 수 있습니다.

동일한 Openapi spec 을 갖고 만들었지만 결과물이 다른 이유는 `openapi-generator` 를 실행시킨 사용자가 서로다른 버전의 `openapi-generator` 를 사용했기 때문입니다.

openapi-generator 프로그램은 지속적으로 개선되고 있는 프로젝트인데요, 이 때문에 버전에 따라 Openapi spec을 해석하는 방식또한 달라지고 있습니다.

이러한 문제 때문에 `@openapitools/openapi-generator-cli` 버전 2.xx 이상부터는 `openapi-generator` 버전관리 기능이 패키지에 추가가 되었습니다.

![enter image description here](https://github.com/OpenAPITools/openapi-generator-cli/blob/master/img/vm.gif?raw=true)

아래의 명령어를 통해 `openapi-generator` 패키지 조회가 가능합니다.

```shell
// Openapi-generator 패키지 리스트 조회
npx openapi-generator-cli version-manager list

// Openapi-generator 안정화 버전 패키지 리스트 조회
npx openapi-generator-cli version-manager list stable
```

그리고 아래의 명령어를 통해 원하는 버전의 `openapi-generator` 를 설치할 수 있으며, 설치 시 `openapitools.json` 라는 이름의 파일 한개가 생성된것을 확인하실 수 있습니다.

```shell
// 가장 최신 버전으로 셋팅
npx openapi-generator-cli version-manager set latest

// 4.xx 때 안정된 버전으로 셋팅
npx openapi-generator-cli version-manager set 4 stable
```

<br>
<br>


## 3️⃣ openapitools.json 이란?

`openapitools.json` 은 `openapi-generator` 를 사용하기 위한 일종의 config 파일인데요, 해당 파일에서 사용할 `openapi-generator` 에 대한 버전명시 뿐 아니라 생성된 파일이 저장될 경로등 다양한 설정을 구성하실 수 있습니다.

공식 깃헙 사이트를 방문해 보면, `opeanpitools.json` 에 대한 예제코드가 다음과 같이 나와 있습니다.

```json
{
  "$schema": "node_modules/@openapitools/openapi-generator-cli/config.schema.json",
  "spaces": 2,
  "generator-cli": {
    "version": "4.3.1",
    "storageDir": "~/my/custom/storage/dir", // optional
    "generators": { // optional
      "v2.0": { // any name you like (just printed to the console log or reference it using --generator-key) 
        "generatorName": "typescript-angular",
        "output": "#{cwd}/output/v2.0/#{ext}/#{name}",
        "glob": "examples/v2.0/{json,yaml}/*.{json,yaml}",
        "additionalProperties": {
          "ngVersion": "6.1.7",
          "npmName": "restClient",
          "supportsES6": "true",
          "npmVersion": "6.9.0",
          "withInterfaces": true
        }
      },
      "v3.0": { // any name you like (just printed to the console log or reference it using --generator-key) 
        "generatorName": "typescript-fetch",
        "output": "#{cwd}/output/v3.0/#{ext}/#{name}",
        "glob": "examples/v3.0/petstore.{json,yaml}"
      }
    }
  }
}
```

OpenAPI Tools은 API 개발과 관련된 작업을 보다 쉽게 처리하기 위한 유용한 도구입니다. 그 중 하나인 `openapitools.json` 파일은 `openapi-generator` 를 사용하기 위한 옵션들을 구성하고 관리하는 데 사용되는 파일입니다.

그러나 아쉽게도 [**공식 문서**](https://github.com/OpenAPITools/openapi-generator-cli#configuration)에서는 `openapitools.json` 사용 방법에 대한 자세한 내용이 부족한 상황입니다. 예제 코드에 대한 설명이나 다른 가능한 옵션들에 대한 정보도 찾기 어려울 수 있습니다. 이러한 이유로 `openapitools.json` 을 보다 효율적으로 활용하기 위해 저희는 스터디를 진행하게 되었습니다.

`openapitools.json` 은 결국 `openapi-generator` 를 조작하기 위한 설정 파일로서, `openapi-generator-cli` 에 구성된 다양한 옵션들을 활용하고 있습니다. 따라서 우리는 [**openapi-generator의 공식 문서**](https://openapi-generator.tech/docs/usage/#generate) 와 [**openapi-generator-cli-shcema 파일**](https://github.com/OpenAPITools/openapi-generator-cli/blob/master/apps/generator-cli/src/config.schema.json) 참고하여 `openapitools.json` 을 최대한 활용하는 방법을 찾아냈습니다.

이 스터디를 통해 `openapitools.json` 의 다양한 옵션들과 그 활용 방법에 대한 이해를 높일 수 있었습니다. 더 나아가 API 개발을 보다 효율적으로 수행할 수 있도록 예제 코드와 함께 옵션들에 대한 상세한 설명을 블로그에 공유하고자 합니다. 이를 통해 개발자들이 `openapitools.json` 을 더욱 아름답게 활용할 수 있도록 돕고자 합니다.

<br>
<br>


## 4️⃣ openapitools.json 사용법!

> :warning: 읽기전에 필독!,
> 
> 아래 해당 내용은 openapitools.json 의 모든 활용법을 알려드리지 않습니다. 자주 사용되는 옵션들에 대하여 알려드리고자 작성된 내용입니다.
> 
> 보다 다양한 옵션과 옵션별 스펙은 [**공식문서**](https://github.com/OpenAPITools/openapi-generator-cli/blob/master/apps/generator-cli/src/config.schema.json)를 참고 바랍니다.

```json
{
  "$schema": "node_modules/@openapitools/openapi-generator-cli/config.schema.json",
  "spaces": 2,
  
  /* 
  * generator-cli: openapi-generator 를 실행시킬때 사용할 옵션을 작성하는 곳입니다. 
  * ( 보다 상세한 옵션은 아래 표를 참고 )
  */
  "generator-cli": {
    "version": "4.3.1" // or the current latest version ;)
  }
}
```

<br>
<br>

```javascript
{
	/* 필수값이 아닙니다. 
	* 사용할 `openapi-generator` 버전을 의미합니다.
	* 해당 옵션 설정 후 실행시 필요한 버전을 자동으로 다운받아 사용됩니다.
	*/
	version: "ex) 4.3.1", 
	
	/* 필수값이 아닙니다. 
	* `openapi-generator (.jar)` 파일이 저장될 경로
	*/
	storageDir: "ex) ~/my/custom/storage/dir", 

	/* 필수값이 아닙니다. 
	* openapi-generator-cli version 은 2.5.x 버전부터 사용가능한 옵션입니다.
	* https://github.com/OpenAPITools/openapi-generator-cli/blob/master/apps/generator-cli/src/config.schema.json
	*/
	generators: {
		[name]: { // 어떤 이름도 들어올 수 있음
			generatorName: '',
			
		}
	}
}
```

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
eyJoaXN0b3J5IjpbLTE2NTI4OTQ2MjMsNzM3NjM4MzY4LDkyMD
c1NDU4OV19
-->