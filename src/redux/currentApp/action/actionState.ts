import {
  RESTAPIParamValues,
  MySQLParamValues,
} from "@/page/App/components/ActionEditor/Resource"

type ActionStatus = "warning" | string

interface ActionConnectNetwork {
  totalTime: number
  prepareTime: number
  frontendTime: number
  backendTime: number
  responseSize: number
}

export interface ActionItemConfig {
  [index: string]: any
  transformer?: string
  events?: []
}

export interface ActionItem {
  actionId: string
  displayName: string
  resourceId?: string
  actionType: string
  status?: ActionStatus
  network?: ActionConnectNetwork
  config?: ActionItemConfig
  actionTemplate?: ActionItemConfig
}

export type ActionListState = ActionItem[]

export const actionInitialState: ActionListState = []
