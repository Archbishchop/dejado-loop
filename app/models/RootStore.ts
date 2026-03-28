/**
 * DejaDo Loop — RootStore
 * The single source of truth for the entire app.
 */

import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { HabitStoreModel } from "./HabitStore"
import { UserModel } from "./UserModel"

export const RootStoreModel = types.model("RootStore").props({
  habitStore: types.optional(HabitStoreModel, {}),
  user: types.optional(UserModel, {}),
})

export interface RootStore extends Instance<typeof RootStoreModel> {}
export interface RootStoreSnapshot extends SnapshotOut<typeof RootStoreModel> {}
