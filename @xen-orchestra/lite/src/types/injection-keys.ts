import type { FetchedStats, Stat } from "@/composables/fetch-stats.composable";
import type { HostStats, VmStats } from "@/libs/xapi-stats";
import type { XenApiHost } from "@/libs/xen-api/xen-api.types";
import type { ValueFormatter } from "@/types/chart";
import type { ComputedRef, InjectionKey } from "vue";

export const IK_MENU_TELEPORTED = Symbol() as InjectionKey<boolean>;

export const IK_TAB_BAR_DISABLED = Symbol() as InjectionKey<
  ComputedRef<boolean>
>;

export const IK_CHART_VALUE_FORMATTER = Symbol() as InjectionKey<
  ComputedRef<ValueFormatter>
>;

export const IK_INPUT_TYPE = Symbol() as InjectionKey<"select" | "textarea">;

export const IK_CHECKBOX_TYPE = Symbol() as InjectionKey<
  "checkbox" | "radio" | "toggle"
>;

export const IK_FORM_HAS_LABEL = Symbol() as InjectionKey<ComputedRef<boolean>>;

export const IK_FORM_LABEL_DISABLED = Symbol() as InjectionKey<
  ComputedRef<boolean>
>;

export const IK_FORM_INPUT_COLOR = Symbol() as InjectionKey<
  ComputedRef<"success" | "error" | "warning" | "info" | undefined>
>;

export const IK_MENU_DISABLED = Symbol() as InjectionKey<ComputedRef<boolean>>;

export const IK_MENU_HORIZONTAL = Symbol() as InjectionKey<
  ComputedRef<boolean>
>;

export const IK_CLOSE_MENU = Symbol() as InjectionKey<() => void>;

export const IK_HOST_STATS = Symbol() as InjectionKey<
  ComputedRef<Stat<HostStats>[]>
>;

export const IK_VM_STATS = Symbol() as InjectionKey<
  ComputedRef<Stat<VmStats>[]>
>;

export const IK_HOST_LAST_WEEK_STATS = Symbol() as InjectionKey<
  FetchedStats<XenApiHost, HostStats>
>;

export const IK_BUTTON_GROUP_DISABLED = Symbol() as InjectionKey<
  ComputedRef<boolean>
>;

export const IK_BUTTON_GROUP_BUSY = Symbol() as InjectionKey<
  ComputedRef<boolean>
>;

export const IK_BUTTON_GROUP_OUTLINED = Symbol() as InjectionKey<
  ComputedRef<boolean>
>;

export const IK_BUTTON_GROUP_TRANSPARENT = Symbol() as InjectionKey<
  ComputedRef<boolean>
>;

export const IK_BUTTON_GROUP_COLOR = Symbol() as InjectionKey<
  ComputedRef<"success" | "error" | "warning" | "info">
>;

export const IK_CARD_GROUP_VERTICAL = Symbol() as InjectionKey<boolean>;

export const IK_INPUT_ID = Symbol() as InjectionKey<ComputedRef<string>>;
