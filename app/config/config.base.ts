/**
 * DejaDo Loop — Base Config
 * Shared across dev and prod environments.
 */

export interface ConfigBaseProps {
  persistNavigation: "always" | "dev" | "prod" | "never"
  catchErrors: "always" | "dev" | "prod" | "never"
  exitRoutes: string[]
  appName: string
  appVersion: string
  supportEmail: string
  privacyPolicyUrl: string
  termsUrl: string
}

const BaseConfig: ConfigBaseProps = {
  persistNavigation: "dev",
  catchErrors: "always",
  exitRoutes: ["Home"],
  appName: "DejaDo Loop",
  appVersion: "1.0.0",
  supportEmail: "boulder257@gmail.com",
  privacyPolicyUrl: "https://github.com/Archbishchop/dejado-loop/blob/main/PRIVACY_POLICY.md",
  termsUrl: "https://github.com/Archbishchop/dejado-loop/blob/main/PRIVACY_POLICY.md",
}

export default BaseConfig
