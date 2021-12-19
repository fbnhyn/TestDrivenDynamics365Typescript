declare namespace Form.msdyn_oclocalizationdata.Main {
  namespace Information {
    namespace Tabs {
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "msdyn_customerlanguageid"): Xrm.LookupAttribute<"msdyn_oclanguage">;
      get(name: "msdyn_localizedtext"): Xrm.Attribute<string>;
      get(name: "msdyn_systemmessageid"): Xrm.LookupAttribute<"msdyn_ocsystemmessage">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "msdyn_customerlanguageid"): Xrm.LookupControl<"msdyn_oclanguage">;
      get(name: "msdyn_localizedtext"): Xrm.StringControl;
      get(name: "msdyn_systemmessageid"): Xrm.LookupControl<"msdyn_ocsystemmessage">;
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
    getAttribute(attributeName: "msdyn_customerlanguageid"): Xrm.LookupAttribute<"msdyn_oclanguage">;
    getAttribute(attributeName: "msdyn_localizedtext"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_systemmessageid"): Xrm.LookupAttribute<"msdyn_ocsystemmessage">;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "msdyn_customerlanguageid"): Xrm.LookupControl<"msdyn_oclanguage">;
    getControl(controlName: "msdyn_localizedtext"): Xrm.StringControl;
    getControl(controlName: "msdyn_systemmessageid"): Xrm.LookupControl<"msdyn_ocsystemmessage">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
