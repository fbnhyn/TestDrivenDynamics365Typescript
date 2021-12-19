declare namespace Form.msdyn_consoleapplicationnotificationtemplate.Main {
  namespace Information {
    namespace Tabs {
      interface _9730037dab234a349b055a0e50e1c401 extends Xrm.SectionCollectionBase {
        get(name: "{9730037d-ab23-4a34-9b05-5a0e50e1c401}_section_2"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "msdyn_acceptbuttontext"): Xrm.Attribute<string>;
      get(name: "msdyn_autoacceptnotification"): Xrm.OptionSetAttribute<boolean>;
      get(name: "msdyn_desktopnotificationsettings"): Xrm.OptionSetAttribute<number>;
      get(name: "msdyn_icon"): Xrm.Attribute<string>;
      get(name: "msdyn_name"): Xrm.Attribute<string>;
      get(name: "msdyn_notificationbuttons"): Xrm.Attribute<string>;
      get(name: "msdyn_rejectbuttonautoaccept"): Xrm.OptionSetAttribute<boolean>;
      get(name: "msdyn_rejectbuttontext"): Xrm.Attribute<string>;
      get(name: "msdyn_showtimeout"): Xrm.OptionSetAttribute<boolean>;
      get(name: "msdyn_theme"): Xrm.OptionSetAttribute<msdyn_consoleapplicationnotificationtemplate_msdyn_theme>;
      get(name: "msdyn_timeout"): Xrm.NumberAttribute;
      get(name: "msdyn_title"): Xrm.Attribute<string>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "NotificationFields"): Xrm.BaseControl;
      get(name: "msdyn_acceptbuttontext"): Xrm.StringControl;
      get(name: "msdyn_autoacceptnotification"): Xrm.OptionSetControl<boolean>;
      get(name: "msdyn_desktopnotificationsettings"): Xrm.OptionSetControl<number>;
      get(name: "msdyn_icon"): Xrm.StringControl;
      get(name: "msdyn_infosubheader"): Xrm.BaseControl;
      get(name: "msdyn_name"): Xrm.StringControl;
      get(name: "msdyn_notificationbuttons"): Xrm.StringControl;
      get(name: "msdyn_preview"): Xrm.BaseControl;
      get(name: "msdyn_rejectbuttonautoaccept"): Xrm.OptionSetControl<boolean>;
      get(name: "msdyn_rejectbuttontext"): Xrm.StringControl;
      get(name: "msdyn_showtimeout"): Xrm.OptionSetControl<boolean>;
      get(name: "msdyn_theme"): Xrm.OptionSetControl<msdyn_consoleapplicationnotificationtemplate_msdyn_theme>;
      get(name: "msdyn_timeout"): Xrm.NumberControl;
      get(name: "msdyn_title"): Xrm.StringControl;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "{9730037d-ab23-4a34-9b05-5a0e50e1c401}"): Xrm.PageTab<Tabs._9730037dab234a349b055a0e50e1c401>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "msdyn_acceptbuttontext"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_autoacceptnotification"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "msdyn_desktopnotificationsettings"): Xrm.OptionSetAttribute<number>;
    getAttribute(attributeName: "msdyn_icon"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_notificationbuttons"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_rejectbuttonautoaccept"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "msdyn_rejectbuttontext"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_showtimeout"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "msdyn_theme"): Xrm.OptionSetAttribute<msdyn_consoleapplicationnotificationtemplate_msdyn_theme>;
    getAttribute(attributeName: "msdyn_timeout"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_title"): Xrm.Attribute<string>;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "NotificationFields"): Xrm.BaseControl;
    getControl(controlName: "msdyn_acceptbuttontext"): Xrm.StringControl;
    getControl(controlName: "msdyn_autoacceptnotification"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "msdyn_desktopnotificationsettings"): Xrm.OptionSetControl<number>;
    getControl(controlName: "msdyn_icon"): Xrm.StringControl;
    getControl(controlName: "msdyn_infosubheader"): Xrm.BaseControl;
    getControl(controlName: "msdyn_name"): Xrm.StringControl;
    getControl(controlName: "msdyn_notificationbuttons"): Xrm.StringControl;
    getControl(controlName: "msdyn_preview"): Xrm.BaseControl;
    getControl(controlName: "msdyn_rejectbuttonautoaccept"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "msdyn_rejectbuttontext"): Xrm.StringControl;
    getControl(controlName: "msdyn_showtimeout"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "msdyn_theme"): Xrm.OptionSetControl<msdyn_consoleapplicationnotificationtemplate_msdyn_theme>;
    getControl(controlName: "msdyn_timeout"): Xrm.NumberControl;
    getControl(controlName: "msdyn_title"): Xrm.StringControl;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
