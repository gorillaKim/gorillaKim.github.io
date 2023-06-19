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

이처럼 의도치 않은 상황에 변화를 만드는 함수를 Side effect function 이라고 하는데요, 공식적으로 제공되는 hook등 ㅈ useEffect 말고도 useMemo, useCallback 등이 이러한 함수에 속합니다.

## 🤔 본론

## 💡 결론 


한번도 수정합니다.

```toc

```
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTI1MjM4ODA4MF19
-->