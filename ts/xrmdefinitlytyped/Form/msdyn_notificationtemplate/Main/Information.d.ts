declare namespace Form.msdyn_notificationtemplate.Main {
  namespace Information {
    namespace Tabs {
      interface _341680a142f74ca4af62a2f46428a1b9 extends Xrm.SectionCollectionBase {
        get(name: "{341680a1-42f7-4ca4-af62-a2f46428a1b9}_section_2"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "ismanaged"): Xrm.OptionSetAttribute<boolean>;
      get(name: "msdyn_acceptbuttontext"): Xrm.Attribute<string>;
      get(name: "msdyn_autoacceptnotification"): Xrm.OptionSetAttribute<boolean>;
      get(name: "msdyn_desktopnotificationmode"): Xrm.OptionSetAttribute<msdyn_desktopnotificationvisibility>;
      get(name: "msdyn_icon"): Xrm.Attribute<string>;
      get(name: "msdyn_name"): Xrm.Attribute<string>;
      get(name: "msdyn_rejectbuttontext"): Xrm.Attribute<string>;
      get(name: "msdyn_showrejectbutton"): Xrm.OptionSetAttribute<boolean>;
      get(name: "msdyn_showtimeout"): Xrm.OptionSetAttribute<boolean>;
      get(name: "msdyn_timeout"): Xrm.NumberAttribute;
      get(name: "msdyn_title"): Xrm.Attribute<string>;
      get(name: "msdyn_uniquename"): Xrm.Attribute<string>;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "NotificationFields"): Xrm.SubGridControl<"msdyn_notificationfield">;
      get(name: "ismanaged"): Xrm.OptionSetControl<boolean>;
      get(name: "msdyn_acceptbuttontext"): Xrm.StringControl;
      get(name: "msdyn_autoacceptnotification"): Xrm.OptionSetControl<boolean>;
      get(name: "msdyn_desktopnotificationmode"): Xrm.OptionSetControl<msdyn_desktopnotificationvisibility>;
      get(name: "msdyn_icon"): Xrm.StringControl;
      get(name: "msdyn_name"): Xrm.StringControl;
      get(name: "msdyn_rejectbuttontext"): Xrm.StringControl;
      get(name: "msdyn_showrejectbutton"): Xrm.OptionSetControl<boolean>;
      get(name: "msdyn_showtimeout"): Xrm.OptionSetControl<boolean>;
      get(name: "msdyn_timeout"): Xrm.NumberControl;
      get(name: "msdyn_title"): Xrm.StringControl;
      get(name: "msdyn_uniquename"): Xrm.StringControl;
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "{341680a1-42f7-4ca4-af62-a2f46428a1b9}"): Xrm.PageTab<Tabs._341680a142f74ca4af62a2f46428a1b9>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "ismanaged"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "msdyn_acceptbuttontext"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_autoacceptnotification"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "msdyn_desktopnotificationmode"): Xrm.OptionSetAttribute<msdyn_desktopnotificationvisibility>;
    getAttribute(attributeName: "msdyn_icon"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_rejectbuttontext"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_showrejectbutton"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "msdyn_showtimeout"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "msdyn_timeout"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_title"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_uniquename"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "NotificationFields"): Xrm.SubGridControl<"msdyn_notificationfield">;
    getControl(controlName: "ismanaged"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "msdyn_acceptbuttontext"): Xrm.StringControl;
    getControl(controlName: "msdyn_autoacceptnotification"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "msdyn_desktopnotificationmode"): Xrm.OptionSetControl<msdyn_desktopnotificationvisibility>;
    getControl(controlName: "msdyn_icon"): Xrm.StringControl;
    getControl(controlName: "msdyn_name"): Xrm.StringControl;
    getControl(controlName: "msdyn_rejectbuttontext"): Xrm.StringControl;
    getControl(controlName: "msdyn_showrejectbutton"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "msdyn_showtimeout"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "msdyn_timeout"): Xrm.NumberControl;
    getControl(controlName: "msdyn_title"): Xrm.StringControl;
    getControl(controlName: "msdyn_uniquename"): Xrm.StringControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
