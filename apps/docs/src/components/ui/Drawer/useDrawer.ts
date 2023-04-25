import { Dispatch, SetStateAction, useEffect } from 'react'
import { DrawerProps, DrawerState } from './types'
import {
  closeDrawerLeft,
  closeDrawerRight,
  fadeInLayer,
  fadeOutLayer,
  openDrawerLeft,
  openDrawerRight,
} from './drawer.css'
import { BoxProps } from '@kodiui/ui'

export const useDrawer = (
  props: DrawerProps,
  drawerState: DrawerState,
  setDrawerState: Dispatch<SetStateAction<DrawerState>>
) => {
  const drawerSide: BoxProps['justifyContent'] = props.side === 'left' ? 'flex-start' : 'flex-end'

  useEffect(() => {
    if (props.open) {
      setDrawerState(DrawerState.Open)
    } else if (drawerState === DrawerState.Open) {
      setDrawerState(DrawerState.Closing)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.open])

  const handleAnimationEnd = () => {
    if (drawerState === DrawerState.Closing) {
      setDrawerState(DrawerState.Closed)
    }
  }

  const getOpenSideAnimation = (): string => {
    switch (props.side) {
      case 'right':
        return openDrawerRight
      case 'left':
        return openDrawerLeft
      default:
        return openDrawerRight
    }
  }

  const getCloseSideAnimation = (): string => {
    switch (props.side) {
      case 'right':
        return closeDrawerRight
      case 'left':
        return closeDrawerLeft
      default:
        return closeDrawerRight
    }
  }

  const getAnimation = (drawerState: DrawerState): string => {
    if (drawerState === DrawerState.Open) return getOpenSideAnimation()
    else return getCloseSideAnimation()
  }

  const isDrawerStateClosed = (): boolean => {
    if (drawerState === DrawerState.Closed) return true
    else return false
  }

  const backdropAnimation = drawerState === DrawerState.Open ? fadeInLayer : fadeOutLayer

  return {
    drawerSide,
    handleAnimationEnd,
    getOpenSideAnimation,
    getCloseSideAnimation,
    getAnimation,
    isDrawerStateClosed,
    backdropAnimation,
  }
}
