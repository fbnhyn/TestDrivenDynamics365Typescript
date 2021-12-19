declare namespace Form.uii_option.Main {
  namespace Information {
    namespace Tabs {
      interface _5ad926f2ba3549bba8e15f145d5e93bc extends Xrm.SectionCollectionBase {
        get(name: "{706fa85f-131a-40eb-814d-5febd225d232}"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface _90b52aa5e49e48dfb94fd75c1fc1a284 extends Xrm.SectionCollectionBase {
        get(name: "{9e1248bb-174f-4004-aa6a-1a1cd184ac5d}"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface b1d11343999f40879639b174555f8dd1 extends Xrm.SectionCollectionBase {
        get(name: "{b091d713-73a9-4924-a907-f758b24ed473}"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "msdyusd_globaloption"): Xrm.OptionSetAttribute<msdyusd_globaloption>;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "statecode"): Xrm.OptionSetAttribute<uii_option_statecode>;
      get(name: "uii_name"): Xrm.Attribute<string>;
      get(name: "uii_value"): Xrm.Attribute<string>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "IFRAME_PrivacyHelp"): Xrm.IFrameControl;
      get(name: "footer_statecode"): Xrm.OptionSetControl<uii_option_statecode>;
      get(name: "msdyusd_globaloption"): Xrm.OptionSetControl<msdyusd_globaloption>;
      get(name: "notescontrol"): Xrm.BaseControl;
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "uii_name"): Xrm.StringControl;
      get(name: "uii_value"): Xrm.StringControl;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "{5ad926f2-ba35-49bb-a8e1-5f145d5e93bc}"): Xrm.PageTab<Tabs._5ad926f2ba3549bba8e15f145d5e93bc>;
      get(name: "{90b52aa5-e49e-48df-b94f-d75c1fc1a284}"): Xrm.PageTab<Tabs._90b52aa5e49e48dfb94fd75c1fc1a284>;
      get(name: "{b1d11343-999f-4087-9639-b174555f8dd1}"): Xrm.PageTab<Tabs.b1d11343999f40879639b174555f8dd1>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "msdyusd_globaloption"): Xrm.OptionSetAttribute<msdyusd_globaloption>;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "statecode"): Xrm.OptionSetAttribute<uii_option_statecode>;
    getAttribute(attributeName: "uii_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "uii_value"): Xrm.Attribute<string>;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "IFRAME_PrivacyHelp"): Xrm.IFrameControl;
    getControl(controlName: "footer_statecode"): Xrm.OptionSetControl<uii_option_statecode>;
    getControl(controlName: "msdyusd_globaloption"): Xrm.OptionSetControl<msdyusd_globaloption>;
    getControl(controlName: "notescontrol"): Xrm.BaseControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "uii_name"): Xrm.StringControl;
    getControl(controlName: "uii_value"): Xrm.StringControl;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
