declare namespace Form.msdyn_kmfederatedsearchconfig.Main {
  namespace SearchproviderMainform {
    namespace Tabs {
      interface ab87433a5cc04bcfb306f697b6b56f37 extends Xrm.SectionCollectionBase {
        get(name: "{2d5c8850-749f-4fca-807a-e58949695f92}"): Xrm.PageSection;
        get(name: "{ab87433a-5cc0-4bcf-b306-f697b6b56f37}_section_3"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "connectionid"): Xrm.Attribute<string>;
      get(name: "msdyn_description"): Xrm.Attribute<string>;
      get(name: "msdyn_name"): Xrm.Attribute<string>;
      get(name: "organization"): Xrm.Attribute<string>;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "searchtype"): Xrm.OptionSetAttribute<msdyn_kmfederatedsearchconfig_searchtype>;
      get(name: "sharepointurl"): Xrm.Attribute<string>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "WebResource_Disclaimer"): Xrm.WebResourceControl;
      get(name: "connectionid"): Xrm.StringControl;
      get(name: "msdyn_description"): Xrm.StringControl;
      get(name: "msdyn_name"): Xrm.StringControl;
      get(name: "organization"): Xrm.StringControl;
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "searchtype"): Xrm.OptionSetControl<msdyn_kmfederatedsearchconfig_searchtype>;
      get(name: "sharepointurl"): Xrm.StringControl;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "{ab87433a-5cc0-4bcf-b306-f697b6b56f37}"): Xrm.PageTab<Tabs.ab87433a5cc04bcfb306f697b6b56f37>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface SearchproviderMainform extends Xrm.PageBase<SearchproviderMainform.Attributes,SearchproviderMainform.Tabs,SearchproviderMainform.Controls> {
    getAttribute(attributeName: "connectionid"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_description"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "organization"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "searchtype"): Xrm.OptionSetAttribute<msdyn_kmfederatedsearchconfig_searchtype>;
    getAttribute(attributeName: "sharepointurl"): Xrm.Attribute<string>;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "WebResource_Disclaimer"): Xrm.WebResourceControl;
    getControl(controlName: "connectionid"): Xrm.StringControl;
    getControl(controlName: "msdyn_description"): Xrm.StringControl;
    getControl(controlName: "msdyn_name"): Xrm.StringControl;
    getControl(controlName: "organization"): Xrm.StringControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "searchtype"): Xrm.OptionSetControl<msdyn_kmfederatedsearchconfig_searchtype>;
    getControl(controlName: "sharepointurl"): Xrm.StringControl;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
