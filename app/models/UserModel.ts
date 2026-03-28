/**
 * DejaDo Loop — UserModel
 * Stores user profile, subscription status, and preferences.
 */

import { Instance, SnapshotIn, SnapshotOut, types } from "mobx-state-tree"
import { withSetPropAction } from "./helpers/withSetPropAction"

export const UserModel = types
  .model("User", {
    uid: types.optional(types.string, ""),
    displayName: types.optional(types.string, ""),
    email: types.optional(types.string, ""),
    photoURL: types.optional(types.string, ""),
    // Subscription
    isPro: types.optional(types.boolean, false),
    subscriptionExpiresAt: types.optional(types.string, ""), // ISO string
    // Onboarding
    hasCompletedOnboarding: types.optional(types.boolean, false),
    // Preferences
    morningAffirmationTime: types.optional(types.string, "08:00"),
    notificationsEnabled: types.optional(types.boolean, true),
    theme: types.optional(types.enumeration(["light", "dark", "system"]), "system"),
    // Metadata
    createdAt: types.optional(types.string, () => new Date().toISOString()),
    lastActiveAt: types.optional(types.string, () => new Date().toISOString()),
  })
  .actions(withSetPropAction)
  .actions((self) => ({
    setProfile(name: string, email?: string) {
      self.displayName = name
      if (email) self.email = email
    },

    completeOnboarding() {
      self.hasCompletedOnboarding = true
    },

    activatePro(expiresAt: string) {
      self.isPro = true
      self.subscriptionExpiresAt = expiresAt
    },

    deactivatePro() {
      self.isPro = false
      self.subscriptionExpiresAt = ""
    },

    updateLastActive() {
      self.lastActiveAt = new Date().toISOString()
    },

    setTheme(theme: "light" | "dark" | "system") {
      self.theme = theme
    },
  }))
  .views((self) => ({
    get firstName(): string {
      return self.displayName.split(" ")[0] || self.displayName
    },

    get isLoggedIn(): boolean {
      return !!self.uid
    },

    get proIsActive(): boolean {
      if (!self.isPro) return false
      if (!self.subscriptionExpiresAt) return true
      return new Date(self.subscriptionExpiresAt) > new Date()
    },
  }))

export interface User extends Instance<typeof UserModel> {}
export interface UserSnapshotIn extends SnapshotIn<typeof UserModel> {}
export interface UserSnapshotOut extends SnapshotOut<typeof UserModel> {}
