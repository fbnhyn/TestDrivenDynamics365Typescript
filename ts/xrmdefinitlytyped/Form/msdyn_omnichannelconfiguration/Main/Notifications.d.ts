declare namespace Form.msdyn_omnichannelconfiguration.Main {
  namespace Notifications {
    namespace Tabs {
      interface agent_reject_notification_settings extends Xrm.SectionCollectionBase {
        get(name: "agent_reject_notification_settings_section"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface missed_notification_settings extends Xrm.SectionCollectionBase {
        get(name: "missed_notifications_settings_section"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface notification_templates extends Xrm.SectionCollectionBase {
        get(name: "notification_templates_section"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface tab_sound_notification_settings extends Xrm.SectionCollectionBase {
        get(name: "tab_sound_notification_settings_section_3"): Xrm.PageSection;
        get(name: "tab_sound_notification_settings_section_4"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "msdyn_dnd_presence_lookup"): Xrm.LookupAttribute<"msdyn_presence">;
      get(name: "msdyn_enable_agent_reject_notifications"): Xrm.OptionSetAttribute<boolean>;
      get(name: "msdyn_enable_missed_notifications"): Xrm.OptionSetAttribute<boolean>;
      get(name: "msdyn_enablesoundnotifications"): Xrm.OptionSetAttribute<boolean>;
      get(name: "msdyn_inactive_presence_lookup"): Xrm.LookupAttribute<"msdyn_presence">;
      get(name: "msdyn_soundformcontrol"): Xrm.Attribute<string>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "msdyn_agentrejectnotificationssubheading"): Xrm.BaseControl;
      get(name: "msdyn_dnd_presence_lookup"): Xrm.LookupControl<"msdyn_presence">;
      get(name: "msdyn_enable_agent_reject_notifications"): Xrm.OptionSetControl<boolean>;
      get(name: "msdyn_enable_missed_notifications"): Xrm.OptionSetControl<boolean>;
      get(name: "msdyn_enablesoundnotifications"): Xrm.OptionSetControl<boolean>;
      get(name: "msdyn_inactive_presence_lookup"): Xrm.LookupControl<"msdyn_presence">;
      get(name: "msdyn_missednotificationssubheading"): Xrm.BaseControl;
      get(name: "msdyn_soundformcontrol"): Xrm.StringControl;
      get(name: "templates_grid"): Xrm.SubGridControl<"msdyn_notificationtemplate">;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "agent_reject_notification_settings"): Xrm.PageTab<Tabs.agent_reject_notification_settings>;
      get(name: "missed_notification_settings"): Xrm.PageTab<Tabs.missed_notification_settings>;
      get(name: "notification_templates"): Xrm.PageTab<Tabs.notification_templates>;
      get(name: "tab_sound_notification_settings"): Xrm.PageTab<Tabs.tab_sound_notification_settings>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Notifications extends Xrm.PageBase<Notifications.Attributes,Notifications.Tabs,Notifications.Controls> {
    getAttribute(attributeName: "msdyn_dnd_presence_lookup"): Xrm.LookupAttribute<"msdyn_presence">;
    getAttribute(attributeName: "msdyn_enable_agent_reject_notifications"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "msdyn_enable_missed_notifications"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "msdyn_enablesoundnotifications"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "msdyn_inactive_presence_lookup"): Xrm.LookupAttribute<"msdyn_presence">;
    getAttribute(attributeName: "msdyn_soundformcontrol"): Xrm.Attribute<string>;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "msdyn_agentrejectnotificationssubheading"): Xrm.BaseControl;
    getControl(controlName: "msdyn_dnd_presence_lookup"): Xrm.LookupControl<"msdyn_presence">;
    getControl(controlName: "msdyn_enable_agent_reject_notifications"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "msdyn_enable_missed_notifications"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "msdyn_enablesoundnotifications"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "msdyn_inactive_presence_lookup"): Xrm.LookupControl<"msdyn_presence">;
    getControl(controlName: "msdyn_missednotificationssubheading"): Xrm.BaseControl;
    getControl(controlName: "msdyn_soundformcontrol"): Xrm.StringControl;
    getControl(controlName: "templates_grid"): Xrm.SubGridControl<"msdyn_notificationtemplate">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
