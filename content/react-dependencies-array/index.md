---
emoji: ✍️
title: "React.useEffect 와 dependencies Array"
date: '2023-02-23 23:00:00'
author: gorillaKim
tags: react useEffect dependencies
categories: react-optimization
---

## 😃 서론
React를 사용하다 보면 특정 컴포넌트가 화면에 그려질때 API를 호출하여 데이터를 가져오는등 특수한 로직을 수행해야할때가 있습니다. 이럴때 우리는 일반적으로 useEffect를 많이 활용하게 됩니다.

이렇듯 useEffect는 특정한 컴포넌트가 랜더될때(그려질 때) 특수한 로직을 처리하기 위해 사용되는 React의 공식 hook중 하나입니다. useEffect는 첫 랜더시에만 특정 로직이 동작하게 할 수도 있지만 dependencies array 를 통해 특정 값들이 변화되었을때만 특정 로직이 동작하도록 할수도 있습니다.

```typescript
const [reportId, setReportId] = useEffect<number>(1)

useEffect(()=> {
  // reportId가 달라질때마다 호출 됨
  axios.get(`/reports/${reportId}`)
},[axios, reportId])
```

이처럼 의도치 않은 상황에 변화를 만드는 함수를 Side effect function 이라고 하는데요, 공식적으로 제공되는 hook들 중에는 useEffect 말고도 useMemo, useCallback 등이 있습니다.

여기서 제가 집중에서 이야기를 해보고 싶은 내용은 **dependencies array 를 통한 useEffect 내부 로직수행 과정**입니다.

**dependencies array** 가 변화 했을때만 동작한다는 조건은 해당 함수들 내부에서 **dependencies array** 에 담어준 값들을 기억해두고 매 랜더시마다 해당 랜더 시점의 값과 비교한다는것을 의미합니다.

위의 코드 예시에서는 우리가 **dependencies array** 에 Type 이 숫자형인 reportId를 담아준것을 예로들 수 있습니다. 

이때 우리가 중요하게 봐야하는 점은 **dependencies array** 에 담아주는 변수들의 타입입니다. 앞선 예제의 reportId처럼  문자형, 숫자형 과 같은 값들에 대해서는 React 가 전 후를 비교하여 변경된 시점에만 내부 로직을 수행해줍니다.

하지만, **Object, Array** 와 같은 데이터 형들은 React가 비교를 못하고 같은 값임에도 변경 되었다고 인식합니다.

```typescript
const [reportId, setReportId] = useEffect<number>(1)
const [apiProps, setApiProps] = useEffect<{name: string}>({name: ''})

useEffect(()=> {
  // reportId가 달라질때마다 호출 됨
  // apiProps 변경 유무 상관없이 매 랜더시마다 호출 됨
  axios.put(`/reports/${reportId}`, apiProps)
},[axios, reportId, apiProps]
```
> 위의 코드에서는 apiProps 의 변경유무를 react가 알 수 없기 때문에 매 랜더시마다 axios.put(`/reports/${reportId}`, apiProps) 함수를 호출하게 됩니다.

**어째서 Object 형태의 데이터는 비교를 잘 못하는것 일까요?**

원인은 생각보다 간단합니다. React 에서는 **Shallow compare** 만 지원하기 때문인데요, 다시말해 **deep compare 을 필요로 하는 Object, Array 등**은 지원하지 않는다는말을 의미합니다. 이러한 이유 때문에 **dependencies array** 에 Object나 Array를 담아주면 매 랜더시마다 전 후결과가 다르다고 판단하여 내부 로직을 수행하게 되는것이죠.

## 🤔 본론
사실 React를 개발하다보면 변수를 Object 형태로 관리하는 상황들이 많이 발생합니다. 예를들어 api 호출을 통해 받아온 Metric 형태 데이터나, 유저정보 등이 있을수 있고 또 api 호출을 위해 담아줘야 하는 props 등이 있습니다.

그렇다면 이러한 상황들에서 useEffect를 써야 한다면 어떻게 해야할까요?

가장 단순하면서 나이스한 방법은  _**dependencies array** 에 Shallow compare 가 가능한 Type의 값들만 담아주는것입니다._  

대표적인 예시로 **Object 형태의 상태값을 더 잘게 쪼개어 숫자와 문자형태로 분리**하거나, **문자열 배열등을 비구조 할당**하여 **dependencies array** 에 담아주는 방법등 여러방법이 있습니다.

```typescript
const [reportId, setReportId] = useEffect<number>(1)
const [apiProps, setApiProps] = useEffect<{name: string}>({name: ''})

useEffect(()=> {
  // reportId가 달라질때마다 호출 됨
  // apiProps 내부 값들이 각각 달라질때마다 호출 됨
  axios.put(`/reports/${reportId}`, apiProps)
},[axios, reportId, ...Object.values(apiProps)]
```

그렇다고 해서 위와같은 방법은 썩 맘에드는 방법은 아닐겁니다.  api props 경우에는 내부 property 가 많지 않지만 api를 통해 받아온 Metric data는 몇백개의 Row data 가될수도 있고, 각 Row data 의 형태가  Object가 아니라고 보장할 수 없을테니까요.

제일 좋은 방법은 useEffect를 사용하지 않는 방식으로 로직을 개선하는 것이겠지만, 늘 그렇듯 다양한 외부환경적 요소에 의해 useEffect를 써야만 하는 불가피한 상황들이 생겨날겁니다. 이럴때는 아래의 방법이 도움이 죌 수 있습니다.

### (1) JSON.stringify()
JSON.stringify() 메서드는 Object 형 데이터를 문자열로 바꿔주는 기능을 수행합니다. 이를 통해 변환된 문자열을 dependencies array 에 담아주게되면 리액트가 그 변화를 감지할 수 있게 됩니다.

하지만, 너무 많은 데이터를 문자열화 할 경우에는 성능에 문제가 될 수 있음으로 주의하셔야 합니다.

```typescript
const [reportId, setReportId] = useEffect<number>(1)
const [apiProps, setApiProps] = useEffect<{name: string}>({name: ''})

useEffect(()=> {
  // reportId가 달라질때마다 호출 됨
  // apiProps 내부 값들이 각각 달라질때마다 호출 됨
  axios.put(`/reports/${reportId}`, apiProps)
},[axios, reportId, JSON.string(apiProps)]
```

### (2) useDeepCompareMemoize

## 💡 결론 


한번도 수정합니다.

```toc

```
<!--stackedit_data:
eyJoaXN0b3J5IjpbMzcwMDQ3NjM0XX0=
-->