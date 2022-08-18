import * as React from 'react'
import { Animated, RefreshControl, StatusBar, TextInput } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import { fetchListCat, fetchMoreListCat } from '../../store/action/listAction'
import { LoadingBar } from '../atom'
import { Card } from '../organism'
import { ListContainer } from '../template'

const List = (Props) => {
  const dispatch = useDispatch()
  const { catList, isLoadingGetCatList } = useSelector((state) => state.list);
  const [textValue, setTextValue] = React.useState('')
  const [refreshing, setRefreshing] = React.useState(false)
  const [page, setPage] = React.useState(1)
  const scrollY = React.useRef(new Animated.Value(0)).current

  React.useEffect(() => {
    dispatch(fetchListCat('', page))
  }, [])

  React.useEffect(() => {
    dispatch(fetchMoreListCat(textValue, page))
  }, [page])

  const onRefresh = React.useCallback(() => {
    dispatch(fetchListCat('', page))
  }, [])

  const onChangeText = (t) => {
    setTextValue(t)
  }

  React.useEffect(() => {
    const timeoutId = setTimeout(() => {
      setPage(1)
      dispatch(fetchListCat(textValue, 1))
    }, 500)
    return () => {
      clearTimeout(timeoutId)
    }
  }, [textValue])

  return (
    <>
      <ListContainer>
        <TextInput
          style={{
            height: 40,
            marginTop: 20,
            marginRight: 20,
            marginLeft: 20,
            borderWidth: 1,
            padding: 10,
            borderRadius: 4,
            borderColor: 'rgba(0, 0, 0, 0.4)'
          }}
          onChangeText={onChangeText}
          value={textValue}
          placeholder="Search Cat Name"
          keyboardType="ascii-capable"
        />
        {isLoadingGetCatList && <LoadingBar />}
        {!isLoadingGetCatList && <>
          <Animated.FlatList
            data={catList.data}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { y: scrollY } } }],
              { useNativeDriver: true }
            )}
            contentContainerStyle={{
              padding: 20,
              paddingTop: StatusBar.currenctHeight || 42,
            }}
            keyExtractor={item => item.id}
            renderItem={({ item, index }) => {
              return (
                <Card item={item} index={index} scrollY={scrollY} />
              )
            }}
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh}
              />
            }
            onEndReached={(info) => {
              if (catList.total > page * 10) {
                setPage(page + 1)
              } else {
                setPage(Math.ceil(catList.total / 10))
              }
            }}
          />
        </>}
      </ListContainer>
    </>
  )
}

export default List