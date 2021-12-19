declare namespace Form.appnotification.Main {
  namespace Information {
    namespace Tabs {
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "body"): Xrm.Attribute<string>;
      get(name: "data"): Xrm.Attribute<string>;
      get(name: "icontype"): Xrm.OptionSetAttribute<notification_iconid>;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "priority"): Xrm.OptionSetAttribute<notification_priority>;
      get(name: "title"): Xrm.Attribute<string>;
      get(name: "toasttype"): Xrm.OptionSetAttribute<notification_toasttype>;
      get(name: "ttlinseconds"): Xrm.DateAttribute;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "body"): Xrm.StringControl;
      get(name: "data"): Xrm.StringControl;
      get(name: "icontype"): Xrm.OptionSetControl<notification_iconid>;
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "priority"): Xrm.OptionSetControl<notification_priority>;
      get(name: "title"): Xrm.StringControl;
      get(name: "toasttype"): Xrm.OptionSetControl<notification_toasttype>;
      get(name: "ttlinseconds"): Xrm.DateControl;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "body"): Xrm.Attribute<string>;
    getAttribute(attributeName: "data"): Xrm.Attribute<string>;
    getAttribute(attributeName: "icontype"): Xrm.OptionSetAttribute<notification_iconid>;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "priority"): Xrm.OptionSetAttribute<notification_priority>;
    getAttribute(attributeName: "title"): Xrm.Attribute<string>;
    getAttribute(attributeName: "toasttype"): Xrm.OptionSetAttribute<notification_toasttype>;
    getAttribute(attributeName: "ttlinseconds"): Xrm.DateAttribute;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "body"): Xrm.StringControl;
    getControl(controlName: "data"): Xrm.StringControl;
    getControl(controlName: "icontype"): Xrm.OptionSetControl<notification_iconid>;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "priority"): Xrm.OptionSetControl<notification_priority>;
    getControl(controlName: "title"): Xrm.StringControl;
    getControl(controlName: "toasttype"): Xrm.OptionSetControl<notification_toasttype>;
    getControl(controlName: "ttlinseconds"): Xrm.DateControl;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
