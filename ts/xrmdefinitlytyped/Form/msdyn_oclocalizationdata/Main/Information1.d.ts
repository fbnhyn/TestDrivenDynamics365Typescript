declare namespace Form.msdyn_oclocalizationdata.Main {
  namespace Information1 {
    namespace Tabs {
      interface _67489580d5214ea2899403c6d8f7d16b extends Xrm.SectionCollectionBase {
        get(name: "{51e7dadb-658a-4415-a6ed-3416d4b64ed6}"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
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
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "{67489580-d521-4ea2-8994-03c6d8f7d16b}"): Xrm.PageTab<Tabs._67489580d5214ea2899403c6d8f7d16b>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information1 extends Xrm.PageBase<Information1.Attributes,Information1.Tabs,Information1.Controls> {
    getAttribute(attributeName: "msdyn_customerlanguageid"): Xrm.LookupAttribute<"msdyn_oclanguage">;
    getAttribute(attributeName: "msdyn_localizedtext"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_systemmessageid"): Xrm.LookupAttribute<"msdyn_ocsystemmessage">;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "msdyn_customerlanguageid"): Xrm.LookupControl<"msdyn_oclanguage">;
    getControl(controlName: "msdyn_localizedtext"): Xrm.StringControl;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
