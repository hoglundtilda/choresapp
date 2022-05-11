import { RequiredSettings } from "./env";

export const keys = {
  privateKeyFile: RequiredSettings.privateKeyFile as string,
  privateKeyPassphrase: RequiredSettings.privateKeyPassphrase as string,
  publicKeyFile: RequiredSettings.publicKeyFile as string,
}
