declare namespace Form.solution.Main {
  namespace Information {
    namespace Tabs {
      interface _9129b06a844677d82bd2027c5006be41 extends Xrm.SectionCollectionBase {
        get(name: "solutionmarketplacesection"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface general extends Xrm.SectionCollectionBase {
        get(name: "description"): Xrm.PageSection;
        get(name: "solution information"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "configurationpageid"): Xrm.LookupAttribute<"webresource">;
      get(name: "description"): Xrm.Attribute<string>;
      get(name: "friendlyname"): Xrm.Attribute<string>;
      get(name: "installedon"): Xrm.DateAttribute;
      get(name: "ismanaged"): Xrm.OptionSetAttribute<boolean>;
      get(name: "publisherid"): Xrm.LookupAttribute<"publisher">;
      get(name: "uniquename"): Xrm.Attribute<string>;
      get(name: "version"): Xrm.Attribute<string>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "IFRAME_SolutionsMarketplace"): Xrm.IFrameControl;
      get(name: "configurationpageid"): Xrm.LookupControl<"webresource">;
      get(name: "description"): Xrm.StringControl;
      get(name: "friendlyname"): Xrm.StringControl;
      get(name: "installedon"): Xrm.DateControl;
      get(name: "ismanaged"): Xrm.OptionSetControl<boolean>;
      get(name: "publisherid"): Xrm.LookupControl<"publisher">;
      get(name: "uniquename"): Xrm.StringControl;
      get(name: "version"): Xrm.StringControl;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "{9129b06a-8446-77d8-2bd2-027c5006be41}"): Xrm.PageTab<Tabs._9129b06a844677d82bd2027c5006be41>;
      get(name: "general"): Xrm.PageTab<Tabs.general>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "configurationpageid"): Xrm.LookupAttribute<"webresource">;
    getAttribute(attributeName: "description"): Xrm.Attribute<string>;
    getAttribute(attributeName: "friendlyname"): Xrm.Attribute<string>;
    getAttribute(attributeName: "installedon"): Xrm.DateAttribute;
    getAttribute(attributeName: "ismanaged"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "publisherid"): Xrm.LookupAttribute<"publisher">;
    getAttribute(attributeName: "uniquename"): Xrm.Attribute<string>;
    getAttribute(attributeName: "version"): Xrm.Attribute<string>;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "IFRAME_SolutionsMarketplace"): Xrm.IFrameControl;
    getControl(controlName: "configurationpageid"): Xrm.LookupControl<"webresource">;
    getControl(controlName: "description"): Xrm.StringControl;
    getControl(controlName: "friendlyname"): Xrm.StringControl;
    getControl(controlName: "installedon"): Xrm.DateControl;
    getControl(controlName: "ismanaged"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "publisherid"): Xrm.LookupControl<"publisher">;
    getControl(controlName: "uniquename"): Xrm.StringControl;
    getControl(controlName: "version"): Xrm.StringControl;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
