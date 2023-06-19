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

여기서 제가 집중에서 이야기를 해보고 싶은 내용은 **dependencies array 를 통한 useEffect 로직수행 과정ㅇ**입니다.

**dependencies array** 가 변화 했을때만 동작한다는 조건은 해당 함수들 내부에서 **dependencies array** 에 담어준 값들을 기억해두고 매 랜더시마다 해당 랜더 시점의 값과 비교한다는것을 의미합니다.

위의 코드 예시에서는 우리가 **dependencies array** 에 Type 이 숫자형인 reportId를 담아주었습니다. 이처럼 문자형, 숫자형 과 같은 값들에 대해서는 React 가 정확히 비교하여 랜더링을 해줍니다.

하지만, Object, Array 와 같은 데이터 형들은 React가 비교를 못하고 같은 값임에도 변경 되었다고 인식합니다.

## 🤔 본론

## 💡 결론 


한번도 수정합니다.

```toc

```
<!--stackedit_data:
eyJoaXN0b3J5IjpbMTE5NjU3OTU2OF19
-->